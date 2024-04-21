import MainContent from "../components/MainContent";
import DenoiseUploader from "../components/uploaders/DenoiseUploader";
import React from 'react';



const DenoisingPage = () => {
    return (
      <MainContent
        item4Content={DenoiseUploader} // Pass the Uploader component function
      />
    );
  };
  
  export default DenoisingPage;
  