import React from 'react';
import { useParams } from 'react-router';
import Layout from '../../layouts/Layout';

const SearchList = (props) => {
  console.log(props);
  const { keyword } = useParams();
  return (
    <>
      <Layout>
        <h1>{keyword}에 대한 검색 결과</h1>
      </Layout>
    </>
  );
};

export default SearchList;
