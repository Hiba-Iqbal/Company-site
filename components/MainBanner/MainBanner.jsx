import classList from "./MainBanner.module.scss";
import Logos from "../Logos/Logos";
import { useState, useEffect, useRef } from "react";
import videoThumbnail from "./../../assets/images/banner_frame.png";
import BannerMultiLogo from "../BannerMultiLogo/BannerMultiLogo";
import MainBannerContent from "../MainBannerContent/MainBannerContent";
import ContactWithUs from "../ContactWithUs/ContactWithUs";

const Video = ({
  url = "/Video.mp4",
  videoLoader,
  setVideoLoader,
  thumbnail,
}) => {
  // console.log(videoLoader, "video_loader");
  const videoPlayer = useRef(null);
  return (
    <>
      {/* <div
        src={thumbnail.src}
        style={{
          backgroundImage: `url(${videoThumbnail.src})`,
          opacity: videoLoader ? "0" : "1",
          transition: "all 300ms ease-out",
        }}
        className={classList.banner_thumbnail}></div> */}
      <video
        ref={videoPlayer}
        className={classList.banner_video}
        onCanPlay={() => {
          setVideoLoader(true);
          videoPlayer.current.play();
        }}
        play
        muted
        loop>
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
};

const MainBanner = () => {
  const [videoLoader, setVideoLoader] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 0);
  }, []);
  // console.log(showVideo);
  return (
    <div className={classList.main_banner_wrapper}>
      <div className={classList.content_container}>
        <MainBannerContent />
      </div>
      <BannerMultiLogo />
      {showVideo && (
        <Video
          thumbnail={videoThumbnail}
          videoLoader={videoLoader}
          setVideoLoader={setVideoLoader}
        />
      )}
    </div>
  );
};

export default MainBanner;
