const express = require("express")
const restaurantController = require("./controllers/restaurantController")
const userController = require("./controllers/userController")
const favouriteController = require("./controllers/favouriteController")

const app = express()

app.use(express.static("./public"))
app.use(express.json()) 

app.route("/restaurants").get(restaurantController.getAllRestaurants)

app.route("/users").get(userController.getAllUsers)
app.route("/register").post(userController.addUser)
app.route("/login").get(userController.userLogin)
app.route("/update/:id").put(userController.updateUser)
app.route("/delete/:id").delete(userController.deleteUser)

app.route("/favourites").get(favouriteController.getAllFavourites)
app.route("/favourites/user/:id").get(favouriteController.getUserFavourites)
app.route("/favourites/restaurant/:id").get(favouriteController.getTotalRestaurantFavourites)
app.route("/favourites").post(favouriteController.addFavourite)
app.route("/favourites/:id").delete(favouriteController.deleteFavourite)


app.listen(8080, () => console.log("web server running @ http://localhost:8080"))