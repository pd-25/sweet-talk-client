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
import FirstStep from './components/website/creationsteps/FirstStep';
import SecondStep from './components/website/creationsteps/SecondStep';
import ThirdStep from './components/website/creationsteps/ThirdStep';
import ForthStep from './components/website/creationsteps/ForthStep';
import FifthStep from './components/website/creationsteps/FifthStep';
import MainApp from './components/application/mainapp/MainApp';
import TalkTous from './components/website/talktous/TalkTous';
import DirectChatMe from './components/application/directchatapp_layout/DirectChatMe';
import DirectChatFriend from './components/application/directchatapp_layout/DirectChatFriend';



import Test from './components/unittest/Test';
// import Test2 from './components/unittest/Test2';

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
        {
          path:'/log-home',
          element: <WithLoginHome />,
        },
        {
          path:'/help',
          element: <TalkTous />,
        }

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
      path: '/step-one',
      element: <FirstStep />,
    },
    {
      path: '/step-two',
      element: <SecondStep />,
    },
    {
      path: '/step-three',
      element: <ThirdStep />,
    },
    {
      path: '/step-four',
      element: <ForthStep />,
    },
    {
      path: '/step-five',
      element: <FifthStep />,
    },
    {
      path: '/app',
      element: <MainApp />,
    },
    {
      path: '/direct-chat-app-with-me',
      element: <DirectChatMe />,
    },
    {
      path: '/direct-chat-app-with-friend',
      element: <DirectChatFriend />,
    },
   




    {
      path: '/test',
      element: <Test />,
    },
  ]);

  return <RouterProvider router={routerConfig} />;
}

export default App;
