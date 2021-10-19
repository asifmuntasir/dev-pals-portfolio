/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp', 
    {
      resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/projects/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `notes`,
    //     path: `${__dirname}/src/members/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
  ],
  siteMetadata: {
    title: 'DevPals',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 DevPals',
    contact: 'devpals@gamil.com'
  },
}
