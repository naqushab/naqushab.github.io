import React from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/dabble-point.png';

const images = [
  {
    src: require('./img/1.jpg'),
    description: 'Login',
  },
  {
    src: require('./img/2.jpg'),
    description: 'Dashboard',
  },
  {
    src: require('./img/3.jpg'),
    description: 'Questions',
  },
  {
    src: require('./img/4.jpg'),
    description: 'Mark as done',
  },
  {
    src: require('./img/5.jpg'),
    description: 'Add new question',
  },
];

const mobileImages = [
  {
    src: require('./img/1m.jpg'),
    description: 'Login',
  },
  {
    src: require('./img/2m.jpg'),
    description: 'Dashboard',
  },
  {
    src: require('./img/3m.jpg'),
    description: 'Options',
  },
  {
    src: require('./img/4m.jpg'),
    description: 'Add question',
  },
  {
    src: require('./img/5m.jpg'),
    description: 'Unmark question',
  },
];

const LifeWithBird = () => {
  const project = projects.find(_project => _project.slug === 'dabble-point');

  const image = (
    <img src={coverImage} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={mobileImages} />
    </Iphone>
  );

  return (
    <ProjectPage project={project}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project Details</h3>
        <p>The website was attempt to personalize the interview preparation and track daily goals of a person while solving different problems. All questions were scraped from <OutboundLink to="http://www.geeksforgeeks.org">Geeksforgeeks</OutboundLink> which is an awesome webste for interview preparation.</p>
        <p>1. Implementation was in Python, Flask, MySQL with SQLAlchemy as Object Relational Mapper.</p>
        <p>2. It uses a supervised Web Scraping Model to Scrape Questions from different websites like <OutboundLink to="http://www.geeksforgeeks.org">Geeksforgeeks</OutboundLink> with an additional Chrome Extension to add any webpage you like, in our DB.</p>
        <p>3. It uses different techniques like AJAX, LocalStorage to enable faster rendering and fluid UX.</p>
        
        
        <h3>Role</h3>
        <p>I was co-founder and developer of the website. The other person who co-founded this website is <OutboundLink to="https://in.linkedin.com/in/bhanu-agrawal-39b655b6">Bhanu Agrawal</OutboundLink></p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default LifeWithBird;
