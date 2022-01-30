import { Box, Button, Typography } from "@mui/material"
import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { setShowReviewDialog, setEditId } from "../../app/slices/reviewSlice"

const ReviewSeparator = ({ reviewList }) => {
	const dispatch = useDispatch()
	const IsLoggedIn = useSelector((state) => state.user.isLoggedIn)
	const userId = useSelector((state) => state.user.userId)
	const [userHasReview, setUserHasReview] = useState(false)

	const [reviewId, setReviewId] = useState(null)

	useEffect(() => {
		if (IsLoggedIn) {
			reviewList.forEach((review) => {
				if (review.user_id === userId) {
					setUserHasReview(true)
					setReviewId(review.id)
				}
			})
		} else {
			setUserHasReview(false)
		}
	}, [reviewList, userId, IsLoggedIn])

	const handleAddReview = () => {
		if (userHasReview) {
			dispatch(setEditId(reviewId))
		} else {
			dispatch(setEditId(null))
		}

		dispatch(setShowReviewDialog(true))
	}

	return (
		<Box my={2} display="flex" justifyContent="space-between">
			<Typography fontWeight="medium" fontSize="2em">
				Reviews
			</Typography>
			<Button
				variant="contained"
				disabled={!IsLoggedIn}
				mr={0}
				ml="auto"
				sx={{ px: 5 }}
				onClick={handleAddReview}
			>
				{IsLoggedIn
					? userHasReview
						? "Edit your review"
						: "Write a review"
					: "Login to write a review"}
			</Button>
		</Box>
	)
}

export default ReviewSeparator
