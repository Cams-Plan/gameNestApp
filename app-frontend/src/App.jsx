import './assets/styles/App.css'
import {Routes, Route} from 'react-router-dom'
import { Home, Login, ShoppingList, MyShoppingLists, UploadImages } from './pages'
import { Nav } from './components'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Nav/>}>
        {/* when cookies are setup use this with auth context for redirecting to myLists */}
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shoppingList' element={<ShoppingList/>}/>
        <Route path='/mylists' element={<MyShoppingLists/>}/>
        <Route path='/test' element={<UploadImages/>}/>  {/* this page is just to test out image uploading */}
      </Route>
      </Routes>
    </>
  )
}

export default App
