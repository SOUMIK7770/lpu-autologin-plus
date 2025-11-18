/*   Developed by

SOUMIK POHI (LPU CSE) 
Open-source enthusiast | Automation developer  
Building tools that make life easier.

Contact: iamsoumik.pohi@gmail.com
*/


window.addEventListener("load", function () {


  const username = "########";            // ADD YOUR ID HERE
  const password = "#########";           // ADD YOUR PASSWORD HERE



  const userField = document.querySelector("input[name='username']");
  const passField = document.querySelector("input[name='password']");
  const termsCheck = document.querySelector("input[type='checkbox']");
  const loginBtn = document.querySelector("#loginbtn");

  function fireAll(el) {
    ["input", "change", "keyup", "keydown", "keypress", "click"].forEach(
      (evt) => el.dispatchEvent(new Event(evt, { bubbles: true }))
    );
  }

  // Fill username
  if (userField) {
    userField.value = username;
    fireAll(userField);
  }

  // Fill password
  if (passField) {
    passField.value = password;
    fireAll(passField);
  }

  // Tick Terms & Conditions
  if (termsCheck) {
    termsCheck.checked = true;
    fireAll(termsCheck);
  }

  // Remove disabled manually
  if (loginBtn) {
    loginBtn.disabled = false;
    loginBtn.removeAttribute("disabled");
    loginBtn.style.opacity = "1";
    loginBtn.style.pointerEvents = "auto";
  }

  // Call the internal LPU validation function
  try {
    if (typeof appendUserName === "function") {
      appendUserName();
    }
  } catch (e) {
    console.log("appendUserName() not accessible");
  }

  // Auto-click login after all events are triggered
  setTimeout(() => {
    if (loginBtn) {
      loginBtn.click();
      console.log("Auto Login Clicked.");
    }
  }, 500);
});
