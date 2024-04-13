import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, PhoneIcon, FlagIcon } from '@heroicons/react/solid';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inscription</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                placeholder="Entrez votre nom..."
              />
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                placeholder="Entrez votre prénom..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                placeholder="Entrez votre email..."
              />
            </div>
              <div className="mt-1 flex rounded-md shadow-sm relative border border-gray-300 bg-white">
              <span className="inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm">
                +33
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                required
                pattern="^[0-9]+$"
                maxLength="9"
                className="block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>


            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                placeholder="entrez votre mot de passe..."
              />
              <span className="mt-1 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm py-2">
                <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                  {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeOffIcon className="h-5 w-5" />}
                </button>
              </span>
          </div>

          <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                placeholder="confirmer votre mot de passe..."
              />
              <span className="mt-1 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm py-2">
                <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                  {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeOffIcon className="h-5 w-5" />}
                </button>
              </span>
          </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                S'inscrire
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
          Déjà utilisateur ?  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
