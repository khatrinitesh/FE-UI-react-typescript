import type { IOtherPageProps } from "../../interface";

const ContactPage = ({ className }: IOtherPageProps) => {
  return (
    <div className={`${className} contactPage spacingContent`}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Contact Page</h1>
        <p className="text-gray-600">
          This is a simple contactpage using Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
