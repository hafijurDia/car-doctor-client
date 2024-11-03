import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const {userLogin} = useContext(AuthContext);
    const [error, setError] = useState();

    const handleLogin = (event) => {
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            toast.success("User login successfully!");
            form.reset();
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });

    }
    return (
        <div>
             <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
           <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="text-center lg:text-left w-1/2">
      
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <p className='text-error'>{error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-error text-lg text-white" type="submit" value="Login" />
        </div>
        <div>
            <p>Haven&apos;t account? Click <Link to="/signup">here</Link></p>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};


Login.propTypes = {

};


export default Login;
