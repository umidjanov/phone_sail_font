import { Route, Routes } from "react-router-dom";
import UpdateTelefon from "./admin/pages/updateTelefon";
import Telefonlar from "./admin/pages/telefonlar";
import UpdateTelefonlarTuri from "./admin/pages/updateTelefonlarTuri";
import CreateTelefonlarTuri from "./admin/pages/createTelefonlarTuri";
import TelefonlarTuri from "./admin/pages/telefonlarTuri";
import CreateTelefon from "./admin/pages/createTelefon";
import Upload from "./admin/pages/uploads/uploads";
import Home from "./admin/pages/home";
import NewsRegLog from "./admin/pages/regLogNews";
import Blocs from "./admin/pages/blocs/blocs";
import UserHome from "./landingPage/userHome/userHome";
import TypeGetAllPhones from "./landingPage/typeGetAllPhones/typeGetAllPhones";
import { Footer } from "./landingPage/components/footer";
import GetPhoneById from "./landingPage/components/getPhoneById";
import AllPhones from "./landingPage/allPhones/allPhones";
import { Carusel } from "./landingPage/components/carusel";
import ComponentData from "./landingPage/components/componentData";
import Section from "./landingPage/components/section";
import Category from "./landingPage/components/category";
import Accessors from "./landingPage/components/accessuars";
import { Block } from "./landingPage/components/block";
import AirTag from "./landingPage/pages/airTag/airTag";
import Cases from "./landingPage/pages/cases/cases";
import ShopCases from "./landingPage/pages/shopCases/shopCases";

export default function App() {
  return (
    <Routes>
      <Route path="/createTelefon" element={<CreateTelefon />} />
      <Route path="/createTelefonlarTuri" element={<CreateTelefonlarTuri />} />
      <Route path="/telefonlar" element={<Telefonlar />} />
      <Route path="/news/update/:id" element={<UpdateTelefon />} />
      <Route path="/telefonlarTuri" element={<TelefonlarTuri />} />
      <Route path="/telefonlarTuri/:id" element={<UpdateTelefonlarTuri />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newsRegLog" element={<NewsRegLog />} />
      <Route path="/blocs" element={<Blocs />} />
      <Route path="/blocs" element={<Blocs />} />
      <Route path="/" element={<UserHome />} />
      <Route path="/allPhones" element={<AllPhones />} />
      <Route path="/typeGetAllPhones" element={<TypeGetAllPhones />} />
      <Route path="/userHome/typeGetAllPhones" element={<TypeGetAllPhones />} />
      <Route path="/carusel" element={<Carusel />} />
      <Route path="/typeGetAllPhones/:id" element={<TypeGetAllPhones />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/telefonlar/:id" element={<GetPhoneById />} />
      <Route path="/allPhones/telefonlar/:id" element={<GetPhoneById />} />
      <Route
        path="/typeGetAllPhones/telefonlar/:id"
        element={<GetPhoneById />}
      />
      <Route path="/componentData" element={<ComponentData />} />
      <Route path="/section" element={<Section />} />
      <Route path="/category" element={<Category />} />
      <Route path="/accessors" element={<Accessors />} />
      <Route path="/block" element={<Block />} />
      <Route path="/airTag" element={<AirTag />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/shopCases" element={<ShopCases />} />

    </Routes>
  );
}
