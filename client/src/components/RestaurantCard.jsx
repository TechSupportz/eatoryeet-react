import {
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Rating,
	Stack,
	Typography,
} from "@mui/material"
import React from "react"

const RestaurantCard = ({ restaurantInfo }) => {
	return (
		<Card
			variant="clean"
			sx={{
				height: 270,
				width: 280,
				padding: 0,
				margin: 0,
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
					<Typography fontWeight="medium" fontSize="1.2em" noWrap>
						{restaurantInfo.name}
					</Typography>
					<Rating
						name="avg-rating"
						defaultValue={restaurantInfo.avg_rating}
						size="small"
						precision={0.5}
						readOnly
					/>
					<Typography fontWeight="medium" fontSize="1.1em">
						{`${restaurantInfo.category} • ${restaurantInfo.cost}`}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default RestaurantCard
