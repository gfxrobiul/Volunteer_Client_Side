import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import GoogleAndGithubLogin from "../../Components/GoogleAndGithubLogin/GoogleAndGithubLogin";
import { Helmet } from "react-helmet";

const Login = () => {
    
    const { signInUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit,  formState: { errors },} = useForm();

  // code for navigations 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";


    // /handle login 
    const onSubmit = (data) => {
        const {email, password} = data;

        signInUser(email, password)
       .then(result =>{

          if (result.user) {
              navigate(from);
             // Show toast notification
             toast.success('Login User successfully');
          }
      }).catch(()=> {(toast.error('Invalid email or password. Please try again.'))}) ;
    };



    return (
        <div className="bg-white relative container lg:py-10 mx-auto">
              <Helmet>
             <title> VolunteerNest || Login page  </title>
          </Helmet>
  <div className="">
    <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
      <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
          <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" className="btn-"/>
        </div>
      </div>
      
      <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Login Your Account</p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
          
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input type="text" placeholder="Email" className="block text-sm py-3 px-4 rounded-lg w-full border outline-primary"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input type={showPass ? "text" : "password"} 
                            placeholder="password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-primary" {...register("password", {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                    message: "Password must contain at least one uppercase and one lowercase letter"
                                }
                            })} />
                            <span onClick={() => setShowPass(!showPass)} className="absolute text-xl top-4 right-4">
                                {
                                    showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                            {errors.password && <small className="text-red-500 font-medium mt-1">Password must be at least 6 characters & Password must contain at least one uppercase and one lowercase letter </small>}
            </div>
            <div className="relative text-center">
            <button className="relative p-0.5 w-full inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all w-full ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white w-full">Login</span>
</span>
</button>
<p className="mt-4 lg:text-xl text-base text-center">Dont have An Account?
<Link to='/register'><span className="underline cursor-pointer  font-bold text-blue-900">Register</span></Link></p>
                  
            </div>
           
          </form>
          <GoogleAndGithubLogin></GoogleAndGithubLogin>
        </div>
     
      
      
      </div>
    
    </div>
  </div>
</div>
    );
};

export default Login;