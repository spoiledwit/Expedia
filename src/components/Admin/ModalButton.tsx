import { useRef } from "react";
import { GrClose } from "react-icons/gr";

const ModalButton = ({ children, modal }:{children:JSX.Element, modal: JSX.Element}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleClick() {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }
  function handleClose() {
    modalRef.current?.close();
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="hover:bg-gray-100 px-4 h-10 flex items-center rounded-lg transition-all"
      >
        {children}
      </button>
      <dialog
        ref={modalRef}
        className="bg-gray-50 px-4 py-8 rounded-lg  backdrop:bg-black backdrop:bg-opacity-50 shadow-xl cursor-default"
      >
        <div className="w-full flex flex-col items-end gap-4">
          <button
            onClick={handleClose}
            className="px-4 flex items-center h-10 justify-center hover:bg-gray-100 transition-all rounded-lg"
          >
            <GrClose size={16} color="#000000" />
          </button>
          {modal}
        </div>
      </dialog>
    </>
  );
};

export default ModalButton;
