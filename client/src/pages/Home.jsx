import { Box } from "@mui/material"
import Featured from "../components/Featured"
import RestaurantCard from "../components/RestaurantCard"

const Home = () => {
	return (
		<Box mx={{xs: "2.5%", md: "5%"}}>
			<Featured />
			<RestaurantCard />
			<br />
			<br />
			<br />
			<br />
		</Box>
	)
}

export default Home
