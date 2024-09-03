import {
  IconBook,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconLogin,
  IconMan,
  IconPackage,
  IconPhoto,
  IconPlus,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

const Menuitems = [
  {
    id: 1,
    title: "Home",
    icon: IconHome,
    href: "/",
  },
  {
    id: 2,
    title: "About us",
    icon: IconMan,
    href: "/about",
  },
  {
    id: 3,
    title: "Our Courses",
    icon: IconBook,
    href: "/courses",
  },
  {
    id: 4,
    title: "Manage Users",
    icon: IconUser,
    href: "/users",
  },
  {
    id: 5,
    title: "Sign in",
    icon: IconLogin,
    href: "/sign_in",
  },
  {
    id: 7,
    title: "Not found page",
    icon: IconPackage,
    href: "/not_found",
  },
];

export default Menuitems;
