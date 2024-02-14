// const setFeedback = async () => {
//   const query = window.location.search;
//   const urlSearchParams = new URLSearchParams(query);

//   const id = urlSearchParams.get("id");
//   const response = await loadProductById(id);

//   document.getElementById("email").innerText = response.data.name;
//   document.getElementById("category").innerText =
//     response.data.description;
//   document.getElementById("message").innerText = response.data.message;

// };

// setFeedback();


fetch('http://localhost:5000/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(),
      })
      .then(response => response.json())
      .then(data => {
      console.log('Feedback submitted successfully:', data);
      // Handle success, e.g., show a success message to the user
      })
    .catch(error => {
      console.error('Error submitting feedback:', error);
      // Handle error, e.g., show an error message to the user
});

fetch(`http://localhost:5000/feedback/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Feedback deleted successfully:', data);
        // Handle success, e.g., show a success message to the user
    })
    .catch(error => {
      console.error('Error deleting feedback:', error);
      // Handle error, e.g., show an error message to the user
});