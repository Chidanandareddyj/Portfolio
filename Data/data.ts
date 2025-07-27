import { nav } from "motion/react-client";
import { Geist, Geist_Mono } from "next/font/google";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const Data = {
  navbar: [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "About",
      href: "/about",
      icon: NotebookIcon,
    },
    
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
};

export default Data;
