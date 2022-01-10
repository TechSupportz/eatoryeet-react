import { Card, CardMedia, Paper } from "@mui/material"
import React from "react"

const Carousel = () => {
	return (
		<Card
			variant="gradientOverlayWhite"
			sx={{ width: "100%", maxHeight: 500, borderRadius: "15px" }}
		>
			<CardMedia
				component="img"
				image="https://mayvers.com.au/wp-content/uploads/2017/09/test-image.jpg"
				alt=""
				sx={{ borderRadius: "15px" }}
			/>
		</Card>
	)
}

export default Carousel
