import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from './src/components/About'
import Err from './src/components/Error'
import Menu from './src/components/ResMenu'
import { Suspense, lazy, useState, useEffect, useContext  } from 'react'
import UserContext from './src/util/userContext'





const Grocerry = lazy(()=>import('./src/components/Grocerry'))

const App = () => {
    const [userName,setUserName] = useState();


    useEffect(()=> {
        const data = {
            userName: "Akshat Singh"
        }
        setUserName(data.userName);
    
    },[])


    return (
        <div className="app-body">
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
   
        </div>
    )

}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Err/>,
        children: [{
            path: '/',
            element: <Body/>

        },
          {
            path :'/home',
            element : <Body/>
          },

        {
            path: '/about',
            element: <About />
        },
        {
            path:'/restaurants/:resId',
            element : <Menu />
        },{
            path: '/grocerry',
            element : <Suspense fallback ={<h2>Loading.......</h2>}><Grocerry /></Suspense>

        }


        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />)