import { Box, Button, Typography } from "@mui/material"
import React from "react"

const SearchBar = () => {
	return (
		<Box my={5} display="flex" justifyContent="space-between">
			<Typography fontWeight="medium" fontSize="2em">
				Restaurants
			</Typography>
			<Button
				variant="contained"
				//disabled={!IsLoggedIn}
				mr={0}
				ml="auto"
				sx={{ px: 5 }}
				//onClick={handleAddReview}
			>
				Hello
			</Button>
		</Box>
	)
}

export default SearchBar
