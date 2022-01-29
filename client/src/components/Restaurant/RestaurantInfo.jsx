
import { Card, CardMedia, Rating, Skeleton, Stack, Typography } from "@mui/material"
import Tilt from "react-parallax-tilt"

const RestaurantInfo = ({restaurant, isLoading}) => {

	return (
		<>
			<Stack direction="row" spacing={4} >
				<Tilt
					style={{ width: "30%" }}
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

				<Stack direction="column" spacing={0.5}>
					<Typography fontSize="2.5em" fontWeight="bold">
						{restaurant && restaurant.name}
					</Typography>
					{isLoading ? (
						<Skeleton variant="rectangle" width={120} height={28} />
					) : (
						<Rating
							name="avg-rating"
							defaultValue={restaurant && restaurant.avg_rating}
							size="lg"
							precision={0.5}
							readOnly
						/>
					)}

					<Typography fontSize="1.5em" fontWeight="semiBold">
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
					<Card>
						<CardMedia component="img" image="" />
					</Card>
				</Stack>
			</Stack>
		</>
	)
}

export default RestaurantInfo
