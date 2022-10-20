import SwiperImg from "./swiperImg";

const Modal = ({ setModalOn, setChoice, numeroSlide, descripcionSlide }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  return (
    <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
      <div className="relative h-screen justify-center items-center bg-white border-4 border-sky-500 ">
        <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
            {descripcionSlide}
          </h3>
          <button
            onClick={handleOKClick}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <SwiperImg numeroSlide={numeroSlide} />
      </div>
    </div>
  );
};

export default Modal;
