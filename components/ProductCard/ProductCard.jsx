import classList from "./ProductCard.module.scss";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from 'react';

const ProductCard = ({ imageLink, setShowModal, setCurrentImage }) => {
  // console.log("imageLink", imageLink);
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <div
        // style={{background: `url(${imageLink})`, backgroundSize: "cover " }} 
        className={classList.imgContainer}
        onClick={()=> {setCurrentImage(imageLink);setShowModal(true)}}
        >
        <img className={classList.imgwidth}  src={imageLink} />
        <span>
          <AiOutlineEye/>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
