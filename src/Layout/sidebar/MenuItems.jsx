import {
  IconBook,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconLogin,
  IconMan,
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
    title: "My Profile",
    icon: IconUser,
    href: "/profile",
  },
  {
    id: 5,
    title: "Sign in",
    icon: IconLogin,
    href: "/sign_in",
  },
  {
    id: 6,
    title: "Create User",
    icon: IconPlus,
    href: "/sign_up",
  },
];

export default Menuitems;
