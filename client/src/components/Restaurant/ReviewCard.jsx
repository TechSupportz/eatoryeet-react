import {
	Avatar,
	Box,
	Card,
	CardContent,
	Container,
	Divider,
	IconButton,
	Rating,
	Stack,
	Typography,
} from "@mui/material"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"

import { useSelector } from "react-redux"

const ReviewCard = ({ reviewInfo }) => {
	const userId = useSelector((state) => state.user.userId)

	return (
		<Box display="flex" justifyContent="center" >
			<Card
				variant="cleanNoHover"
				sx={{ width: "100%", height: "20%", px: "20px", py: "15px" }}
			>
				<CardContent>
					<Stack direction="row" justifyContent="space-between">
						<Stack
							direction="row"
							spacing={3}
							divider={<Divider orientation="vertical" flexItem />}
						>
							<Stack direction="column" alignItems="center" spacing={1}>
								<Avatar
									sx={{ width: "125px", height: "125px" }}
									src={`http://localhost:8080${reviewInfo.profile_pic}`}
								/>
								<Typography fontSize="1.25em" fontWeight="medium">
									{reviewInfo.username}
								</Typography>
							</Stack>
							<Stack direction="column" spacing={0.5}>
								<Rating
									name="rating"
									defaultValue={reviewInfo.rating}
									size="small"
									precision={0.5}
									readOnly
								/>

								<Typography fontSize="1.5em" fontWeight="medium">
									{reviewInfo.title}
								</Typography>

								<Typography fontSize="1.15em" fontWeight="regular" width="100%">
									{reviewInfo.detail}
								</Typography>
							</Stack>
						</Stack>
						<Stack direction="column" justifyContent="space-between">
							<Typography
								fontSize="0.9em"
								fontWeight="medium"
								color="hsl(0, 0%, 50%)"
							>
								{reviewInfo.is_edited
									? `Date Updated: ${reviewInfo.date_posted}`
									: `Date Posted: ${reviewInfo.date_posted}`}
							</Typography>

							{reviewInfo.user_id === userId && (
								<Stack direction="row" justifyContent="flex-end">
									<IconButton>
										<EditRoundedIcon></EditRoundedIcon>
									</IconButton>
									<IconButton>
										<DeleteRoundedIcon></DeleteRoundedIcon>
									</IconButton>
								</Stack>
							)}
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Box>
	)
}

export default ReviewCard
