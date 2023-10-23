import "./App.css";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form.js";
import Team from "./pages/Team";
import ContactUs from "./pages/Contact Us";
import StudentDetail from "./pages/StudentDetail";
import BloomTaxonomyClassifier from "./pages/bloom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" classname="active" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/BloomTaxonomyClassifier" element={<BloomTaxonomyClassifier/>}/>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/StudentDetail" element={<StudentDetail />} />
      </Routes>
    </>
  );
}

export default App;
