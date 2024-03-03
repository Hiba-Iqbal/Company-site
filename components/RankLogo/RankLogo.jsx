import classList from "./RankLogo.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import Image from "next/image";

import AgencySpotter from "../../assets/images/rankLogo/5.webp";
import Clutch from "../../assets/images/rankLogo/1.webp";
import MobileApp from "../../assets/images/rankLogo/3.webp";
import newClutch from "../../assets/images/rankLogo/6.webp";
import FeaturedOnUpCIty from "../../assets/images/rankLogo/2.webp";
import guarantee from "../../assets/images/rankLogo/7.webp";
import clutchNew from "../../assets/images/rankLogo/4.webp";

const RankLogo = ({style = {}}) => {
    const sliderProps = {
        mobile: 1,
        desktop: 7,
        tablet: 4,
        superLargeDesktop: 7,
        autoPlay: true,
        swipe: true,
        showDots: true,
    };
 
    const imagesArray = [
        { img: Clutch, height:160, width:160 },
        { img: AgencySpotter, height:120, width:120 },
        { img: MobileApp, height:100, width:100 },
        { img: clutchNew, height:120, width:160 },
        { img: FeaturedOnUpCIty, height:100, width:160 },
        { img: newClutch, height:120, width:160 },
        { img: guarantee, height:100, width:100 },
    ];

    return (
        <Section style={{paddingBottom:"0px", ...style}}>
            <div className={classList.slider}>
                <div className={classList.text}><Header fontWeight="bold"> Ranked among one of the world’s best UX firms </Header>
                <Paragraph style={{margin:"10px auto 40px auto"}}>Delivering responsive interfaces and great user experiences across different digital platforms</Paragraph></div>
                <div className="styled_slider_dots">
                    <MultiSlider {...sliderProps}>
                        {imagesArray?.map(({ img, height, width }, i) => (
                            <div className={classList.slider_wrapper} key={i}>
                                <div className={classList.flex_item}>
                                    <Image objectFit="contain" height={height} width={width} src={img.src} alt="" />
                                </div>
                            </div>
                        ))}
                    </MultiSlider>
                </div>
            </div>
        </Section>
    );
};

export default RankLogo;
