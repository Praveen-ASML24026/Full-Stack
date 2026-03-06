
document.addEventListener("DOMContentLoaded", function () {
    

    const form ={
      name :{
        input : document.getElementById("name"),
        errormsg : "Please enter your name",
        error : document.getElementById("name-error"),
        validate : (value)=>value.trim()!== "",
      },

      dob :{
        input : document.getElementById("DOB"),
        errormsg : "Please enter your valid DOB",
        error : document.getElementById("dob-error"),
        validate: (value) => value !== "",
      },

      phone :{
        input : document.getElementById("phno"),
        errormsg : "Please enter your valid 10-digit phone number",
        error : document.getElementById("ph-error"),
        validate : (value) => /^\d{10}$/.test(value),
      },

      gmail :{
        input : document.getElementById("mail"),
        errormsg : "Please enter your valid email-id",
        error : document.getElementById("gm-error"),
        validate : (value)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      },
      
      Address :{
        input : document.getElementById("address"),
        errormsg : "Please enter your correct Address",
        error : document.getElementById("add-error"),
        validate : (value)=>value.trim()!== "",
      },

      Addhaar: {
      input: document.getElementById("aadhaar"),
      errormsg: "Please enter the 12-digit number",
      error: document.getElementById("id-error"),
      validate: (value) => /^\d{4}\s\d{4}\s\d{4}$/.test(value),
    },

      gender: {
          input: document.getElementById("genderInput"),
          errormsg: "Please enter your gender",
          error: document.getElementById("gen-err"),
          validate: (value) => value.trim() !== "",
      },
    };


      const submitBtn = document.getElementById("sub");

      submitBtn.addEventListener("click" , function (e){
        e.preventDefault();
       let isvalid_form = true ;

       Object.values(form).forEach((fields) =>{
        const value = fields.input.value;
        if(!fields.validate(value)){
          shownError (fields.error,fields.errormsg);
          isvalid_form = false ;
        }else{
          clearError(fields.error);
        }

       });

       if(isvalid_form){
        alert("✅ Your form has been submitted!");
       }
      });

      function shownError(target , msg){
      target.textContent = msg;
      target.style.color = "red";
      target.style.fontSize = "14px";
      target.style,marginTop = "3px";
    }

    function clearError(target){
      target.textContent = "";
    }  
  });


