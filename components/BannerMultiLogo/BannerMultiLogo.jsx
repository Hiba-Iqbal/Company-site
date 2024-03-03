import React from "react";
import classList from "./BannerMultiLogo.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import topDesignLogo from "../../assets/images/logo/bannerLogo/top-design.webp";
import clutchLogo from "../../assets/images/logo/bannerLogo/clutch.webp";
import topDigitalLogo from "../../assets/images/logo/bannerLogo/top-digital-agency.webp";
import trustPilot from "../../assets/images/logo/bannerLogo/tttt.webp";
import goodFirmsLogo from "../../assets/images/logo/bannerLogo/good-firms.webp";
import BBB from "../../assets/images/logo/bannerLogo/bbb.webp";
// grayscale
import topDesignLogoGray from "../../assets/images/logo/bannerLogo/top-design-gray.webp";
import clutchLogoGray from "../../assets/images/logo/bannerLogo/clutch_gray.webp";
import topDigitalLogoGray from "../../assets/images/logo/bannerLogo/top-digital-agency-gray.webp";
import trustPilotGray from "../../assets/images/logo/bannerLogo/tttt-gray.webp";
import goodFirmsLogoGray from "../../assets/images/logo/bannerLogo/good-firms-gray.webp";
import BBBGray from "../../assets/images/logo/bannerLogo/bbb_gray.webp";
import agencySpotter from "../../assets/images/logo/bannerLogo/agencyspotter.webp";
import agencySpotterGray from "../../assets/images/logo/bannerLogo/agencyspotter_gray.webp";
import guarantee from "../../assets/images/logo/bannerLogo/guarantee.webp";
import guaranteeGray from "../../assets/images/logo/bannerLogo/guarantee_gray.webp";

import Section from "../Section/Section";
import { useWindowSize } from "../../utils/Data/helpers";
import Image from "next/image";

const BannerMultiLogo = ({ fixBottom = false }) => {
    const dimension = useWindowSize();
    const sliderProps = {
        mobile: 1,
        desktop: 5,
        tablet: 4,
        superLargeDesktop: 5,
        autoPlay: true,
        swipe: true,
        showDots: false,
    };

    const bannerLogoImages = [
        {
            coloredImage: topDesignLogo,
            grayscaleImage: topDesignLogoGray,
        },
        {
            coloredImage: clutchLogo,
            grayscaleImage: clutchLogoGray,
        },
        {
            coloredImage: topDigitalLogo,
            grayscaleImage: topDigitalLogoGray,
        },
        {
            coloredImage: BBB,
            grayscaleImage: BBBGray,
        },
        {
            coloredImage: trustPilot,
            grayscaleImage: trustPilotGray,
        },
        {
            coloredImage: goodFirmsLogo,
            grayscaleImage: goodFirmsLogoGray,
        },
        {
            coloredImage: agencySpotter,
            grayscaleImage: agencySpotterGray,
        },
        // {
        //     coloredImage: guarantee,
        //     grayscaleImage: guaranteeGray,
        // },
    ];

    return (
        <div style={{ position: fixBottom ? "unset" : "absolute" }} className={classList.banner_slider_wrapper}>
            <Section style={{ padding: "10px 0" }}>
                <div className={classList.test}>
                    <MultiSlider {...sliderProps}>
                        {bannerLogoImages.map(({ coloredImage, grayscaleImage }, i) => (
                            <div className={classList.logo_wrapper} key={i}>
                                <div>
                                    <Image
                                        objectFit="contain"
                                        height={i == 0 ? 80 : 120}
                                        width={i == 0 ? 80 : 120}
                                        className={`${classList.first} ${classList.adjust}`}
                                        src={coloredImage.src}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        objectFit="contain"
                                        height={i == 0 ? 80 : 120}
                                        width={i == 0 ? 80 : 120}
                                        className={`${classList.second} ${classList.adjust}`}
                                        src={grayscaleImage.src}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </MultiSlider>
                </div>
            </Section>
        </div>
    );
};

export default BannerMultiLogo;
