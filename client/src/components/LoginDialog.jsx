import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FilledInput,
	FormControlLabel,
	FormLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	TextField,
} from "@mui/material"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setShowLoginDialog } from "../app/slices/userSlice"

const LoginDialog = () => {
	const dispatch = useDispatch()
	const showLoginDialog = useSelector((state) => state.user.showLoginDialog)

	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickOpen = () => {
		dispatch(setShowLoginDialog(true))
	}

	const handleClose = () => {
		dispatch(setShowLoginDialog(false))
	}

	return (
		<Box>
			<Dialog open={showLoginDialog} onClose={handleClose} fullWidth maxWidth="xs">
				<DialogTitle>
					<Box my={1.5} sx={{ display: "flex", justifyContent: "center" }}>
						<img src="/assets/EatOrYeet.svg" alt="" />
					</Box>
				</DialogTitle>

				<DialogContent>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "1%", mb: "2%" }}
						htmlFor="username"
					>
						Username:
					</InputLabel>
					<FilledInput
						autoFocus
						id="username"
						margin="dense"
						type="text"
						fullWidth
						sx={{ mb: "1em" }}
					/>

					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "1%", mb: "2%" }}
						htmlFor="password"
					>
						Password:
					</InputLabel>
					<FilledInput
						id="password"
						margin="dense"
						type={showPassword ? "text" : "password"}
						fullWidth
						endAdornment={
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? (
										<VisibilityRoundedIcon />
									) : (
										<VisibilityOffRoundedIcon />
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				</DialogContent>
				<DialogActions
					sx={{ display: "flex", justifyContent: "center", my: 1.5}}
					
				>
					
						<Button variant="contained" size="large" sx={{width: "40%"}} >Login</Button>
					
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default LoginDialog
