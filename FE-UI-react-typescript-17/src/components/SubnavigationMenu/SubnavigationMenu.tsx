import { useNavigationStore } from "../../store/useNavigationStore";
import { MAIN_MENU, SUB_MENU, type MainMenuKey } from "./navigationConstants";

const SubnavigationMenu = () => {
  const { activeMain, activeSub, setActiveMain, setActiveSub } =
    useNavigationStore();

  return (
    <div
      style={{ width: "300px", margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      {/* Main Menu */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {Object.keys(MAIN_MENU).map((key) => {
          const menuKey = key as MainMenuKey;
          return (
            <div key={key}>
              <button
                onClick={() => setActiveMain(menuKey)}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: activeMain === menuKey ? "#1e90ff" : "#f0f0f0",
                  color: activeMain === menuKey ? "#fff" : "#000",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {MAIN_MENU[menuKey]}
              </button>

              {/* Submenu */}
              {activeMain === menuKey && (
                <div
                  style={{
                    marginLeft: "16px",
                    marginTop: "4px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {SUB_MENU[menuKey].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSub(sub)}
                      style={{
                        padding: "6px",
                        background: activeSub === sub ? "#87cefa" : "#e0e0e0",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Display Active Selection */}
      <div style={{ marginTop: "1rem", fontStyle: "italic" }}>
        Selected: {MAIN_MENU[activeMain]} {activeSub ? `> ${activeSub}` : ""}
      </div>
    </div>
  );
};

export default SubnavigationMenu;
