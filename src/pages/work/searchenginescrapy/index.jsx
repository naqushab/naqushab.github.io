import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = {
  desktop: [
    { src: require('./img/1.jpg'), description: 'Command line Execute' },
    { src: require('./img/2.jpg'), description: 'Command line running ends' },
    { src: require('./img/3.jpg'), description: 'Output of Scraper' },
  ]
};

const Searchenginescrapy = ({ location }) => {
  const project = projects.find(p => p.slug === 'searchenginescrapy');

  const logo = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const macbooks = (
    <Macbook invert>
      <Carousel images={images.desktop} />
    </Macbook>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={logo} />
      <ProjectDescription media={macbooks}>
        <h3>Project Details</h3>
        <p>With Search Engine Scrapy you can scrape data from various search engines such as: <OutboundLink to="https://www.google.co.in/">Google</OutboundLink>, <OutboundLink to="http://www.bing.com">Bing</OutboundLink>, <OutboundLink to="http://www.baidu.com">Baidu</OutboundLink>, <OutboundLink to="http://www.ask.com">Ask</OutboundLink>, <OutboundLink to="https://in.yahoo.com/">Yahoo</OutboundLink>, <OutboundLink to="http://www.yandex.com/">Yandex</OutboundLink></p>
        <p>1. It was developed using <OutboundLink to="https://scrapy.org">Scrapy</OutboundLink></p>
        <p>2. Programming language used was Python 2.7</p>
        <p>3. It was a provision of delay and UA spoofing so that it can't be detected while scraping off data from Search Engines.</p>
        <h3>Role</h3>
        <p>I have developed this website for learnng Python and Scrapy. I was very interested to crawl some websites for fetching urls of content I was interested in for an another project, which was the main motive of making this project.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Searchenginescrapy;
