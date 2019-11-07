import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="App-header">
        <div
          className="spinner-grow text-warning"
          style={{ width: "6rem", height: "6rem", marginTop: "-20rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => {
        return (
          <li
            key={post.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {post.title}
            <span className="badge badge-primary badge-pill">{post.id}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
