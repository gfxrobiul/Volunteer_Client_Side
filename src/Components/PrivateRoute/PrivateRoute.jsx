import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Lottie from "lottie-react";
import loader from '../../assets/loader.json'

const PrivateRoute = ( {children} ) => {
   
        const {user, loading }  = useAuth();
        const location = useLocation();
    
        if (loading) {
            return <div className="w-[600px] container mx-auto">
                <Lottie animationData={loader} className='duration-150'></Lottie>
            </div>
        }
    
    
        if (!user) {
            return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
        }
        return (
    
            <div>
                {children}
            </div>
        );
   
};

export default PrivateRoute;