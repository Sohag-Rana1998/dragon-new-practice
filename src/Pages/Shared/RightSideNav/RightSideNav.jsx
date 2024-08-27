import { useContext } from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const RightSideNav = () => {
  const { signInWithGithub, signInWithGoogle } = useContext(AuthContext);

  const handleGithub = () => {
    signInWithGithub();
  };
  const handleGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-2">Login With</h2>
        <div>
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full text-blue-600 mb-2"
          >
            <FaGoogle />
            Login With Google
          </button>
          <button
            onClick={handleGithub}
            className="btn btn-outline w-full mb-2"
          >
            <FaGithub />
            Login With Github
          </button>
        </div>
      </div>

      <div className=" mb-5">
        <h2 className="text-3xl font-bold mb-2 pl-4">Find Us On</h2>
        <div>
          <a className="border rounded-t-lg text-lg flex items-center pl-4 py-4  w-full ">
            <FaFacebook className="mr-3" />
            Facebook
          </a>
          <a className="border-x rounded-t-lg text-lg flex items-center pl-4 py-4  w-full ">
            <FaTwitter className="mr-3" />
            Twitter
          </a>
          <a className="border rounded-b-lg text-lg flex items-center pl-4 py-4  w-full ">
            <FaInstagram className="mr-3" />
            Instragram
          </a>
        </div>

        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2">Q Zone</h2>
          <div>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
