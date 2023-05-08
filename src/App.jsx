import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <div className="font-Poppins">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/product/:id" element={<Details />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
