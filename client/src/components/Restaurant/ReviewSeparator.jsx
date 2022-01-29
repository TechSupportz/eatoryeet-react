import { Box, Button, Typography } from "@mui/material"
import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { setShowReviewDialog } from "../../app/slices/reviewSlice"

const ReviewSeparator = () => {
	const dispatch = useDispatch()
	const IsLoggedIn = useSelector((state) => state.user.isLoggedIn)

	return (
		<Box my={2} display="flex" justifyContent="space-between">
			<Typography fontWeight="medium" fontSize="2em">
				Reviews
			</Typography>
			<Button
				variant="contained"
				disabled = {!IsLoggedIn}
				mr={0}
				ml="auto"
				sx={{ px: 5 }}
				onClick={() => dispatch(setShowReviewDialog(true))}
			>
				{IsLoggedIn ? "Write a Review" : "Login to write a review"}
			</Button>
		</Box>
	)
}

export default ReviewSeparator
