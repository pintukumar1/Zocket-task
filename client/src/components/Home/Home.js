import React from "react"
import Navbar from "../Navbar/Navbar"
import FbAds from "../FbAds30/FbAds30"
import TailorServices from '../TrailorMadeServices/TailorMadeServices'
import WhyUs from "../WhyUs/WhyUs"
import HearIt from "../HearItFromThem/HearItFromThem"
import MailUs from "../MailComponent/MailComponent"

function Home() {
    return (
        <div>
            <Navbar />
            <FbAds />
            <TailorServices />
            <WhyUs />
            <HearIt />
            <MailUs />
        </div>
    )
}

export default Home