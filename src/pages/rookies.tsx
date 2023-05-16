import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import RookieCard from "../components/RookieCard"

const rook1 = {
  pictureURL: "https://assets.morningconsult.com/wp-uploads/2022/01/12105451/GettyImages-1363526906-scaled.jpg",
  name: "Mahomes",
  position: "QB",
  collegeTeam: "Texas Tech",
  team: "Chiefs"
}

const Rookies = () => (
  <Layout>
    <h1>Hi from the Rookies!</h1>
    <h2>Round 1:</h2>
    <RookieCard rookie={rook1}/>
    <h2>Round 2:</h2>
    <h2>Round 3:</h2>
    <h2>Round 4:</h2>
    <h2>Round 5:</h2>
    <h2>Round 6:</h2>
    <h2>Round 7:</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default Rookies
