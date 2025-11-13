import type { IOtherPageProps } from "../../interface";

const ServicePage = ({ className }: IOtherPageProps) => {
  return (
    <div className={`${className} servicePage spacingContent`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Service Page</h1>
        <p className="text-gray-600">
          This is a simple servicepage using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
