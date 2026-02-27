import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.location.href = "https://theagileproduct.hashnode.dev";
  }, []);

  return null;
};

export default Blog;
