import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CiGrid41, CiViewTable } from "react-icons/ci";


const MyMangePost = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const [isCardLayout, setIsCardLayout] = useState(false); // State to toggle between layouts

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/manageMyPost/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setItems(data);
          });
      }, [user]);

    const handleDeleteVoluteerPost = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/manageMyPost/${_id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Craft has been deleted.",
                    icon: "success",
                  });
                  const remaining = items.filter(item => item._id !== _id);
                  setItems(remaining);
                }
              });
          }
        });
    };

    if (items.length === 0 ) {
      return <div className="mx-auto container text-center h-[600px]"> 
        <div className="mt-72">
        <h2 className="text-5xl font-bold text to-black mb-5">No Data</h2>
        <h3 className="text-3xl ">First you added then you can see the your data </h3>
        <div className="flex justify-center mt-5">
        <Link to='/'>
          <button className="relative p-0.5 text-center  flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative  text-white  flex gap-2">Go to Home </span>
                </span>
            </button>
       </Link>
        </div>
      </div>
      </div>
    }

    return (
       <div className="container mx-auto">
            <Helmet>
             <title> VolunteerNest || My Manage Post  </title>
          </Helmet>

          {/* <button onClick={() => setIsCardLayout(!isCardLayout)}>Change Layout</button> */}

           {/*  table to card = table button toggle and layout change */}
          <div className="flex my-10 justify-end">
          {isCardLayout ? <button
           onClick={() => setIsCardLayout(!isCardLayout)}
           className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
               <span className="relative  text-white  flex gap-2"> <CiViewTable className="text-3xl"/> <span className="mt-1">Tabel View</span> </span>
            </span>
         </button>
         : 
         <button
         onClick={() => setIsCardLayout(!isCardLayout)}
         className="relative p-0.5 text-center flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
             <span className="relative  text-white  flex gap-2"> <CiGrid41 className="text-3xl"/> <span className="mt-1"> Grid View </span> </span>
          </span>
       </button>
       }
     </div>
     {/*  table to card = table button toggle and layout change */}

     


          <div className={`overflow-x-auto ${isCardLayout ? 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4' : ''}`}>
            {isCardLayout ? (

              items.map(item => (

                <div  key={item._id}
                 className="card lg:w-96 bg-base-100 shadow-xl border-2 border-amber-400 hover:border-amber-600 transition-all my-10 mx-auto rounded-none">
                        <figure className="p-5 pt-5">
                            <img src={item.thumbnail} alt="image" className="rounded-none lg:h-[300px] h-[200px] hover:scale-105 transition-all" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <h2> {item?.title} </h2>
                            <div className="flex gap-2">
                            <p>Category: {item?.category}</p>
                            <p>Deadline: {item?.deadline}</p>
                            </div>
                            <p>{item?.description}</p>
                            <div className="flex justify-between">

                           
                           <Link to={`/updateManagePost/${item?._id}`}>
                                    <button className="relative p-0.5 text-center w-full flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                        <span className="relative w-full px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative w-full text-white  flex gap-2">Update</span>
                                        </span>
                                    </button>
                                </Link>

                            <button 
                             onClick={() => handleDeleteVoluteerPost(item._id)}
                            className="relative p-0.5 text-center  flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                        <span className="relative  px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative  text-white  flex gap-2">Delete</span>
                                        </span>
                                    </button>
                            
                            </div>
                        </div>
                    </div>
                
              ))
            ) : (
              <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                  <tr className="bg-[#0095FF] text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">Post Image </th>
                    <th className="py-4 px-6 text-lg text-left border-b">Post Title</th>
                    <th className="py-4 px-6 text-lg text-left border-b">Category</th>
                    <th className="py-4 px-6 text-lg border-b text-end">Update</th>
                    <th className="py-4 px-6 text-lg border-b text-end">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                      <td className="py-4 px-4 flex justify-start">
                        <img className="size-[80px] bg-slate-500 object-cover rounded-lg duration-500" src={item.thumbnail} alt="avatar navigate ui" />
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">{item?.title}</td>
                      <td className="py-4 px-6 border-b text-lg font-medium">{item?.category}</td>
                      <td className="py-4 px-6 border-b text-end">
                        <Link to={`/updateManagePost/${item?._id}`}>
                          <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Update</button>
                        </Link>
                      </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button onClick={() => handleDeleteVoluteerPost(item._id)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
       </div>
    );
};

export default MyMangePost;
