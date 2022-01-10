import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material"
import React from "react"

const Carousel = () => {
	return (
		<Card sx={{ width: "100%", borderRadius: "15px", backgroundColor: "black"}}>
			<CardMedia
				variant="gradientOverlayWhite"
				component="img"
				image="https://mayvers.com.au/wp-content/uploads/2017/09/test-image.jpg"
				alt=""
				sx={{ maxHeight: 500, borderRadius: "15px" }}
			/>
		</Card>
	)
}

export default Carousel
