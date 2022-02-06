import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react"

import { useNavigate } from "react-router-dom"

const About = () => {
	const navigate = useNavigate()

	return (
		<Box mx="5%">
			<Stack direction="row" justifyContent="space-between">
				<Box width="50%">
					<Typography fontSize="3em" fontWeight="medium">
						Welcome to
					</Typography>
					<Typography fontSize="5em" fontFamily="Tumbly">
						EatOrYeet
					</Typography>
					<br />
					<Typography fontSize="2em" fontWeight="regular">
						We are a restaurant review website so that you can avoid being like John and
						instead enjoy your food!
					</Typography>
					<br />
					<Button variant="contained" onClick={() => navigate("/register")}>
						Sign up now!
					</Button>
				</Box>

				<Card variant="clean" sx={{height: "100%"}}>
					<CardContent>
						<Typography fontSize="4em" fontFamily="Tumbly">
							Yeet
						</Typography>
						<Typography fontSize="2em" fontFamily="Quicksand">
							Definition:
						</Typography>
						<Typography fontSize="2em" fontFamily="Quicksand">
							to hurl or move forcefully;
						</Typography>
						<Typography fontSize="1.5em" fontFamily="Quicksand">
							"John yeeted his food because he didn't like it"
						</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Box>
	)
}

export default About
