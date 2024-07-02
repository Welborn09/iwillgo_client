import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 50px 20px;
  background: #203936;
  text-align: center;
  color: #B8E648;
`;

const FeatureHeading = styled.div`
  max-width: 750px;
  text-align: center !important;
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
`;

const FeatureSubTitle = styled.p`
  margin: 16px 0 0px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

const FeatureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FeatureCard = styled.div`
  // background: #fff;
  padding: 20px;
  // border-radius: 5px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Karla', sans-serif;
  font-size: 26px;
    color: var(--title-color);
    line-height: 32px;
    font-weight: 700;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 16px 0 0px;
  color: #fff;
`;

const Features = () => {
  return (
    <FeaturesContainer className='container'>
      <FeatureHeading className='mx-auto'>
        <FeatureTitle>We Can Change the World</FeatureTitle>
        <FeatureSubTitle>
          Together, we can transform lives and our planet. By providing nourishing food and warm clothing to the homeless, 
          planting trees to revitalize our environment, and ensuring access to clean, safe water for communities in need, 
          we can create a better, more sustainable future for everyone.
        </FeatureSubTitle>
      </FeatureHeading>
      
      <FeatureGrid className='pt-3 mt-5'>
        <FeatureCard>
          <FeatureIcon>Our Mission</FeatureIcon>
          <FeatureDescription>Bring Faith and Hope to our Community. We do this by feeding, clothing and cleaning up our most needed area's.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>Our Vision</FeatureIcon>
          <FeatureDescription>Organize a team around the community that needs it.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>Environment</FeatureIcon>
          <FeatureDescription>Together we can clean up our community by doing tasks like planting tree's, offering clean water, and more.</FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </FeaturesContainer>
  );
};

export default Features;
