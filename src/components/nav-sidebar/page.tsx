import React, { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UsersRound, Target, Settings, Home, TrendingUp } from "lucide-react";
import ReactTooltip, { Tooltip } from "react-tooltip"; // Import the react-tooltip library
import ChildMenus from "./child-menus";

type Props = {};

const MainMenu = (props: Props) => {
  const [selectedTitle, setSelectedTitle] = useState([]); // State to store the selected title
  const navLinks = [
    {
      title: "home",
      link: "/",
      icon: <Home />,
      tooltip: "Accounts",
      child: [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: <Home />,
        },
      ],
    },
    {
      title: "users",
      link: "/users",
      icon: <TrendingUp />,
      tooltip: "Users",
      child: [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: <Home />,
        },
      ],
    },
    {
      title: "orders",
      link: "/orders",
      icon: <Target />,
      tooltip: "Orders",
      child: [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: <Home />,
        },
      ],
    },
    {
      title: "settings",
      link: "/settings",
      icon: <Settings />,
      tooltip: "Settings",
      child: [
        {
          title: "Dashboard",
          link: "/dashboard",
          icon: <Home />,
        },
      ],
    },
  ];

  // Function to handle menu item click and update the selected title
  const handleMenuItemClick = (title: string, link: string) => {
    setSelectedTitle(title);
  };

  return (
    <>
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
        <Link href="/">
          <Avatar>
            <AvatarImage
              src="https://travokey.up.railway.app/images/favicon.svg"
              className="h-14 pb-4"
            />
            <AvatarFallback>crown logo</AvatarFallback>
          </Avatar>
        </Link>
        {navLinks.map((item) => (
          <div
            key={item.title}
            onClick={() => handleMenuItemClick(item.title, item.link)} // Call the function with the selected title
          >
            <Tooltip
              id={item.title}
              place="right"
              //   effect="solid"
              key={item.title}
            />
            <Link
              href={item.link}
              data-tooltip-id={item.title}
              data-tooltip-content={item.title}
            >
              <div
                className={`text-gray-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-10 ${
                  location.pathname === item.link ? "text-blue-500" : ""
                }`}
                data-tip={item.tooltip}
                data-for={item.title}
              >
                {item.icon}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ChildMenus title={selectedTitle} />
    </>
  );
};

export default MainMenu;
