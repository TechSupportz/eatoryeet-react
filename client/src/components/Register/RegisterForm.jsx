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
} from "@mui/material"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setShowLoginDialog, setRegistrationStatus } from "../../app/slices/userSlice"
import { useRegisterMutation } from "../../app/services/userApi"

const RegisterForm = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [gender, setGender] = useState("")
	const [phoneNum, setPhoneNum] = useState("")
	const [address, setAddress] = useState("")

	const [allFilled, setAllFilled] = useState(false)
	const [duplicate, setDuplicate] = useState(false)

	const [showPassword, setShowPassword] = useState(false)


	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const phoneNumFormat = /[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/

	const navigate = useNavigate()
	const [register, result] = useRegisterMutation()
	const dispatch = useDispatch()

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
		<Box mt="2%" mx="5%">
			<Grid container item spacing={{ xs: 0.5, md: 1.5 }}>
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
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Grid>
				<Grid
					item
					md={3}
					xs={12}
					ml="auto"
					mt={2}
					mb={5}
					display={
						!phoneNum.match(phoneNumFormat) ||
						username.length > 30 ||
						!email.match(emailFormat) ||
						password.length < 8 ||
						!allFilled
							? "none"
							: "flex"
					}
				>
					<Button fullWidth size="large" variant="contained" onClick={handleSubmit}>
						Register
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default RegisterForm
