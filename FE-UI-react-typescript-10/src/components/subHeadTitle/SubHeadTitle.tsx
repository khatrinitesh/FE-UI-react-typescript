import type { ISubHeadTitle } from "../../interface";

const SubHeadTitle = ({ className, children }: ISubHeadTitle) => {
  return (
    <h2 className={`${className} headTitle text-2xl font-semibold`}>
      {children}
    </h2>
  );
};

export default SubHeadTitle;
