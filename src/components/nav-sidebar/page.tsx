import Link from "next/link";
import React, { useState } from "react";

import {
  UsersRound,
  Target,
  Settings,
  Home,
  TrendingUp,
  Plane,
  Route,
  BedDouble,
  Wrench,
  Database,
} from "lucide-react";
import { Tooltip } from "react-tooltip";

import ChildMenus from "./child-menus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  accountArrays,
  automationArray,
  databaseArray,
  homeArrays,
  hotelArray,
  settingsArray,
  ticketingArrays,
  tourArrays,
} from "./child-menu-items";

type Props = {};

const MainMenu = (props: Props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedChild, setSelectedChild] = useState(homeArrays);

  const navLinks = [
    {
      title: "home",
      path: "/",
      icon: <Home />,
      tooltip: "Accounts",
      activeChildPath: "/dashboards/analytics",
      child: homeArrays,
    },
    {
      title: "Accounts",
      path: "/users",
      icon: <TrendingUp />,
      tooltip: "Accounts",
      activeChildPath: "/dashboards/analytics",
      child: accountArrays(),
    },
    {
      title: "Tickets",
      path: "/orders",
      icon: <Plane />,
      tooltip: "Tickets",
      activeChildPath: "/welcome",
      child: ticketingArrays(),
    },
    {
      title: "Tour",
      path: "/settings",
      icon: <Route />,
      tooltip: "Tours",
      activeChildPath: "/coming-soon",
      child: tourArrays(),
    },
    {
      title: "Hotel",
      path: "/users",
      icon: <BedDouble />,
      tooltip: "Hotels",
      activeChildPath: "/coming-soon",
      child: hotelArray(),
    },
    {
      title: "Automation Tools",
      path: "/settings",
      icon: <Wrench />,
      tooltip: "Automation Tools",
      activeChildPath: "/coming-soon",
      child: automationArray(),
    },
    {
      title: "Database",
      path: "/users",
      icon: <Database />,
      tooltip: "Database",
      activeChildPath: "/coming-soon",
      child: databaseArray(),
    },
    {
      title: "settings",
      path: "/settings",
      icon: <Settings />,
      tooltip: "Settings",
      activeChildPath: "/coming-soon",
      child: settingsArray(),
    },
  ];

  // Function to handle menu item click and update the selected title
  const handleMenuItemClick = (title: string, child: any, event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedTitle(title);
    setSelectedChild(child);
  };

  return (
    <>
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700 border-l-1">
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
            onClick={(event) => handleMenuItemClick(item.title, item.child, event)} // Pass the event
          >
            <Tooltip
              id={item.title}
              place="right"
              //   effect="solid"
              key={item.title}
              className="z-50 transition-opacity duration-300 opacity-0 hover:opacity-100 "
              />
            <Link
              href="/"
              data-tooltip-id={item.title}
              data-tooltip-content={item.title}
            >
              <div
                className={`text-gray-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-10 ${location.pathname === item.path ? "text-blue-500" : ""
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
      <ChildMenus menuItems={selectedChild} />
    </>
  );
};

export default MainMenu;
