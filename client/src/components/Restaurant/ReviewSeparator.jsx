import { Box, Button, Typography } from "@mui/material"
import React from "react"

import { useDispatch } from "react-redux"
import { setShowReviewDialog } from "../../app/slices/reviewSlice"

const ReviewSeparator = () => {
	const dispatch = useDispatch()

	return (
		<Box my={2} display="flex" justifyContent="space-between">
			<Typography fontWeight="medium" fontSize="2em">
				Reviews
			</Typography>
			<Button
				variant="contained"
				mr={0}
				ml="auto"
				sx={{ px: 5 }}
				onClick={() => dispatch(setShowReviewDialog(true))}
			>
				Write a Review
			</Button>
		</Box>
	)
}

export default ReviewSeparator
