import { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navber from '../Shared/Navber/Navber';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import NewsCard from './NewsCard';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="font-poppins">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navber></Navber>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav news={news}></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          <div>
            <h2 className="text-2xl font-bold">Dragon News Home</h2>
          </div>
          {news &&
            news.map(singleNews => (
              <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
            ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
