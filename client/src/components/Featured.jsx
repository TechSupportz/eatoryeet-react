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
				
			}}
		>
			<CardMedia
				variant="gradientOverlay"
				component="img"
				image="https://mayvers.com.au/wp-content/uploads/2017/09/test-image.jpg"
				alt=""
				sx={{ maxHeight: 500, minHeight: 304}}
			/>

			<Typography
				variant="overlay"
				sx={{ fontSize: {xs: "5vw", md: "3.5vw"} }}
			>
				Restaurant Name
			</Typography>
		</Card>
	)
}

export default Featured
