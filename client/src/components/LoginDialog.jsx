import {
	Alert,
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
	Tooltip,
} from "@mui/material"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setShowLoginDialog } from "../app/slices/userSlice"
import { useLoginMutation } from "../app/services/userApi"
import { useLazyGetUserByIdQuery } from "../app/services/userApi"
import { setUserId, setUserDetail, setIsLoggedIn } from "../app/slices/userSlice"

const LoginDialog = () => {
	const dispatch = useDispatch()
	const showLoginDialog = useSelector((state) => state.user.showLoginDialog)
	const userId = useSelector((state) => state.user.userId)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [alert, setAlert] = useState("")

	const [showPassword, setShowPassword] = useState(false)

	const [login] = useLoginMutation()
	const [getUserById] = useLazyGetUserByIdQuery()

	const handleClickOpen = () => {
		dispatch(setShowLoginDialog(true))
	}

	const handleClose = () => {
		dispatch(setShowLoginDialog(false))
	}

	const handleLogin = () => {
		login({ username, password })
			.unwrap()
			.then((response) => {
				console.log(response)
				switch (response.message) {
					case "Login Success":
						setAlert("")
						dispatch(setUserId(response.userId))
						getUserById({ id: response.userId })
							.unwrap()
							.then((data) => {
								dispatch(setUserDetail(data))
								dispatch(setIsLoggedIn(true))
								localStorage.setItem("user", JSON.stringify(data))
								handleClose()
							})

						break
					case "Incorrect Password":
						setAlert("Incorrect Password")
						break
					case "User not found":
						setAlert("User not found")
						break
				}
			})
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
						variant="login"
						id="username"
						type="text"
						margin="dense"
						fullWidth
						error={alert === "User not found"}
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
						variant="login"
						id="password"
						margin="dense"
						fullWidth
						error={alert === "User not found" || alert === "Incorrect Password"}
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<Tooltip title={showPassword ? "Hide password" : "Show password"}>
									<IconButton onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<VisibilityRoundedIcon />
										) : (
											<VisibilityOffRoundedIcon />
										)}
									</IconButton>
								</Tooltip>
							</InputAdornment>
						}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</DialogContent>
				{alert !== "" && (
					<Alert severity="error" sx={{ mx: 1 }}>
						{alert}
					</Alert>
				)}
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
