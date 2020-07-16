import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/1.jpg'), description: 'Login' },
    { src: require('./img/2.jpg'), description: 'Dashboard' },
    { src: require('./img/3.jpg'), description: 'Questions' },
    { src: require('./img/4.jpg'), description: 'Mark as Done' },
    { src: require('./img/5.jpg'), description: 'Add new question' },
  ],
  mobile: [
    { src: require('./img/1m.jpg'), description: 'Login' },
    { src: require('./img/2m.jpg'), description: 'Dashboard' },
    { src: require('./img/3m.jpg'), description: 'Options' },
    { src: require('./img/4m.jpg'), description: 'Add question' },
    { src: require('./img/5m.jpg'), description: 'Unmark Question' },
  ],
};

const DabblePoint = ({ location }) => {
  const project = projects.find(p => p.slug === 'dabble-point');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>The website was attempt to personalize the interview preparation and track daily goals of a person while solving different problems. All questions were scraped from <OutboundLink to="http://www.geeksforgeeks.org">Geeksforgeeks</OutboundLink> which is an awesome webste for interview preparation.</p>
        <p>1. Implementation was in Python, Flask, MySQL with SQLAlchemy as Object Relational Mapper.</p>
        <p>2. It uses a supervised Web Scraping Model to Scrape Questions from different websites like <OutboundLink to="http://www.geeksforgeeks.org">Geeksforgeeks</OutboundLink> with an additional Chrome Extension to add any webpage you like, in our DB.</p>
        <p>3. It uses different techniques like AJAX, LocalStorage to enable faster rendering and fluid UX.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default DabblePoint;
