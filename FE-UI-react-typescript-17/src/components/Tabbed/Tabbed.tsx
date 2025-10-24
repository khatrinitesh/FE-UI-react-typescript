import { useTabStore } from "../../store/useTabStore";
import { TAB_KEYS, type TabKey } from "./tabConstants";

const Tabbed = () => {
  const { activeTab, setActiveTab } = useTabStore();

  const renderContent = (tab: TabKey) => {
    switch (tab) {
      case TAB_KEYS.HOME:
        return <p>Welcome to the Home Page!</p>;
      case TAB_KEYS.ABOUT:
        return <p>Learn more About us here.</p>;
      case TAB_KEYS.CONTACT:
        return <p>Get in touch on the Contact Page.</p>;
      default:
        return null;
    }
  };
  return (
    <div style={{ width: "80%", margin: "2rem auto", textAlign: "center" }}>
      {/* Tab Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {Object.values(TAB_KEYS).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              background: activeTab === tab ? "#1e90ff" : "#f0f0f0",
              color: activeTab === tab ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              transition: "all 0.3s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabbed;
