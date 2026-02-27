import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.location.href = "https://theagileproduct.substack.com";
  }, []);

  return null;
};

export default Blog;
