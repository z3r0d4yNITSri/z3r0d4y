import React, { useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Sidebar from "../components/Nav/Sidebar";
import MembersCon from "../components/pageContent/MembersCon";
import Footer  from "../components/Footer";


function Members() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    <div>
      <div>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
      </div>
      <MembersCon />
      <Footer />
    </div>
  );
}

export default Members;
