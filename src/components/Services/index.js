import React from "react";
import Icon1 from "../../images/svg-1.png";
import Icon2 from "../../images/svg-3.png";
import Icon3 from "../../images/svg-5.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>私たちのサービス</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>経費を削減する</ServicesH2>
          <ServicesP>
            私たちはあなたの悩みを減らし、あなたの全体的な収入の手助けをします。
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>役員</ServicesH2>
          <ServicesP>
            私たちのプラットフォームには、世界中のどこからでもオンラインでアクセスできます。
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>プレミアム特典</ServicesH2>
          <ServicesP>
            5％のキャッシュバックをする特別会員カードを差し上げます。
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
