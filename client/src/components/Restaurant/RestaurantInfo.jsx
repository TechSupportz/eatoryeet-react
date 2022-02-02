import { Card, CardContent, CardMedia, Rating, Skeleton, Stack, Typography } from "@mui/material"
import Tilt from "react-parallax-tilt"

import { useState } from "react"
import { useEffect } from "react"
import config from "/config.json"
import { Box } from "@mui/system"

const RestaurantInfo = ({ restaurant, isLoading }) => {
	const [rating, setRating] = useState(0)

	useEffect(() => {
		!isLoading && setRating(parseFloat(restaurant.avg_rating))
	}, [restaurant])

	return (
		<Box>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems={{ md: "flex-end" }}
				spacing={6}
			>
				<Stack direction={{ xs: "column", md: "row" }} spacing={4}>
					<Tilt
						className="Tilt"
						tiltMaxAngleX={3}
						tiltMaxAngleY={3}
						transitionSpeed={5000}
					>
						<Card variant="clean" sx={{ width: "100%", height: "100%" }}>
							<CardMedia
								component="img"
								image={restaurant && restaurant.image_url}
								sx={{ height: "100%" }}
							/>
						</Card>
					</Tilt>

					<Stack direction="row" spacing={10}>
						<Stack direction="column" spacing={0.5}>
							<Typography fontSize="2.5em" fontWeight="bold">
								{restaurant && restaurant.name}
							</Typography>
							{isLoading ? (
								<Skeleton variant="rectangle" width={120} height={28} />
							) : (
								<Rating
									name="avg-rating"
									value={rating}
									size="lg"
									precision={0.5}
									readOnly
								/>
							)}

							<Typography
								fontSize={{ md: "1.2em", lg: "1.5em" }}
								fontWeight="semiBold"
							>
								{restaurant && restaurant.category}
							</Typography>
							<br />
							<Stack direction="column">
								<Typography fontSize="1.2em" fontWeight="medium">
									Address:
								</Typography>
								<Typography fontSize="1.2em" fontWeight="regular">
									{restaurant && restaurant.location}
								</Typography>
							</Stack>
							<Stack direction="column">
								<Typography fontSize="1.2em" fontWeight="medium">
									Hours:
								</Typography>
								<Typography fontSize="1.2em" fontWeight="regular">
									Open Now • 11:00 AM - 11:00 PM
								</Typography>
							</Stack>
							<br />
							<Stack direction="row" spacing={1}>
								<Typography fontSize="1.2em" fontWeight="medium">
									Phone:
								</Typography>
								<Typography fontSize="1.2em" fontWeight="regular">
									{restaurant && restaurant.phone_number}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Typography fontSize="1.2em" fontWeight="medium">
									Email:
								</Typography>
								<Typography fontSize="1.2em" fontWeight="regular">
									{restaurant && restaurant.email}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Box>
					<Card
						variant="clean"
						sx={{ width: "fit-content", height: "fit-content", padding: "0" }}
						
					>
						{isLoading ? (
							<Skeleton variant="rectangle" width="250px" height="250px" />
						) : (
							<iframe
								width="250"
								height="250"
								frameBorder="0"
								src={`https://www.google.com/maps/embed/v1/place?key=${
									config.google.mapsApi.key
								}&q=${restaurant.location.replace(/ /g, "+")}`}
								style={{marginBottom: "-4px"}}
							/>
						)}
					</Card>
				</Box>
			</Stack>
		</Box>
	)
}

export default RestaurantInfo
