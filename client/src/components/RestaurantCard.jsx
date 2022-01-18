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
		<CardActionArea
			sx={{
				borderRadius: "15px",
			}}
		>
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
						<Rating
							name="avg-rating"
							defaultValue={restaurantInfo.avg_rating}
							size="md"
							precision={0.5}
							readOnly
						/>
						<Typography fontWeight="medium" fontSize="1.15em">
							{`${restaurantInfo.category} • ${restaurantInfo.cost}`}
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		</CardActionArea>
	)
}

export default RestaurantCard
