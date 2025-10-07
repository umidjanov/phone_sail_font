import React from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../videos/photo_2025-06-11_13-35-58-removebg-preview.png";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // pastga tushyapti → yashir
      } else {
        setShowNavbar(true); // tepaga chiqyapti → ko‘rsat
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Sizdagi nav itemlar */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink
          to="/allPhones"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <h1 className="flex items-center">All phones</h1>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink
          to="/accessors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <h1>Accessories</h1>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink
          to="/block"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <h1>Blocks</h1>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink
          to="/docs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <h1 className="flex items-center">Docs</h1>
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={`mx-auto max-w-screen-3xl px-4 py-2 lg:px-8 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <img className="w-[120px]" src={logo} alt="" />
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* ✅ Mobil menyu */}
      {openNav && <div className="lg:hidden">{navList}</div>}
    </Navbar>
  );
}
