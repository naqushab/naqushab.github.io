import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';



import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a full-time Lead Software Engineer at <OutboundLink to="http://www.adobe.com/in/">Adobe, India</OutboundLink> in the <OutboundLink to="https://acrobat.adobe.com/in/en/">Document Cloud</OutboundLink> team.</p>
          <p>I got my Computer Engineering degree from <OutboundLink to="https://www.amu.ac.in/principal.jsp?did=10147">ZHCET, Aligarh Muslim University</OutboundLink> and got my schooling from St. Michael's Convent School.</p>
          <p>Apart from this, I also spend a lot of time around new technologies and try to contribute to open-source as much as I can.</p>
          <p>If you have any great opportunities to discuss, <Link to="/contact">get in touch</Link>.</p>
          
          <h2>Specialities</h2>
          <p>1. Problem Solving</p>
          <p>2. Quickly learning new technologies</p>
          <p>3. Scalable Web Development</p>
          <p>4. Web Scraping</p>
          <p>5. OOP</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>Python, C++, C#, Javascript, Java</p>
            <h4>Developement Environment</h4>
            <p>Microsoft Visual Studio, Microsoft Visual Code</p>
            <h4>Backend Developement</h4>
            <p>Dash by Plotly, Pandas, Flask, Microsoft Bot Framework, Microsoft Office Developement</p>
            <h4>Frontend Developement</h4>
            <p>Google Material Design Lite, Bootstrap, MaterializeCSS</p>
            <h4>Other</h4>
            <p>Git, Jira, Jenkins</p>
          </div>

        </aside>
      </div>
    </Wrapper>
  </ContentPage>
);

export default About;
