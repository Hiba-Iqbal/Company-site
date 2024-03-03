import React, { useState, useEffect } from "react";
import ShowBlogDetail from "../../../components/ShowBlogDetail/ShowBlogDetail";
import Drawer from "../../../components/Drawer/Drawer";
import BlogCard from "../../../components/blogCard/blogCard";
import classList from "./index.module.scss";
import Section from "../../../components/Section/Section";
import { useRouter } from "next/router";
import PageTitle from "../../../components/PageTitle/PageTitle";
import dynamic from "next/dynamic";
import { fetchResponse } from "../../../utils/Data/helpers";
const InfiniteScroll = dynamic(
  () => import("../../../components/InfiniteScroll/InfiniteScroll"),
  {
    ssr: false,
  }
);

const index = ({ data }) => {
  const router = useRouter();
  const { blog } = data || {};
  const [blogsData, setBlogsData] = useState([]);
  const [singleBlogData, setSingleBlogData] = useState(blog);
  const [handleDrawer, setDrawer] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // fetch all blogs list
    // fetchAllBlogs();
    fetchInitiallBlogs();
  }, []);

  const getPaginatedBlogs = async (page) => {
    try {
      const {
        data: { items },
      } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blogs?page=${page}&limit=6`
      );
      setBlogsData([...blogsData, ...items]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInitiallBlogs = async () => {
    try {
      const {
        data: { items },
      } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blogs?page=1&limit=6`
      );
      setBlogsData(items);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDrawerCollapse = () => {
    setDrawer(!handleDrawer);
  };

  const handleBlogClick = (id) => {
    const blog = blogsData?.find((blog) => blog.id === id);
    router.push(`/blogs/${blog.id}`, null, { shallow: true });
    setSingleBlogData(blog);
    handleDrawerCollapse();
  };


  useEffect(() => {
    if (page !== 1) {
      getPaginatedBlogs(page);
    }
  }, [page]);

  const blogStyle = {
    padding: "0px 30px 30px 30px",
  };

  const para =
    "We help our clients elevate their business through engaging brand identities and innovative digital marketing techniques. Looking to expand your brand reach and maximize your ROI? Let us help you create an innovative, effective, responsive, intuitive, SEO-friendly, attractive, and eye-catching web presence to capture more clients.";

  return (
    <>
      <PageTitle
        title="BLOG"
        content={""}
        woodenImage={false}
        bgPayment={true}
      />
      <Section>
        <div className={classList.showBlogDetialMain}>
          <ShowBlogDetail data={singleBlogData} />
          {/* SHOW OTHER BLOGS */}
          <Drawer showDrawer={handleDrawer} handleDrawer={handleDrawerCollapse}>
            <InfiniteScroll
              length={blogsData?.length ?? 0}
              inverse={false}
              page={page}
              setPage={setPage}>
              {blogsData?.map((blog) => (
                <div key={blog.id}>
                  <BlogCard
                    postedBy={`Posted by ${" "} ${blog?.fullName || ""}`}
                    userImage={blog?.photo}
                    blogImage={blog?.blogPhoto?.[0]?.url}
                    date={blog?.createdAt}
                    blogTitle={blog?.title}
                    blogDesc={blog?.content}
                    key={blog?.id}
                    blogId={blog?.id}
                    commentCount={blog?.commentCount}
                    onClick={() => handleBlogClick(blog?.id)}
                  />
                </div>
              ))}
            </InfiniteScroll>
          </Drawer>
        </div>
      </Section>
    </>
  );
};

export async function getServerSideProps(context) {
  //ONLY EXECUTED AT SERVER SIDE WILL FETCH SINGLE BLOG AND RELATED BLOGS
  var { query } = context;
  try {
    var blog = {};
    var { id: blogId } = query;
    if (blogId) {
      //fetch and send job and jobs
      const { data } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blogs/${blogId}`
      );
      blog = data;
    }
    return {
      props: {
        data: {
          blog,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: {},
      },
    };
  }
}

export default index;
