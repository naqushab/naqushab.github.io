import React from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

const Index = () => (
  <div>
    <Meta />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hello. I’m Naqushab Neyazee.
          <br />
          <br />
          I’m a Software Engineer - II at Adobe India.
          <br />
          <br />
          Check out my <Link className={styles.link} to={prefixLink('/work/')}>work</Link>.
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
