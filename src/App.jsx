import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WithoutLoginLayout from './components/website/switcher/WithoutLoginLayout'
import WithLoginLayout from './components/website/switcher/WithLoginLayout';
import WithoutLoginHome from './components/website/switcher/WithoutLoginHome';
import WithLoginHome from './components/website/switcher/WithLoginHome';
import Login from './components/website/auth/Login';
import Signin from './components/website/auth/Signin';
import Otp from './components/website/auth/Otp';
import CreateWs from './components/website/creationsteps/CreateWs';
import Step1 from './components/website/creationsteps/Step1';
import Step2 from './components/website/creationsteps/Step2';
import Step3 from './components/website/creationsteps/Step3';
import Step4 from './components/website/creationsteps/Step4';
import Step5 from './components/website/creationsteps/Step5';
import MainApp from './components/application/mainapp/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user login------------------------------->
  const handleLogin = () => {
    // Perform login logic here--------------------->
    setIsLoggedIn(true);
  };

  // Function to handle user logout---------------------------------->
  const handleLogout = () => {
    // Perform logout logic here--------------------------------------------------------->
    setIsLoggedIn(false);
  };

  const routerConfig = createBrowserRouter([
    {
      path: '/',
      element: isLoggedIn ? <WithLoginLayout /> : <WithoutLoginLayout />,
      children: [
        {
          path: '/',
          element: isLoggedIn ? <WithLoginHome /> : <WithoutLoginHome />,
        },

      ],
    },

    {
      path: '/login',
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/otp',
      element: <Otp />,
    },
    {
      path: '/create-workspace',
      element: <CreateWs />,
    },
    {
      path: '/step1',
      element: <Step1 />,
    },
    {
      path: '/step2',
      element: <Step2 />,
    },
    {
      path: '/step3',
      element: <Step3 />,
    },
    {
      path: '/step4',
      element: <Step4 />,
    },
    {
      path: '/step5',
      element: <Step5 />,
    },
    {
      path: '/app',
      element: <MainApp />,
    },
  ]);

  return <RouterProvider router={routerConfig} />;
}

export default App;
