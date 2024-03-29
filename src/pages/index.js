import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "View Teams",
    url: "rosters",
    description:
      "Overveiw of all the rosters in the nfl. Work in progress.",
  },
  {
    text: "Locations",
    url: "locations",
    description:
      "An overview of all the teams in the nfl",
  },
  {
    text: "Big Board",
    url: "big-board",
    description:
      "Big board of next years 50 best rookies. Here you will have the opportunity to add a player to your  bigboard. You will also have the opportunity to move them up or down your list. ",
  },
  {
    text: "Rookie Team of the season",
    url: "team-of-year",
    description:
      "Current team of the year in the NFL.",
  },
]


const subLinks = [
  { text: "LinkedIn", url: "https://www.linkedin.com/in/victor-w-t-norris-b58336107/" },
  {
    text: "GitHub",
    url: "https://github.com/vwnorris",
  }
]

// The URL of the API you want to fetch from
const apiUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/03/roster';

// Using the Fetch API to get data
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Log the data
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
    <StaticImage
      src="../images/NFLlogo.png"
      width={128}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="NFL Logo"
      style={{ marginBottom: `var(--space-3)` }}
      placeholder="none"
    />

      <h1>
        Welcome to <b>NFL Dashboard!</b>
      </h1>

    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {subLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== subLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
