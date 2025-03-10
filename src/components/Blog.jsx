import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import { supabase } from '../lib/supabase';

function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

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
      <div className="min-h-screen bg-white px-[5%] py-16">
        <div className="container mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchPosts}
              className="mt-4 text-accent-3 hover:text-accent-1"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Latest Updates
            </h1>
            <p className="max-w-2xl mx-auto text-lg">
              Stay informed about our progress, community events, and the impact we're making together.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin w-12 h-12 border-4 border-accent-3 border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
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
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent-3 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div
                      className="inline-flex items-center text-accent-3 group-hover:text-accent-1 transition-colors"
                    >
                      Read More
                      <IoChevronForward className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;