module.exports = {
  siteMetadata: {
    title: "Timetotalk",
    titleTemplate: "%s",
    description:
      "A weekly email reminder to check in with yourself, and a friend.",
    url: "https://timetotalk.me", // No trailing slash allowed!
    image: "https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max", // Path to your image you placed in the 'static' folder
    twitterUsername: "@timetalk_me",
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vg9dps8n',
        dataset: 'production',
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
  ],
}
