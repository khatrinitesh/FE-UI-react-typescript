import type { HeadTitleProps } from "../../interface";

const HeadTitle = ({ className, children }: HeadTitleProps) => {
  return (
    <>
      <h2
        className={`${className} headTitle text-red-500 text-[30px] font-bold`}
      >
        {children}
      </h2>
    </>
  );
};

export default HeadTitle;
