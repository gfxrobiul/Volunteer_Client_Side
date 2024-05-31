import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const GoogleAndGithubLogin = () => {
    const { googleLogin , githubLogin} = useAuth();

  // code for navigations 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";


    const handleLoginWithSocialMedia = socialProvider =>{
        socialProvider()
        .then(result =>{

            if (result.user) {
                 toast.success('Login User Succeffuly')
                navigate(from);
             
            }
        });
    }
    return (
        <div className="container mx-auto">
            <div className="divider">Continue With</div>
            <div className="flex gap-3 justify-center">
               

                <button 
                 onClick={()=> handleLoginWithSocialMedia(googleLogin)} 
          className="relative p-0.5 flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white flex gap-2"> <FcGoogle className="mt-1"/>Google</span>
          </span>
          </button>

                <button 
                 onClick={()=> handleLoginWithSocialMedia(githubLogin)} 
                 className="relative p-0.5 flex items-center justify-center font-bold overflow-hidden group rounded-md">
                 <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                 <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                 <span className="relative text-white flex gap-2"> <FaGithub className="mt-1"/>  Login </span>
                 </span>
                </button>
                
            </div>
        </div>
    );
};

export default GoogleAndGithubLogin;