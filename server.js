const express = require("express")
const restaurantController = require("./controllers/restaurantController")
const userController = require("./controllers/userController")

const app = express()

app.use(express.static("./public"))
app.use(express.json()) 

app.route("/restaurants").get(restaurantController.getAllRestaurants)

app.route("/users").get(userController.getAllUsers)
app.route("/register").post(userController.addUser)
app.route("/login").post(userController.userLogin)


app.listen(8080, () => console.log("web server running @ http://localhost:8080"))


