import {
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Rating,
	Stack,
	Typography,
	IconButton,
} from "@mui/material"
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded"
import StarRoundedIcon from "@mui/icons-material/StarRounded"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useAddFavouriteMutation, useDeleteFavouriteMutation } from "../app/services/favouriteApi"
import { useSelector } from "react-redux"

const RestaurantCard = ({ restaurantInfo, isFavorite }) => {
	const navigate = useNavigate()

	const [favourite, setFavourite] = useState(false)
	const userId = useSelector((state) => state.user.userId)
	const [addFavourite] = useAddFavouriteMutation()
	const [deleteFavourite] = useDeleteFavouriteMutation()

	useEffect(() => {
		setFavourite(isFavorite)
	}, [isFavorite])

	function handleFavourite() {
		console.log("click")
		if (favourite) {
			deleteFavourite({userId, restaurantId: restaurantInfo.id})
			.unwrap()
			.then((res) => {
				console.log(res)
				setFavourite(false)
			})
			.catch((err) => {console.log(err)})
		} else if (!favourite) {
			addFavourite({userId, restaurantId: restaurantInfo.id})
			.unwrap()
			.then((res) => {
				console.log(res)
				setFavourite(true)
			})
			.catch((err) => {console.log(err)})
			
		}
	}

	return (
		<>
			<CardActionArea
				sx={{
					borderRadius: "15px",
					padding: 0,
				}}
				onClick={() => {
					setTimeout(() => {
						navigate(`/restaurant/${restaurantInfo.id}`)
					}, 15)
				}}
			>
				<Card
					variant="clean"
					sx={{
						height: 270,
						width: 280,
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
							<IconButton
								sx={{
									backgroundColor: "hsl(0,0%,100%)",
									p: "7.5px",
									position: "absolute",
									right: "5%",
									bottom: "32.5%",
									zIndex: 100,
								}}
								onMouseDown={(e) => e.stopPropagation()}
								onTouchStart={(e) => e.stopPropagation()}
								onClick={(e) => {
									e.stopPropagation()
									e.preventDefault()
									handleFavourite()
								}}
							>
								{favourite ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
							</IconButton>
						</Stack>
					</CardContent>
				</Card>
			</CardActionArea>
		</>
	)
}

export default RestaurantCard
