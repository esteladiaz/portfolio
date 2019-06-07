import React, { Component } from 'react'
import { ContentWrapper, TileWrapper } from './style'
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
                <h3>See my work? <span role="img" aria-label="female technologist emoji">👩🏽‍💻</span></h3>
                <TileWrapper>
                    {this.getProjects(projects)}
                </TileWrapper>
            </ContentWrapper>
        )
    }
}