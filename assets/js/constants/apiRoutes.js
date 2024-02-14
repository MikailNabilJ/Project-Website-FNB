const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://kampus-merdeka-software-engineering.github.io/BE-2-Jakarta-22/";

const apiRoutes = {
  products: `${baseApiUrl}/products`,
  productsId: (id) => `${baseApiUrl}/products/${id}`,
  feedback: `${baseApiUrl}/feedback`,
  feedbackId:(id) =>  `${baseApiUrl}/feedback/${id}`,  
};

export default apiRoutes;
