const express = require("express")
const cors = require("cors")

const restaurantController = require("./controllers/restaurantController")
const userController = require("./controllers/userController")
const favouriteController = require("./controllers/favouriteController")
const categoryController = require("./controllers/categoryController")
const reviewController = require("./controllers/reviewController")
const hoursController = require("./controllers/hoursController")

const app = express()

app.use(express.static("./public"))
app.use(express.json()) 
app.use(cors())

app.route("/users").get(userController.getAllUsers)
app.route("/user/:id").put(userController.updateUser)
app.route("/user/:id").delete(userController.deleteUser)
app.route("/register").post(userController.addUser)
app.route("/login").get(userController.userLogin)

app.route("/restaurants").get(restaurantController.getAllRestaurants)

app.route("/hours/restaurant/:id").get(hoursController.getHoursByRestaurant)

app.route("/category/:id").get(categoryController.getRestaurantCategories)

app.route("/favourites").get(favouriteController.getAllFavourites)
app.route("/favourites/user/:id").get(favouriteController.getUserFavourites)
app.route("/favourites/restaurant/:id").get(favouriteController.getTotalRestaurantFavourites)
app.route("/favourites").post(favouriteController.addFavourite)
app.route("/favourites/:id").delete(favouriteController.deleteFavourite)

app.route("/reviews").get(reviewController.getAllReviews)
app.route("/reviews/:id").get(reviewController.getReviewsByRestaurant)
app.route("/reviews").post(reviewController.addReview)
app.route("/reviews/:id").put(reviewController.updateReview)
app.route("/reviews/:id").delete(reviewController.deleteReview)



app.listen(8080, () => console.log("web server running @ http://localhost:8080"))