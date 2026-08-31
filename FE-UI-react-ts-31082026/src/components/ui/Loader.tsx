type LoaderProps = {
  label?: string;
};

function Loader({ label = "Sending" }: LoaderProps) {
  return (
    <span className="loader" role="status">
      <svg className="loader-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle className="loader-track" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {label}
    </span>
  );
}

export default Loader;
