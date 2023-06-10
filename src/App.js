import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./React-Routing/Home";
import Blogs from "./React-Routing/Blogs";
import About from "./React-Routing/About";
import Navbar from "./React-Routing/Navbar";
import NotFound from "./React-Routing/NotFound";
import { useState } from "react";
import BlogDetail from "./React-Routing/BlogDetail";

function App() {
  const [isLoggedIn,setIsloggedIn] =useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/view" element={ isLoggedIn ?  <Navigate to='/blogs'/> :<h4>Please Log in</h4> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
