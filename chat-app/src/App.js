import './App.css';
import Chat from './components/Chat/Chat';
import SignUp from './components/LoginPage/SignUp/SignUp';
import LoginPage from './components/LoginPage/Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/Chat',
    element:<Chat/>
  },
  {
    path:'/SignUp',
    element:<SignUp/>
  }
])

function App() {
  return <RouterProvider router={router} ></RouterProvider>
}

export default App;
