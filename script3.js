document.getElementById("myForm").addEventListener("submit", handleregister);

function handleregister(e) {
    e.preventDefault(); // You forgot to pass "e" as a parameter earlier

    let name = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let npassword = document.getElementById("npassword").value.trim();

    console.log("form data",{name,email,phone,password,npassword})

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const phoneRegex = /^\d{10}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    let isValid = true

    if(name === "")
    {
        document.getElementById("texterror").innerText="name field is empty"
        isValid = false
    }
    else{
        document.getElementById("texterror").innerText=""
    }

    if(!emailRegex.test(email))
        {
            document.getElementById("emailerror").innerText="email is not valid"
            isValid = false
        }
        else{
            document.getElementById("emailerror").innerText=""
        }

        if(!phoneRegex.test(phone))
            {
                document.getElementById("numbererror").innerText="phone number is not valid"
                isValid = false
            }
            else{
                document.getElementById("numbererror").innerText=""
            }
            if(!passwordRegex.test(password))
                {
                    document.getElementById("passworderror").innerText="need a strong password"
                    isValid = false
                }
                else{
                    document.getElementById("passworderror").innerText=""
                }
                if(npassword !== password)
                    {
                        document.getElementById("newpassworderror").innerText="password doesnot match"
                        isValid = false
                    }
                    else{
                        document.getElementById("newpassworderror").innerText=""
                    }
        
    if(isValid){
       Swal.fire({
        title: 'Form Submitted',
        text: 'Your data was submitted successfully!',
        icon: 'success',
        html:`
        <p><strong>Username:</strong><B>${name}<B></p>
        `,
        confirmButtonText: 'Cool'
       }) 
       document.getElementById("myForm").reset()
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text: 'please fix the error',
            confirmButtonColor: '#d33'
        });
    }
}
