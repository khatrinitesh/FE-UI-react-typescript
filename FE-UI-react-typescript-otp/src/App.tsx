import { ChevronLeft } from "lucide-react";
import "./custom.css";
import Button from "./components/UI/Button";
import OtpInput from "./components/UI/OtpInput";
import OtpTimer from "./components/UI/OtpTimer";

function App() {
  return (
    <>
      <header className="header ">
        <div className="container mx-auto p-1">
          <div className="innerHeader">
            <ChevronLeft />
          </div>
        </div>
      </header>
      <div className="mainContent">
        <div className="innerContent">
          <div className="container">
            <div className="otpSection">
              <div className="titleBlock">
                <h2 className="headTitle">Verify Phone Number</h2>
                <p className="desc">
                  Please enter the 4 digit code sent to{" "}
                  <span className="txt-highlight">+62 50 123 4567</span> through
                  SMS
                </p>
              </div>
              <OtpInput length={4} />
              <OtpTimer />
              <span className="txt-wrong">Wrong number</span>
              <Button iconLeft={false} iconRight={false}>
                VERIFY & START
              </Button>
              <p className="txt-summary">
                By continuing you're indicating that you accept our{" "}
                <a href="/terms" className="underline">
                  Terms of Use
                </a>{" "}
                and our{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
