import React, { useEffect, useState } from "react";
import churchlogo from "../images/church logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const [sliderActive, setSliderActive] = useState(false);
  const [clanMembers, setClanMembers] = useState([]);
  const [primaryNumber, setPrimaryNumber] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/Login") {
      setLoginButtonText("SignUp");
    } else {
      setLoginButtonText("Login");
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDoubleDropdown = () => {
    setDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  const [currentAccount, setCurrentAccount] = useState({});
  const USERID = localStorage.getItem("BETHEL_ICRM_TOKEN")
    ? JSON.parse(atob(localStorage.getItem("BETHEL_ICRM_TOKEN").split(".")[1]))
    : null;

  async function fetchLoginAccount() {
    if (USERID) {
      try {
        const response = await fetch(
          `http://localhost:5000/User/ViewSingleAccount/${String(
            USERID?.USERID
          )}`
        );
        const data = await response.json();
        if (data.success) {
          setCurrentAccount(data.account);
        } else {
          console.error("Backend error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    }
  }

  async function fetchClanMembers() {
    try {
      const response = await fetch(
        `http://localhost:5000/FormRoutes/ReadFamilyMembers/${primaryNumber}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.success) {
        setClanMembers(data.FamilyMembers);
      } else {
        console.error("Clan fetch error:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }

  useEffect(() => {
    fetchLoginAccount();
    fetchClanMembers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("BETHEL_ICRM_TOKEN");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {currentAccount?.Email === 'bethelicrmcoimbatore@gmail.com' ? (
        <Link
          to={"/Admin"}
          className="z-10 absolute bottom-10 left-10 px-3 py-4 rounded-md bg-red-600 text-white"
        >
          Admin Dashboard
        </Link>
      ) : (
        ""
      )}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 md:px-0 px-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center">
            <img
              src={churchlogo}
              className="w-[5rem] h-[5rem]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap text-gray-400">
              BETHEL ICRM
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"imNew"}
                  className={`block px-3 text-[14px] py-1 rounded-md ${
                    hoveredItem === "imNew" ? "bg-red-600 text-white" : ""
                  }`}
                  aria-current="page"
                  onMouseEnter={() => setHoveredItem("imNew")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Im New
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  className={`flex items-center justify-center gap-0 px-3 text-[14px] py-1 rounded-md ${
                    hoveredItem === "Ministries" ? "bg-red-600 text-white" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem("Ministries")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={"Ministries"}>
                    <span>Ministries </span>
                  </Link>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    isDropdownOpen
                      ? "block absolute top-[50px] md:w-[200px] md:text-center w-full"
                      : "hidden"
                  } font-normal bg-gray-500 divide-y  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="mt-5 text-sm pb-5 text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to={"Childrenministry"}
                        className="block px-4 py-2 text-gray-200"
                      >
                        Children's
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"Youthministry"}
                        className="block px-4 py-2 text-gray-200"
                      >
                        Youth
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"Womenministry"}
                        className="block px-4 py-2 text-gray-200"
                      >
                        Women's
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"Worship"}
                        className="block px-4 py-2 text-gray-200"
                      >
                        Worship
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"Socialservice"}
                        className="block px-4 py-2 text-gray-200"
                      >
                        Social service
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to={"/Events"}
                  className={`block px-3 text-[14px] py-1 rounded-md ${
                    hoveredItem === "Events" ? "bg-red-600 text-white" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem("Events")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/aboutUs"}
                  className={`block px-3 text-[14px] py-1 rounded-md ${
                    hoveredItem === "aboutUs" ? "bg-red-600 text-white" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem("aboutUs")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contribute"}
                  className={`block px-3 text-[14px] py-1 rounded-md ${
                    hoveredItem === "contribute" ? "bg-red-600 text-white" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem("contribute")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Contribute
                </Link>
              </li>
              <li>
                {localStorage.getItem("BETHEL_ICRM_TOKEN") ? (
                  <img
                    src={currentAccount.ProfilePicture}
                    alt={currentAccount.UserName + " Picture "}
                    className="w-[40px] h-[40px] rounded-full object-contain border border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-600"
                    onClick={() => setSliderActive(!sliderActive)}
                  />
                ) : (
                  <Link
                    to={`/${loginButtonText}`}
                    className=" block px-3 text-[14px] py-1 rounded-md bg-red-600 text-white"
                  >
                    {loginButtonText}
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`w-[400px] max-w-full fixed top-0 ${
          sliderActive ? "right-0" : "right-[-400px]"
        } h-screen bg-white p-5 z-10 shadow-xl border duration-300 transition-all`}
      >
        <button
          onClick={() => setSliderActive(!sliderActive)}
          className="px-3 py-1 text-[12px] rounded-md bg-red-300 text-red-600 absolute top-3 right-3"
        >
          Close
        </button>
        <div className="text-center text-[1.3rem] font-[700] mt-5">
          BETHEL ICRM
        </div>
        <img
          src={currentAccount?.ProfilePicture}
          alt=""
          className="w-[80px] h-[80px] rounded-full object-contain border shadow-lg mx-auto my-5"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-[1rem] font-[600] uppercase">
            {currentAccount?.UserName}
          </div>
          <div className="text-center text-[14px] font-[400] text-gray-500">
            {currentAccount?.Email}
          </div>
        </div>
        <div className="">
          <input
            onChange={(e) => setPrimaryNumber(e.target.value)}
            type="number"
            pattern="[0-9]{10}"
            placeholder="Enter Primary Mobile Number"
          />
          <button onClick={() => fetchClanMembers()}>Search</button>
        </div>
        <div className="text-[1.2rem] font-[700] mt-5 px-5">Clan Members</div>
        <div className="mt-3 flex flex-col gap-6 h-[300px] Scroll-customize overflow-y-scroll">
          {clanMembers?.map((target, index) => (
            <div
              key={"Member" + index + 1}
              className="w-[95%] flex items-center justify-normal gap-3 border shadow-lg p-3 rounded-xl"
            >
              <img
                src={target.ProfilePicture}
                alt={target.UserName + " Picture"}
                className="w-[50px] h-[50px] rounded-full object-contain border"
              />
              <div className="flex items-center justify-normal gap-0 flex-col">
                <div className="text-[16px] font-[600] uppercase w-full">
                  {target.UserName}
                </div>
                <div className="text-[13px] text-gray-500 w-full">
                  {target.DateOfBirth}{" "}
                  <span className="mx-2">
                    (
                    {Number(new Date().getFullYear()) -
                      Number(target.DateOfBirth?.split("-")[2])}
                    )
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-2 absolute bottom-5 left-2/4 -translate-x-2/4 w-[90%] mx-auto">
          <button
            onClick={() => handleLogout()}
            className="bg-red-600 text-white border rounded-lg px-4 py-2 text-[14px] "
          >
            Log out
          </button>
          <button className="bg-black text-red-600 border rounded-lg px-4 py-2 text-[14px] ">
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
