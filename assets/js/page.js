//landing page JavaScript 
//landing page JavaScript

//for Pop-Up ads function
function closePromo() {
    document.querySelector('.promotion').style.display='none';
}

// Initialize the map
function initMap() {
    // Create a map object
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12
    });
  
    // Add a marker to the map
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      title: 'Jakarta'
    });
}


//menu Javascript
//menu Javascript

function addChart(name, price) {
  const cartBody = document.getElementById('cartBody');
  const totalPriceElement = document.getElementById('totalPrice');
  const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');
  const cartItem = document.createElement('tr');

  // Calculate tax and total price after tax
  const taxRate = 0.10;
  const tax = price * taxRate;
  const totalPriceAfterTax = price + tax;

  // Add item name, price, tax, and total price after tax to the cart item
  cartItem.innerHTML = `
    <td>${name}</td>
    <td>$${price.toFixed(2)}</td>
    <td><button <i class="fa-solid fa-xmark"onclick="removeChart(this)"></i></button></td>
  `;

  // Add cart item to the cart body
  cartBody.appendChild(cartItem);

  // Calculate total price, total price after tax
  const currentTotalPriceAfterTax = parseFloat(totalPriceAfterTaxElement.textContent) || 0;

  // Update total price, total price after tax, and total price after discount
  totalPriceAfterTaxElement.textContent = (currentTotalPriceAfterTax + totalPriceAfterTax).toFixed(2);
}


function removeChart(btn) {
 const cartItem = btn.parentElement.parentElement;
 const cartBody = document.getElementById('cartBody');
 const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');

 // Remove item from cart body
 cartBody.removeChild(cartItem);

 // Calculate total price after tax
 const price = parseFloat(cartItem.children[1].textContent.substring(1));
 const taxRate = 0.10;
 const tax = price * taxRate;
 const totalPriceAfterTax = price + tax;

 // Update total price after tax
 const currentTotalPriceAfterTax = parseFloat(totalPriceAfterTaxElement.textContent);
 totalPriceAfterTaxElement.textContent = (currentTotalPriceAfterTax - totalPriceAfterTax).toFixed(2);
}


function hapus() {
  const cartBody = document.getElementById('cartBody');
  const totalPriceAfterTaxElement = document.getElementById('totalPriceAfterTax');
 
  // Set total price after tax to 0
  totalPriceAfterTaxElement.textContent = 0;
 
  // Remove all cart items from the cart body
  while (cartBody.firstChild) {
     cartBody.removeChild(cartBody.firstChild);
  }
}

// search Menu
function searchProduct(input) {
  const filter = input.value.toUpperCase();
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (menuItem) {
      const menuItemText = menuItem.getElementsByClassName('productName')[0].textContent;
      if (menuItemText.toUpperCase().indexOf(filter) > -1) {
          menuItem.style.display = "";
      } else {
          menuItem.style.display = "none";
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function () {
      searchProduct(this);
  });
});
 
//Feedback Js
function validateForm() {

    var fname =  document.forms["myForm"]["fname"];
    var email =  document.forms["myForm"]["email"];
  
    validateName(fname);
    validateEmail(email);
  
  }
  
  function validateName(fname){
  
    var letters = /^[A-Za-z]+$/;
   if(fname.value.match(letters)){
      return true;
    }
    else{
      alert('Please use alphabet characters only for name');
      fname.focus();
      return false;
    }
  }
  
    function validateEmail(email){
        var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
           if (email.value.match(mailformat)) {
                return true;
             }
             else {
               alert("Please enter valid email address")
               email.focus() ;
               return false ;
             }
  
  }
  
  function validateAll(myForm) {
    var fname =  document.forms["myForm"]["fname"];
    var email =  document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];
  
  
      var letters = /^[A-Za-z]+$/;
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
      if (fname.value.match(letters) && email.value.match(mailformat)
          && myForm.checkbox.checked == true && message.value!="") {
        alert("Success! Thank you ");
        return true;
      }
}

//News Donation
async function printDona() {
  var name = document.getElementById("name").value;
  var amount = document.getElementById("total_price").value;
  var category = document.getElementById("category").value;
  var message = document.getElementById("message2").value;
  if (name == "" || total_price == "" || options == "") {
      alert("Please make sure to fill in all the required fields.");
  } else {
      alert("Dear " + name + ", your donation of " + amount +"!");
      await fetch('http://localhost:5000/donations', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, amount,category, message })
      });
      await fetch('http://localhost:5000/donations/${id}', {
          method: 'DELETE',
          }).
          then(response => response.json())
              .then(data => {
              console.log('Feedback deleted successfully:', data);
              // Handle success, e.g., show a success message to the user
              })
              .catch(error => {
              console.error('Error deleting feedback:', error);
              // Handle error, e.g., show an error message to the user
      });
  }
}
