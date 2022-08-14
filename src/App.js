import MainLayouts from "./components/Layouts/main.layouts";
import Images from "./components/Albums/index.albums";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>HALO INI HOMEPAGE</h1>} />
            <Route path="/posts" element={<h1>POST</h1>} />
            <Route path="/albums" element={<Images />} />
            <Route path="*" element={<h1 className="text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    
    </>
  )
}
export default App;
