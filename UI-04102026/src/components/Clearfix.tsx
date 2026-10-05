interface ClearfixProps {
  children: React.ReactNode;
  className?: string;
}

const Clearfix = ({ children, className = "" }: ClearfixProps) => {
  return (
    <div
      className={`clearfix after:block after:clear-both after:content-[''] ${className}`}
    >
      {children}
    </div>
  );
};

export default Clearfix;
