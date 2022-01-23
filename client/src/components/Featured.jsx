import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"
import { useNavigate } from "react-router-dom"

const Featured = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()
	const random = Math.floor(Math.random() * restaurantList.length)
	const featuredRestaurant = restaurantList[random]

	const navigate = useNavigate()

	return (
		<CardActionArea
			sx={{
				width: "100%",
				position: "relative",
				mb: "5%",
				borderRadius: "15px",
			}}
			onClick={() => {
				setTimeout(() => {
					navigate(`/restaurant/${featuredRestaurant.id}`)
				}, 35)
			}}
		>
			<Card variant="clean" sx={{backgroundColor: "black"}} key={featuredRestaurant && featuredRestaurant.id}>
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
		</CardActionArea>
	)
}

export default Featured
