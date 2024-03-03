import { useRef } from "react";
import classList from "./ImageViewer.module.scss";
import { HiOutlineX, HiZoomIn, HiZoomOut } from "react-icons/hi";
import { BiReset } from "react-icons/bi";

const ImageViewer = (props) => {
  const { image = "", show, onHide } = props;

  const imageRef = useRef(null);

  const zoomIn = () => {
    let imageRect = imageRef.current.getBoundingClientRect();
    if (imageRect.width >= 220) {
      imageRef.current.style.maxWidth = `${imageRect.width + 50}px`;
    }
  };
  const zoomOut = () => {
    let imageRect = imageRef.current.getBoundingClientRect();
    if (imageRect.width > 280) {
      imageRef.current.style.maxWidth = `${imageRect.width - 50}px`;
    }
  };

  const reset = () => {
    imageRef.current.style.maxWidth = "220px";
  };

  return (
    <>
      {show && (
        <div className={classList.image_viewer_wrapper}>
          <div className={classList.tools_wrapper}>
            <HiOutlineX onClick={onHide} size={"30px"} color={"#fff"} />
            <div className={classList.tools}>
              <HiZoomIn size={"30px"} color={"#fff"} onClick={zoomIn} />
              <BiReset size={"30px"} color={"#fff"} onClick={reset} />
              <HiZoomOut size={"30px"} color={"#fff"} onClick={zoomOut}>
                Minus
              </HiZoomOut>
            </div>
          </div>
          <div className={classList.image_view}>
            <img ref={imageRef} src={image} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer;
