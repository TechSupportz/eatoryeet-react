import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setShowLoginDialog } from "../app/slices/userSlice"

const LoginDialog = () => {
	const dispatch = useDispatch()
	const showLoginDialog = useSelector((state) => state.user.showLoginDialog)

	const handleClickOpen = () => {
		dispatch(setShowLoginDialog(true))
	}

	const handleClose = () => {
		dispatch(setShowLoginDialog(false))
	}

	return (
		<Box>
			<Dialog open={showLoginDialog} onClose={handleClose}>
				<DialogTitle>EatOrYeet</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Log your ass in here to get started!
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Username"
						type="email"
						fullWidth
						variant="outlined"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default LoginDialog
