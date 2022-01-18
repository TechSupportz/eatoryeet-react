import { Box } from "@mui/material"
import Featured from "../components/Featured"
import RestaurantGrid from "../components/RestaurantGrid"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRestaurants } from "../redux/slices/restaurantSlice"

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRestaurants())
	}, [])

	return (
		<Box mx={{ xs: "2.5%", md: "5%" }}>
			<Featured />
			<RestaurantGrid />
			<br />
			<br />
			<br />
			<br />
		</Box>
	)
}

export default Home
