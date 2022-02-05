import {
	Alert,
	AlertTitle,
	Box,
	Button,
	FilledInput,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Snackbar,
	Tooltip,
	Avatar,
	Input,
} from "@mui/material"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import {
	setIsLoggedIn,
	setShowLoginDialog,
	setUserId,
	setUserDetail,
	setEditSnackbar,
} from "../../app/slices/userSlice"
import {
	useLoginMutation,
	useRegisterMutation,
	useDeleteUserMutation,
	useUpdateUserMutation,
	useUpdateUserPasswordMutation,
} from "../../app/services/userApi"

const EditProfileForm = () => {
	const userDetail = useSelector((state) => state.user.userDetail)
	const userId = useSelector((state) => state.user.userId)
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [gender, setGender] = useState("X")
	const [phoneNum, setPhoneNum] = useState("")
	const [address, setAddress] = useState("")

	const [allFilled, setAllFilled] = useState(false)
	const [duplicate, setDuplicate] = useState(false)

	const [confirmDelete, setConfirmDelete] = useState(false)

	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const phoneNumFormat = /[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/

	const [currPassword, setCurrPassword] = useState("")
	const [currPasswordErr, setCurrPasswordErr] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [showCurrPassword, setShowCurrPassword] = useState(false)
	const [showNewPasswords, setShowNewPasswords] = useState(false)

	const navigate = useNavigate()
	const [login, result] = useLoginMutation()
	const [deleteUser] = useDeleteUserMutation()
	const [updateUser] = useUpdateUserMutation()
	const [updateUserPassword] = useUpdateUserPasswordMutation()
	const dispatch = useDispatch()

	useEffect(() => {
		setConfirmDelete(false)
		setUsername(userDetail.username)
		setEmail(userDetail.email)
		setFirstName(userDetail.first_name)
		setLastName(userDetail.last_name)
		setGender(userDetail.gender)
		setPhoneNum(userDetail.phone_number)
		setAddress(userDetail.address)
	}, [userDetail])

	useEffect(() => {
		if (
			(username || email || firstName || lastName || gender || phoneNum || address) !== "" &&
			(username || email || firstName || lastName || gender || phoneNum || address).trim()
		) {
			setAllFilled(true)
		} else {
			setAllFilled(false)
		}
		console.log(allFilled)
	}, [username, email, firstName, lastName, gender, phoneNum, address])

	const handleSubmit = () => {
		updateUser({
			userId,
			username,
			email,
			firstName,
			lastName,
			gender,
			phoneNum,
			address,
		})
			.unwrap()
			.then((response) => {
				console.log(response)
				dispatch(setUserId(null))
				dispatch(setUserDetail({}))
				dispatch(setIsLoggedIn(false))
				localStorage.clear()
				dispatch(setEditSnackbar({ status: true, type: "edit" }))
				dispatch(setShowLoginDialog(true))
				navigate("/")
			})
			.catch((error) => {
				dispatch(setEditSnackbar({ status: false, type: "edit" }))
				console.warn(error)
			})
	}

	const handleDeleteConfirmation = () => {
		if (!confirmDelete) {
			setConfirmDelete(true)
		} else {
			deleteUser({ id: userId })
				.unwrap()
				.then((response) => {
					console.log(response)
					dispatch(setUserId(null))
					dispatch(setUserDetail({}))
					dispatch(setIsLoggedIn(false))
					localStorage.clear()
					dispatch(setEditSnackbar({ status: true, type: "delete" }))
					navigate("/")
				})
				.catch((error) => {
					console.log(error)
					dispatch(setEditSnackbar({ status: false, type: "delete" }))
				})
		}
	}

	const handleUpdatePassword = () => {
		login({ username: userDetail.username, password: currPassword })
			.unwrap()
			.then((response) => {
				if (response.message === "Incorrect Password") {
					setCurrPasswordErr("Incorrect Password")
				} else if (response.message === "Login Success") {
					setCurrPasswordErr("")
					updateUserPassword({
						userId,
						password: confirmPassword,
					})
						.unwrap()
						.then((response) => {
							console.log(response)
							dispatch(setUserId(null))
							dispatch(setUserDetail({}))
							dispatch(setIsLoggedIn(false))
							localStorage.clear()
							dispatch(setEditSnackbar({ status: true, type: "password" }))
							navigate("/")
						})
						.catch((error) => {
							console.log(error)
							dispatch(setEditSnackbar({ status: false, type: "password" }))
						})
				}
			})
	}

	return (
		<>
			<Grid container spacing={{ xs: 0.5, md: 1.5 }}>
				<Grid item md={5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
					>
						Username:
					</InputLabel>
					<FilledInput
						autoFocus
						id="username"
						type="text"
						margin="dense"
						fullWidth
						error={duplicate || username.length > 30}
						sx={{ mb: "1em" }}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="firstName"
					>
						First Name:
					</InputLabel>
					<FilledInput
						id="firstName"
						type="text"
						margin="dense"
						fullWidth
						sx={{ mb: "1em" }}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="lastName"
					>
						Last Name:
					</InputLabel>
					<FilledInput
						id="lastName"
						type="text"
						margin="dense"
						fullWidth
						sx={{ mb: "1em" }}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Grid>
				<Grid item md={5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="email"
					>
						Email:
					</InputLabel>
					<FilledInput
						id="email"
						type="email"
						margin="dense"
						fullWidth
						error={duplicate || !email.match(emailFormat)}
						sx={{ mb: "1em" }}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="gender"
					>
						Gender:
					</InputLabel>
					<Select
						id=""
						variant="filled"
						type="gender"
						margin="dense"
						fullWidth
						sx={{ mb: "1em" }}
						value={gender}
						onChange={(e) => setGender(e.target.value)}
					>
						<MenuItem value="M">Male</MenuItem>
						<MenuItem value="F">Female</MenuItem>
						<MenuItem value="O">Others</MenuItem>
						<MenuItem value="X">Prefer not to say</MenuItem>
					</Select>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="phoneNum"
					>
						Phone Number:
					</InputLabel>
					<FilledInput
						id="phoneNum"
						type="tel"
						margin="dense"
						fullWidth
						error={duplicate || !phoneNum.match(phoneNumFormat)}
						sx={{ mb: "1em" }}
						value={phoneNum}
						onChange={(e) => setPhoneNum(e.target.value)}
					/>
				</Grid>

				<Grid item md={7} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="address"
					>
						Address:
					</InputLabel>
					<FilledInput
						id="address"
						type="text"
						margin="dense"
						fullWidth
						multiline
						rows={2.5}
						error={alert === "User not found"}
						sx={{ mb: "1em", py: 0.5 }}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Grid>
				<Grid item md={12} xs={12} ml="auto" mt={2} mb={5}>
					<Stack direction="row-reverse" spacing={5}>
						<Button
							fullWidth
							size="large"
							variant="contained"
							disabled={
								!phoneNum.match(phoneNumFormat) ||
								username.length > 30 ||
								!email.match(emailFormat) ||
								!allFilled
									? true
									: false
							}
							onClick={handleSubmit}
						>
							Save changes
						</Button>
						<Button
							fullWidth
							size="large"
							variant="contained"
							sx={{
								":hover": {
									backgroundColor: "hsl(0, 100%, 40%)",
								},
							}}
							onClick={handleDeleteConfirmation}
						>
							{confirmDelete ? "CLICK AGAIN TO CONFIRM" : "DELETE ACCOUNT"}
						</Button>
					</Stack>
				</Grid>
				<Grid item md={4} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="password"
					>
						Current Password:
					</InputLabel>
					<FilledInput
						variant="login"
						id="currPassword"
						margin="dense"
						fullWidth
						error={currPasswordErr}
						type={showCurrPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<Tooltip
									title={showCurrPassword ? "Hide password" : "Show password"}
								>
									<IconButton
										onClick={() => setShowCurrPassword(!showCurrPassword)}
									>
										{showCurrPassword ? (
											<VisibilityRoundedIcon />
										) : (
											<VisibilityOffRoundedIcon />
										)}
									</IconButton>
								</Tooltip>
							</InputAdornment>
						}
						value={currPassword}
						onChange={(e) => setCurrPassword(e.target.value)}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="password"
					>
						New Password:
					</InputLabel>
					<FilledInput
						variant="login"
						id="newPassword"
						margin="dense"
						fullWidth
						error={newPassword.length < 8}
						type={showNewPasswords ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<Tooltip
									title={showNewPasswords ? "Hide password" : "Show password"}
								>
									<IconButton
										onClick={() => setShowNewPasswords(!showNewPasswords)}
									>
										{showNewPasswords ? (
											<VisibilityRoundedIcon />
										) : (
											<VisibilityOffRoundedIcon />
										)}
									</IconButton>
								</Tooltip>
							</InputAdornment>
						}
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="password"
					>
						Retype New Password:
					</InputLabel>
					<FilledInput
						variant="login"
						id="confirmPassword"
						margin="dense"
						fullWidth
						error={confirmPassword !== newPassword}
						type={showNewPasswords ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<Tooltip
									title={showNewPasswords ? "Hide password" : "Show password"}
								>
									<IconButton
										onClick={() => setShowNewPasswords(!showNewPasswords)}
									>
										{showNewPasswords ? (
											<VisibilityRoundedIcon />
										) : (
											<VisibilityOffRoundedIcon />
										)}
									</IconButton>
								</Tooltip>
							</InputAdornment>
						}
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Grid>
				<Grid item md={6} xs={12} mt={2.5} ml="auto">
					{currPasswordErr !== "" && (
						<Alert severity="error" sx={{ mx: 1 }}>
							{currPasswordErr}
						</Alert>
					)}
				</Grid>
				<Grid item md={6} xs={12} mt={2.5} ml="auto">
					<Tooltip title="Only updates password">
						<Button
							fullWidth
							size="large"
							variant="contained"
							disabled={confirmPassword !== newPassword || newPassword.length < 8 || confirmPassword.length === 0}
							onClick={handleUpdatePassword}
						>
							Change password
						</Button>
					</Tooltip>
				</Grid>
			</Grid>
		</>
	)
}

export default EditProfileForm
