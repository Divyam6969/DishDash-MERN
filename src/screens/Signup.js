import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials] = useState({name: "", email: "", password: "",geolocation: ""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation}),
        });

        const json = await response.json();
        console.log(json);
        
       
            if(!json.success) {
            alert("Invalid Credentials");
            }
      };
    const onChange = (e) => {
        setcredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
  <>
  <section className="vh-100" style={{"backgroundColor": "#000000!important" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-white" style={{"borderRadius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up - DishDash</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="name" value={credentials.name} onChange={onChange}/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
                      <label className="form-label" htmlFor="form3Example1c">Address</label>
                    </div>
                  </div>

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
                    <button type="submit" className="btn btn-primary btn-lg">Signup</button>
                  </div>
                  <Link to="/login" className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">Already have an account? Login</Link>
                  

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

  </>
  )
}
