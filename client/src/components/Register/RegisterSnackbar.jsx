import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"

import { setRegistrationStatus } from "../../app/slices/userSlice"

function SlideTransition(props) {
	return <Slide {...props} direction="left" />
}

const RegisterSnackbar = () => {
	const dispatch = useDispatch()
	const registrationStatus = useSelector((state) => state.user.registrationStatus)

	return (
		<>
			<Snackbar
				open={registrationStatus === true || registrationStatus === false ? true : false}
				anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
				TransitionComponent={SlideTransition}
				autoHideDuration={4500}
				onClose={() => dispatch(setRegistrationStatus(null))}
			>
				<Alert severity={registrationStatus ? "success" : "error"}>
					<AlertTitle>
						{registrationStatus ? "Registration Successful" : "Registration Failed"}
					</AlertTitle>
					{registrationStatus
						? "You can now login with your credentials"
						: "One or more highlighted field(s) are duplicates - please change them"}
				</Alert>
			</Snackbar>
		</>
	)
}

export default RegisterSnackbar
