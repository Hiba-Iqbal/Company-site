import { useState } from "react";
import Section from "../Section/Section";
import classList from "./ClientsLogo.module.scss";
import foodchooLogo from "../../assets/images/logo/foodChoo.webp";
import jobsMidEastLogo from "../../assets/images/logo/jobsmideast.webp";
import quickDeliveryLogo from "../../assets/images/logo/quickDelivery.webp";
import homeOwnerLogo from "../../assets/images/logo/homeOwner.webp";
import pakGoLogo from "../../assets/images/logo/pakGo.svg";
import MultiSlider from "../MultiSlider/MultiSlider";
import { useWindowSize } from "../../utils/Data/helpers";
import BrochureModal from "../BrchureModal/BrochureModal";
import foodChooImage from "../../assets/images/sample/foodchoo.png";
import Image from "next/image"

const ClientsLogo = () => {
  const [selected, setSelected] = useState(null);

  const data = [
    {
      type: "foodCHoo",
      logo: foodchooLogo,
      title: "Food Choo",
      video:
        "https://ahmer-bucket.s3.us-east-2.amazonaws.com/compress-FoodChoo-1643213811130.mp4",
      color: "#c6181f",
      content: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati pariatur maxime recusandae corporis. Omnis porro unde corrupti vero adipisci. Commodi provident perferendis quas. Nisi doloribus quia soluta obcaecati quam?",
      ],
    },
    {
      type: "Jobmideast",
      logo: jobsMidEastLogo,
      title: "Jobmideast",
      video:
        "https://ahmer-bucket.s3.us-east-2.amazonaws.com/compress-Comp+1_1-1643645242486.mp4",
      color: "#2a8fff",
      content: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati pariatur maxime recusandae corporis. Omnis porro unde corrupti vero adipisci. Commodi provident perferendis quas. Nisi doloribus quia soluta obcaecati quam?",
      ],
    },
    {
      type: "quickDelivery",
      logo: quickDeliveryLogo,
      title: "Quick Delivery",
      video:
        "https://ahmer-bucket.s3.us-east-2.amazonaws.com/compress-Quick%20Delivery-1643213939711.mp4",
      color: "#c6181f",
      content: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati pariatur maxime recusandae corporis. Omnis porro unde corrupti vero adipisci. Commodi provident perferendis quas. Nisi doloribus quia soluta obcaecati quam?",
      ],
    },
    {
      type: "homeOwner",
      logo: homeOwnerLogo,
      title: "Home Owner",
      video:
        "https://ahmer-bucket.s3.us-east-2.amazonaws.com/compress-HOA-1643213896958.mp4",
      color: "purple",
      content: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati pariatur maxime recusandae corporis. Omnis porro unde corrupti vero adipisci. Commodi provident perferendis quas. Nisi doloribus quia soluta obcaecati quam?",
      ],
    },
    // {
    //   type:"pakGo",
    //   logo: pakGoLogo,
    //   title: "Pak Go",
    //   video: null,
    //   color:"green",
    //   content: [
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati pariatur maxime recusandae corporis. Omnis porro unde corrupti vero adipisci. Commodi provident perferendis quas. Nisi doloribus quia soluta obcaecati quam?",
    //   ],
    // },
  ];

  const filterdData = data.find((v) => v.type === selected);

  // console.log(filterdData, "filterdData");

  const dimension = useWindowSize();
  return (
    <div className={classList.clients_logo}>
      <Section>
        <div className="styled_slider_dots">
          <MultiSlider
            type="portfolio"
            autoPlay={
              dimension === "tablet" || dimension === "mobile" ? true : false
            }
            showDots={
              dimension === "tablet" || dimension === "mobile" ? true : false
            }>
            {data.map((d, i) => (
              <div key={i} className={classList.slider_items}>
                {/* Commit this onclick because case studies are not uploaded */}
                <Image
                  height={140}
                  width={140}
                  objectFit="contain"
                  // onClick={() => setSelected(d.type)}
                  className={classList.slider_images}
                  src={d.logo.src}
                  alt=""
                />
              </div>
            ))}
          </MultiSlider>
        </div>
      </Section>
      {selected && (
        <BrochureModal onHide={() => setSelected(null)} data={filterdData} />
      )}
    </div>
  );
};

export default ClientsLogo;
