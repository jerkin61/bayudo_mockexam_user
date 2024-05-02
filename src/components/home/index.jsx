import React from "react";

import FeatureList from "./feature-list";
import FeaturedClasses from "./featured-class";
import FeatureScoreboard from "./feature-scoreboard";
import SubscriptionSection from "./subscription-section";
import HomepageFooter from "./homepage-footer";
import TopSection from "./TopSection";

const Homepage = () => {
  return (
    <>
      <TopSection />
      <FeatureList />
      <FeaturedClasses />
      <FeatureScoreboard />
      <SubscriptionSection />
      <HomepageFooter />
    </>
  );
};

export default Homepage;
