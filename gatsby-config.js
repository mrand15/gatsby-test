module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `98onyj2s8rrk`,
        accessToken: `d2ff13d7f48d6e23d67e7c6f9f9234d0a8a1226f868ef02793644bf6c68d5381`,
      },
    },
  ],
}
