import axios from "axios";

const APIKey = "wxy7soanlqqc78eo6";
const Base_URL = "https://techhk.aoscdn.com";

export const enhanceImageAPI = async (file) => {
  try {
    const taskId = await UploadImage(file);
    console.log("Image Uploaded:", taskId);

    const enhancedImageData = await pollForEnhancedImage (taskId);
    console.log("Fetched Enhanced Image:", enhancedImageData);

    return enhancedImageData;
  } catch (e) {
    console.log("Error:", e.message);
  }
};

const UploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${Base_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": APIKey,
    },
  }
);
   
if(!data?.data?.task_id){ 
     throw new Error("Fail to Upload Image ! Task Id Note Found")
}
  
  return data.data.task_id; // Adjust according to API response
};





const FetchImage = async (taskId) => {
  try {
    const { data } = await axios.get(`${Base_URL}/api/tasks/visual/scale/${taskId}`, {
      headers: {
        "X-API-KEY": APIKey,
      },
    });
     
     if(!data?.data){ 
     throw new Error("Fail to Upload Image ! Task Id Note Found")
}
     
    return data.data;
  } catch (e) {
    console.log("FetchImage Error:", e.message);
  }
};


const pollForEnhancedImage = async (taskId, retries = 0) => {
  if (retries >= 20) {
    throw new Error("Max retries reached while polling for enhanced image");
  }

  const result = await FetchImage(taskId);

  if (result.state === 4) {
    // 4 = processing
    console.log("Processing...");
    // wait 2 seconds before next poll
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }

  // Assume status !== 4 means completed
  return result;
};
