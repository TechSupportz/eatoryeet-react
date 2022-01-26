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
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setShowLoginDialog } from "../app/slices/userSlice"
import { useLoginMutation } from "../app/services/userApi"
import { setUserId } from "../app/slices/userSlice"

const LoginDialog = () => {
	const dispatch = useDispatch()
	const showLoginDialog = useSelector((state) => state.user.showLoginDialog)
	const userId = useSelector((state) => state.user.userId)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [showPassword, setShowPassword] = useState(false)

	const [login, result] = useLoginMutation()

	const handleClickOpen = () => {
		dispatch(setShowLoginDialog(true))
	}

	const handleClose = () => {
		dispatch(setShowLoginDialog(false))
	}

	const handleLogin = () => {
		login({ username, password })
			.unwrap()
			.then((response) => console.log(response))

		
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
						onChange={(e) => setUsername(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions sx={{ display: "flex", justifyContent: "center", my: 1.5 }}>
					<Button
						variant="contained"
						size="large"
						sx={{ width: "40%" }}
						onClick={handleLogin}
					>
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}

export default LoginDialog
