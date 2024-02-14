import apiRoutes from "../constants/apiRoutes.js";

export const loadFeedback = async function getData() {
    try {
       const response = await fetch('http://localhost:5000/feedback', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (!response.ok) {
         throw new Error('Error: ' + response.statusText);
       }
   
       return response.json();
    } catch (error) {
       console.log('Error: ' + error);
    }
   }
  
  export const loadFeedbackById = async function getData() {
    const response = await fetch(apiRoutes.feedbackId(id), {
      method: "DELETE",
      headers: {
        // Ini yang akan menjadi authorization token ke backend ya
        "x-access-token": localStorage.getItem("accessToken"),
      },
    });
    const responseJson = await response.json();
  
    if (response.status === 401) {
      alert("Invalid session");
      window.location.href = "./";
    }
  
    return responseJson;
};
  