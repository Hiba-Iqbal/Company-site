import { useEffect, useState } from "react";
import axios from "axios";

export default function usePagination(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://backend-develop.thecoredesigns.com/blogs",
      params: {
        search: query.search,
        blogCategoryId: query.blogCategoryId,
        page: pageNumber,
        limit: 6,
      },
      //   params: { page: pageNumber, limit: 6 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prevBooks) => {
          return [...prevBooks, ...res.data.data.items];
        });
        setHasMore(res.data.data.meta.itemCount > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, data, hasMore };
}
