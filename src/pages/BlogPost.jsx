import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { supabase } from '../lib/supabase';
import FoodIllustration from '../components/FoodIllustration';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch current post
      const { data: currentPost, error: currentError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (currentError) throw currentError;
      if (!currentPost) throw new Error('Post not found');
      
      setPost(currentPost);

      // Fetch previous post with content preview
      const { data: prevPosts } = await supabase
        .from('blog_posts')
        .select('id, title, content, published_at')
        .lt('published_at', currentPost.published_at)
        .order('published_at', { ascending: false })
        .limit(1);

      setPrevPost(prevPosts?.[0] || null);

      // Fetch next post with content preview
      const { data: nextPosts } = await supabase
        .from('blog_posts')
        .select('id, title, content, published_at')
        .gt('published_at', currentPost.published_at)
        .order('published_at', { ascending: true })
        .limit(1);

      setNextPost(nextPosts?.[0] || null);
    } catch (err) {
      setError('Failed to load blog post. Please try again later.');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const truncateContent = (content, maxLength = 50) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength).trim() + '...';
  };

  if (error) {
    return (
      <div className="min-h-screen bg-white px-[5%] py-16">
        <div className="container mx-auto text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600">{error}</p>
            <Link
              to="/blog"
              className="mt-4 inline-block text-accent-3 hover:text-accent-1"
            >
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="animate-spin w-12 h-12 border-4 border-accent-3 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white px-[5%] py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link 
            to="/blog"
            className="text-accent-3 hover:text-accent-1"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-4xl">
          <Link 
            to="/blog"
            className="inline-flex items-center text-accent-3 hover:text-accent-1 mb-8"
          >
            <IoChevronBack className="mr-2" />
            Back to Blog
          </Link>

          <div className="relative">
            {post.featured_image && (
              <div className="relative h-[400px] organic-border overflow-hidden natural-shadow mb-8">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <FoodIllustration type="leaf" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg natural-shadow">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>{formatDate(post.published_at)}</span>
              <span>•</span>
              <span>{post.author_name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              {post.title}
            </h1>

            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Post Navigation */}
          <nav className="mt-12 border-t border-border-primary/10 pt-8" aria-label="Blog post navigation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={`Previous post: ${prevPost.title}`}
                >
                  <div className="flex items-center gap-2 text-accent-3 group-hover:text-accent-1 transition-colors">
                    <IoChevronBack className="transform group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Previous Post</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-accent-3 transition-colors">
                    {prevPost.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {truncateContent(prevPost.content)}
                  </p>
                  <time className="text-sm text-accent-3" dateTime={prevPost.published_at}>
                    {formatDate(prevPost.published_at)}
                  </time>
                </Link>
              )}

              {nextPost && (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:ml-auto text-right"
                  aria-label={`Next post: ${nextPost.title}`}
                >
                  <div className="flex items-center gap-2 justify-end text-accent-3 group-hover:text-accent-1 transition-colors">
                    <span className="text-sm font-medium">Next Post</span>
                    <IoChevronForward className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-accent-3 transition-colors">
                    {nextPost.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {truncateContent(nextPost.content)}
                  </p>
                  <time className="text-sm text-accent-3" dateTime={nextPost.published_at}>
                    {formatDate(nextPost.published_at)}
                  </time>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;