'use client';
import { useSelector } from 'react-redux';
import BlogItem from '../../components/BlogItem';
import Loader from './../../components/Loader';
import { IoIosCreate } from 'react-icons/io';
import { useState } from 'react';
import EditModal from '../../components/Modal/Modal';

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const state = useSelector((store) => store.blogSlice);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
          >
            <IoIosCreate className="mr-3" />
            Create new Blog
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          {state.isLoading ? (
            <Loader />
          ) : (
            !state.isError &&
            state.blogs.map((blog, i) => (
              <BlogItem key={i} blog={blog} />
            ))
          )}
        </div>
      </div>
      {showModal && (
        <EditModal closeModal={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default Blogs;
