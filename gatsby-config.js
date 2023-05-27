
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `NFL Dashboard`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Victor Norris`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/barLogo.png`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `NFL_app`, 
        collection: `Prospects`,
        connectionString: 'mongodb+srv://victor123:victor123@cluster0.0bpezxd.mongodb.net/NFL_app?retryWrites=true&w=majority'
        }
    },
    {
      // API sourcer in gatsby
      resolve: 'gatsby-source-apiserver',
      options: {
        url: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/03/roster`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        name: `apiData`,
        verboseOutput: true, // For debugging purposes
      },
    },
  ],
}
