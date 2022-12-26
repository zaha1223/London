import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import { News } from "./pages/news/news";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
          <Route path="/"/>
          <Route path="/news" element={<News/>}/>
          <Route path="/"/>
          <Route path="/"/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
