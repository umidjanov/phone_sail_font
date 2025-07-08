import NavbarDefault from "../../components/navbar";

export default function Blocs() {
  return (
    <div className="bg-gradient-to-br bg-blue-gray-900 via-green-300 to-green-300 min-h-screen flex font-sans">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px] w-full">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is blocs page
          </h1>
        </div>
      </div>
    </div>
  );
}
