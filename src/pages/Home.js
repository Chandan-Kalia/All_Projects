import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

import img_1 from "../img/gallery/img_1.jpg"
import img_2 from "../img/gallery/img_2.jpg"
import img_3 from "../img/gallery/img_3.jpg"
import img_4 from "../img/gallery/img_4.jpg"
import img_5 from "../img/gallery/img_5.jpg"
import img_6 from "../img/gallery/img_6.jpg"
import img_7 from "../img/gallery/img_7.jpg"
import img_8 from "../img/gallery/img_8.jpg"
import img_9 from "../img/gallery/img_9.jpg"
import img_10 from "../img/gallery/img_10.jpg"
import img_11 from "../img/gallery/img_11.jpg"
import img_12 from "../img/gallery/img_12.jpg"
import img_13 from "../img/gallery/img_13.jpg"

const image = [img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11,img_12,img_13]

export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}