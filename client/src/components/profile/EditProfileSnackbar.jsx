import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"

import { setEditSnackbar } from "../../app/slices/userSlice"

function SlideTransition(props) {
	return <Slide {...props} direction="left" />
}

const EditProfileSnackbar = () => {
	const dispatch = useDispatch()
	const editSnackbar = useSelector((state) => state.user.editSnackbar)

	return (
		<>
			<Snackbar
				open={editSnackbar.status === true || editSnackbar.status === false ? true : false}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				TransitionComponent={SlideTransition}
				autoHideDuration={4500}
				onClose={() => dispatch(setEditSnackbar([null, null]))}
			>
				<Alert severity={editSnackbar.status ? "success" : "error"}>
					<AlertTitle>
						{editSnackbar.status
							? editSnackbar.type === "edit"
								? "Profile Updated"
								: editSnackbar.type === "delete"
								? "Profile Deleted"
								: "Password Changed"
							: editSnackbar.type === "edit"
							? "Profile Update Failed"
							: editSnackbar.type === "delete"
							? "Account Delete Failed"
							: "Password Change Failed"}
					</AlertTitle>
					{editSnackbar.status
						? editSnackbar.type === "edit"
							? "Your profile has been updated. - Please login again"
							: editSnackbar.type === "delete"
							? "Your account has been deleted. - Sorry to see you go😢"
							: "Your password has been changed. - Please login again"
						: editSnackbar.type === "edit"
						? "Something went wrong. - Please try again later"
						: "Something went wrong. - Please try again later"}
				</Alert>
			</Snackbar>
		</>
	)
}

export default EditProfileSnackbar
