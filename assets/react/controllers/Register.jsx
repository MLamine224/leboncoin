import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-light'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>
                Inscription
            </h3>
            <div className='mb-2'>
                <label htmlFor='nom'> Nom</label>
                <input type='text' placeholder='entrez votre nom...' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='prenom'>Prénom</label>
                <input type='text' placeholder='entrez votre prenom...' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'> Email</label>
                <input type='email' placeholder='entrez votre email...' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'> Mot de passe</label>
                <input type='password' placeholder='entrez votre mot de passe...' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>
                      S'inscrire
                </button>
            </div>
            <p className='text-end mt-2'>
                    Déja utilisateur ? <Link to="/connexion" className='ms-2'>Se connecter</Link>
            </p>
        </form>
        </div>
       
    </div>
  )
}

export default Register