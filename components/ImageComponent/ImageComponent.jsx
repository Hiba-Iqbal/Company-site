import Image from "next/image";
import PropTypes from "prop-types";

const ImageComponent = ({
  img,
  alt,
  layout = "fill",
  objectFit = "cover",
  objectPosition,
  width,
  height,
  loading,
  quality,
  ...restProps
}) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src={img}
        alt={alt}
        layout="fill"
        objectFit="contain"
        objectPosition={objectPosition}
        width={width}
        height={height}
        loading={loading}
        quality={quality}
        {...restProps}
      />
    </div>
  );
};

ImageComponent.propTypes = {
  img: PropTypes.any,
  layout: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.string,
  quality: PropTypes.number,
};

export default ImageComponent;
