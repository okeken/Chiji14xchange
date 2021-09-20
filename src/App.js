import React, {useEffect} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import MainPage from './components/MainPage';


function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 768;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
     
    return () => window.removeEventListener("resize", handleWindowResize);
   },[]);

  return (
    <div className='d-flex'>
      {width > breakPoint && <SideBar className='sidebar-section' />     }    
     <MainPage className='main-page main-bg' />


    </div>
  );
}

export default App;

