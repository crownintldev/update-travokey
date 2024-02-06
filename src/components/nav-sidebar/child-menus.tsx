import React from "react";
import { GlobalSheet } from "../sheet/page";
import { AccountForm } from "../forms/account/account-form";

type Props = {};

export default function ChildMenus(props: Props) {

  console.log("menu props", props);

  return (
    // <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
    //   <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">
    //     Accounts
    //   </h2>
    //   <div className="mt-8 space-y-4">

    //     {
    //         menuItems.map(item => {
    //             return   <button className="flex items-center w-full px-5  py-1 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
    //             <img
    //               className="object-cover w-8 h-8 rounded-full"
    //               src={item.img}
    //               alt="image"
    //             />
    //             <div className="text-left rtl:text-right">
    //               <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //                {item.name}
    //               </h1>
    //               <p className="text-xs text-gray-500 dark:text-gray-400">
    //                 {item.followers} Followers
    //               </p>
    //             </div>
    //           </button>
    //         })
    //     }
    //     <button className="flex items-center w-full px-5  py-1 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
    //       <img
    //         className="object-cover w-8 h-8 rounded-full"
    //         src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
    //         alt="image"
    //       />
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Mia John
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           11.2 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5  py-1  transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
    //       <img
    //         className="object-cover w-8 h-8 rounded-full"
    //         src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80"
    //         alt="image"
    //       />
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           arthur melo
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           1.2 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5 py-1  transition-colors duration-200 bg-gray-100 dark:bg-gray-800 gap-x-2 focus:outline-none">
    //       <div className="relative">
    //         <img
    //           className="object-cover w-8 h-8 rounded-full"
    //           src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
    //           alt="image"
    //         />
    //         <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0" />
    //       </div>
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Jane Doe
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           15.6 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5 py-1  transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
    //       <img
    //         className="object-cover w-8 h-8 rounded-full"
    //         src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80"
    //         alt="image"
    //       />
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Amelia. Anderson
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           32.9 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5 py-1  transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
    //       <img
    //         className="object-cover w-8 h-8 rounded-full"
    //         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
    //         alt="image"
    //       />
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Joseph Gonzalez
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           100.2 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5 py-1  transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
    //       <div className="relative">
    //         <img
    //           className="object-cover w-8 h-8 rounded-full"
    //           src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80"
    //           alt="image"
    //         />
    //         <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0" />
    //       </div>
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Olivia Wathan
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           8.6 Followers
    //         </p>
    //       </div>
    //     </button>
    //     <button className="flex items-center w-full px-5 py-1 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
    //       <div className="relative">
    //         <img
    //           className="object-cover w-8 h-8 rounded-full"
    //           src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80"
    //           alt="image"
    //         />
    //         <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0" />
    //       </div>
    //       <div className="text-left rtl:text-right">
    //         <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
    //           Junior REIS
    //         </h1>
    //         <p className="text-xs text-gray-500 dark:text-gray-400">
    //           56.6 Followers
    //         </p>
    //       </div>
    //     </button>
    //   </div>
    //   <GlobalSheet form={<AccountForm />} title={"Account form"} />
    // </div>
    <div className="h-[100vh] flex h-5/6 w-72 flex-col bg-gray-200">
      <h1 className="flex justify-center pt-2">{props.title}</h1>
      <ul className="mt-12 flex flex-col">
        <li className="relative transition">
          <input className="peer hidden" type="checkbox" id="menu-2" />
          <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm text-gray-500">
            <span className="mr-5 flex w-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            Dashboard
            <label
              for="menu-2"
              className="absolute inset-0 h-full w-full cursor-pointer"
            ></label>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              Carnival
            </li>
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              Analytics
            </li>
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              Revenue
            </li>
          </ul>
        </li>

        <li className="relative transition">
          <input className="peer hidden" type="checkbox" id="menu-1" checked />
          <div className="relative m-2 flex items-center rounded-xl border-b-4 border-gray-300 bg-gray-50 py-3 pl-5 text-sm text-gray-500">
            <span className="mr-5 flex w-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"
                />
              </svg>
            </span>
            Analytics
            <label
              for="menu-1"
              className="absolute inset-0 h-full w-full cursor-pointer"
            ></label>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="peer-checked:rotate-180 absolute right-0 top-6 mr-5 ml-auto h-4 text-gray-500 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              Carnival
            </li>
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              Analytics
            </li>
            <li className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white">
              <span className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              Revenue
            </li>
          </ul>
        </li>

        <li className="relative transition">
          <div className="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
            <span className="mr-5 flex w-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            Support Tickets
          </div>
        </li>

        <li className="relative transition">
          <div className="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
            <span className="mr-5 flex w-5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            Settings
          </div>
        </li>
      </ul>
    </div>
  );
}
