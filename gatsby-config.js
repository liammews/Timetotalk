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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Timetotalk`,
        short_name: `Timetotalk`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#66E0FF`,
        display: `standalone`,
        icon: `./src/images/favicon64.png`,
        theme_color_in_head: false,
      },
  },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
  ],
}
