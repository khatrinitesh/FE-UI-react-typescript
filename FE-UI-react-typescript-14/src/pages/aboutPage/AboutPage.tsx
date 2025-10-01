import type { IOtherPageProps } from "../../interface";

const AboutPage = ({ className }: IOtherPageProps) => {
  return (
    <div className={`${className} aboutPage spacingContent`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the About Page</h1>
        <p className="text-gray-600">
          This is a simple homepage using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
