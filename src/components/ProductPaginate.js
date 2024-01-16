import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";

import { listProducts } from "../actions/productActions";

const Paginati = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(listProducts(keyword, pageNumber));
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item
              active={x + 1 === page}
              onClick={() => handlePageChange(x + 1)}
            >
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginati;
