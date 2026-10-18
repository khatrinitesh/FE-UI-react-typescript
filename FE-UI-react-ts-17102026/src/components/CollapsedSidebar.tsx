import { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Settings,
  User,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface CollapsedSidebarProps {
  items?: SidebarItem[];
  className?: string;
}

const CollapsedSidebar = ({
  items = [],
  className = "",
}: CollapsedSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const defaultItems: SidebarItem[] = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Home", icon: <Home size={20} /> },
    { label: "Profile", icon: <User size={20} /> },
    { label: "Settings", icon: <Settings size={20} /> },
  ];

  const sidebarItems = items.length ? items : defaultItems;

  return (
    <aside
      className={`collapsed-sidebar flex min-h-screen flex-col border-r border-gray-200 bg-white p-3 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"} ${className}`}
    >
      <div className="mb-8 flex items-center justify-between gap-2 px-2 py-3">
        {!isCollapsed && (
          <span className="text-lg font-bold text-gray-900">My App</span>
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed((previous) => !previous)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
        >
          {isCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              setActiveItem(item.label);
              item.onClick?.();
            }}
            title={isCollapsed ? item.label : undefined}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${activeItem === item.label ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"} ${isCollapsed ? "justify-center" : ""}`}
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {!isCollapsed && (
        <p className="border-t border-gray-200 px-3 py-4 text-xs text-gray-400">
          © 2026 My App
        </p>
      )}
    </aside>
  );
};

export default CollapsedSidebar;
