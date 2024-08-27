import { useEffect, useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoShareSocial } from 'react-icons/io5';
import { useParams, useLoaderData } from 'react-router-dom';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navber from '../Shared/Navber/Navber';

const NewsDetails = () => {
  const [singleNews, setSingleNews] = useState({});

  const { id } = useParams();
  const news = useLoaderData();

  useEffect(() => {
    const singleData = news.find(data => data._id === id);
    console.log(singleData);
    setSingleNews(singleData);
  }, [id, news]);

  console.log(singleNews);
  const { title } = singleNews;

  return (
    <div>
      <Navber></Navber>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <div className="mb-10 p-5">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="  w-full ">
                <div className="flex  items-center justify-between gap-4 ">
                  <div className=" flex items-center gap-4">
                    <div className="h-14 w-14">
                      <img
                        className="w-full h-full rounded-full"
                        src=""
                        alt=""
                      />
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
                <p>{singleNews.details}</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
