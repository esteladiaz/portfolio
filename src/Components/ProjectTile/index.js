import React from 'react'
import { Description, Image, ProjectTileWrapper } from './style'
import tilePlaceholder from '../../Assets/Images/tilePlaceholder.png'

const ProjectTile = props => {
    const {
        name,
        month,
        year,
        description
    } = props.project
    return (
        <ProjectTileWrapper>
            <Image src={tilePlaceholder} />
            <Description>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{month}, {year}</h4>
            </Description>
        </ProjectTileWrapper>
    )
}

export default ProjectTile