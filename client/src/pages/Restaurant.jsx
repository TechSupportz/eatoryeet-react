import { Box, Card, CardMedia, Rating, Stack, Typography } from "@mui/material"
import { width } from "@mui/system"
import React from "react"
import Tilt from "react-parallax-tilt"

const Restaurant = () => {
	return (
		<Box ml={5} mr={5}>
			<Stack direction="row" spacing={4}>
				<Tilt
					style={{ width: "40%" }}
					tiltMaxAngleX={3}
					tiltMaxAngleY={3}
					transitionSpeed={5000}
				>
					<Card variant="clean" sx={{ width: "100%", height: 500 }}>
						<CardMedia
							component="img"
							image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
							sx={{ height: "100%" }}
						/>
					</Card>
				</Tilt>

				<Stack direction="column" spacing={0.5}>
					<Typography fontSize="2.5em" fontWeight="bold">
						Restaurant Name
					</Typography>
					<Rating
						name="avg-rating"
						defaultValue={3.5}
						size="large"
						precision={0.5}
						readOnly
					/>
					<Typography fontSize="1.5em" fontWeight="semiBold">
						Category Name
					</Typography>
					<br />
					<Stack direction="column">
						<Typography fontSize="1.2em" fontWeight="medium">
							Address:
						</Typography>
						<Typography fontSize="1.2em" fontWeight="regular">
							Lorem Ipsum Road, Singapore 279103
						</Typography>
					</Stack>
					<Stack direction="column">
						<Typography fontSize="1.2em" fontWeight="medium">
							Hours:
						</Typography>
						<Typography fontSize="1.2em" fontWeight="regular">
							Open Now • 11:00 AM - 11:00 PM
						</Typography>
					</Stack>
					<br />
					<Stack direction="row" spacing={1}>
						<Typography fontSize="1.2em" fontWeight="medium">
							Phone:
						</Typography>
						<Typography fontSize="1.2em" fontWeight="regular">
							+65 9123 4567
						</Typography>
					</Stack>
					<Stack direction="row" spacing={1}>
						<Typography fontSize="1.2em" fontWeight="medium">
							Email:
						</Typography>
						<Typography fontSize="1.2em" fontWeight="regular">
							loremipsum@gmail.com
						</Typography>
					</Stack>
					<Card>
						<CardMedia component="img" image="" />
					</Card>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Restaurant
