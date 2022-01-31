import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"

import { setDeleteStatus } from "../../app/slices/userSlice"

function SlideTransition(props) {
	return <Slide {...props} direction="left" />
}

const EditProfileSnackbar = () => {
	const dispatch = useDispatch()
	const deleteStatus = useSelector((state) => state.user.deleteStatus)

	return (
		<>
			<Snackbar
				open={deleteStatus === true || deleteStatus === false ? true : false}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				TransitionComponent={SlideTransition}
				autoHideDuration={4500}
				onClose={() => dispatch(setDeleteStatus(null))}
			>
				<Alert severity={deleteStatus ? "success" : "error"}>
					<AlertTitle>
						{deleteStatus ? "Account Deleted Successful" : "Account Deletion Failed"}
					</AlertTitle>
					{deleteStatus
						? "We are sad to see you go 😢"
						: "Something went wrong - Try again later"}
				</Alert>
			</Snackbar>
		</>
	)
}

export default EditProfileSnackbar
