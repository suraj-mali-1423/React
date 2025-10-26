import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';
import { enhanceImageAPI } from './enhanceImageApi';

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhanceImage, setEnhanceImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadedHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedData = await enhanceImageAPI(file);
      setEnhanceImage(enhancedData.image || enhancedData);
    } catch (e) {
      alert("Error while enhancing the image. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Download handler
  const handleDownload = () => {
    if (!enhanceImage) return;
    const link = document.createElement("a");
    link.href = enhanceImage; // URL of enhanced image
    link.download = "enhanced_image.png"; // default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ImageUploader UploadedHandler={UploadedHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhanceImage}
      />
      {enhanceImage && (
        <div className="text-center mt-4">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Download Enhanced Image
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
