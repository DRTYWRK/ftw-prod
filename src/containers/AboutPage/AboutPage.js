import React from 'react';

import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteInstagramPage, siteFacebookPage } = config;

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About DRTYWRK',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Only 1% of clothing is recycled :( </h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"We want to change people's minds about resale activewear. If you recycle plastic bottles and containers, you should also be recycling your plastic clothing aka polyblend fabrics."</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Most activewear is made from synthetic fabric blends that cannot be easily recycled. It's easier to recycle hundreds of plastic water bottles than a single pair of blended leggings. Yikes. 
              </h2>

              <p>
              When you sell your unwanted activewear you give them a second life. Not only are you doing something responsible for the planet but you'll find some amazing deals and discounts on brands you love like Alo Yoga, Lululemon and Nike. 
              </p>

              <p>With DRTYWRK, we want to make sure you're transaction will go smoothly. And we hope you'll be so convinced that you'll soon start selling your no longer used activewear to make new buyers and the earth happy!</p>

              <h3 className={css.subtitle}>Do you have activewear to sell?</h3>

              <p>
                DRTYWRK offers you an easy way to earn some extra cash! If you're not using your
                activewear anymore, why not sell it? And if you already have laid your eyes on something you want next, selling something from your collection is a great way to get money for your next buy and make room in your closet!
              </p>

              <p>Worried about quality? Or don't have time to sell your items? Send them to us and our official DRTYWRK branded store will take care of the sorting, sanitizing and shipping for you. Win. Win. Win.
              </p>

              <p>Fees: 
                <li>Sell yourself and keep up to 80% of the sale. 
                </li>

                <li>Have a large number of items to sell or don't have time to list them yourself? Contact us <a href="mailto:hello@drtywrk.com">here</a> and we'll wash, list and ship for a fee.</li>
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>. Message us to be featured wearing your favorite activewear outfits.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
