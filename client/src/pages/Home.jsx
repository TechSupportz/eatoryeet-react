import { Box } from "@mui/material"
import Featured from "../components/Featured"
import RestaurantGrid from "../components/RestaurantGrid"
import RestaurantCard from "../components/RestaurantCard"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setRestaurants } from "../redux/slices/restaurantSlice"
import axios from "axios"

const Home = () => {
	const restaurantList = useSelector((state) => state.restaurant.restaurants)
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get("http://localhost:8080/restaurant")
			.then((res) => {
				dispatch(setRestaurants(res.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<Box mx={{xs: "2.5%", md: "5%"}}>
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
