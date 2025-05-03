import React from "react";
import { FaEye, FaShareAlt, FaRegBookmark, FaStar } from "react-icons/fa";
import { NavLink, } from "react-router";

const NewsCard = ({ data }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
    id,
  } = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-header flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegBookmark className="text-xl cursor-pointer" />
          <FaShareAlt className="text-xl cursor-pointer" />
        </div>
      </div>
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}...
            <span>
              <NavLink to={`/newsDetails/${id}`} className="text-blue-500">
                Readmore
              </NavLink>
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}

        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
