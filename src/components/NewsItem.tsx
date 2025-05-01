import React from 'react'
import { Link } from 'react-router-dom';

interface NewsItemProps {
  title: string;
  excerpt: string;
  image: string;
}


const NewsItem: React.FC<NewsItemProps> = ({ title, excerpt, image }) => {
  return (
    <Link to="/" className="flex border border-gray-200 rounded-lg p-4 bg-white">
      <div className="w-12 h-12 rounded bg-gray-200 mr-3">
        <img src={image} alt={title} className="w-full h-full rounded" />
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{excerpt}</p>
      </div>
    </Link>
  );
};


export default NewsItem