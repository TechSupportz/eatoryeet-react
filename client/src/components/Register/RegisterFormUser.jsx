import { Box, FilledInput, Grid, InputLabel } from '@mui/material';
import React from 'react';

const RegisterFormUser = () => {
  return (
		<Box>
			<Grid container spacing={5}>
				<Grid item md={4}>
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
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3}>
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
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item md={3}>
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
						fullWidth
						error={alert === "User not found"}
						sx={{ mb: "1em" }}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
			</Grid>
		</Box>
  )
};

export default RegisterFormUser;
