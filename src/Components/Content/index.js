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
                <p>I've mostly worked with Marketing or Growth teams for the past few years.</p>
                <p>It's fun seeing things I've built out in the wild.</p>
                <h3>Check out my <Link text={`work`} emoji="👇🏽" /> or download my <Link src={resume} text="resume" emoji="📝" newTab /></h3>
                <TileWrapper>
                    {this.getProjects(projects)}
                </TileWrapper>
            </ContentWrapper>
        )
    }
}