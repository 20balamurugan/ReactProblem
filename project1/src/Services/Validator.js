export const emailValidator = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email);
}


export const passwordValidator = password => {
    const passwordRegex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}


export const ErrosHandle=(credentials)=>
    {
        // let result=true;
        if (credentials.username==="" || credentials.username===null)
            {
                // result=true;
                alert("enter  username")
            }
            else if (credentials.password==="" || credentials.password===null)
                {
                    // result=true;
                    alert("enter password")
                }
            else{
                // seterror(true)
            }
    }

