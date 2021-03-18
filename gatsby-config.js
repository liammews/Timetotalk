module.exports = {
  siteMetadata: {
    title: "timetotalk",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vg9dps8n",
        dataset: "",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
