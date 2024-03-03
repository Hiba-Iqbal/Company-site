import React, { useRef, useState, useEffect } from "react";

const InfiniteScroll = ({
  children,
  page,
  setPage,
  inverse = false,
  length = 0,
}) => {
  const currentPage = useRef(page);
  const currentLength = useRef(length);
  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && currentLength.current > 0) {
          setPage(currentPage.current + 1);
        }
      },
      { threshold: 0.5 }
    )
  );
  useEffect(() => {
    currentPage.current = page;
  }, [page]);
  useEffect(() => {
    currentLength.current = length;
  }, [length]);
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  console.log("CHALA");

  return (
    <>
      {!inverse && children}
      <div ref={setElement} style={{ width: "100%", height: "10px" }}></div>
      {inverse && children}
    </>
  );
};

export default InfiniteScroll;
