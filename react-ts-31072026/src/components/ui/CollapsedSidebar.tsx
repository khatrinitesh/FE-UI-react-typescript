import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Home,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  User,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type SidebarItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "orders",
    label: "Orders",
    icon: ShoppingBag,
  },
  {
    id: "customers",
    label: "Customers",
    icon: Users,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function CollapsedSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    setIsMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-montserrat">
      {/* Mobile header */}
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 desktop-sm:hidden">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-arialnb text-20 font-bold text-white">
            B
          </span>

          <span className="font-arialnb text-24 font-bold text-secondary">
            Brand
          </span>
        </div>

        <button
          type="button"
          aria-label="Open sidebar"
          onClick={() => setIsMobileOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-secondary transition hover:bg-primary/10 hover:text-primary"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close sidebar"
        onClick={() => setIsMobileOpen(false)}
        className={`
          fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm
          transition-opacity duration-300 desktop-sm:hidden
          ${
            isMobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r border-slate-200 bg-white shadow-xl
          transition-all duration-300 ease-in-out

          desktop-sm:translate-x-0 desktop-sm:shadow-none

          ${isCollapsed ? "desktop-sm:w-24" : "desktop-sm:w-72"}

          ${isMobileOpen ? "w-72 translate-x-0" : "w-72 -translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center border-b border-slate-200 px-5">
          <div
            className={`
              flex w-full items-center
              ${isCollapsed ? "desktop-sm:justify-center" : "justify-between"}
            `}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary font-arialnb text-24 font-bold text-white shadow-lg shadow-primary/20">
                B
              </span>

              <div
                className={`
                  min-w-0 overflow-hidden transition-all duration-300
                  ${
                    isCollapsed
                      ? "desktop-sm:w-0 desktop-sm:opacity-0"
                      : "w-auto opacity-100"
                  }
                `}
              >
                <h1 className="whitespace-nowrap font-arialnb text-24 font-bold leading-none text-secondary">
                  Brand Project
                </h1>

                <p className="mt-1 whitespace-nowrap text-12 text-secondary/60">
                  Admin dashboard
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close sidebar"
              onClick={() => setIsMobileOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-secondary transition hover:bg-slate-100 desktop-sm:hidden"
            >
              <X size={21} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
          <p
            className={`
              mb-3 overflow-hidden whitespace-nowrap px-3
              text-12 font-semibold uppercase tracking-[0.14em]
              text-secondary/50 transition-all duration-300
              ${
                isCollapsed
                  ? "desktop-sm:h-0 desktop-sm:opacity-0"
                  : "h-auto opacity-100"
              }
            `}
          >
            Main menu
          </p>

          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    title={isCollapsed ? item.label : undefined}
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      group relative flex h-13 w-full items-center
                      rounded-2xl px-3 transition-all duration-200

                      ${
                        isCollapsed
                          ? "desktop-sm:justify-center desktop-sm:px-0"
                          : "gap-3"
                      }

                      ${
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "text-secondary hover:bg-primary/10 hover:text-primary"
                      }
                    `}
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="shrink-0"
                    />

                    <span
                      className={`
                        overflow-hidden whitespace-nowrap text-14 font-semibold
                        transition-all duration-300
                        ${
                          isCollapsed
                            ? "desktop-sm:w-0 desktop-sm:opacity-0"
                            : "w-auto opacity-100"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    {/* Collapsed tooltip */}
                    {isCollapsed && (
                      <span
                        className="
                          pointer-events-none absolute left-[calc(100%+12px)]
                          top-1/2 z-50 hidden -translate-y-1/2
                          whitespace-nowrap rounded-lg bg-slate-950
                          px-3 py-2 text-12 font-semibold text-white
                          opacity-0 shadow-xl transition-opacity
                          group-hover:opacity-100 desktop-sm:block
                        "
                      >
                        {item.label}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User profile */}
        <div className="shrink-0 border-t border-slate-200 p-4">
          <div
            className={`
              flex items-center rounded-2xl bg-slate-100 p-3
              ${isCollapsed ? "desktop-sm:justify-center" : "gap-3"}
            `}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 font-arialnb text-18 font-bold text-primary">
              JD
            </div>

            <div
              className={`
                min-w-0 flex-1 overflow-hidden transition-all duration-300
                ${
                  isCollapsed
                    ? "desktop-sm:w-0 desktop-sm:flex-none desktop-sm:opacity-0"
                    : "w-auto opacity-100"
                }
              `}
            >
              <p className="truncate text-14 font-semibold text-slate-900">
                John Doe
              </p>

              <p className="truncate text-12 text-secondary/60">
                john@example.com
              </p>
            </div>

            <button
              type="button"
              aria-label="Log out"
              title="Log out"
              className={`
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-xl text-secondary transition
                hover:bg-red-100 hover:text-red-600
                ${isCollapsed ? "desktop-sm:hidden" : ""}
              `}
            >
              <LogOut size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop collapse button */}
        <button
          type="button"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setIsCollapsed((current) => !current)}
          className="
            absolute -right-4 top-24 hidden h-9 w-9
            items-center justify-center rounded-full
            border border-slate-200 bg-white text-secondary
            shadow-md transition hover:border-primary
            hover:bg-primary hover:text-white
            desktop-sm:flex
          "
        >
          {isCollapsed ? (
            <ChevronRight size={18} aria-hidden="true" />
          ) : (
            <ChevronLeft size={18} aria-hidden="true" />
          )}
        </button>
      </aside>

      {/* Page content */}
      <main
        className={`
          min-h-screen transition-all duration-300
          ${isCollapsed ? "desktop-sm:ml-24" : "desktop-sm:ml-72"}
        `}
      >
        <div className="p-5 desktop-sm:p-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-12 font-semibold uppercase tracking-[0.15em] text-primary">
              Dashboard
            </p>

            <h2 className="mt-2 font-arialnb text-36 font-bold text-secondary">
              Collapsible sidebar
            </h2>

            <p className="mt-3 max-w-2xl text-16 leading-7 text-secondary/75">
              Click the arrow button to collapse or expand the desktop sidebar.
              On mobile, use the menu button in the header.
            </p>

            <div className="mt-8 grid gap-4 desktop-sm:grid-cols-3">
              {["Total orders", "Customers", "Revenue"].map((title, index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-14 text-secondary/70">{title}</p>

                  <p className="mt-3 font-arialnb text-32 font-bold text-secondary">
                    {index === 0 ? "1,284" : index === 1 ? "856" : "₹4.8L"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
