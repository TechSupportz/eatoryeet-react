import { createSlice } from "@reduxjs/toolkit"


export const reviewSlice = createSlice({
	name: "review",
	initialState: {
		showReviewDialog: false,
	},
	reducers: {
		setShowReviewDialog: (state, action) => {
			state.showReviewDialog = action.payload
		}
	},
})

export const { setShowReviewDialog } = reviewSlice.actions

export default reviewSlice.reducer