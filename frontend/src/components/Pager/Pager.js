import React from 'react';

const Pager = ({urlApi, setApiUrl}) => {

  const nextPage = () => {
    setApiUrl(urlApi);
  };

  return (
    <div className="pager">
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pager