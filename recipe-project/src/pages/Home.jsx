import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Recipes App</h1>
      <p>Discover delicious recipes and manage your profile</p>
      <Link to="/login">Login</Link>
    </>
  )
}

export default Home