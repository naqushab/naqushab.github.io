import React from 'react';

import ContentPage from 'components/content-page';
import Contact from 'components/contact';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';

const ContactPage = () => (
  <ContentPage>
    <Meta title="Contact" description="If you want to talk about an exciting opportunity or any amazing product, say hello and send an email." />
    <Wrapper>
      <Contact />
    </Wrapper>
  </ContentPage>
);

export default ContactPage;
