// import { Helmet } from "react-helmet";
// import { Link, useLoaderData } from "react-router-dom";

// const AllVolunteerDetails = () => {
//     const voluenteerDeatils = useLoaderData();
//     console.log(voluenteerDeatils);

    


//     return (
//     <div className="container mx-auto lg:w-1/2 w-full px-4">
//             <Helmet>
//              <title> VolunteerNest || All Volunteer Details  </title>
//           </Helmet>
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 border-2 border-amber-500">
//             <div className="ml-5 my-5">
//                 <div>
//                 <h2 className="lg:text-3xl text-2xl font-semibold mb-5">{voluenteerDeatils.title}</h2>
//                 <h3 className=" lg:text-xl font-medium">{voluenteerDeatils.category}</h3>
//                 <h3 className=" lg:text-xl font-medium">{voluenteerDeatils.location}</h3>
//                  <h3 className="lg:text-xl font-medium">Number of Volunteer Need: {voluenteerDeatils.volunteersNeeded}</h3>
//                  <h3 className="lg:text-xl font-medium">Deadline: {voluenteerDeatils.deadline}</h3>
//                 </div>
//                 <div className="mt-5">
//                 <h3 className="lg:text-[18px]">{voluenteerDeatils.description}</h3>
//                 </div>

//                 <div className="lg:block hidden">
//                   <Link to='/NeedVolunteer'>
//                   <button  className="relative mr-10 mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
//                   <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//                   <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                   <span className="relative text-white">Go Back</span>
//                   </span>
//                   </button>
//                   </Link>

//                   <Link to='/NeedVolunteer'>
//                   <button  className="relative  mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
//                   <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//                   <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                   <span className="relative text-white">Be a Volunteer</span>
//                   </span>
//                   </button>
                  
//                   </Link>
//                 </div>

//             </div>
            
            
//             <div className="lg:pr-4 px-2">
//             <img src={voluenteerDeatils.thumbnail} className="lg:mt-10 mr-10 w-[600px] h-[300px]" alt="Movie"/>
//             <div className="lg:hidden container mx-auto text-center mb-2 ">
//             <Link to='/NeedVolunteer'>
//                 <button  className="relative   mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
//                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                 <span className="relative  text-white">Go Back</span>
//                 </span>
//                 </button>
//                 </Link>
//             <Link to='/NeedVolunteer'>
//                 <button  className="relative ml-5  mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
//                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
//                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
//                 <span className="relative  text-white">Be a Volunteer</span>
//                 </span>
//                 </button>
//                 </Link>
//             </div>
                 
//             </div>

//         </div>
        
//     </div>
//     );
// };

// export default AllVolunteerDetails;


import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import ReactDatePicker from "react-datepicker";

const AllVolunteerDetails = () => {
    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(null);
    const voluenteerDeatils = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddVolunteerPost = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const location = form.location.value;
        const volunteersNeeded = form.volunteersNeeded.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const organizerName = user.displayName;
        const organizerEmail = user.email;

        const voluenteerAdd = { title, thumbnail, location, volunteersNeeded, category, deadline, description, organizerName, organizerEmail };

        fetch(`${import.meta.env.VITE_API_URL}/reqvolenteer`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(voluenteerAdd),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data?.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Your Request has been sent  Successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to be a volunteer request",
                icon: "error",
                confirmButtonText: "Ok",
            });
        });
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto lg:w-1/2 w-full px-4">
            <Helmet>
                <title> Volunteer || Volunteer Details </title>
            </Helmet>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 border-2 border-amber-500">
                <div className="ml-5 my-5">
                <div>
                        <h2 className="lg:text-3xl text-2xl font-semibold mb-5">{voluenteerDeatils.title}</h2>
                        <h3 className="lg:text-xl font-medium">{voluenteerDeatils.category}</h3>
                        <h3 className="lg:text-xl font-medium">{voluenteerDeatils.location}</h3>
                        <h3 className="lg:text-xl font-medium">Number of Volunteer Need: {voluenteerDeatils.volunteersNeeded}</h3>
                        <h3 className="lg:text-xl font-medium">Deadline: {voluenteerDeatils.deadline}</h3>
                    </div>
                    <div className="mt-5">
                        <h3 className="lg:text-[18px]">{voluenteerDeatils.description}</h3>
                    </div>

                    <div className="lg:block hidden">
                        <Link to='/NeedVolunteer'>
                            <button className="relative mr-10 mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Go Back</span>
                                </span>
                            </button>
                        </Link>

                        <button onClick={openModal} className="relative  mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Be a Volunteer</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="lg:pr-4 px-2">
                <img src={voluenteerDeatils.thumbnail} className="lg:mt-10 mr-10 w-[600px] h-[300px]" alt="Movie" />
                    <div className="lg:hidden container mx-auto text-center mb-2 ">
                        <Link to='/NeedVolunteer'>
                            <button className="relative   mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative  text-white">Go Back</span>
                                </span>
                            </button>
                        </Link>
                        <button onClick={openModal} className="relative ml-5  mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative  text-white">Be a Volunteer</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-[90%] flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Helmet>
                        <title> Volunteer || Add Volunteer Post </title>
                    </Helmet>
                    <div className="bg-white lg:w-3/6 mx-auto p-3 rounded-xl shadow-2xl">
                        <h2 className="text-center lg:text-4xl text-2xl font-bold my-10 bg-amber-400 rounded-lg py-2">Be Volunteer Request</h2>
                        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md">Close</button>
                      {/* <div className="pl-4 lg:my-10 my-3">
                      <p className="font-semibold">Name: {user?.displayName}</p>
                       <p className="font-semibold">Email: {user?.email}</p>
                      </div> */}
                      <form onSubmit={handleAddVolunteerPost}>
                           {/* title and thumbnail */}
                    <div className="md:flex gap-10 px-4">
                      
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">Post of Title</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="text"
                              name="title"
                              defaultValue={voluenteerDeatils?.title}
                            
                              placeholder="Enter post title"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
        
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">Thumbnail</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="text"
                              name="thumbnail"
                              defaultValue={voluenteerDeatils?.thumbnail}
                             
                              placeholder="Enter thumbnail url"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>
        
                        {/* location and No of volunteer need*/}
                     <div className="md:flex gap-10 px-4">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">Location </span>
                          </label>
                          <label className="input-group">
                            <input
                              type="text"
                              name="location"
                              defaultValue={voluenteerDeatils?.location}
                              
                              placeholder="Enter Your Location"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
        
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">No. of volunteers needed</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="number"
                              name="volunteersNeeded"
                              defaultValue={voluenteerDeatils?.volunteersNeeded}
                              
                              placeholder="How many volunteer Needed?"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      </div>
        
                       
                           {/*category and deadline */}
                     <div className="md:flex gap-10 px-4">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold" >Category</span>
                          </label>
                         
        
                              <select name="category"   defaultValue={voluenteerDeatils?.category}
                                className="select select-bordered w-full">
                                <option value="">Select Category</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Social Service">Social Service</option>
                                <option value="Animal welfare">Animal Welfare</option>
                              </select>
                        </div>
        
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">Deadline</span>
                          </label>
                          <label className="input-group">
                           
        
               <ReactDatePicker
               className="input input-bordered"
               name="deadline"
               defaultValue={voluenteerDeatils?.deadline}
             
                selected={selectedDate}
                onChange={handleDateChange}
                isClearable 
                dateFormat="dd/MM/yyyy"
                scrollableYearDropdown 
                showYearDropdown 
                yearDropdownItemNumber={66}
              />
              {selectedDate && (
                <p>You selected: {selectedDate.toLocaleDateString()}</p>
              )}
                          </label>
                        </div>
                        
                      </div>

                      
                        {/* requested info row */}
                     <div className="md:flex gap-10 px-4">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text font-semibold">Status</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="text"
                              name="status"
                              defaultValue={`requested`}
                              disabled
                              placeholder="Enter Your Location"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
        
                       
                      </div>


        
                      {/* description */}
                      <div className="px-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold">
                              Description
                            </span>
                          </label>
                          <label className="input-group">
                            <textarea
                              type="text"
                              defaultValue={voluenteerDeatils?.description}
                           
                              name="description"
                              placeholder="Enter description"
                              className="w-full input input-bordered h-48"
                            />
                          </label>
                        </div>
                      </div>
                      {/* button */}
                      <button  className="relative w-full  mt-2 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md ">
                         <span className="w-full h-full bg-gradient-to-br from-[#ff8a05]  via-[#ff5478] to-[#ff00c6]
                          group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                         <span className="relative w-full  py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 px-6">
                        <span className="relative  text-white px-6 uppercase">Request</span>
                        </span>
                        </button>
        
                      
                      </form>
                     
        
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllVolunteerDetails;
