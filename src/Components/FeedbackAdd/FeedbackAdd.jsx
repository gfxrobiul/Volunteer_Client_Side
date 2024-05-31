import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const FeedbackAdd = () => {
    const { user } = useAuth();
   const { register, handleSubmit, setValue } = useForm();
   const [rating, setRating] = useState(""); 

  const handleRatingChange = (value) => {
    setValue("rating", value);
    setRating(value);
  };

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);

    const customerFeedReview ={
      displayName: user.displayName,
      photoURL: user.photoURL,
        reviewData: data,
    }


    // data added to server
    fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(customerFeedReview)
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if (data?.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Feedback Added  Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
        })
};

    return (
        <div>
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-around">
    <div className="text-center lg:text-left w-1/2">
      {/* img */}
      <img src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2020/12/17181103/Customer-Feedback-How-to-Collect-and-Use-Them.jpg" alt="" />
      {/* <h2 className="text-3xl font-semibold text-center uppercase">Leave us a feedback!</h2> */}
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
    {/* form */}
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 ">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center uppercase">Leave us a feedback!</h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            <button
              type="button"
              title="Rate 1 stars"
              aria-label="Rate 1 stars"
              onClick={() => handleRatingChange("1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${rating >= 1 ? "text-amber-400" : "text-gray-400"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 2 stars"
              aria-label="Rate 2 stars"
              onClick={() => handleRatingChange("2")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${rating >= 2 ? "text-amber-400" : "text-gray-400"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 3 stars"
              aria-label="Rate 3 stars"
              onClick={() => handleRatingChange("3")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${rating >= 3 ? "text-amber-400" : "text-gray-400"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 4 stars"
              aria-label="Rate 4 stars"
              onClick={() => handleRatingChange("4")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${rating >= 4 ? "text-amber-400" : "text-gray-400"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Rate 5 stars"
              aria-label="Rate 5 stars"
              onClick={() => handleRatingChange("5")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${rating >= 5 ? "text-amber-400" : "text-gray-400"}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            {...register("message")}
            placeholder="Message..."
            className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"
          ></textarea>
        
        {
            user? <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="py-4 my-8 font-semibold rounded-md btn"
          >
           Send FeedBack
          </button>
          :
          <button
            disabled
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="py-4 my-8 font-semibold rounded-md btn"
          >
           Send FeedBack
          </button>

        }

        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          rel="noopener noreferrer"
          href="/login"
          className="text-sm dark:text-gray-600"
        >
        Only logged in user give feedback
        </a>
      </div>
    </div>

    </div>
  </div>
</div>
{/*  */}
{/*  */}

</div>

    );
};

export default FeedbackAdd;