import React from 'react'
//import "./auth.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-light'>
        <div className='form_container p-5 rounded bg-white'>

            <h3 className='text-center'>
                Connexion
            </h3>
            <div className='mb-2'>
                <label htmlFor='email'> Email</label>
                <input type='email' name="email" id="inputEmail" placeholder='entrez votre email...' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'> Mot de passe</label>
                <input type='password' name="password" id="inputPassword" placeholder='entrez votre mot de passe...' className='form-control'/>
            </div>
            
           
    <div className="checkbox mb-3">
        <label>
            <input type="checkbox" className="_remember_me"/> Remember me
        </label>
    </div>

    
    <button className="btn btn-lg btn-primary" type="submit">
        Sign in
    </button>
            <p className='text-end mt-2'>
                    <a href='/'> mot de passe oublié ?</a> <Link to="signup" className='ms-2'>s'inscrire</Link>
            </p>
        </div>
       
    </div>
  )
}

export default Login