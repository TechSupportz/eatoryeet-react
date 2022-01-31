import { Box, Button, Link, Typography } from "@mui/material"
import React from "react"
import EditProfileForm from "../components/profile/EditProfileForm"

import { useSelector, useDispatch } from "react-redux"
import { setShowLoginDialog } from "../app/slices/userSlice"

const Profile = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
	const dispatch = useDispatch()

	return (
		<Box ml={5} mr={5}>
			{isLoggedIn ? (
				<EditProfileForm />
			) : (
				<>
					<Typography fontWeight="medium" variant="h1">
						Woah, woah, woah
					</Typography>
					<br />
					<Typography fontWeight="medium" variant="h2">
						Slow down there, buddy
					</Typography>
					<br />
					<br />
					<Typography fontWeight="medium" variant="h3">
						You need a account to access this page
					</Typography>
					<br />
					<br />
					<Link fontSize="1.5em" href="/">
						Click this to go to home page
					</Link>
					<br />
					<br />
					<Link fontSize="1.5em" href="/register">
						Click this to make a new account
					</Link>
					<br />
				</>
			)}
		</Box>
	)
}

export default Profile
