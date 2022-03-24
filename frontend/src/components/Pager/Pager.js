import React from 'react';

const Pager = ({urlApi, setApiUrl}) => {

  const nextPage = () => {
    setApiUrl('http://backend.docksal.site/jsonapi/node/resource/?page%5Boffset%5D=20&page%5Blimit%5D=10');
  };

  return (
    <div className="pager">
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pager