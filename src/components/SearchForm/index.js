import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} placeholder="영화 제목을 입력하세요!" />
        <Link to={`/search/${keyword}`}>
          <button>검색</button>
        </Link>
      </form>
    </>
  );
};

export default SearchForm;
