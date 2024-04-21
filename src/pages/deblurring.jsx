import MainContent from "../components/MainContent";
import DeblurrUploader from "../components/uploaders/DeblurUploader";
import React from 'react';

const DeblurrPage = () => {
  return (
    <MainContent
      item4Content={DeblurrUploader} // Pass the Uploader component function
    />
  );
};

export default DeblurrPage;
