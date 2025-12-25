import { getServerSession } from "@/lib/get-session";
// import Image from "next/image";
import MenuClient from "./menuClient";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "student"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "student"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "student"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "student"],
      },
    ],
  },
];

const MenuServer = async ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const session = await getServerSession();
  const role = session?.user.role as string;

  const filteredItems = menuItems.map((section) => ({
    ...section,
    items: section.items.filter((item) => item.visible.includes(role)),
  }));

  return (
    <MenuClient open={open} onClose={onClose} sections={filteredItems}/>
  );
};

export default MenuServer;
