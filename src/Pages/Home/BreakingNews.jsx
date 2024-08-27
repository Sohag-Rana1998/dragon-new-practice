import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button className="btn btn-primary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          The direction the marquee is sliding. Warning: Vertical
          marquees.......
        </Link>
        <Link className="mr-12" to="/">
          The direction the marquee is sliding. Warning: Vertical
          marquees.......
        </Link>
        <Link className="mr-12" to="/">
          The direction the marquee is sliding. Warning: Vertical
          marquees.......
        </Link>
        <Link className="mr-12" to="/">
          The direction the marquee is sliding. Warning: Vertical
          marquees.......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
