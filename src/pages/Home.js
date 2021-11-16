import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Movies from "../components/Movies";
import Footer from "../components/Footer";

const Home = () => {
  const [urlSearch, setUrlSearch] = useState(1);

  const handleClick = (e, index, tv) => {
    e.preventDefault();
    tv ? (index += 3) : index;
    setUrlSearch(index);
  };

  return (
    <div>
      <NavBar handleClick={handleClick} />
      <Movies url={urlSearch} />
      {/* is footer */}
      <Footer />
    </div>
  );
};

export default Home;
