import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signInWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div>
                <h2 className="text-4xl text-center font-bold">
                  {' '}
                  Please Login
                </h2>
              </div>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <p>
                    Do not have an account?
                    <Link to="/register">
                      <span className="text-xl underline font-bold text-blue-700">
                        Register
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
