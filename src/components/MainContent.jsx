import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@chakra-ui/react';
import InpaintUploader from './uploaders/InpaintUploader';



const MainContent = ({ item4Content: Item4Component }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <a href="/inpainting" className="item1"></a>
        <a href="/deblurring" className="item2"></a>
        <a href="/denoising" className="item3"></a>
        <div className="item4">
          <Item4Component />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
