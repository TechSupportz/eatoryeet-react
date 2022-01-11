import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

const RestaurantCard = () => {
	return (
		<Card
			sx={{
				borderRadius: "15px",
				height: 330,
				width: 340,
				transition: "box-shadow 0.5s snap",
				boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
				":hover": {
					boxShadow: "0px 8px 32px hsla(0, 0%, 0%, 0.45)",
				},
			}}
		>
			<CardMedia
				variant="gradientBlend"
				component="img"
				image="https://mayvers.com.au/wp-content/uploads/2017/09/test-image.jpg"
				height="60%"
			/>

			<CardContent>
				<Typography fontWeight="medium" fontSize="1.2em">
					Restaurant Name
				</Typography>
			</CardContent>
		</Card>
	)
}

export default RestaurantCard
