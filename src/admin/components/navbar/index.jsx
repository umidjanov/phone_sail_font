import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mx-5 pt-4 w-[140px] flex flex-col gap-[25px] mb-0 items-center justify-center">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-x-2 font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md  w-[150px] h-[50px] justify-center"
      >
        <Link to={"/telefonlar"}>Telefonlar</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-x-2 font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md  w-[150px] h-[50px] px-2"
      >
        <Link className="w-[300px]" to={"/telefonlarTuri"}>
          Telefonlar Turi
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center justify-center font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md w-[150px] h-[50px]"
      >
        <Link to={"/createTelefonlarTuri"}>Create Telefonlar Turi</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md w-[150px] h-[50px] justify-center"
      >
        <Link to={"/createTelefon"}>Create Telefon</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-x-2 font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md  w-[150px] h-[50px] justify-center"
      >
        <Link to={"/newsRegLog"}>Reg Log News</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-x-2 font-medium text-white border-[1px] bg-[#0B1427]  hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md  w-[150px] h-[50px] justify-center"
      >
        <Link to={"/blocs"}>Blocks</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="flex items-center gap-x-2 font-medium text-white border-[1px] bg-[#0B1427] hover:bg-[#E7742E] hover:border-[#E7742E] rounded-md w-[150px] h-[50px] justify-center"
      >
        <Link to={"/upload"}>Upload</Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      style={{ background: "#0B1427" }}
      className="mx-start fixed max-w-[250px] border-[#0B1427] backdrop-blur-none rounded-none px-4 lg:px-8 lg:py-4 h-[100vh] bg-[#0B1427]"
    >
      <div className="container flex flex-col gap-[20px] text-center">
        <Link to={"/home"}>
          <Typography className="cursor-pointer w-[201.5px] font-bold text-white">
            TELEFON SAVDOSI
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

      {/* ✅ Mobile menu replacement */}
      {openNav && (
        <div className="lg:hidden container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1 mt-4">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      )}
    </Navbar>
  );
}
