import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Form", href: "/Form", current: false },
  { name: "Report", href: "/StudentDetail", current: false },
  { name: "Team", href: "/Team", current: false },
  { name: "Contact Us", href: "/ContactUs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  return (
    <Disclosure as="nav" className="bg-gray-900 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            {" "}
            {/* Updated padding */}
            <div className="relative flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
              <Link to="/">
                <div className="flex-shrink-0 text-white text-2xl font-bold">
                  Course2Program
                </div>
                </Link>
              </div>

              <div className="flex sm:hidden">
                <Disclosure.Button className="text-gray-100 hover:bg-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {updatedNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      exact
                      to={item.href}
                      activeClassName="bg-gray-900 text-white"
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 text-lg font-medium rounded-md"
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {updatedNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  exact
                  to={item.href}
                  activeClassName="bg-gray-900 text-white"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 text-base font-medium rounded-md"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
