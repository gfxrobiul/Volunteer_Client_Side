// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";

// const NeedVolunteerPage = () => {
//     const [ allVolunteer, setAllVolunteer ] = useState([]);

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}/addvolenteer`)
//         .then( res => res.json())
//         .then(data =>{
//             console.log(data);
//             setAllVolunteer(data);
//         })
//     },[]) 


//     return (
//         <div className="container mx-auto justify-center items-center my-20">
//              <Helmet>
//              <title> Volunteer || Need Volunteer Page</title>
//           </Helmet>
            
//         <h2 className="text-4xl poppinsFont font-bold text-center mb-10 bg-amber-300 rounded-lg p-2">All Volunteer Post </h2>
// <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 lg:px-0 px-4">
//     {
//         allVolunteer.map(volenteer => <div key={volenteer._id} className="card lg:w-96 bg-base-100 
//         shadow-xl border-2 border-amber-400 hover:border-amber-600 transition-all 
//         my-10 mx-auto rounded-none">
//     <figure className="p-5 pt-5">
//     <img src={volenteer.thumbnail} alt="image" className="rounded-none lg:h-[300px] h-[200px] 
//     hover:scale-105 transition-all" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{volenteer.title}</h2>
    
//     <p>Category:  {volenteer.category}</p>
//     <p> Deadline: {volenteer.deadline}</p>

//     <div>
//         {/* <Link  to={`/volunteersdetails/${volenteer._id}`}>
//         <button className="btn bg-amber-400 hover:bg-amber-600 rounded-none hover:text-white w-full">View Details </button>
//         </Link> */}


//        <Link to={`/volunteersdetails/${volenteer._id}`}>
//         <button 
//                  className="relative p-0.5  text-center w-full flex items-center justify-center font-bold overflow-hidden group rounded-md">
//                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//                  <span className="relative  w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                  <span className="relative w-full text-white lg:ml-24 ml-14 flex gap-2">View Details </span>
//                  </span>
//         </button>
//         </Link>



//     </div>
//   </div>
//         </div>)
//     }
   
// </div>
// </div>
//     );
// };

// export default NeedVolunteerPage;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NeedVolunteerPage = () => {
    const [allVolunteer, setAllVolunteer] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/addvolenteer`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllVolunteer(data);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredVolunteers = allVolunteer.filter(volunteer =>
        volunteer.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto justify-center items-center my-20">
            <Helmet>
                <title> VolunteerNest || Need Volunteer Page</title>
            </Helmet>

            <h2 className="text-4xl poppinsFont font-bold text-center mb-10 bg-amber-300 rounded-lg p-2">All Volunteer Post </h2>


                
              {/* input search title  */}
            <div className="mb-5 mx-auto max-w-md">
                <input
                    type="text"
                    placeholder="Search by Post Title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
              {/* input search title  */}



            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:px-0 px-4">
                {filteredVolunteers.map(volunteer => (
                    <div key={volunteer._id} className="card lg:w-96 bg-base-100 shadow-xl border-2 border-amber-400 hover:border-amber-600 transition-all my-10 mx-auto rounded-none">
                        <figure className="p-5 pt-5">
                            <img src={volunteer.thumbnail} alt="image" className="rounded-none lg:h-[300px] h-[200px] hover:scale-105 transition-all" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{volunteer.title}</h2>
                            <p>Category: {volunteer.category}</p>
                            <p>Deadline: {volunteer.deadline}</p>
                            <div>
                                <Link to={`/volunteersdetails/${volunteer._id}`}>
                                    <button className="relative p-0.5 text-center w-full flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                        <span className="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative w-full text-white lg:ml-24 ml-14 flex gap-2">View Details </span>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeedVolunteerPage;