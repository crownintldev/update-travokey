import Link from "next/link";
import React, { useState } from "react";

import { UsersRound, Target, Settings, Home, TrendingUp, Plane } from "lucide-react";
import { Tooltip } from "react-tooltip";

import ChildMenus from "./child-menus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { accountArrays, automationArray, databaseArray, settingsArray, ticketingArrays } from "./child-menu-items";

type Props = {};

const MainMenu = (props: Props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedChild, setSelectedChild] = useState();

  const navLinks = [
    {
      title: "home",
      link: "/",
      icon: <Home />,
      tooltip: "Accounts",
      activeChildPath: '/dashboards/analytics',
      child: accountArrays,
    },
    {
      title: "Accounts",
      link: "/users",
      icon: <TrendingUp />,
      tooltip: "Accounts",
      activeChildPath: '/dashboards/analytics',
      child: accountArrays()
    },
    {
      title: "Tickets",
      link: "/orders",
      icon:<Plane  />,
      tooltip: "Tickets",
      activeChildPath: '/welcome',
      child: ticketingArrays()
    },
    {
      title: 'Tour',
      link: '/settings',
      icon: <Target />,
      tooltip: "Tours",
      activeChildPath: '/coming-soon',
      child: ticketingArrays()
    },
    {
      title: 'Hotel',
      link: '/users',
      icon: <Target />,
      tooltip: "Hotels",
      activeChildPath: '/coming-soon',
      child: ticketingArrays()
    },
    {
      title: 'Insurance',
      link: '/orders',
      icon: <Target />,
      tooltip: "Insurances",
      activeChildPath: '/coming-soon',
      child: ticketingArrays()
    },
    {
      title: 'Automation Tools',
      link: '/settings',
      icon: <Target />,
      tooltip: "Automation Tools",
      activeChildPath: '/coming-soon',
      child: automationArray()
    },
    {
      title: 'Database',
      link: '/users',
      icon: <Target />,
      tooltip: "Database",
      activeChildPath: '/coming-soon',
      child: databaseArray()
    },
    // {
    //   lineBreak: true
    // },
    {
      title: "settings",
      link: "/settings",
      icon: <Settings />,
      tooltip: "Settings",
      activeChildPath: '/coming-soon',
      child: settingsArray()
    },
  ];

  // Function to handle menu item click and update the selected title
  const handleMenuItemClick = (title: string, child: any) => {
    setSelectedTitle(title);
    setSelectedChild(child);
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
            onClick={() => handleMenuItemClick(item.title, item.child)} // Call the function with the selected title
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
                className={`text-gray-500 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-10 ${location.pathname === item.link ? "text-blue-500" : ""
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
