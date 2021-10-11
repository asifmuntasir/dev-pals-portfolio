import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  // {data}

  // console.log(data);
  // const {title, description} = data.site.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Software</h2>
          <h4>Solution & Design</h4>
          <p>UI UX Design & Back-End Development</p>
          <Link className={styles.btn} to="/project">Explore Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
        {/* <p>{title} - {description}</p> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query siteInfo {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
