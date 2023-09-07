import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../screens/Authorization/SignUpForm'
import Home from '../screens/Home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>  
				<Route element={<Home />} path='/' />
				<Route element={<SignUp />} path='/signup' />
				<Route element={<SignUp name='Login' />} path='/login'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
