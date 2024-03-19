import React from "react";
import './whatWhendy.css';
import Feature from './feature/Feature';
import profile from './../assets/yoyoy.png';


const WhatHimatera = () => (
       <section id="about">
<div className="himatera__whathimatera section__margin" id="whendy">
        <div className="himatera__whathimatera-feature">
            <Feature title="Rizky Akbar Setiawan"/>
            <img src={profile} alt="profile" />
        </div>
    <div className="himatera__whathimatera-heading">
        <h1 className="gradient__text">Undergraduate Student of Robotic and Artificial Intelligence Engineering</h1>
        <p>Universitas Airlangga</p>
    </div>
        <div className="himatera__whathimatera-container">
            <Feature title="Vision." text="Menjadi pemimpin dalam bidang Teknik Robotika dan Kecerdasan Buatan, mendorong inovasi dan pengetahuan baru untuk menciptakan solusi yang berdampak positif pada masyarakat dan lingkungan" />
            <Feature title="Mission." text="Terus belajar dan mengembangkan keterampilan dalam Teknik Robotika dan Kecerdasan Buatan.
Menerapkan pengetahuan dan keterampilan untuk menciptakan solusi teknologi yang inovatif.
Berkontribusi pada komunitas melalui kepemimpinan dan partisipasi aktif dalam organisasi dan proyek." />
            <Feature title="Quotes of the day!" text="Teknologi adalah alat, tetapi itu adalah kita yang harus menentukan tujuannya. Mari kita gunakan teknologi untuk menciptakan dunia yang lebih baik." />
        </div>
    </div>
       </section>
);

export default WhatHimatera;