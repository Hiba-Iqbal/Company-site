import classList from "./ComboPackageTest.module.scss";
import Header from "../Header/Header";
import PackageList from "../PackageList/PackageList";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Button from "../Button/Button";
import PackageListTest from "../PackageListTest/PackageListTest";
import Paragraph from "../Paragraph/Paragraph";
import images from "../../assets/images/discount.png";
import Image from "next/image";
import { phoneNumber } from "../../utils/Data/globalVariables";

const ComboPackageTest = ({ showPrice = true }) => {
  const logoDesign = [
    "5 Custom Logo Design Concepts",
    "By 2 Award-winning designers",
    "Icon Design",
    "File Formats (PSD, PDF, AI, JPEG, PNG)",
  ];
  const Staionary = [
    "Business Card, Letterhead, Envelope",
    "Fax Templete",
    "MS Word Letterhead",
  ];

  const SocialMedia = [
    "Facebook Page Design",
    "Twitter Page Design",
    "Youtube Page Design",
  ];

  const SocialMedia2 = [
    "Google+ Page Design",
    "Instagram Page Design",
    "All Final File Formats",
  ];

  const Website = [
    "5 Pages Website",
    "CMS / Admin Panel",
    "Mobile Responsive",
    "Team of Expert Designers & Developers",
    "8 Stock Images",
    "5 Banner Designs",
    "jQuery Sliders",
    "Free Google Friendly Sitemap",
    "Complete W3C Certified HTML",
    "Complete Deployment",
  ];

  const ValueAddedServices = [
    "24 x 7 Customer Support",
    "All Final File Formats",
    "Dedicated Account Manager",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee",
  ];

  return (
    <>
      <div className={classList.packages_wrapper}>
        <div className={classList.packages_items}>
          <div
            className={`${classList.header_items} ${classList.centralize_txt}`}>
            <Header fontWeight="medium" variant="h3">
              Combo Packages
            </Header>
            <Header fontWeight="medium" variant="h1">
              Growth Seeker Package
            </Header>
          </div>

          <img src={images.src} />
        </div>
        <div className={classList.packages_items}>
          <div className={classList.inner_items}>
            <PackageListTest
              title="Logo Design"
              listitem={logoDesign.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />
            <PackageListTest
              title="Staionary"
              listitem={Staionary.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />
            <PackageListTest
              title="Social Media"
              listitem={SocialMedia.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />
          </div>
          <div className={classList.inner_items}>
            <PackageListTest
              listitem={SocialMedia2.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />
            <PackageListTest
              title="Website"
              listitem={Website.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />
          </div>
          <div className={classList.inner_items}>
            <PackageListTest
              title="Value Added Services"
              listitem={ValueAddedServices.map((a, i) => (
                <div key={i} className={classList.package_list}>
                  <div
                    className={classList.list_items}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: " 10px 0",
                    }}>
                    <FaCheck
                      className={classList.check_icon}
                      style={{ margin: "0 10px 0 0" }}
                      color="#272a3d"
                      size={"15px"}
                    />
                    <Paragraph>{a}</Paragraph>
                  </div>
                </div>
              ))}
            />

            {showPrice && (
              <div className={classList.show_price}>
                <div className={classList.tag}>$2000</div>
                <Header fontWeight="bold" fontSize={45}>
                  $1499
                </Header>
              </div>
            )}
          </div>
        </div>
        <div className={classList.packages_items}>
          <div className={classList.inner_items}>
            <a href={`tel:${phoneNumber}`}>Call Now {phoneNumber}</a>
            <Button>Order Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboPackageTest;
