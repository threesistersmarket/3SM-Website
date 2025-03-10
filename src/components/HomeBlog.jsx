import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import { supabase } from '../lib/supabase';
import NewsletterModal from './NewsletterModal';

function HomeBlog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setPosts(data);
    } catch (err) {
      setError('Failed to load blog posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  if (error) {
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchLatestPosts}
              className="mt-4 text-accent-3 hover:text-accent-1"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">News & Updates</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Latest from Three Sisters Market
            </h2>
            <p className="md:text-md">
              Stay informed about our progress, community events, and the impact we're making together.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin w-12 h-12 border-4 border-accent-3 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent-3 focus:ring-offset-2"
                >
                  {post.featured_image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span>{formatDate(post.published_at)}</span>
                      <span>•</span>
                      <span>{post.author_name}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent-3 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-accent-3 group-hover:text-accent-1 transition-colors">
                      Read More
                      <IoChevronForward className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
              <Link 
                to="/blog"
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-8 py-4 text-lg rounded-lg hover:bg-accent-3 hover:border-accent-3 transition-colors duration-300"
              >
                View All Posts
              </Link>
              <button 
                onClick={() => setIsNewsletterModalOpen(true)}
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 group hover:text-accent-3"
              >
                Subscribe
                <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </div>

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </section>
  );
}

export default HomeBlog;