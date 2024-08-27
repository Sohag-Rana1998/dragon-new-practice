/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import News from '../../Home/News';

const LeftSideNav = ({ news }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold -scroll-mb-4">All Categories</h2>
        <div>
          {category.map(cate => (
            <button
              key={cate.id}
              className="btn  block m-3 text-xl font-semibold"
            >
              <NavLink to={`/category/${cate.id}`}>{cate.name}</NavLink>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {news &&
          news
            .slice(0, 4)
            .map(singleNews => (
              <News key={singleNews._id} singleNews={singleNews}></News>
            ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
