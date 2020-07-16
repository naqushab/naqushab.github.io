import React from 'react';
import projects from '../../../data/projects.js';

import Carousel from '../../../components/carousel';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/1.jpg'), description: 'Adobe Logo' },
    { src: require('./img/2.jpg'), description: 'Adobe Acrobat' },
  ]
};

const Adobe = ({ location }) => {
  const project = projects.find(p => p.slug === 'adobe');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const macbooks = (
    <Macbook>
      <Carousel images={images.desktop} />
    </Macbook>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={macbooks}>
        <h3>Responsibilities</h3>
        <p>1. Pipeline Orchestration and Framework management of Liquid Mode pipeline </p>
        <p>2. Objective Evaluation and Visualization of Liquid Mode Outcome </p>
        <p>3. Automation Framework development and management </p>
        <p>4. Benchmarking of Performance of pipeline workflow using Python and React for Front End </p>
        <p>5. Development and Management of CI/CD services of various Liquid Mode/Acrobat components </p>
        <h3>Role</h3>
        <p>I got hired at Adobe on Jun 27, 2016 as a Software Engineer in the <OutboundLink to="https://acrobat.adobe.com/in/en/">Document Cloud</OutboundLink> team. I am currently in Acrobat team which currently works on Liquid Mode functionality.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Adobe;
