import React from 'react'
import Layout from '../components/Layout/Layout'
import * as styles from "../styles/about.module.css"
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'
import asif from "../images/person/muntasir.png"
import mahin from "../images/person/Mahin.jpg"
import tufahel from "../images/person/tufahel.jpg"

export default function About() {

    // console.log(data);

    // const members = data.members.nodes;
    // const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.aboutContent}>
                {/* <h2>About Us</h2> */}
                {/* <div className={styles.member}>
                    {
                        members.map(member => (
                            <div>
                                <Img fluid={member.frontmatter.pic.childImageSharp.fluid} />
                                <h3>{member.frontmatter.name}</h3>
                                <p>{member.frontmatter.position}</p>
                            </div>
                        ))
                    }
                </div>
                <p>Like what you see? Email us at {contact} for any query!</p> */
                }
                <div className={styles.member}>
                    <div className={styles.memberImg}>
                        <img src={mahin} alt="Mahin" />
                    </div>
                    <h2>Mahuin Qureshi</h2>
                    <h3>CEO & Founder</h3>
                </div>
                <div className={styles.member}>
                    <div className={styles.memberImg}>
                        <img src={tufahel} alt="Tufahel" />
                    </div>
                    <h2>Tufahel Ahmed</h2>
                    <h3>CEO & Co-founder</h3>
                </div>
                <div className={styles.member}>
                    <div className={styles.memberImg}>
                        <img src={asif} alt="Asif" />
                    </div>
                    <h2>Asif Muntasir</h2>
                    <h3>Co-founder</h3>
                </div>
            </div>
        </Layout>
    )
}


// export const query = graphql`
    // query AboutMember {
    //     members: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    //         nodes {
    //             frontmatter {
    //             name
    //             position
    //                 pic {
    //                     childImageSharp {
    //                         fluid {
    //                             ...GatsbyImageSharpFluid
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     contact: site {
    //         siteMetadata {
    //           contact
    //         }
    //     }
    // }
// `


