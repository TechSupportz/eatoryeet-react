import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Restaurant from "./pages/Restaurant"
import Favourite from "./pages/Favourite"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/Navbar"
import LoginDialog from "./components/LoginDialog"
import RegisterSnackbar from "./components/Register/RegisterSnackbar"
import EditProfileSnackbar from "./components/profile/EditProfileSnackbar"

const App = () => {
	return (
		<>
			<Navbar />
			<LoginDialog />
			<RegisterSnackbar />
			<EditProfileSnackbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/restaurant/:id" element={<Restaurant />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
