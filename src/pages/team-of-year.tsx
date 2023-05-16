import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const TeamOfYear = () => (
  <Layout>
    <h1>Hi from the Team of the year Page!</h1>
    <h2>Offense:</h2>
    <h2>Defense:</h2>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default TeamOfYear
