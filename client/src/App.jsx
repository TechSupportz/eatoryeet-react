import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Restaurant from "./pages/Restaurant"
import Favourite from "./pages/Favourite"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import PageNotFound from "./pages/PageNotFound"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Navbar from "./components/Navbar"

const App = () => {
	const THEME = createTheme({
		typography: {
			fontFamily: `"Quicksand", "Helvetica", "Arial", sans-serif`,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightSemiBold: 600,
			fontWeightBold: 700,
		},
		components: {
			MuiButton: {
				variants: [
					{
						props: { variant: "textBold" },
						style: {
							fontWeight: 700,
							padding: "8px 11px",
						},
					},
				],
			},
			MuiCardMedia: {
				variants: [
					{
						props: { variant: "gradientOverlayWhite" },
						style: {
							maskImage:
								"linear-gradient(to top, rgba(0,0,0,0.45) 15%, rgba(0,0,0,1) 70%)",
						},
					},
				],
			},
		},
	})

	return (
		<ThemeProvider theme={THEME}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/restaurant/:id" element={<Restaurant />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
