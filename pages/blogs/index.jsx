import { useState, useEffect, useRef, useCallback } from "react";
import BlogCard from "../../components/blogCard/blogCard";
import classList from "./blogs.module.scss";
import Section from "../../components/Section/Section";
import { useRouter } from "next/router";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchResponse } from "../../utils/Data/helpers";
import usePagination from "../../utils/Data/customHooks";

const Blog = () => {
  const [blogSliderData, setBlogSliderData] = useState([]);
  const [blogCategoryOptions, setBlogCategoryOptions] = useState({});
  // PAGINATION LOGICS
  const [pageNumber, setPageNumber] = useState(1);
  const [queryParams, setQueryParams] = useState({
    search: "",
    blogCategoryId: "",
  });
  const router = useRouter();
  const categoryOptions = [
    { label: "industry", value: "industry" },
    { label: "tech", value: "tech" },
    { label: "smart phone", value: "smart phone" },
    { label: "tablet", value: "tablet" },
    { label: "desktop", value: "desktop" },
    { label: "mobile", value: "mobile" },
    { label: "web", value: "web" },
  ];

  useEffect(() => {
    // FETCH INITIALL BLOGS
    fetchInitiallBlogs();
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const {
        status,
        data: { items },
      } = await fetchResponse(
        `https://backend-develop.thecoredesigns.com/blog-category?page=1&limit=50`
      );
      if (status) {
        const tempOptions = items.map((v) => ({
          label: v.title,
          value: v.id,
        }));
        console.log("tempOptions", tempOptions);
        setBlogCategoryOptions(tempOptions);
      }
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
      setBlogSliderData(items);
    } catch (error) {
      console.log(error);
    }
  };

  // SEACH PAGINATION LOGICS
  const { data, hasMore, loading, error } = usePagination(
    queryParams,
    pageNumber
  );

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      console.log("LAST NODE", node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      console.log("observer", observer);
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("INTERESECTING");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setQueryParams({
      ...queryParams,
      search: value,
    });
    setPageNumber(1);
  };

  const handleSelectChange = (e) => {
    setQueryParams({
      ...queryParams,
      blogCategoryId: e,
    });
    setPageNumber(1);
  };
  const handleBlogClick = (id) => {
    const blog = data?.find((blog) => blog.id === id);
    router.push(`/blogs/${blog.id}`, null, { shallow: true });
  };

  return (
    <>
      <PageTitle
        title="BLOG"
        content={""}
        woodenImage={false}
        bgPayment={true}
      />
      <Section>
        <div className={classList.searchTile}>
          <input
            value={queryParams.search}
            onChange={handleSearchInput}
            name="searchInput"
            type="text"
            placeholder="Search"
          />
          <CustomSelect
            placeholder="Category"
            Options={blogCategoryOptions}
            onSelect={handleSelectChange}
            customClass={classList.searchSelect}
          />
        </div>

        {/* SHOW BLOG SLIDER */}
        {blogSliderData?.length > 1 && (
          <BlogSlider
            blogsData={blogSliderData}
            handleBlogClick={handleBlogClick}
          />
        )}

        <div className={classList.blog_wrapper}>
          {data?.map((blog, index) => {
            if (data.length === index + 1) {
              return (
                <div ref={lastBookElementRef} key={blog.id}>
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
                    onClick={() => handleBlogClick(blog.id)}
                  />
                </div>
              );
            } else {
              return (
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
                    onClick={() => handleBlogClick(blog.id)}
                  />
                </div>
              );
            }
          })}
        </div>
      </Section>
    </>
  );
};

export default Blog;
