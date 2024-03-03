import classList from "./ComboPackage.module.scss";
import Header from "../Header/Header";
import PackageList from "../PackageList/PackageList";
import Button from "../Button/Button";
import Discount from "../../assets/images/offerSale.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import GetAQuotModal from "../GetAQuotModal/GetAQuotModal";
import Image from "next/image";
import { phoneNumber } from "../../utils/Data/globalVariables";
import Section from "../Section/Section";

const ComboPackage = ({ showPrice = true }) => {
  var [showQuotModal, setShowQuoteModal] = useState(false);

  const data = [
    {
      packages: [
        {
          title: "Logo Design",
          services: [
            "5 Custom Logo Design Concepts",
            "By 2 Award-winning designers",
            "Icon Design",
            "File Formats (PSD, PDF, AI, JPEG, PNG)",
          ],
        },
        {
          title: "Stationary",
          services: [
            "Business Card, Letterhead, Envelope,",
            "Fax Template",
            "MS Word Letterhead",
          ],
        },
        {
          title: "Social Media",
          services: [
            "Facebook Page Design",
            "Twitter Page Design",
            "Youtube Page Design",
          ],
        },
      ],
    },
    {
      packages: [
        {
          title: "",
          services: [
            "Google+ Page Design",
            "Instagram Page Design",
            "All Final File Formats",
          ],
        },
        {
          title: "Website",
          services: [
            "8 Pages Website",
            "CMS / Admin Panel",
            "Mobile Responsive",
            "Multi Lingual (Optional)",
            "Team of Expert Designers & Developers",
            "8 Stock Images",
            "5 Banner Designs",
            "jQuery Sliders",
            "Free Google Friendly Sitemap",
            "Complete W3C Certified HTML",
            "Complete Deployment",
          ],
        },
      ],
    },
    {
      packages: [
        {
          title: "Value Added Services",
          services: [
            "24 x 7 Customer Support",
            "All Final File Formats",
            "Dedicated Account Manager",
            "100% Satisfaction Guarantee",
            "100% Unique Design Guarantee",
            "100% Money Back Guarantee",
          ],
        },
      ],
    },
  ];
  const [modal, setModal] = useState(false);

  return (
    <Section>
      <div className={classList.packages_wrapper} id="ComboPackages">
        <div className={classList.packages_items}>
          <div
            className={`${classList.header_items} ${classList.centralize_txt}`}
          >
            <div
              onClick={() => setShowQuoteModal(true)}
              className={classList.discount}
            >
              <Image
                src={Discount.src}
                width={200}
                height={160}
                objectFit="contain"
                alt=""
              />
            </div>
            <Header fontWeight="semi-bold" variant="h3">
              Combo Packages
            </Header>
            <Header fontWeight="bold" variant="h1">
              <span style={{ color: "#B72A12" }}>Growth Seeker</span> Package
            </Header>
          </div>
        </div>
        <div className={classList.packages_items}>
          {data?.map(({ packages }, i) => (
            <div key={i} className={classList.inner_items}>
              {packages.map(({ title, services }, index) => (
                <>
                  <PackageList key={index} services={services} title={title} />
                </>
              ))}
              {i >= 2 && (
                <div className={classList.show_price}>
                  <div className={classList.tag}>$3,999</div>
                  <Header color={"#B72A12"} fontWeight="bold" fontSize={60}>
                    $1,999
                  </Header>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={classList.packages_items}>
          <div className={classList.inner_items}>
            <a href={`tel:${phoneNumber}`}>Call Now {phoneNumber}</a>
            <Button >Order Now</Button>
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal}>
        {/* <ContactFormModal /> */}
      </Modal>
      <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
    </Section>
  );
};

export default ComboPackage;
