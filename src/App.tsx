import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import { RegistrationPage } from './pages/registration-page/registrationPage';
import { LoginPage } from './pages/login-page/login-page';

const App = () => {
  const routerConfig = createBrowserRouter (
    [{
      path:'/',
      element:<RegistrationPage />,
    },
    {
      path:'/login-page',
      element: <LoginPage />
    }
  ]
  )
  return (
    <div className='App'>
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;

