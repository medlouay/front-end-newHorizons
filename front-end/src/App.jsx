import React, { useState } from 'react';
import { Info, Header, Footer, Body, SelectMap } from './components';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Info />
      <Body />
      <Footer/>
      {isModalOpen && <SelectMap closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default App;
