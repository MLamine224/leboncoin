
import './styles/app.css';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from './react/controllers/Hello.jsx'; 
// // import MyModal from './react/controllers/Modal.jsx';
// import Acceuil from './react/controllers/entre.jsx';


// document.addEventListener('DOMContentLoaded', () => {
//     const helloContainer = document.getElementById('hello-react');
//     const modalContainer = document.getElementById('modal');
//     const acceuilContainer = document.getElementById('acceuil');

//     if (helloContainer) {
//         ReactDOM.render(<Hello fullName="Lamine" />, helloContainer);
//     }

//     // if (modalContainer) {
//     //     ReactDOM.render(<MyModal />, modalContainer);
//     // }

//     if (acceuilContainer) {
//         ReactDOM.render(<Acceuil />, acceuilContainer);
//     }
// });


// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Acceuil from './react/controllers/entre.jsx';
import Hello from './react/controllers/Hello.jsx';
// import MyModal from './MyModal';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/hello" element={<Hello />} />
        {/* <Route path="/modal" element={<MyModal />} /> */}
      </Routes>
    </Router>,
    document.getElementById('root')
  );

  