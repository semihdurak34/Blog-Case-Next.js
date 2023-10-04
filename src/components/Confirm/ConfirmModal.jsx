import { BsTrashFill } from 'react-icons/bs';
import ConfirmButtons from './ConfirmButtons';

const ConfirmModal = ({ itemId, closeModal }) => {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full bg-[#00000039]"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <BsTrashFill className="text-5xl mx-auto my-4" />
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </p>
          <ConfirmButtons itemId={itemId} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
