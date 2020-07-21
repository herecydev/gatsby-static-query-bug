import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const StaticQueryFail = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            title
        }
      }
    }
  `)

  return <pre>{JSON.stringify(data)}</pre>
}

export default StaticQueryFail
