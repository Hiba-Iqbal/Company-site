import React, { useState, useRef, useCallback } from "react";
import BlogCard from "../../../components/blogCard/blogCard";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import UseBook from "../../../utils/Data/customHooks";

export default function index() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [queryParams, setQueryParams] = useState({
    search: "",
    blogCategoryId: "",
  });
  const categoryOptions = [
    { label: "industry", value: "industry" },
    { label: "tech", value: "tech" },
    { label: "smart phone", value: "smart phone" },
    { label: "tablet", value: "tablet" },
    { label: "desktop", value: "desktop" },
    { label: "mobile", value: "mobile" },
    { label: "web", value: "web" },
  ];

//   const { books, hasMore, loading, error } = UseBook(query, pageNumber);  
  const { books, hasMore, loading, error } = UseBook(queryParams, pageNumber);

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

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  console.log("hasMore", hasMore);
  console.log("loading", loading);

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

  console.log("queryParams", queryParams);

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      <div>
        <input
          value={queryParams.search}
          onChange={handleSearchInput}
          name="searchInput"
          type="text"
          placeholder="Search"
        />
        <CustomSelect
          placeholder="Category"
          Options={categoryOptions}
          onSelect={handleSelectChange}
        />
      </div>
      {/* {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })} */}
      {books?.map((blog, index) => {
        if (books.length === index + 1) {
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
                // onClick={() => handleBlogClick(blog.id)}
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
                // onClick={() => handleBlogClick(blog.id)}
              />
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
