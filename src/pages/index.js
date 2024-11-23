import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const HomePage = ({ data }) => (
  <main>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Link to="/about">Go to About Page</Link>
  </main>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
export default HomePage;
