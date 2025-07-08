import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function UpdateTelefonlarTuri() {
  const { id } = useParams();
  const nav = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    instance.get(`/telefonlarTuri/${id}`).then((res) => {
      const data = res.data.telProduct;
      console.log(data);

      setTitle(data.title);
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    instance
      .put(`/telefonlarTuri/${id}`, {
        title,
      })
      .then(() => nav("/telefonlarTuri"));
  };

  return (
    <div className="bg-blue-gray-900 w-full h-[100vh] flex">
      <NavbarDefault />
      <div className="pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is update telefonlar page
          </h1>
        <Link className="pl-[600px]" to={"/telefonlarTuri"}>
          <Button>Go Back</Button>
        </Link>
        </div>
        <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-auto rounded-2xl ml-[90px] m-4">
          <div className="pt-[30px]">
            <form
              onSubmit={handleUpdate}
              className="flex flex-col gap-[12px] p-[50px] justify-center items-center"
            >
              <Input
                label="Title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />

              <button
                type="submit"
                className="bg-[#E7742E] rounded-lg px-4 py-2 text-black"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
