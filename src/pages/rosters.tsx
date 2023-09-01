import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import PlayerCard from "../components/PlayerCard";
import { Button, Grid } from "@mui/material";

const Rosters = () => {
    const rosterData = useStaticQuery(graphql`
    query MyQuery2 {
      apiNflData {
        athletes {
          position
          items {
            displayName
            college{
              name
            }
            headshot{
              href
            }
            jersey
            position {
                abbreviation
            }
          }
        }
      }
    }
  `)

  const [og, dg, sg] = rosterData.apiNflData.athletes;
  console.log(og)

  const offense = og.items.map((athlete) => (
    <PlayerCard athlete={athlete} />
  ));

  const defense = dg.items.map((athlete) => (
    <PlayerCard athlete={athlete} />
  ));

  const specialTeams = sg.items.map((athlete) => (
    <PlayerCard athlete={athlete} />
  ));

    
  return(
    <Layout>
      <h1>Hi from the Rosters Page!</h1>
      <h2>Chicago Bears</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <h2>Offense:</h2>
          {offense}
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>Defense:</h2>
          {defense}
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>Special Teams:</h2>
          {specialTeams}
        </Grid>
      </Grid>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}


export default Rosters
