import { useState } from "react";
import ProBtnBox from "../ProBtnBox/ProBtnBox";
import ProCheckbox from "../ProCheckbox/ProCheckbox";
import Section from "../Section/Section";
import classList from "./CustomPriceShow.module.scss";
import priceFire1 from "./../../assets/images/acheivement1.webp";
import priceFire2 from "./../../assets/images/acheivement2.webp";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { numberWithCommas, openLiveChat } from "../../utils/Data/helpers";
import Modal from "../Modal/Modal";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import Image from "next/image"

const CustomPriceShow = () => {
  const [itemSelected, setItemSelected] = useState([]);
  const [modal, setModal] = useState(false);
  const getTotalCount = () => {
    let totalCount = 0;
    itemSelected.forEach((item) => {
      if (item.quantity === 1) {
        totalCount += item.value;
      } else {
        const quant = item.quantity;
        totalCount += quant * item.value;
      }
    });
    return totalCount;
  };
  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num.toFixed(); // if value < 1000, nothing to do return two digit after decimal
    }
  };
  const dummyData = [
    {
      id: 1,
      label: "Logo Design",
      value: 79,
      quantity: 1,
    },
    {
      id: 2,
      label: "Search Bar",
      value: 59,
      quantity: 1,
    },
    {
      id: 3,
      label: "CMS / Admin Panel Support",
      value: 299,
      quantity: 1,
    },
    {
      id: 4,
      label: "Custom Dynamic Form (Optional)",
      value: 149,
      quantity: 1,
    },
    {
      id: 5,
      label: "Online Appointment/Scheduling",
      value: 299,
      quantity: 1,
    },
    {
      id: 6,
      label: "Online Payment Integration",
      value: 399,
      quantity: 1,
    },
    {
      id: 7,
      label: "Website Design Complete Source Files",
      value: 199,
      quantity: 1,
    },
    {
      id: 8,
      label: "Mobile Responsive",
      value: 299,
      quantity: 1,
    },
    {
      id: 10,
      label: "Social Media Page Design",
      value: 149,
      quantity: 1,
    },
    {
      id: 11,
      label: "Newsletter Subscription",
      value: 79,
      quantity: 1,
    },
    {
      id: 13,
      label: "E-Commerce (Optional)",
      value: 799,
      quantity: 1,
    },
    {
      id: 12,
      label: "Domain & Hosting (Discuss On Call)",
      value: 0,
      quantity: 1,
    },
    {
      id: 9,
      label: "Live Feeds of Social Networks Integration",
      value: 149,
      quantity: 1,
    },
  ];
  const quantityItems = [
    [
      {
        id: 20,
        label: "Stock Photos/Images",
        value: 5,
        quantity: 0,
      },
      {
        id: 22,
        label: "jQuery Slider Banner",
        value: 69,
        quantity: 0,
      },
      {
        id: 33,
        label: "Professional Email ID's (Up to 15)",
        value: 299,
        quantity: 0,
      },
    ],
    [
      {
        id: 43,
        label: "Additional Pages",
        value: 99,
        quantity: 0,
      },
      {
        id: 53,
        label: "Multi Lingual (Any 3)",
        value: 299,
        quantity: 0,
      },
      {
        id: 63,
        label: "Video Animations (30 Secs)",
        value: 499,
        quantity: 0,
      },
    ],
    [
      {
        id: 73,
        label: "Banner Designs",
        value: 49,
        quantity: 0,
      },
      {
        id: 83,
        label: "SEO Plan (Monthly)",
        value: 399,
        quantity: 0,
      },
      {
        id: 93,
        label: "2D Animations (30 Secs)",
        value: 799,
        quantity: 0,
      },
    ],
  ];

  const quantityItemsPro = [
    {
      id: 20,
      label: "Stock Photos/Images",
      value: 5,
      quantity: 0,
    },
    {
      id: 22,
      label: "jQuery Slider Banner",
      value: 69,
      quantity: 0,
    },
    {
      id: 33,
      label: "Professional Email ID's (Up to 15)",
      value: 299,
      quantity: 0,
    },
    {
      id: 43,
      label: "Additional Pages",
      value: 99,
      quantity: 0,
    },
    {
      id: 53,
      label: "Multi Lingual (Any 3)",
      value: 299,
      quantity: 0,
    },
    {
      id: 63,
      label: "Video Animations (30 Secs)",
      value: 499,
      quantity: 0,
    },
    {
      id: 73,
      label: "Banner Designs",
      value: 49,
      quantity: 0,
    },
    {
      id: 83,
      label: "SEO Plan (Monthly)",
      value: 399,
      quantity: 0,
    },
    {
      id: 93,
      label: "2D Animations (30 Secs)",
      value: 799,
      quantity: 0,
    },
  ];

  const handleSubmitPackage = () => {
    // console.log("Selected", itemSelected);
    setModal(true);
  };

  return (
    <Section>
      <div className={classList.mainContentHeading}>
        <Header fontWeight={"bold"}>
          You Know{" "}
          <span className={classList.textShowClr}>
            Your Needs Better Than Anyone
          </span>{" "}
          Else
        </Header>
        <Paragraph color="#787A8A">
          We take pride in our customer-centric approach, therefore we let the
          customers decide how to shape up their web design package.
        </Paragraph>
      </div>
      <div className={classList.priceBoxWrapper}>
        {dummyData.map((item) => (
          <ProCheckbox
            className={classList.checkboxItem}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            label={item.label}
            value={item.value}
            id={item.id}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={classList.priceBoxWrapper}>
        {quantityItems.map((item) => (
          <>
            <div className={classList.boxWrapper}>
              {item.map((cbItem) => (
                <ProBtnBox
                  className={classList.checkboxItem}
                  itemSelected={itemSelected}
                  setItemSelected={setItemSelected}
                  label={cbItem.label}
                  value={cbItem.value}
                  id={cbItem.id}
                  quantity={cbItem.quantity}
                />
              ))}
            </div>
          </>
        ))}
      </div>
      <div className={classList.totalPriceWrapper}>
        <div
          className={`${classList.pricesFlagsRight} ${classList.priceItems}`}>
          {/* <img src={priceFire.src} alt="price" /> */}
          <Image src={priceFire2.src} width={120} height={120} objectFit="contain" alt="price" />
        </div>
        <div className={`${classList.totalPriceVal}`}>
          <div className={classList.center}>
            <p className={classList.dollars}>$</p>
            <p className={classList.totalPrice}>
              {" "}
              {numberWithCommas(getTotalCount())}
            </p>
          </div>
          <div className={classList.liveChatBtnWrapper}>
            <Button
              onClick={() => handleSubmitPackage()}
              hover={true}
              customClass={classList.liveChatBtn}>
              Get Started
            </Button>
          </div>
        </div>
        <div className={`${classList.pricesFlagsLeft} ${classList.priceItems}`}>
          <Image src={priceFire1.src} width={120} height={120} objectFit="contain" alt="price" />
        </div>
      </div>
      <Modal modal={modal} setModal={setModal}>
        <ContactFormModal onHide={() => setModal(false)} customPackageDetails={itemSelected}/>
      </Modal>
    </Section>
  );
};

export default CustomPriceShow;
