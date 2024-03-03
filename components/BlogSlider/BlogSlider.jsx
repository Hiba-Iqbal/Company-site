import classList from "./blogSlider.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import {
  checkStringWordLength,
  createMarkup,
  getFormatDate,
} from "../../utils/Data/helpers";
import Image from "next/image";

const BlogSlider = ({ blogsData, handleBlogClick }) => {
  const sliderProps = {
    mobile: 1,
    desktop: 1,
    tablet: 1,
    superLargeDesktop: 1,
    autoPlay: true,
    swipe: true,
  };
  const getCoverPhoto = (coverPhoto) => {
    if (coverPhoto) {
      return coverPhoto;
    }
    return "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  };

  return (
    <>
      <div className="styled_slider_dots">
        <MultiSlider {...sliderProps}>
          {blogsData?.map(({ blogPhoto, title, content, createdAt, id }) => (
            <div className={classList.slider_wrapper} key={id}>
              <div className={classList.flex_item}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleBlogClick(id)}
                  className={classList.left}>
                  {/* <Image
                    height={400}
                    width={700}
                    objectFit="cover"
                    src={getCoverPhoto(blogPhoto?.[0]?.url)}
                    alt="sliderImage.png"
                  /> */}
                  <img
                    height={400}
                    width={700}
                    style={{ objectFit: "cover" }}
                    src={getCoverPhoto(blogPhoto?.[0]?.url)}
                    alt="sliderImage.png"
                  />
                </div>
                <div className={classList.right}>
                  <Paragraph>{getFormatDate(createdAt)}</Paragraph>
                  <Header fontWeight="bold"> {title}</Header>
                  {/* <Paragraph>{checkStringWordLength(content, 80)}</Paragraph> */}
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      checkStringWordLength(content, 80)
                    )}
                    className={"desc"}></p>
                </div>
              </div>
            </div>
          ))}
        </MultiSlider>
      </div>
    </>
  );
};

export default BlogSlider;
