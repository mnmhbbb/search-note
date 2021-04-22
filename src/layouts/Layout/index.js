import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';

const Layout = ({ children }) => {
  return (
    <>
      <Link to="/">영화 검색 사이트</Link>
      <SearchForm />
      {children}
    </>
  );
};

export default Layout;
