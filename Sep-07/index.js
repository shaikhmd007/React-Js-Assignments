function btnSubmit() {
  const first_name = document.getElementById("fname").value;
  const last_name = document.getElementById("lname").value;
  const email = document.getElementById("email").value;

  //   if (value!== "") {
  alert(
    `Hello ${first_name} ${last_name}, we will reach out to you shortly at ${email} .`
  );
  //   } else console.log("Fields Are Empty!!");
}
