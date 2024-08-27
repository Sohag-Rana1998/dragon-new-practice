import { CiBookmark } from 'react-icons/ci';
import { IoShareSocial } from 'react-icons/io5';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NewsCard = ({ singleNews }) => {
  const { author, title, category_id } = singleNews;
  return (
    <div className="mb-10 p-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="  w-full ">
          <div className="flex  items-center justify-between gap-4 ">
            <div className=" flex items-center gap-4">
              <div className="h-14 w-14">
                <img
                  className="w-full h-full rounded-full"
                  src={author.img}
                  alt=""
                />
              </div>
              <div className="text-lg">
                <div>{author.name}</div>
                <div>{author.published_date}</div>
              </div>
            </div>
            <div className="flex items-center">
              <CiBookmark />
              <IoShareSocial />
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold">
          <h2>{title}</h2>
        </div>
        <figure>
          <img src={singleNews.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>
            {singleNews && singleNews.length > 200
              ? singleNews.details.slice(0, 200)
              : singleNews.details}
            <Link
              className="ml-3 text-lg font-bold text-blue-600 underline"
              to={`/news/${singleNews._id}`}
            >
              Read More...
            </Link>
          </p>
          <div className="flex items-center justify-around mt-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {singleNews.rating.number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
