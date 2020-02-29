import React, { Component } from "react";
import NavMenu from "../Component/navbar";
import Hero from "../Component/hero";
import bgHome from "../assets/home.png";
import KelasMateri from "../Component/kelas_materi";
import Pemateri from "../Component/pemateri";
import InfoRegis from "../Component/info_regis";
import Jadwal from "../Component/jadwal";
import KontakPerson from "../Component/kontak";
import Footer from "../Component/footer";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundSize: "100% 13%",
          backgroundRepeat: "no-repeat"
        }}>
        <NavMenu />
        <Hero />
        <KelasMateri />
        <Pemateri />
        <InfoRegis />
        <Jadwal />
        <KontakPerson />
        <Footer />
      </div>
    );
  }
}

export default Home;
