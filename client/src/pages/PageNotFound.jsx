import { Box, Link } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
	const [h4, setH4] = useState(false)
	const [h5, setH5] = useState(false)
	const [easterEgg, setEasterEgg] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			setH4(true)
		}, 2500)
		setTimeout(() => {
			setH5(true)
		}, 6000)
		setTimeout(() => {
			setEasterEgg(true)
		}, 10000)
		setTimeout(() => {
			navigate("/")
		}, 12500)

		return () => {
			clearTimeout()
			setH4(false)
			setH5(false)
			setEasterEgg(false)
		}
	}, [])

	return (
		<Box ml={5} mr={5}>
			<h1>Page not found</h1>
			<h2>Sounds like a you problem</h2>
			<h3>Go find the page yourself</h3>

			{h4 && (
				<h4 style={{ transition: "fade" }}>
					There are no easter eggs why are you still here?
				</h4>
			)}

			{h5 && <h5>This isn't a Marvel movie</h5>}
			{h5 && <h5>No post-credit scenes here</h5>}
			<br />
			{easterEgg && (
				<>
					<h1>Wow u actually waited</h1>
					<h2>Have a duck</h2>
					<img
						src="https://cdn.discordapp.com/attachments/854735014770901055/936635604375068672/bird-dance.gif"
						alt="duck"
					/>
				</>
			)}
		</Box>
	)
}

export default PageNotFound
