import { Card, CardMedia, Typography } from "@mui/material"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

const Featured = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()
	let random = Math.floor(Math.random() * restaurantList.length)
	let featuredRestaurant = restaurantList[random]

	return (
		<Card
			variant="clean"
			sx={{
				width: "100%",
				backgroundColor: "black",
				position: "relative",
				mb: "5%",
			}}
			key={featuredRestaurant && featuredRestaurant.id}
		>
			<CardMedia
				variant="gradientOverlay"
				component="img"
				image={featuredRestaurant && featuredRestaurant.image_url}
				alt=""
				sx={{ maxHeight: 500, minHeight: { xs: 300, md: 500 } }}
			/>

			<Typography variant="overlay" sx={{ fontSize: { xs: "5vw", md: "3.5vw" } }}>
				{featuredRestaurant && featuredRestaurant.name}
			</Typography>
		</Card>
	)
}

export default Featured
