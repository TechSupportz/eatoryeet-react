import { createSlice } from "@reduxjs/toolkit"


export const reviewSlice = createSlice({
	name: "review",
	initialState: {
		showReviewDialog: false,
		editId: null,
	},
	reducers: {
		setShowReviewDialog: (state, action) => {
			state.showReviewDialog = action.payload
		},
		setEditId: (state, action) => {
			state.editId = action.payload
		}
	},
})

export const { setShowReviewDialog, setEditId } = reviewSlice.actions

export default reviewSlice.reducer