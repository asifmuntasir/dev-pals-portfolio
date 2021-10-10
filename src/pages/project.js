import React from 'react'
import Layout from '../components/Layout/Layout'
import * as styles from "../styles/project.module.css"

export default function project() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Website that We've Created</h3>
            </div>
        </Layout>
    )
}
