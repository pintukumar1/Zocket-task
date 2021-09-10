import React from "react"
import Navbar from "../Navbar/Navbar"
import FbAds from "../FbAds30/FbAds30"
import TrailorServices from '../TrailorMadeServices/TrailorMadeServices'

function Home() {
    return (
        <div>
            <Navbar />
            <FbAds />
            <TrailorServices />
        </div>
    )
}

export default Home