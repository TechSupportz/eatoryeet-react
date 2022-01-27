import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CircleIcon from "@mui/icons-material/Circle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import { store } from "./app/store/store"
import { Provider } from "react-redux"

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
			styleOverrides: {
				contained: {
					backgroundColor: "hsl(0, 0%, 0%)",
					borderRadius: "45px",
					"&:hover": {
						backgroundColor: "hsl(0, 0%, 15%)",
					},
				},
			},
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
		MuiCard: {
			variants: [
				{
					props: { variant: "clean" },
					style: {
						borderRadius: "15px",
						boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
						":hover": {
							boxShadow: "0px 8px 32px hsla(0, 0%, 0%, 0.45)",
						},
					},
				},
				{
					props: { variant: "cleanNoHover" },
					style: {
						borderRadius: "15px",
						boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
					},
				},
			],
		},
		MuiCardMedia: {
			variants: [
				{
					props: { variant: "gradientOverlay" },
					style: {
						maskImage:
							"linear-gradient(to top, rgba(0,0,0,0.45) 15%, rgba(0,0,0,1) 70%)",
					},
				},
				{
					props: { variant: "gradientBlend" },
					style: {
						maskImage:
							"linear-gradient(to top, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.35) 30% ,hsla(0, 0%, 100%, 1) 100%)",
					},
				},
			],
		},
		MuiTypography: {
			variants: [
				{
					props: { variant: "overlay" },
					style: {
						position: "absolute",
						bottom: "5%",
						left: "2.5%",
						color: "white",
						fontWeight: "bold",
					},
				},
			],
		},
		MuiRating: {
			defaultProps: {
				icon: <CircleIcon fontSize="inherit" sx={{ color: "#7EFA88" }} />,
				emptyIcon: <CircleOutlinedIcon fontSize="inherit" sx={{ color: "#7EFA88" }} />,
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					height: "50px",
					borderRadius: "10px",
					backgroundColor: "hsl(0, 0%, 100%)",
					boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
					border: "2px solid hsl(0, 0%, 85%)",
					transition: "background-color 0.2s linear",
					transition: "border-color 0.15s ease-in",
					":hover": {
						backgroundColor: "hsl(0, 0%, 95%)",
					},
					"&.Mui-error": {
						borderColor: "hsl(0, 100%, 75%)",
					},
				},
			},
			defaultProps: {
				disableUnderline: true,
				label: 'margin="none"',
				hiddenLabel: true,
			},
		},
		MuiSkeleton: {
			defaultProps: {
				animation: "wave",
			},
		},
	},
})

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={THEME}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
