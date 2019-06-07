import React, { Component } from 'react'
import { ContentWrapper, TileWrapper } from './style'
import JumpLink from '../../Primitives/JumpLink'
import Link from '../../Primitives/Link'
import projects from '../../projects.json'
import ProjectTile from '../ProjectTile'

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
        return (
            <ContentWrapper>
                <h3>See my <JumpLink text="work" emoji="👩🏽‍💻" /></h3>
                <h3>Read my <JumpLink text="thoughts" emoji="🤔" /></h3>
                <h3>Download my <Link text="resume" emoji="📝" /></h3>
                <TileWrapper>
                    {this.getProjects(projects)}
                </TileWrapper>
            </ContentWrapper>
        )
    }
}