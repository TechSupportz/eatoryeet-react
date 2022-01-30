import {
	Box,
	Button,
	Card,
	CardMedia,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FilledInput,
	IconButton,
	InputLabel,
	Rating,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import CancelRoundedIcon from "@mui/icons-material/CancelRounded"
import Tilt from "react-parallax-tilt"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setShowReviewDialog } from "../../app/slices/reviewSlice"
import {
	useLazyGetReviewByIdQuery,
	useAddReviewMutation,
	useUpdateReviewMutation,
} from "../../app/services/reviewApi"

const ReviewDialog = ({ restaurant }) => {
	const dispatch = useDispatch()
	const showReviewDialog = useSelector((state) => state.review.showReviewDialog)
	const editId = useSelector((state) => state.review.editId)
	const userId = useSelector((state) => state.user.userId)
	let restaurantId = restaurant.id

	const [addReview] = useAddReviewMutation()
	const [getReviewDetails] = useLazyGetReviewByIdQuery()
	const [updateReview, result] = useUpdateReviewMutation()

	const [rating, setRating] = useState(0)
	const [title, setTitle] = useState("")
	const [detail, setDetail] = useState("")
	const [isEdit, setIsEdit] = useState(false)
	const [isBtnDisabled, setIsBtnDisabled] = useState(true)

	useEffect(() => {
		console.log(editId)
		if (editId !== null) {
			setIsEdit(true)
			getReviewDetails(editId)
				.unwrap()
				.then((review) => {
					setRating(review.rating)
					setTitle(review.title)
					setDetail(review.detail)
				})
		} else {
			setIsEdit(false)
			setRating("")
			setTitle("")
			setDetail("")
		}
	}, [showReviewDialog])

	useEffect(() => {
		console.log({ rating, title, detail })

		if (rating > 0 && title.length > 0 && detail.length > 0) {
			setIsBtnDisabled(false)
		} else {
			setIsBtnDisabled(true)
		}
	}, [rating, title, detail])

	const handleClose = () => {
		dispatch(setShowReviewDialog(false))
	}

	const handleSubmit = () => {
		if (isEdit) {
			updateReview({ editId, restaurantId, userId, rating, title, detail })
				.unwrap()
				.then((output) => {
					console.log(output)
				})
		} else {
			addReview({ userId, restaurantId, rating, title, detail })
		}
		handleClose()
	}

	return (
		<>
			<Dialog open={showReviewDialog} onClose={handleClose}>
				<DialogTitle sx={{ padding: 3.5 }}>
					<Box sx={{ mt: 0.5 }}>
						<Stack direction="row" spacing={2}>
							<Tilt
								style={{ width: "30%" }}
								tiltMaxAngleX={4}
								tiltMaxAngleY={4}
								transitionSpeed={3000}
							>
								<Card variant="clean" sx={{ width: "100%", height: "130%" }}>
									<CardMedia
										component="img"
										image={restaurant && restaurant.image_url}
										sx={{ height: "100%" }}
									/>
								</Card>
							</Tilt>

							<Stack direction="column" spacing={0.5}>
								<Typography fontSize="1.2em" fontWeight="bold">
									{restaurant && restaurant.name}
								</Typography>
								<Stack direction="column">
									<Typography fontSize="0.8em" fontWeight="medium">
										Address:
									</Typography>
									<Typography fontSize="0.8em" fontWeight="regular">
										{restaurant && restaurant.location}
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>
				</DialogTitle>
				<DialogContent>
					<Stack direction="column" spacing={2}>
						<Stack direction="column" mt={4.5}>
							<Typography fontSize="1.15em">
								What is your overall experience with this restaurant?
							</Typography>
							<>
								<Typography fontSize="0.9em">Click to rate!</Typography>
								<Rating
									size="large"
									sx={{ ml: -0.3, mt: 0.5 }}
									value={rating}
									onChange={(e, newRating) => setRating(newRating)}
								></Rating>
							</>
						</Stack>
						<Stack direction="column" mt={4.5}>
							<InputLabel sx={{ color: "black", fontSize: "1.15em", mb: "2%" }}>
								Title of your review:
							</InputLabel>
							<FilledInput
								placeholder="A short and simple summary"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								error={title.length <= 0}
								sx={{ width: "80%" }}
							></FilledInput>
						</Stack>
						<Stack direction="column" mt={4.5}>
							<InputLabel sx={{ color: "black", fontSize: "1.15em", mb: "2%" }}>
								Your Review:
							</InputLabel>
							<FilledInput
								placeholder="Tell people about your experience at the restaurant!"
								value={detail}
								onChange={(e) => setDetail(e.target.value)}
								error={detail.length <= 0}
								multiline
								minRows={5}
								sx={{ py: 0.5 }}
							></FilledInput>
						</Stack>
					</Stack>
				</DialogContent>
				<DialogActions
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mx: 2,
						mb: 3,
					}}
				>
					<Button
						variant="contained"
						size="large"
						sx={{ width: "40%" }}
						onClick={handleSubmit}
						disabled={isBtnDisabled}
					>
						Submit your review
					</Button>
					<Tooltip title={isEdit ? "Discard Changes" : "Discard review"} placement="left">
						<IconButton size="large" onClick={handleClose}>
							<DeleteRoundedIcon fontSize="inherit"></DeleteRoundedIcon>
						</IconButton>
					</Tooltip>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default ReviewDialog
