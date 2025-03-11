import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

function LatestNews() {
  const news = [
    
    {
      title: "West Boulevard Neighborhood Coalition celebrates progress toward community-owned grocery store",
      excerpt: "Despite numerous setbacks in securing a grocery store, members of the West Boulevard Neighborhood Coalition say the opening of Three Sisters Market, a community-owned food cooperative that is planned for the corner of...",
      image: "https://i0.wp.com/qcitymetro.com/wp-content/uploads/2024/11/Cultivating-Community_1.jpg?w=1388&ssl=1",
      date: "2024-11-02",
      author: "Alanah Payne",
      url: "https://qcitymetro.com/2024/11/01/west-boulevard-neighborhood-coalition-celebrates-progress-toward-community-owned-grocery-store/"
    },
    {
      title: "Community Update: Three Sisters Market Progress Report",
      excerpt: "Leaders of the Three Sisters Market, a community-owned food co-op in development, were recently invited to present on a panel discussion at the Up and Coming Food Co-op Conference in Kalamazoo, MI. The conference, held from September 12th to 15th...",
      image: "https://westblvdnc.org/wp-content/uploads/2024/10/Three-Sisters-Market-Community-Celebration.jpg",
      date: "2024-10-15",
      author: "West Blvd Team",
      url: "https://westblvdnc.org/news-and-events-october-14-2024/"
    },
    {
      title: "Three Sisters Market to open on West Blvd in Charlotte",
      excerpt: "After more than 20 years without a grocery store in the West Boulevard corridor, Charlotte residents have found a potential solution of their own — a co-op market. Three Sisters Market, an initiative by the West Boulevard Neighborhood Coalition, has been in the works for eight years.",
      image: "https://www.charlotteobserver.com/latest-news/2mp212/picture276659511/alternates/FREE_1140/CLT_fooddesert_03",
      date: "2023-06-30",
      author: "Catherine Muccigrosso",
      url: "https://www.charlotteobserver.com/news/business/whats-in-store/article276593206.html"
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent-3 focus:ring-offset-2"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span>{formatDate(item.date)}</span>
                  <span>•</span>
                  <span>{item.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent-3 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <div className="inline-flex items-center text-accent-3 group-hover:text-accent-1 transition-colors">
                  Read More
                  <IoChevronForward className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;