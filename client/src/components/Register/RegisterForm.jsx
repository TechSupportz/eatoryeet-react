import {
	Box,
	FilledInput,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Tooltip,
} from "@mui/material"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"

import { useState } from "react"
import { useEffect } from "react"

const RegisterForm = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [gender, setGender] = useState("")
	const [phoneNum, setPhoneNum] = useState()
	const [showPassword, setShowPassword] = useState(false)

	return (
		<Box mt="5%" mx="5%">
			<Grid container item spacing={1.5}>
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
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
					>
						First Name:
					</InputLabel>
					<FilledInput
						id="firstName"
						type="text"
						margin="dense"
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
					>
						Last Name:
					</InputLabel>
					<FilledInput
						id="lastName"
						type="text"
						margin="dense"
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
					>
						Email:
					</InputLabel>
					<FilledInput
						id="email"
						type="email"
						margin="dense"
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
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
						htmlFor="username"
					>
						Phone Number:
					</InputLabel>
					<FilledInput
						id="email"
						type="number"
						margin="dense"
						fullWidth
						error={alert === "User not found"}
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
				</Grid>

				<Grid item md={7} xs={12}>
					<InputLabel
						sx={{ color: "black", fontSize: "1.15em", ml: "3px", mb: "5px" }}
						htmlFor="username"
					>
						Address:
					</InputLabel>
					<FilledInput
						id="address"
						type="text"
						margin="dense"
						fullWidth
						multiline
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default RegisterForm
