import React,{useState} from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Nav/Sidebar'

function Homepage() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    <div>
       <Navbar toggle={toggle} />
       <Sidebar isopen={isopen} toggle={toggle} />
        <Hero />
    </div>
  )
}

export default Homepage