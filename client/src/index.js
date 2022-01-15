import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CircleIcon from "@mui/icons-material/Circle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"


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
	},
})

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeProvider theme={THEME}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
)
