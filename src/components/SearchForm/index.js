import React, { useCallback, useState } from 'react';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(keyword);
    //   dispatch({
    //     type: SEARCH_REQUEST,
    //     data: keyword,
    //   });
    // },
    [],
  );
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} placeholder="영화 제목을 입력하세요!" />
        <button>검색</button>
      </form>
    </>
  );
};

export default SearchForm;
