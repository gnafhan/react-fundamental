import MainLayouts from "./components/Layouts/main.layouts";
import Images from "./components/Albums/index.albums";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Post from "./components/Posts/index.posts";
import Home from "./components/Home/index.home";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Post />} />
            <Route path="/albums" element={<Images />} />
            <Route path="*" element={<h1 className="text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    
    </>
  )
}
export default App;
