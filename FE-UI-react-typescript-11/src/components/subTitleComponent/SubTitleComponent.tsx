import type { ISubTitleProps } from "../../interface";

const SubTitleComponent = ({ className, children }: ISubTitleProps) => {
  return <h3 className={`${className} subTitle`}>{children}</h3>;
};

export default SubTitleComponent;
