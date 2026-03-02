import { useState } from "react";
import { Mail } from "lucide-react";
import { FieldInput } from "../components/ui/FieldInput";
import Button from "../components/ui/Button";
import { Link } from "react-router";

const Contact = () => {
  const [name, setName] = useState("");

  return (
    <div className="max-w-md mx-auto space-y-4">
      <FieldInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        maxLength={50}
      />
      <Button iconPosition="right" icon={<Mail size={18} />}>
        Submit
      </Button>

      <div className="flex gap-4 pt-4">
        <ul className="flex gap-2">
          {/* facebook */}
          <li>
            <Link to="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
          </li>
          {/* instagram */}
          <li>
            <Link to="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
