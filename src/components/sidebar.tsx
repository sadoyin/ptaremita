import { UserRole } from "@/app/(main)/test/page";

export function Sidebar({
  role,
  menu,
  setMenu,
}: {
  role: UserRole;
  menu: string;
  setMenu: (m: string) => void;
}) {
  const adminMenu = [
    "Dashboard",
    "Students",
    "PTA Fees",
    "RRR Management",
    "Payments",
    "Reports",
    "Settings",
  ];
  const studentMenu = ["Dashboard", "My RRR", "Payments", "History", "Profile"];
  const items = role === "admin" ? adminMenu : studentMenu;

  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <nav className="p-4">
        {items.map((it) => (
          <button
            key={it}
            onClick={() => setMenu(it)}
            className={`w-full text-left px-3 py-2 rounded-md mb-1 hover:bg-slate-50 ${
              menu === it ? "bg-indigo-50 text-indigo-700" : "text-slate-700"
            }`}
          >
            {it}
          </button>
        ))}
      </nav>
    </aside>
  );
}
