import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <h1>영화 검색 사이트</h1>
      {children}
    </>
  );
};

export default Layout;
