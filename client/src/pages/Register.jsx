import { Box } from "@mui/material"
import RegisterForm from "../components/Register/RegisterForm"
import RegisterHeader from "../components/Register/RegisterHeader"

const Register = () => {
	return (
		<Box ml={5} mr={5}>
			<RegisterHeader />
			<RegisterForm />
		</Box>
	)
}

export default Register
