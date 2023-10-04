"use client";

import { useDispatch } from "react-redux";
import { createBlog, updateBlog } from "../../redux/actions/blogActions";
import { useState } from "react";

const Modal = ({ editItem, closeModal }) => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(editItem ? true : false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());

    if (isEditMode) {
      data = { ...editItem, ...data };

      dispatch(updateBlog(data));
    } else {
      data = { ...data, userId: 10 };

      dispatch(createBlog(data));
    }

    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto h-screen max-h-full grid place-items-center bg-[#00000039]">
      <div className="relative w-full max-w-2xl max-h-full ">
        <div className="relative bg-white rounded-lg shadow p-5  flex flex-col  items-center py-12">
          <h2 className="font-bold text-lg">
            {isEditMode ? "Update Blog" : "Create new Blog"}
          </h2>
          <form onSubmit={handleSubmit} className="w-5/6">
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="write the title here"
                defaultValue={editItem?.title}
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Body:
              </label>
              <textarea
                name="body"
                defaultValue={editItem?.body}
                class="block p-2.5 min-h-[150px] max-h-[400px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write the content here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="mx-5 text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
