import MainContent from "../components/MainContent";
import InpaintUploader from "../components/uploaders/InpaintUploader";
import React from 'react';


const InpaintingPage = () => {
    return (
      <MainContent
        item4Content={InpaintUploader} // Pass the Uploader component function
      />
    );
  };
  
  export default InpaintingPage;
  