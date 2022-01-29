import { Box, Link, Typography } from "@mui/material"
import RegisterForm from "../components/Register/RegisterForm"
import RegisterHeader from "../components/Register/RegisterHeader"

import { useSelector } from "react-redux"

const Register = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

	return (
		<Box ml={5} mr={5}>
			{!isLoggedIn ? (
				<>
					<RegisterHeader />
					<RegisterForm />
				</>
			) : (
				<>
					<Typography fontWeight="medium" variant="h1">
						Woah, woah, woah
					</Typography>
					<br />
					<Typography fontWeight="medium" variant="h2">
						How did you end up here?
					</Typography>
					<br />
					<Typography fontWeight="medium" variant="h3">
						You are already logged in
					</Typography>
					<br />
					<br />
					<Link fontSize="1.5em" href="/">
						Click this or use the navbar to go to home page
					</Link>
					<br />
				</>
			)}
		</Box>
	)
}

export default Register
