import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Search from './pages/search'
import Movies from './pages/movies'
import NotFound from './pages/not-found'
import RootLayout from './layout/root-layout'
import NowPlaying from './pages/now-playing'
import Popular from './pages/popular'
import TopRated from './pages/top-rated'
import UpComing from './pages/up-coming'
import MovieDetail from './pages/movie-detail'
import Subscribe from './pages/subscribe'
import { AuthProvider } from './context/LoginContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      },
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'movies',
        element: <Movies/>
      },{
        path: 'subscribe',
        element: <Subscribe/>
      }
    ]
  },
  {
    path: '/movies',
    element: <RootLayout/>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Movies/>
      },
      {
        path: 'now-playing',
        element: <NowPlaying/>
      }
      ,
      {
        path: 'popular',
        element: <Popular/>
      }
      ,
      {
        path: 'top-rated',
        element: <TopRated/>
      }
      ,
      {
        path: 'up-coming',
        element: <UpComing/>
      }
      ,
      {
        path: ':movieId',
        element: <MovieDetail/>
      }
    ]
  },
])

function App() {
  return( 
    <AuthProvider>
      <RouterProvider router={router} />           
    </AuthProvider>

  );
}

export default App
