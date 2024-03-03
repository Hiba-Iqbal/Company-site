import React from "react";
import classList from "./ShowBlogDetail.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import UseFrom from "../UseForm/UseForm";
import { createMarkup } from "../../utils/Data/helpers";

const ShowBlogDetail = ({ data }) => {
  console.log("data", data);
  return (
    <div className={classList.showDetailsWrapper}>
      <div className={classList.showDetails}>
        <div className={classList.showDetailsImage}>
          <img src={data?.blogPhoto?.[0]?.url} alt="" />
        </div>
        <div className={classList.showDetailsBody}>
          <Header fontWeight="semi-bold">{data?.title}</Header>
          <p
            style={{ lineHeight: "2.5" }}
            dangerouslySetInnerHTML={createMarkup(data?.content)}></p>
        </div>
        <UseFrom>
          <div className={classList.text_area}>
            <label htmlFor="">Write Comment</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </UseFrom>
      </div>
    </div>
  );
};

export default ShowBlogDetail;
