import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({name: "", email: "", password: "",geolocation: ""});
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/loginuser/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password}),
      });

      const json = await response.json();
      console.log(json);
      
     
          if(!json.success) {
          alert("Invalid Credentials");
          }
          if(json.success)
          {
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", credentials.email);
            console.log(localStorage.getItem("authToken"));
            alert("Login Successful");
            navigate("/");
          }
    };
  const onChange = (e) => {
      setcredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <section className="vh-100" style={{"backgroundColor": "#000000!important" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-white" style={{"borderRadius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login - DishDash</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" name="email" value={credentials.email} onChange={onChange} />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" name="password" value={credentials.password} onChange={onChange} />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login :)</button>
                  </div>
                  <Link to="/signup" className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">Don't have an account?Signup :) </Link>
                  

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="lol"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
