const express = require("express")
const restaurantController = require("./controllers/restaurantController")

const app = express()

app.use(express.static("./public"))
app.use(express.json()) 

app.route("/restaurants").get(restaurantController.getAllRestaurants)

app.listen(8080, () => console.log("web server running @ http://localhost:8080"))


