import { Card, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material"
import React from "react"

const RestaurantCard = ({ restaurantInfo }) => {
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
				image={restaurantInfo.image_url}
				height="60%"
			/>

			<CardContent>
				<Stack spacing={0.5}>
					<Typography fontWeight="medium" fontSize="1.3em" noWrap>
						{restaurantInfo.name}
					</Typography>
					<Rating name="avg-rating" defaultValue={2} size="" readOnly />
					<Typography fontWeight="medium" fontSize="1.15em">
						{`Category • ${restaurantInfo.cost}`}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default RestaurantCard
