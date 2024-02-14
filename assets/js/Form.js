const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function Logbtn() {
	// Menampilkan alert
	alert(' Success Login');
	// Mengarahkan ke halaman berikutnya (ganti 'halaman-berikutnya.html' dengan URL yang diinginkan)
	window.location.href = '../index.html';
}

function Btnregis() {
	//Menampilkan alert
	alert ('Success Login');
	// Mengarahkan ke halaman berikutnya (ganti 'halaman-berikutnya.html' dengan URL yang diinginkan)
	window.location.href = '../page/login.html';
}

document.getElementById('myForm').addEventListener('submit', function(event) {
	var form = event.target;

	// Periksa apakah form memiliki attribut "novalidate"
	if (form.noValidate) {
	 var valid = true;

	 // Periksa setiap inputan yang diperlukan apakah sudah terisi atau belum
	 for (var i = 0; i < form.length; i++) {
		var input = form[i];

		if (input.required && input.value === '') {
		 valid = false;
		 break;
		}
	 }
	}
});

// Mengisi data pada form dari hasil login dan checkout
document.getElementById("username").value = userData.username;
document.getElementById("foodName").value = checkoutData.foodName;
document.getElementById("price").value = checkoutData.price;

// Fungsi untuk menyimpan data ke database (simulasi)
function saveToDatabase(data) {
  // Di sini Anda dapat menambahkan kode untuk menyimpan data ke database sesuai kebutuhan
  console.log("Data saved to database:", data);
}

// Fungsi yang dipanggil saat formulir disubmit
function submitForm() {
  const formData = {
	username: document.getElementById("username").value,
	foodName: document.getElementById("foodName").value,
	price: document.getElementById("price").value
  };

  // Simpan data ke database
  saveToDatabase(formData);
}

function setUserLogin(userName) {
    var myAccount = document.getElementById('NavmyaccountBtn');
    myAccount.innerHTML = userName;

	// set user name to localStorage
localStorage.setItem('userName', userName);

// get user name from localStorage
var userName = localStorage.getItem('userName');

// call function to set user name on navbar
setUserLogin(userName);
}
