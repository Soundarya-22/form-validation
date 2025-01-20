function validate()
{
    const name=document.getElementById("name").value;
    const nameError=document.getElementById("name-error");
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;
    nameError.textContent="";

    if(name=="" || (!nameregex.test(name)) )
    {
        nameError.textContent="Please Enter a Name Start With Character and Include letters,Numbers,Minimum 6 to 20";
        return false;
    } 

    const address=document.getElementById("address").value;
    const addressError=document.getElementById("address-error");
    addressError.textContent="";

    if(address=="" )
    {
        addressError.textContent="Please Update Your Address";
        return false;

    }

    const email=document.getElementById("email").value;
    const emailError=document.getElementById("email-error");
    
    emailError.textContent="";
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email=="" || !emailregex.test(email))
    {
        emailError.textContent="Email Should be letter,Number,Symbols with @";
        return false;

    }
    const phonenumber=document.getElementById("number");
    const pherror= document.getElementById("ph-error");

    pherror.textContent="";
    let phregex = /^\d{10}$/;
    
    if(phonenumber=="" || phregex.test(phonenumber))
    {
        pherror.textContent="Should be Enter Ten Digit Number";
        return false
    }


    
    const password=document.getElementById("pwd").value;
    const passwordError=document.getElementById("pwd-error");
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    passwordError.textContent="";

    if(password=="" || !passwordregex.test(password))
    {
        passwordError.textContent="email should be letter,number,symbols with 6 character";
        return false;

    }
          
}

    