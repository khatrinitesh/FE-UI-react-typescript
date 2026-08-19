import { Oval, RotatingLines, ThreeDots } from "react-loader-spinner";

export default function ReactLoadingSpinner() {
  return (
    <div>
      {/* <Loader /> */}
      {/* <Loading /> */}
      <PageLoader />
      {/* <SubmitButton /> */}
      {/* <LoaderTwo /> */}
    </div>
  );
}

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <Oval
        height={60}
        width={60}
        color="#eb17b8"
        visible={true}
        ariaLabel="loading"
        secondaryColor="#475569"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#eb17b8"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <RotatingLines
        visible={true}
        width="60"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}

interface ButtonProps {
  loading?: boolean;
}

function SubmitButton({ loading = false }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? (
        <>
          <Oval
            height={20}
            width={20}
            color="#ffffff"
            visible={true}
            ariaLabel="loading"
            secondaryColor="#ffffff"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />

          <span>Sending...</span>
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}

interface LoaderProps {
  size?: number;
}

function LoaderTwo({ size = 50 }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <Oval
        height={size}
        width={size}
        color="#eb17b8"
        visible={true}
        ariaLabel="loading"
        secondaryColor="#475569"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}
