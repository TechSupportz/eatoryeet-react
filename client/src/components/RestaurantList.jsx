import { Grid } from '@mui/material'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = () => {
	return (
		<Grid container spacing={5} justifyContent="center">
			<Grid item>
				<RestaurantCard />				
			</Grid>
			<Grid item>
				<RestaurantCard />				
			</Grid>
			<Grid item>
				<RestaurantCard />				
			</Grid>
		</Grid>
	)
}

export default RestaurantList
