import React from "react"
import Navbar from "../Navbar/Navbar"
import FbAds from "../FbAds30/FbAds30"
import TailorServices from '../TrailorMadeServices/TailorMadeServices'
import WhyUs from "../WhyUs/WhyUs"

function Home() {
    return (
        <div>
            <Navbar />
            <FbAds />
            <TailorServices />
            <WhyUs />
        </div>
    )
}

export default Home