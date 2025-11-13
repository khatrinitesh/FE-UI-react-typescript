import { useToastStore } from "../../../store/toastStore";
import ToastContainer from "../ToastContainer/ToastContainer";

const Alerts = () => {
  const addToast = useToastStore((state) => state.addToast);

  const showSuccess = () => {
    addToast({ type: "success", message: "Operation was successful!" });
  };

  const showError = () => {
    addToast({ type: "error", message: "Something went wrong!" });
  };
  return (
    <>
      <div className="gap-[10px] inline-flex">
        <button
          className="bg-green-600 px-[20px] py-[5px] rounded-[5px] cursor-pointer text-white "
          onClick={showSuccess}
        >
          Show Success Toast
        </button>
        <br />
        <button
          className="bg-red-600 px-[20px] py-[5px] rounded-[5px] cursor-pointer text-white "
          onClick={showError}
        >
          Show Error Toast
        </button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Alerts;
