import { Box, Card, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material"
import React from "react"


const RestaurantCard = () => {
	return (
		<Card
			sx={{
				borderRadius: "15px",
				height: 330,
				width: 340,
				boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
				":hover": {
					boxShadow: "0px 8px 32px hsla(0, 0%, 0%, 0.45)",
				},
			}}
		>
			<CardMedia
				variant="gradientBlend"
				component="img"
				image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
				height="60%"
			/>

			<CardContent>
				<Stack spacing={0.5}>
					<Typography fontWeight="medium" fontSize="1.5em">
						Restaurant Name
					</Typography>
					<Rating name="avg-rating" defaultValue={2} size="md" readOnly />
					<Typography fontWeight="medium" fontSize="1.15em">
						{`Category • $$`}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default RestaurantCard
