import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Layout } from "./layout/layout";
import { NewsPage } from "./pages/news/news";
import { Menu } from "./pages/home2/home2";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* <Route path="/" /> */}
      </Routes>
    </div>
  );
}

export default App;
