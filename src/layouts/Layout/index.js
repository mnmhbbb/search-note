import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';

const Layout = ({ children }) => {
  return (
    <>
      <Link to="/">책책책! 책을 읽읍시다</Link>
      <SearchForm />
      {children}
    </>
  );
};

export default Layout;
