import { Box, FilledInput, InputLabel } from "@mui/material"
import React from "react"

const RegisterForm = () => {
	return (
		<Box mt="5%" mx="5%">
			<InputLabel
				sx={{ color: "black", fontSize: "1.15em", ml: "0.5%", mb: "1%" }}
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
				error={alert === "User not found"}
				sx={{ mb: "1em", width: "300px" }}
				onChange={(e) => setUsername(e.target.value)}
			/>
		</Box>
	)
}

export default RegisterForm
