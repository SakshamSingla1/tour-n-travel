import React from "react";
import './app.css'
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";

const App =()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}
export default App;