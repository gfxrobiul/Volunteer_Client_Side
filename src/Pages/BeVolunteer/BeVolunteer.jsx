import { useEffect, useState } from "react";

import Swal from "sweetalert2";

const BeVolunteer = () => {


    const [reqVolunteers, setReqVolunteers] = useState([]);
    // console.log(reqVolunteers);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reqvolenteer`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReqVolunteers(data);
            });
    }, []);

    const handleDeleteVoluteerPost = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Cancel it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/bevolunteer/${_id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Cancel!",
                    text: "Request has been cancelled.",
                    icon: "success",
                  });
                  const remaining = reqVolunteers.filter(item => item._id !== _id);
                  setReqVolunteers(remaining);
                }
              });
          }
        });
    };

    return (
        <div className="container mx-auto text-center py-20">
            {/* <h2 className="text-5xl">info: {reqVolunteers.length}</h2> */}
            <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                  <tr className="bg-[#0095FF] text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">Post Image </th>
                    <th className="py-4 px-6 text-lg text-left border-b">Post Title</th>
            
                    <th className="py-4 px-6 text-lg border-b ">Status </th>
                    <th className="py-4 px-6 text-lg border-b ">Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {reqVolunteers.map(item => (
                    <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                      <td className="py-4 px-4 flex justify-start">
                        <img className="size-[80px] bg-slate-500 object-cover rounded-lg duration-500" src={item.thumbnail} alt="avatar navigate ui" />
                      </td>
                      <td className="py-4 text-start border-b text-xl font-medium">{item?.title}</td>
                      
                      <td className="py-4 px-6 border-b "> Requested </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button onClick={() => handleDeleteVoluteerPost(item._id)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
    );
};

export default BeVolunteer;