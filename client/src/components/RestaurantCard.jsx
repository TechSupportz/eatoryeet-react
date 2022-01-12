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
				image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
				height="60%"
			/>

			<CardContent>
				<Stack spacing={0.5}>
					<Typography fontWeight="medium" fontSize="1.5em">
						Restaurant Name
					</Typography>
					<Rating
						name="avg-rating"
						defaultValue={2}
						size="md"
						readOnly
					/>
					<Typography fontWeight="medium" fontSize="1.15em">
						{`Category • $$`}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default RestaurantCard
