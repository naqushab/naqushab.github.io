import React from 'react';

import OutboundLink from '../../outbound-link';
import Wrapper from '../../wrapper';

import androidSrc from './img/android.png';

import styles from './styles.module.css';

const ProjectIntro = ({ media, project }) => (
  <Wrapper className={styles.cover}>
    <div className={styles.intro}>
      <h1>{project.title}</h1>
      <p>{project.clientDescription || project.description}</p>
      {project.links.website && <OutboundLink to={project.links.website}>View website</OutboundLink>}

      {project.links.android && (
        <OutboundLink to={project.links.android} className={styles.download}>
          <img src={androidSrc} alt="Download on Android" />
        </OutboundLink>
      )}
    </div>
    <div className={styles.media}>
      {media}
    </div>
  </Wrapper>
);

export default ProjectIntro;