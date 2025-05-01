import React from "react";
import { FcLike } from "react-icons/fc";
import { BsChatRightTextFill } from "react-icons/bs";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";

interface TrendingPostProps {
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  shares: number;
}

const TrendingPost: React.FC<TrendingPostProps> = ({
  title,
  excerpt,
  likes,
  comments,
  shares,
}) => {
  return (
    <Link to="/" className="pt-4 border border-gray-200 p-4 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{excerpt}</p>
      <div className="flex space-x-4">
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <span className="text-red-500 mr-1">
            <FcLike />
          </span>
          <span className="text-sm font-semibold text-gray-600">{likes}</span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <span className="text-yellow-500 mr-1">
            <BsChatRightTextFill className="text-orange-500" />
          </span>
          <span className="text-sm font-semibold text-gray-600">
            {comments}
          </span>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <span className="text-red-500 mr-1">
            <IoArrowRedo />
          </span>
          <span className="text-sm font-semibold text-gray-600">{shares}</span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingPost;
