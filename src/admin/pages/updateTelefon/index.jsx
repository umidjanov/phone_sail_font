import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function UpdateTelefon() {
  const { id } = useParams();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");
  const [xotira, setXotira] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    instance.get(`/telefonlar/${id}`).then((res) => {
      const data = res.data;
      setTitle(data.title);
      setPrice(data.price);
      setColor(data.color);
      setDesc(data.desc);
      setXotira(data.xotirasi);
      setImg(data.img);
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    instance
      .put(`/telefonlar/${id}`, {
        title,
        price: Number(price),
        color,
        desc,
        xotirasi: xotira,
        img,
      })
      .then(() => nav("/telefonlar"));
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="pl-[250px]">
        <div className="flex items-center justify-between px-[30px] bg-[#050b1aef] text-white uppercase w-[1286px] h-[80px]">
          <h1 className="pt-4 p-3 w-full font-bold">Update Cars</h1>
          <Link className="pl-[600px]" to={"/telefonlar"}>
            <Button>go back</Button>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                label="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <Input
                label="Xotira (GB)"
                value={xotira}
                onChange={(e) => setXotira(e.target.value)}
              />
              <Input
                label="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <Input
                label="Image URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
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
