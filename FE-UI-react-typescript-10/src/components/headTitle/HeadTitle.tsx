import type { IHeadTitle } from "../../interface";

const HeadTitle = ({ className, children }: IHeadTitle) => {
  return (
    <h2 className={`${className} headTitle text-3xl font-semibold`}>
      {children}
    </h2>
  );
};

export default HeadTitle;
