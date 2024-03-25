import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout1 from './components/website/switcher/Layout1';
import Layout2 from './components/website/switcher/Layout2';
import Home1 from './components/website/switcher/Home1';
import Home2 from './components/website/switcher/Home2';
import Login from './components/website/auth/Login';
import Signin from './components/website/auth/Signin';
import Otp from './components/website/auth/Otp';
import CreateWs from './components/website/CreationSteps/CreateWs';
import Step1 from './components/website/CreationSteps/Step1';
import Step2 from './components/website/CreationSteps/Step2';
import Step3 from './components/website/CreationSteps/Step3';
import Step4 from './components/website/CreationSteps/Step4';
import Step5 from './components/website/CreationSteps/Step5';
import MainApp from './components/application/mainApp/MainApp';

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
      element: isLoggedIn ? <Layout2 /> : <Layout1 />,
      children: [
        {
          path: '/',
          element: isLoggedIn ? <Home2 /> : <Home1 />,
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
