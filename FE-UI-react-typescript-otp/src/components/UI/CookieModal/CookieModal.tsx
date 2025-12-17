import { useState } from "react";
import "./CookieModal.scss";

interface Tab {
  id: number;
  label: string;
  content: string;
}

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs: Tab[] = [
  {
    id: 1,
    label: "Your privacy",
    content:
      "When you visit a website, it may retrieve or store information on your browser, mostly in the form of cookies. This information might be about you, your preferences, or your device. It is mostly used to ensure the website functions as expected. This information does not usually directly identify you, but it can provide you with a more personalized web experience. Because we respect your right to privacy, you can choose not to allow certain types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience with the website and the services we provide.",
  },
  {
    id: 2,
    label: "Unbedingt erforderliche Cookies",
    content:
      "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich.",
  },
  {
    id: 3,
    label: "Analytische Cookies",
    content:
      "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.",
  },
  {
    id: 4,
    label: "Targeting Cookies",
    content:
      "Diese Cookies werden verwendet, um personalisierte Werbung anzuzeigen.",
  },
];

const CookieModal = ({ isOpen, onClose }: CookieModalProps) => {
  const [activeTab, setActiveTab] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <div className="logo">
            <img
              src="https://cdn.cookielaw.org/logos/f69c0bf1-10ab-4d33-8b59-e235ddd37a5f/018e0dc7-8d7b-7fb8-93ea-28941eaa97b5/decedefb-b7ea-4120-a2fd-7e103f6bacb8/mdlz-logo.png"
              alt=""
            />
          </div>
          <h2>Company logoPrivacy Preference Center</h2>
        </div>

        {/* Body */}
        <div className="modal-body ">
          {/* Tabs */}
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="tab-content">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn primary">Meine Auswahl bestätigen</button>
          <button className="btn outline">Alle ablehnen</button>
          <button className="btn outline">Alle zulassen</button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
