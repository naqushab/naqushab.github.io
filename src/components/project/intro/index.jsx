import React from 'react';

import OutboundLink from '../../outbound-link';
import Wrapper from '../../wrapper';


import styles from './styles.module.css';

const ProjectIntro = ({ media, project }) => (
  <Wrapper className={styles.cover}>
    <div className={styles.intro}>
      <h1>{project.title}</h1>
      <p>{project.clientDescription || project.description}</p>
      {cta || (
        <OutboundLink to={project.cta.link}>{project.cta.text}</OutboundLink>
      {project.links.website && <OutboundLink to={project.links.website}>View website</OutboundLink>}

      )}
    </div>
    <div className={styles.media}>
      {media}
    </div>
  </Wrapper>
);

export default ProjectIntro;
