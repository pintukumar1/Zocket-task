import React from "react"
import Navbar from "../Navbar/Navbar"
import FbAds from "../FbAds30/FbAds30"
import TailorServices from '../TrailorMadeServices/TailorMadeServices'
import WhyUs from "../WhyUs/WhyUs"
import HearIt from "../HearItFromThem/HearItFromThem"
import MailUs from "../MailComponent/MailComponent"
import Footer from "../FooterComponent/FooterComponent"

function Home() {
    return (
        <div>
            <Navbar />
            <FbAds />
            <TailorServices />
            <WhyUs />
            <HearIt />
            <MailUs />
            <Footer />
        </div>
    )
}

export default Home