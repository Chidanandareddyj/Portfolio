import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const Data = {
  navbar: [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
    },
    
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Chidanandareddyj",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chidananda-reddy-jonnala-961633299",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Chidanandareddyj17",
        icon: Icons.x,

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
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "C/C++",
    "FastAPI",
  ]
};

export default Data;
