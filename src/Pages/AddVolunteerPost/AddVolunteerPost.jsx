import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const AddVolunteerPost = () => {
    const { user } = useAuth();
    console.log(user);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    const handleAddVolunteerPost = (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const location = form.location.value;
        const volunteersNeeded = form.volunteersNeeded.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const organizerName =  user.displayName;
        const organizerEmail = user.email;
        

        const voluenteerAdd = {title,thumbnail, location, volunteersNeeded, category, deadline, description, organizerName, organizerEmail};
        console.log(voluenteerAdd);

        // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/addvolenteer`, {
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
              text: "Voluenteer Post Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    };
    

    return (

       
        <div className="bg-blue-400 container mx-auto lg:px-10 md:px-8 px-4 py-20">
          <Helmet>
             <title> VolunteerNest || Add Volunteer Post  </title>
          </Helmet>
            
            <div className="bg-white lg:w-3/6 mx-auto p-3 rounded-xl shadow-2xl">
                <h2 className="text-center lg:text-4xl text-2xl font-bold my-10 bg-amber-400 rounded-lg py-2">Add Volunteer Post </h2>
              <div className="pl-4 lg:my-10 my-3">
              <p className="font-semibold">Name: {user?.displayName}</p>
               <p className="font-semibold">Email: {user?.email}</p>
              </div>
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
                      placeholder="How many volunteer Needed?"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

                {/* organizerEmail  and organizerName*/}
             {/* <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Organizer Name </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      // disabled
                      name="organizerName"
                      placeholder="Enter organizer Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Organizer Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="email"
                      // disabled
                      name="organizerEmail"
                      placeholder="Enter Organizer Email"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div> */}


                   {/*category and deadline */}
             <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  {/* <label className="input-group">
                    <input
                      type="text"
                      name="category"
                      placeholder="Select your category"
                      className="input input-bordered w-full"
                    />
                  </label> */}

                      <select name="category" className="select select-bordered w-full">
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
                    {/* <input
                      type="date"
                      name="deadline"
                      placeholder="Select Deadline"
                      className="input input-bordered w-full"
                    /> */}

       <ReactDatePicker
       className="input input-bordered"
       name="deadline"
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
                <span className="relative  text-white px-6">Add Volunteer Post </span>
                </span>
                </button>

              
              </form>
             

            </div>
        </div>
   
    
    );
};

export default AddVolunteerPost;