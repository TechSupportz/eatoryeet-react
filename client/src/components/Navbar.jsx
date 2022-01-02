import React from "react"
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	useScrollTrigger,
	Slide,
	Stack,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate, useLocation } from "react-router-dom"

const pages = [
	{
		pageTitle: "Home",
		pageUrl: "/",
	},
	{
		pageTitle: "About us",
		pageUrl: "/about",
	},
	{
		pageTitle: "Favourites",
		pageUrl: "/favourite",
	},
]
const settings = ["Profile", "Logout"]

function HideOnScroll(props) {
	const { children, window } = props
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const navigate = useNavigate()
	const location = useLocation()
	let currentPath = location.pathname.split("/")[1]

	switch (currentPath) {
		case "":
			currentPath = "Home"
			break
		case "about":
			currentPath = "About us"
			break
		case "favourite":
			currentPath = "Favourites"
			break
		default:
			currentPath = ""
	}
	

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = (pageUrl) => {
		navigate(pageUrl)
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<HideOnScroll>
			<AppBar position="static" color="" sx={{ boxShadow: 0, mt: 2 }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
						>
							<img width={200} height={80} src="/assets/Logo.svg" alt="logo" />
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => {
									const { pageTitle, pageUrl } = page

									return (
										<MenuItem key={pageTitle} onClick={() => handleCloseNavMenu(pageUrl)}>
											<Typography textAlign="center">{pageTitle}</Typography>
										</MenuItem>
									)
								})}
							</Menu>
						</Box>
						<Box
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							<img width={150} height={80} src="/assets/Logo.svg" alt="logo" />
						</Box>
						<Stack
							direction={"row"}
							spacing={4}
							ml={5}
							sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
						>
							{pages.map((page) => {
								const { pageTitle, pageUrl } = page

								return (
									<Button
										className="nav-link"
										disableRipple
										style={{
											textTransform: "none",
											backgroundColor: "transparent",
											transition: "font-weight 0.15s jump-start"
											
										}}
										variant={currentPath === pageTitle ? "textBold" : "text"}
										size="large"
										key={pageTitle}
										onClick={() => handleCloseNavMenu(pageUrl)}
										sx={{
											my: 2,
											color: "black",
											
											fontSize: "1.2rem",
											backgroundColor: "transparent"
										}}
									>
										{pageTitle}
									</Button>
								)
							})}
						</Stack>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}

export default Navbar
