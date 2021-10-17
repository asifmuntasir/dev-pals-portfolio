import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import * as styles from "../styles/project.module.css"
import Img from "gatsby-image"

export default function project({data}) {

    console.log(data);

    // const projects = data.allMarkdownRemark.nodes;
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Website that We've Created</h3>
                <div className={styles.projects}>
                    {
                        projects.map(project => (
                            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
                                <div>
                                    <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <p>Like what you see? Email us at {contact} for any query!</p>
            </div>
        </Layout>
    )
}



// export page query

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

