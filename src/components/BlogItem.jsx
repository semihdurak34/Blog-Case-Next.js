import { useState } from 'react';
import ItemButtons from './Modal/ItemButtons';
import { BsArrowRight } from 'react-icons/bs';
import Modal from './Modal/Modal';
import Link from 'next/link';
import ConfirmModal from './Confirm/ConfirmModal';

const BlogItem = ({ blog }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          Blog
        </h2>
        <div className="h-full flex flex-col justify-between">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {blog.title}
          </h1>
          <p className="leading-relaxed mb-3">
            {blog.body.slice(0, 100) + '...'}
          </p>
          <Link
            href={`/blog/${blog.id}`}
            className="text-indigo-500 inline-flex justify-center items-center gap-2"
          >
            <span>Learn More</span>
            <BsArrowRight />
          </Link>
        </div>
        <ItemButtons
          openConfirm={() => {
            setShowDelete(true);
          }}
          openModal={() => {
            setShowEdit(true);
            setEditItem(blog);
          }}
        />
      </div>
      {showEdit && (
        <Modal
          editItem={editItem}
          closeModal={() => {
            setShowEdit(false);
            setEditItem(null);
          }}
        />
      )}

      {showDelete && (
        <ConfirmModal
          itemId={blog.id}
          closeModal={() => {
            setShowDelete(false);
          }}
        />
      )}
    </div>
  );
};

export default BlogItem;
