import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import RookieCard from "../components/RookieCard"

const rook1 = {
  pictureURL: "https://assets.morningconsult.com/wp-uploads/2022/01/12105451/GettyImages-1363526906-scaled.jpg",
  name: "Mahomes",
  position: "QB",
  collegeTeam: "Texas Tech",
  team: "Chiefs"
}
const n = 50


const BigBoard = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMongodbNflAppProspects {
        edges {
          node {
            player
            position
            team
            image
          }
        }
      }
    }
  `)

  const rookieCards = data.allMongodbNflAppProspects.edges.map((edge, i) => (
    <RookieCard key={i} id={i+1} rookie={edge.node} />
  ))
  
  return (
    <Layout>
      <h1>Hi from the 2024 Big Board!</h1>
      {rookieCards}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BigBoard
