import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/recipes">Recipes</Link>
        <Link to="/dashboard/recipes/1">Recipes Details</Link>
        <Link to="/dashboard/profile">Profile</Link>
    </>
  )
}

export default Navbar