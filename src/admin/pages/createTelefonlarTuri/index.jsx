import { useState } from "react";
// import { instance } from "./../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";
import { instance } from "../../utils/axios";

export default function CreateTelefonlarTuri() {
  const [title, setTitle] = useState("");
  const nav = useNavigate();

  const create = (e) => {
    e.preventDefault();
    instance
      .post("/telefonlarTuri", { title })
      .then(() => console.log(title), nav("/telefonlarTuri"));
  };

  return (
    <div className="bg-gradient-to-br bg-blue-gray-900 via-green-700 to-green-700 min-h-screen flex font-sans">
      <NavbarDefault />
      <div className="ml-[250px] w-full">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is create telefonlar turi page
          </h1>
          <Link to="/telefonlarTuri">
            <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 font-semibold hover:scale-105 transition-transform duration-200">
              Go Back
            </Button>
          </Link>
        </div>

        <div className="mt-[100px] flex justify-center items-center">
          <div className="bg-[#f0ffee] shadow-xl border border-blue-800 rounded-2xl p-10 w-[600px] animate-fade-in-up">
            <form
              onSubmit={(e) => create(e)}
              className="flex flex-col gap-8 justify-center items-center"
            >
              <Input
                className="h-[49px] w-full text-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                label="Title"
                color="blue"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-200"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
