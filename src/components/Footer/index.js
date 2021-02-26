import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>私たちに関して</FooterLinkTitle>
              <FooterLink to="/">使い方</FooterLink>
              <FooterLink to="/">お客様の声</FooterLink>
              <FooterLink to="/">キャリア</FooterLink>
              <FooterLink to="/">投資家</FooterLink>
              <FooterLink to="/">利用規約</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>お問い合わせ</FooterLinkTitle>
              <FooterLink to="/">連絡先</FooterLink>
              <FooterLink to="/">サポート</FooterLink>
              <FooterLink to="/">目的地</FooterLink>
              <FooterLink to="/">スポンサー</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>動画</FooterLinkTitle>
              <FooterLink to="/">動画を見る</FooterLink>
              <FooterLink to="/">アンバサダー</FooterLink>
              <FooterLink to="/">代理店</FooterLink>
              <FooterLink to="/">インフルエンサー</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>ソーシャルメディア</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Akira
            </SocialLogo>
            <WebsiteRights>
              Akira @ {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/akira51000419"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
