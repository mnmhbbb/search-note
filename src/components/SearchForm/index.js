import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from '../../config';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(keyword);
    // axios
    //   .get(`/v1/search/movie.json?query=${keyword}&display=100`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //       'X-Naver-Client-Id': REACT_APP_CLIENT_ID,
    //       'X-Naver-Client-Secret': REACT_APP_CLIENT_SECRET,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => console.dir(error));
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} placeholder="영화 제목을 입력하세요!" />
        <Link to={`/search?q=${keyword}`}>
          <button>검색</button>
        </Link>
      </form>
    </>
  );
};

export default SearchForm;
