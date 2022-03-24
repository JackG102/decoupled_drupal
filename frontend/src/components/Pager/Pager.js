import React from 'react';

const Pager = ({urlApi, setApiUrl}) => {
  
  const previousPage = () => {
    setApiUrl(urlApi.prev.href);
  };

  const nextPage = () => {
    setApiUrl(urlApi.next.href);
  };

  return (
    <div className="pager">
      {urlApi?.prev?.href ? <button className="ui left labeled icon button" onClick={previousPage}><i class="left arrow icon"></i>Previous</button> : null}
      {urlApi?.next?.href ? <button className="ui right labeled icon button" onClick={nextPage}><i class="right arrow icon"></i>Next</button> : null}
    </div>
  );
}

export default Pager