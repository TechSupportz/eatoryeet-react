import { Box, Stack, Typography } from "@mui/material"
import React from "react"

const RegisterHeader = () => {
	return (
		<Box>
			<Stack spacing="0.25em" alignItems={{ xs: "center", md: "flex-start" }}>
				<Typography fontSize={{ xs: "4vw", md: "3vw" }} fontWeight="medium">
					Register now to join the
				</Typography>
				<Typography fontSize={{ xs: "5vw", md: "4vw" }} fontFamily="Tumbly">
					EatOrYeet Community
				</Typography>
			</Stack>
		</Box>
	)
}

export default RegisterHeader
