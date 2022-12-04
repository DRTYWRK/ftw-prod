import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  const { siteInstagramPage, siteFacebookPage } = config;

  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Questions?</h1>

          <div>
            <h3>Are the clothes clean?</h3>
            <p>Yes. We require sellers to only sell items that are in excellent condition that have been washed before shipping.</p>
    
            <p>Still concerned? We also cosign items that we inspect, sanitize and sell in our branded store. </p>
          </div>
          <div>
            <h3>How do I become a seller?</h3>
            <p>Simply create an account and add listings. </p>
          </div>
          <div>
            <h3>Can I be featured on your socials?</h3>
            <p>
                Yes! Checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>. DM or <a href="mailto:hello@drtywrk.com">email</a> us to be featured wearing your favorite activewear outfits &hearts;
              </p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;