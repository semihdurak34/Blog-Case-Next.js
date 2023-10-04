'use client';
import { BsFillPencilFill, BsFillTrash3Fill } from 'react-icons/bs';

const ItemButtons = ({ openModal, openConfirm }) => {
  return (
    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
      <button
        onClick={openModal}
        className="gap-2 text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
      >
        <BsFillPencilFill />
        <span>Edit</span>
      </button>

      <button
        onClick={openConfirm}
        className="gap-2 text-gray-400 inline-flex items-center leading-none text-sm"
      >
        <BsFillTrash3Fill />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default ItemButtons;
