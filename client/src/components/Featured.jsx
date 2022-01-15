import { Card, CardMedia, Typography } from "@mui/material"
import React from "react"

const Featured = () => {

	
	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "15px",
				backgroundColor: "black",
				position: "relative",
				mb: "5%",
				boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
				":hover": {
					boxShadow: "0px 8px 32px hsla(0, 0%, 0%, 0.45)",
				},
			}}
		>
			<CardMedia
				variant="gradientOverlay"
				component="img"
				image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
				alt=""
				sx={{ maxHeight: 500, minHeight: 304 }}
			/>

			<Typography variant="overlay" sx={{ fontSize: { xs: "5vw", md: "3.5vw" } }}>
				Restaurant Name
			</Typography>
		</Card>
	)
}

export default Featured
