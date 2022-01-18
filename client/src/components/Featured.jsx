import { Card, CardMedia, Typography } from "@mui/material"
import { useSelector } from "react-redux"

const Featured = () => {
	const restaurantList = useSelector((state) => state.restaurant.restaurants)
	let random = Math.floor(Math.random() * restaurantList.length)
	let featuredRestaurant = restaurantList[random]

	return (
		<Card
			sx={{
				width: "100%",
				borderRadius: "15px",
				backgroundColor: "black",
				position: "relative",
				mb: "5%",
				boxShadow: "0px 8px 24px hsla(0, 0%, 0%, 0.15)",
				":hover": {
					boxShadow: "0px 8px 32px hsla(0, 0%, 0%, 0.45)",
				},
			}}
		>
			<CardMedia
				variant="gradientOverlay"
				component="img"
				image={featuredRestaurant && featuredRestaurant.image_url}
				alt=""
				sx={{maxHeight: 500, minHeight: {xs: 300, md: 500}}}
			/>

			<Typography variant="overlay" sx={{ fontSize: { xs: "5vw", md: "3.5vw" } }}>
				{featuredRestaurant && featuredRestaurant.name}
			</Typography>
		</Card>
	)
}

export default Featured
