
const nameInput = document.querySelector('.name-data');
const emailInput = document.querySelector('.email-data');
const passwordInput = document.querySelector('.password-data');
const loginemailInput=document.querySelector('.login-email-data');
const loginpasswordInput=document.querySelector('.login-password-data');
const loginsubmitButton=document.querySelector('.login-submit-data');


// REGISTER FORM
const form = document.querySelector('.form-data');

if (form) {
    const nameInput = document.querySelector('.name-data');
    const emailInput = document.querySelector('.email-data');
    const passwordInput = document.querySelector('.password-data');
   
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        let isValid = true;

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
       

        if (nameValue === '') {
            showError(nameInput, 'Name required');
            isValid = false;
        } else showSuccess(nameInput);

        if (emailValue === '') {
            showError(emailInput, 'Email required');
            isValid = false;
        } else showSuccess(emailInput);

        if (passwordValue.length < 6) {
            showError(passwordInput, 'Min 6 chars');
            isValid = false;
        } else showSuccess(passwordInput);

        if (isValid) {
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: nameValue,
                    email: emailValue,
                    password: passwordValue  
                })
            });

            const data = await res.json();
            alert(data.message);
        }
    });
}

    ///login form
const loginForm = document.querySelector('.login-form-data');

if (loginForm) {
    const loginemailInput = document.querySelector('.login-email-data');
    const loginpasswordInput = document.querySelector('.login-password-data');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const emailValue = loginemailInput.value.trim();
        const passwordValue = loginpasswordInput.value.trim();

        try {
            const loginres = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                })
            });
            const result = await loginres.json();
            alert(result.message);
            if (result.data.role === "admin") {
                window.location.href = 'admin.html';
            } else {
                // Redirect to home page
                window.location.href = 'home.html';
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    });
}
function showError(input, message) {
    const parent = input.parentElement;
    let small = parent.querySelector('small');

    if (!small) {
        small = document.createElement('small');
        parent.appendChild(small);
    }

    small.innerText = message;
    input.style.border = '2px solid red';
}

function showSuccess(input) {
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    if (small) small.innerText = '';
    input.style.border = '2px solid green';
}

