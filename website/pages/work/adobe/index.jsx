import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/adobe.png';

const images = [
  {
    src: require('./img/1.jpg'),
    description: 'Adobe logo',
  },
  {
    src: require('./img/2.jpg'),
    description: 'Adobe Acrobat',
  },
];

const Adobe = () => {
  const project = projects.find(_project => _project.slug === 'adobe');

  const image = (
    <img src={coverImage} alt="Cover" />
  );

  const macbooks = (
    <Macbook>
      <Carousel images={images} />
    </Macbook>
  );

  return (
    <ProjectPage project={project}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={macbooks}>
        <h3>Responsibilities</h3>
        <p>1. Automation Framework of Adobe Acrobat</p>
        <p>2. Developement and Deployment of Performance Benchmark framework using Python, Javascript at backend and PHP, MySQL at frontend.</p>
        <p>3. Development and Deployment of a Jenkins framework to identify regressions in product across different configurations using Python, Batch, JS</p>
        <p>4. Development of various automated tools and mechanisms to increase productivity and reduce manual efforts</p>
        <p>5. Writing unit tests and feature tests of various work-flows involved in Adobe Acrobat</p>

        <h3>Role</h3>
        <p>I got hired at Adobe on Jun 27, 2016 as a Software Engineer in the <OutboundLink to="https://acrobat.adobe.com/in/en/">Document Cloud</OutboundLink> team. After 1 year at Adobe, I became Software Engineer - II.</p>
      </ProjectDescription>
      
    </ProjectPage>
  );
};

export default Adobe;
