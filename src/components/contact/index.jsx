import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:naqushab.neyazee24@gmail.com?subject=Hello%20Naqushab!" className={styles.link}>naqushab.neyazee24@gmail.com</a>
    </p>
    <h3>You can see my resume <OutboundLink to="https://drive.google.com/file/d/1ITr4NsQCHexlACpFRgW4x1Ya9MRfI_KP/view?usp=sharing"><u>here</u></OutboundLink></h3>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/naqushab/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/naqushabneyazee">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/naqushab/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://stackoverflow.com/users/3365919/naqushab">
          <Icon name="stackoverflow" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://drive.google.com/file/d/1ITr4NsQCHexlACpFRgW4x1Ya9MRfI_KP/view?usp=sharing">
          <Icon name="download" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
