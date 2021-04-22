import React from 'react';
import Layout from '../../layouts/Layout';

const SearchList = (props) => {
  let urlSearchParams = new URLSearchParams(props.location.search.slice(1));
  const searchWord = urlSearchParams.get('q');
  return (
    <>
      <Layout>
        <h1>'{searchWord}'에 대한 검색 결과</h1>
      </Layout>
    </>
  );
};

export default SearchList;
