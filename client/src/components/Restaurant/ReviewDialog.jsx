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
	Typography,
} from "@mui/material"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import Tilt from "react-parallax-tilt"

import { useSelector, useDispatch } from "react-redux"
import { setShowReviewDialog } from "../../app/slices/reviewSlice"

const ReviewDialog = ({ restaurant }) => {
	const dispatch = useDispatch()
	const showReviewDialog = useSelector((state) => state.review.showReviewDialog)

	const handleClose = () => {
		dispatch(setShowReviewDialog(false))
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
								<Rating size="large" sx={{ ml: -0.3, mt: 0.5 }}></Rating>
							</>
						</Stack>
						<Stack direction="column" mt={4.5}>
							<InputLabel sx={{ color: "black", fontSize: "1.15em", mb: "2%" }}>
								Title of your review:
							</InputLabel>
							<FilledInput
								placeholder="A short and simple summary"
								sx={{ width: "80%" }}
							></FilledInput>
						</Stack>
						<Stack direction="column" mt={4.5}>
							<InputLabel sx={{ color: "black", fontSize: "1.15em", mb: "2%" }}>
								Your Review:
							</InputLabel>
							<FilledInput
								multiline
								placeholder="Tell people about your experience at the restaurant!"
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
						onClick={handleClose}
					>
						Submit your review
					</Button>
					<IconButton size="large">
						<DeleteRoundedIcon></DeleteRoundedIcon>
					</IconButton>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default ReviewDialog
