import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import "./App.css";
// import "antd/dist/antd.css";
import Pagination from "./components/Pagination";
// import { Pagination } from "antd";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGES
  const paginate = (pageNumber, postsPerPage) =>
    setCurrentPage(pageNumber, postsPerPage);

  return (
    <div className="container">
      <div className="App">
        <h1 className="display-1">My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        {/* <Pagination
          total={posts.length}
          pageSize={postsPerPage}
          onChange={paginate}
          defaultCurrent={currentPage}
        /> */}
      </div>
    </div>
  );
}

export default App;
