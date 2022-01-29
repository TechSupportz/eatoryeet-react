import { Box, Card, CardMedia, Dialog, DialogTitle, Stack } from "@mui/material"
import Tilt from "react-parallax-tilt"

import { useSelector, useDispatch } from "react-redux"
import { setShowReviewDialog } from "../../app/slices/reviewSlice"



const ReviewDialog = ({restaurant}) => {
	const dispatch = useDispatch()
	const showReviewDialog = useSelector((state) => state.review.showReviewDialog)

	const handleClose = () => {
		dispatch(setShowReviewDialog(false))
	}

	return (
		<>
			<Dialog open={showReviewDialog} onClose={handleClose}>
				<DialogTitle>
					<Box mb={2}>
						<Stack direction="row" spacing={4}>
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
						</Stack>
					</Box>
				</DialogTitle>
			</Dialog>
		</>
	)
}

export default ReviewDialog
