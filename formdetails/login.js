var signUp = (e) => {
    const data = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dateOfBirth: document.getElementById("dob").value,
        number: document.getElementById("number").value,
        country:document.getElementById("country").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        confirmPassword: document.getElementById("confirmpass").value
    }
    localStorage.setItem('data', JSON.stringify(data));
    e.preventDefault()
    console.log(data)

    axios({
        method: "POST",
        url: "http://475d-116-75-194-174.ngrok.io/post",
        // data: bodyFormData,
        headers: { "Content-Type": "application/json"
    },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (error) {
          //handle error
          console.log(error);
        });
    
    // url="http://40c7-116-75-194-174.ngrok.io/post"
    // fetch(url)
    // mode: 'no-cors'
    // param = {
    //     method:'POST',
    //     headers: {
            
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(data)
    // }
    // fetch(url,param).then((response)=>

    //     response.json()).then((data)=>

    //     console.log(data)).catch(error=>console.log(error))
}   

const login = (e) => {
  
    const getData = JSON.parse(localStorage.getItem('data'));
    console.log(getData)
}



