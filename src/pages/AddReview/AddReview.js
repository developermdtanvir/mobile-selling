import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddReview() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const handleSubmitReview = (e) => {
    const { message } = e;
    const review = { message };

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/", { relative: true });
        }
      });
  };

  return (
    <div className=" w-1/2 mx-auto">
      <form onSubmit={handleSubmit(handleSubmitReview)} className="space-y-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          name="message"
          {...register("message", { required: true })}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <input
          type="submit"
          className=" py-2 px-8 cursor-pointer bg-gradient-to-tr from-purple-600 via-purple-700 to-purple-800 rounded-md text-white font-bold"
          value="submit"
        />
      </form>
    </div>
  );
}
