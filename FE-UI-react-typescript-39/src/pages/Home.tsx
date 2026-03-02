import { useState } from "react";
import Accordion from "../components/Accordion";
import Card3D from "../components/Card3D";
import { CARD_DATA } from "../constants/constants";
import Alert from "../components/Alert";
import Button from "../components/ui/Button";
import AnimatedIcon from "../components/AnimatedIcon";

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="homePage">
      <Button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-4 border rounded-lg"
      >
        <AnimatedIcon>
          {open ? (
            // Minus
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="11" width="14" height="2" rx="1" />
            </svg>
          ) : (
            // Plus
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="11" y="5" width="2" height="14" rx="1" />
              <rect x="5" y="11" width="14" height="2" rx="1" />
            </svg>
          )}
        </AnimatedIcon>
      </Button>
      <Alert
        isOpen={open}
        variant="success"
        title="Payment Successful"
        description="Your transaction has been completed."
        onClose={() => setOpen(false)}
        secondaryAction={{
          label: "Cancel",
          onClick: () => console.log("Cancel clicked"),
        }}
        primaryAction={{
          label: "Continue",
          onClick: () => console.log("Continue clicked"),
        }}
      />
      <Accordion title="What is your refund policy?">
        We offer a 30-day refund policy with no questions asked.
      </Accordion>

      <Accordion title="Do you offer technical support?">
        Yes! Our support team is available 24/7.
      </Accordion>
      {CARD_DATA.map((item) => (
        <Card3D key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
