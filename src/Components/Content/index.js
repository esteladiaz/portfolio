import React, { Component } from 'react'
import { ContentWrapper, TileWrapper } from './style'
import JumpLink from '../../Primitives/JumpLink'
import Link from '../../Primitives/Link'
import projects from '../../projects.json'
import ProjectTile from '../ProjectTile'
import resume from '../../Assets/resume.pdf'

export default class Content extends Component {
    getProjects = projects => {
        const projectTile = projects.map(project => {
            const { name } = project
            return (
                <ProjectTile key={name} project={project} />
                )
            })
            return projectTile
        }
        render() {
            console.log(resume, "resume")
            return (
            <ContentWrapper>
                <h3>See my <JumpLink text="work" emoji="👩🏽‍💻" /></h3>
                <h3>Download my <Link src={resume} text="resume" emoji="📝" newTab /></h3>
                <p>I've mostly worked with Marketing or Growth teams for the past few years.</p>
                <p>It's fun seeing things I've built out in the wild.</p>
                <h3><Link text={`Check out some of my work below`} emoji="👇🏽" /></h3>
                <TileWrapper>
                    {this.getProjects(projects)}
                </TileWrapper>
            </ContentWrapper>
        )
    }
}