/* eslint-disable react/prop-types */
import { FaRegCalendar } from 'react-icons/fa';

const News = ({ singleNews }) => {
  const { thumbnail_url, title, author } = singleNews;
  return (
    <div className="mb-5">
      <div>
        <img className="h-52 w-full" src={thumbnail_url} alt="" />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div>
        <p className="flex items-center gap-4">
          <FaRegCalendar />
          <p> {author?.published_date}</p>
        </p>
      </div>
    </div>
  );
};

export default News;
