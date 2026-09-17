import { ArrowRight, Download, Mail, Plus } from "lucide-react";

import "./BlockButtons.css";

export const BlockButtons = () => {
  return (
    <div className="blockButtons">
      <button className="blockButtonPrimary" type="button">
        <span className="blockButtonText">Continue</span>

        <ArrowRight className="blockButtonIcon" />
      </button>

      <button className="blockButtonSecondary" type="button">
        <Download className="blockButtonIcon" />

        <span className="blockButtonText">Download</span>
      </button>

      <button className="blockButtonOutline" type="button">
        <Mail className="blockButtonIcon" />

        <span className="blockButtonText">Contact</span>
      </button>

      <button className="blockButtonDark" type="button">
        <Plus className="blockButtonIcon" />

        <span className="blockButtonText">Create New</span>
      </button>
    </div>
  );
};
