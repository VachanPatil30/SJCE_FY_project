import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import {GiVideoCamera } from 'react-icons/gi';
import { GiPhotoCamera } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/Image'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiPhotoCamera/>
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>Image Detection</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                {/*<Button primary>Choose Plan</Button>*/}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/Video'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiVideoCamera />
                </PricingCardIcon>
                <PricingCardPlan></PricingCardPlan>
                <PricingCardCost>Video Dectection</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                {/*<Button primary>Choose Plan</Button>*/}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
