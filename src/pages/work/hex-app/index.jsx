import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import OutboundLink from 'components/outbound-link';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import avatarImageSrc from 'components/project/img/hex-app.png';
import downloadImageSrc from './img/download-app-store.svg';
import backgroundStyles from './background.module.css';
import styles from './styles.module.css';

const HexApp = () => {
  const project = projects.find(_project => _project.slug === 'hex-app');

  const images = [
    {
      src: require('./img/1.png'),
      description: 'home',
    },
    {
      src: require('./img/2.png'),
      description: 'help screen',
    },
    {
      src: require('./img/3.png'),
      description: 'in game',
    },
  ];

  const cta = (
    <OutboundLink to={project.cta.link} className={styles.download}>
      <img src={downloadImageSrc} alt={project.cta.text} />
    </OutboundLink>
  );

  const image = (
    <div className={styles.avatar}>
      <img src={avatarImageSrc} alt="Cover" />
    </div>
  );

  const iphone = (
    <div className={styles.iphone}>
      <Iphone>
        <Carousel images={images} />
      </Iphone>
    </div>
  );

  return (
    <ProjectPage project={project} className={backgroundStyles.page}>
      <div className={backgroundStyles.background1} />
      <div className={backgroundStyles.background2} />
      <div className={backgroundStyles.background3} />

      <div className={backgroundStyles.content}>
        <ProjectIntro project={project} cta={cta} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Project Details</h3>
          <p>The game was built on top of <OutboundLink to="https://onsen.io/">ONSEN IO</OutboundLink> which is a Hybrid Mobile Development Framework and <OutboundLink to="https://monaca.io/">Monaca</OutboundLink> which is an open development platform to make hybrid mobile apps.</p>
          <h3>Role</h3>
          <p>I was the developer of the Game and I made it to learn Javascript and its funtionality and thus, this project.</p>
        </ProjectDescription>
      </div>
    </ProjectPage>
  );
};

export default HexApp;
