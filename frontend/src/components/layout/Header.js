import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import sec1 from "../../assets/images/sec1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full h-20 flex justify-between items-center px-8">
      <h1 className="text-3xl">EPF</h1>
      <ul className="flex items-center">
        <li className="px-4">Services</li>
        <li className="px-4">Banking</li>
        <li className="px-4">Company</li>
        <li className="px-4">Resources</li>
        {user ? (
          <li className="px-4">
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center">
                {/* <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button> */}
                {/* <img src="" className="h-14 w-14" alt="" /> */}

                <Menu.Button className="inline-flex items-center justify-center w-full rounded-md border-none px-2 py-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  <img
                    src={sec1}
                    className="h-14 w-14 rounded-full mr-2"
                    alt=""
                  />
                  Options
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/admin"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-md"
                          )}
                        >
                          Dashboard
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={logoutHandler}
                        >
                          Log out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        ) : (
          <li className="px-4">
            <a
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              href="/auth"
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
