function clearErrors() {
    var errors = document.getElementsByClassName('formerror');
    for (var i = 0; i < errors.length; i++) {
      errors[i].innerHTML = "";
    }
  }
  
  function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }
  
  function validateForm() {
    var returnval = true;
    clearErrors();
  
    var alphaletters = /^[a-zA-Z]*$/;
    var name = document.forms['myForm']["r_name"].value;
    if (name.length < 4) {
      seterror("fname", "*Length of username must be at least 4 characters");
      returnval = false;
    } else if (!name.match(alphaletters)) {
      seterror("fname", "*Username must contain alphabets only");
      returnval = false;
    }
  
    var type = document.forms['myForm']['type'].value;
    if (type === "") {
      seterror("dropdown", "*Please select Retailer Type");
      returnval = false;
    }
  
    var username = document.forms['myForm']['username'].value;
    if (username.length < 4) {
      seterror("fusername", "*Length of username must be at least 4 characters");
      returnval = false;
    }
  
    var address = document.forms['myForm']['address'].value;
    if (address === "") {
      seterror("fadress", "*Please enter Retailer Address");
      returnval = false;
    }
  
    var pan = document.forms['myForm']['pan'].value;
    if (pan === "") {
      seterror("fpan", "*Please enter Pan-Number");
      returnval = false;
    }
  
    var cnumber = document.forms['myForm']['cnumber'].value;
    if (cnumber === "") {
      seterror("fcitizenno", "*Please enter Citizenship-Number");
      returnval = false;
    }
  
    var password = document.forms['myForm']['password'].value;
    if (password.length < 8) {
      seterror("fpassword", "*Length of password must be at least 8 characters");
      returnval = false;
    }
  
    return returnval;
  }
  