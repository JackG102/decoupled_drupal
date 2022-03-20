import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import PageContainer from './layout/PageContainer/PageContainer';


function App() {
  return (
    <div className="App">
      <Header />
        <PageContainer />
      <Footer />
    </div>
  );
}

export default App;
