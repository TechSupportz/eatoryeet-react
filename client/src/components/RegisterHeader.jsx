import { Box, Stack, Typography } from "@mui/material"
import React from "react"

const RegisterHeader = () => {
	return (
		<Box>
			<Stack spacing="0.25em">
				<Typography fontSize="2.5em" fontWeight="medium">
					Register now to join the
				</Typography>
				<Typography fontSize="3em" fontFamily="Tumbly">
					EatOrYeet Community
				</Typography>
			</Stack>
		</Box>
	)
}

export default RegisterHeader
