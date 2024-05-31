import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

const Tesimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
    .then( res => res.json())
    .then(data =>{
        // console.log(data);
        setReviews(data);
    })
},[]) 

// const reviewsDataSlice = reviews.slice(0,8);



    return (
        <div className="my-20 border border-amber-400 rounded-xl  p-10">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <h3 className="mb-6 text-3xl font-bold"> What Our <span className="text-amber-600 font-bold">Clients</span> Are Saying </h3>
  <p
    className="mb-6 pb-2  md:mb-12 md:pb-0">
    Experience the difference of working with us through the testimonials of our clients. From unmatched support to innovative solutions, their stories highlight why we are the partner of choice for success.
  </p>
</div>

<div className="grid gap-6 text-center md:grid-cols-4 lg:gap-12">

  {
    reviews?.map(review => <div key={review._id} className="mb-12 md:mb-0 shadow-2xl p-6 hover:border-2 transition-all hover:border-amber-400 rounded-xl">
    <div className="mb-6 flex justify-center">
      <img
        src={review?.photoURL}
        className="w-32 h-32 rounded-2xl 
         border-amber-400 border-2 shadow-lg dark:shadow-black/30 hover:scale-105 transition-all"/>
    </div>
    <h5 className="mb-4 text-xl font-semibold">{review?.displayName}</h5>
   
    {/* <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
      CEO At Eureka Consultency
    </h6> */}
    <p className="mb-4 ">
      <span className="inline-block pe-2 [&>svg]:w-5"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
         
          <path
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
      </span>
      I have been using VolunteerNest for over a year now, and I can confidently say its been a game-changer for my business. The platform is incredibly intuitive, and the support team is always there to help With VolunteerNest.
  
    </p>
    <div className="flex items-center justify-center">
    <h4 className="flex gap-2 text-center text-amber-400 font-bold text-xl">Rating: {review?.reviewData?.rating} <IoIosStar className="text-amber-400 text-2xl mb-1" />
</h4>
    </div>
  </div>)
  }

</div>
        </div>
    );
};

export default Tesimonials;