import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeedsSection = () => {
    const [volenteers, setVolenteers] = useState([]);
    

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/addvolenteer`)
        .then( res => res.json())
        .then(data =>{
            // console.log(data);
            setVolenteers(data);
        })
    },[]) 

    const volenteersDataSlice = volenteers.slice(0,6);

    return (
        <div className="container mx-auto justify-center items-center my-20">
        <h2 className="lg:text-4xl text-3xl poppinsFont font-bold text-center mb-10">Volunteer Needs Now</h2>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:px-0 px-4">
    {
        volenteersDataSlice.map(volenteer => <div key={volenteer._id} className="card lg:w-96 bg-base-100 
        shadow-xl border-2 border-amber-400 hover:border-amber-600 transition-all 
        my-10 mx-auto rounded-none">
    <figure className="p-5 pt-5">
    <img src={volenteer.thumbnail} alt="image" className="rounded-none lg:h-[300px] h-[200px] 
    hover:scale-105 transition-all" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{volenteer.title}</h2>
    
    <p>Category:{volenteer.category}</p>
    <p> Deadline: {volenteer.deadline}</p>

    <div>
         {/* <Link to={`/volunteersdetails/${volenteer._id}`}>
        <button className="btn bg-amber-400 hover:bg-amber-600 rounded-none hover:text-white w-full">Details</button>
         </Link> */}

        <Link to={`/volunteersdetails/${volenteer._id}`}>
        <button 
                 className="relative p-0.5  text-center w-full flex items-center justify-center font-bold overflow-hidden group rounded-md">
                 <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                 <span className="relative  w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                 <span className="relative w-full text-white lg:ml-24 ml-14 flex gap-2">View Details </span>
                 </span>
        </button>
        </Link>

    </div>
  </div>
        </div>)
    }
   
</div>
<div className="flex text-center justify-center">
<Link to='/NeedVolunteer' >
        <button 
                 className="relative p-0.5  text-center  flex items-center justify-center font-bold overflow-hidden group rounded-md">
                 <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                 <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                 <span className="relative  text-white  flex gap-2">See More </span>
                 </span>
        </button>
        </Link>
</div>
</div>
    );
};

export default VolunteerNeedsSection;