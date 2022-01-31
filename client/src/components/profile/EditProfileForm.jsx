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

import { setShowLoginDialog, setRegistrationStatus } from "../../app/slices/userSlice"
import { useRegisterMutation } from "../../app/services/userApi"

const EditProfileForm = () => {
	const userDetail = useSelector((state) => state.user.userDetail)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [gender, setGender] = useState("X")
	const [phoneNum, setPhoneNum] = useState("")
	const [address, setAddress] = useState("")

	const [profilePic, setProfilePic] = useState("")
	const [uploadImage, setUploadImage] = useState()

	const [allFilled, setAllFilled] = useState(false)
	const [duplicate, setDuplicate] = useState(false)

	const [showPassword, setShowPassword] = useState(false)

	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const phoneNumFormat = /[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/

	const navigate = useNavigate()
	const [register, result] = useRegisterMutation()
	const dispatch = useDispatch()

	useEffect(() => {
		setUsername(userDetail.username)
		setEmail(userDetail.email)
		setFirstName(userDetail.first_name)
		setLastName(userDetail.last_name)
		setGender(userDetail.gender)
		setPhoneNum(userDetail.phone_number)
		setAddress(userDetail.address)

		setPassword(localStorage.getItem("Upass"))

		setProfilePic(`http://localhost:8080${userDetail.profile_pic}`)
	}, [userDetail])

	useEffect(() => {
		if (
			(username ||
				password ||
				email ||
				firstName ||
				lastName ||
				gender ||
				phoneNum ||
				address) !== "" &&
			(
				username ||
				password ||
				email ||
				firstName ||
				lastName ||
				gender ||
				phoneNum ||
				address
			).trim()
		) {
			setAllFilled(true)
		} else {
			setAllFilled(false)
		}
		console.log(allFilled)
	}, [username, password, email, firstName, lastName, gender, phoneNum, address])

	const handleSubmit = () => {
		console.log({
			username,
			password,
			email,
			firstName,
			lastName,
			gender,
			phoneNum,
			address,
		})
		register({ username, password, email, firstName, lastName, gender, phoneNum, address })
			.unwrap()
			.then((response) => {
				switch (response.errno) {
					case undefined:
						dispatch(setRegistrationStatus(true))
						navigate("/")
						dispatch(setShowLoginDialog(true))
						break
					case 1062:
						dispatch(setRegistrationStatus(false))
						setDuplicate(true)
						break
					default:
						console.log("some other error")
						break
				}
			})
	}

	return (
		<>
			<Grid container spacing={3.5} direction="row" marginTop={{ xs: "0%", md: "10%" }}>
				<Grid item xs md={3}>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={3}
					>
						<Avatar
							sx={{ width: 200, height: 200, border: "1.5px solid #e0e0e0" }}
							src={profilePic}
						/>
						<label htmlFor="profile-pic">
							<Input
								type="file"
								accept="image/jpg"
								multiple
								id="profile-pic"
								sx={{ display: "none" }}
								onChange={(e) => {
									try {
										setProfilePic(URL.createObjectURL(e.target.files[0]))
										setUploadImage(e.target.files[0])
									} catch (err) {
										console.log(err)
									}
								}}
							/>
							<Button variant="contained" component="span" fullWidth>
								Upload a Profile Picture
							</Button>
						</label>
					</Stack>
				</Grid>
				<Grid
					container
					spacing={{ xs: 0.5, md: 1.5 }}
					item
					maxWidth={{ xs: "100%", md: "75%" }}
				>
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
					<Grid item md={5} xs={12}>
						<InputLabel
							sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
							htmlFor="password"
						>
							Password:
						</InputLabel>
						<FilledInput
							variant="login"
							id="password"
							margin="dense"
							fullWidth
							error={password.length < 8}
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<Tooltip
										title={showPassword ? "Hide password" : "Show password"}
									>
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
					<Grid item md={3} xs={12} ml="auto" mt={2} mb={5}>
						<Button
							fullWidth
							size="large"
							variant="contained"
							disabled={
								!phoneNum.match(phoneNumFormat) ||
								username.length > 30 ||
								!email.match(emailFormat) ||
								password.length < 8 ||
								!allFilled
									? true
									: false
							}
							onClick={handleSubmit}
						>
							Save changes
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default EditProfileForm
