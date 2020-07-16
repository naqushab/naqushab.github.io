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
        <p>1. Automation Framework of Adobe Acrobat</p>
        <p>2. Developement and Deployment of Performance Benchmark framework using Python, Javascript at backend and PHP, MySQL at frontend.</p>
        <p>3. Development and Deployment of a Jenkins framework to identify regressions in product across different configurations using Python, Batch, JS</p>
        <p>4. Development of various automated tools and mechanisms to increase productivity and reduce manual efforts</p>
        <p>5. Writing unit tests and feature tests of various work-flows involved in Adobe Acrobat</p>
        <h3>Role</h3>
        <p>I got hired at Adobe on Jun 27, 2016 as a Software Engineer in the <OutboundLink to="https://acrobat.adobe.com/in/en/">Document Cloud</OutboundLink> team. I am currently in Acrobat team which currently works on Liquid Mode functionality.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Adobe;
