import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="row">
        <div class="column profile">
          <a href="#" class="image">
            <img src="/about.jpg" alt="" />
          </a>
        </div>
        <div class="column deskripsi">
          <h1>About</h1>
          <p>
            Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran
            praktis dan eksperimental yang dipergunakan oleh mahasiswa dan
            pelayanan untuk riset dan konsultasi keteknikan mencakup desain
            software untuk animasi, administrasi, grafis dll.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
