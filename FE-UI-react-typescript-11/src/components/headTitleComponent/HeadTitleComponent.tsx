import type { IHeadTitleProps } from "../../interface";

const HeadTitleComponent = ({ className, children }: IHeadTitleProps) => {
  return (
    <h2
      className={`${className} headTitle font-poppins-medium text-normal-headline`}
    >
      {children}
    </h2>
  );
};

export default HeadTitleComponent;
