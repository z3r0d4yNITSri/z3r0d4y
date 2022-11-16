import React,{useState} from 'react'
import Navbar from '../components/Nav/Navbar';
import Sidebar from '../components/Nav/Sidebar';


function Resources() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    <div>
       <Navbar toggle={toggle} />
       <Sidebar isopen={isopen} toggle={toggle} />
    </div>
  )
}

export default Resources
