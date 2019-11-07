import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumber.map(number => {
        return (
          <li key={number} className="page-item">
            <a className="page-link" href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        );
      })}
    </nav>
  );
};

export default Pagination;
