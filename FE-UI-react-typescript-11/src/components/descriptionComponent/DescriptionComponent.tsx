import type { IDescriptionProps } from "../../interface";

const DescriptionComponent = ({ children, className }: IDescriptionProps) => {
  return <p className={`${className} text-description`}>{children}</p>;
};

export default DescriptionComponent;
