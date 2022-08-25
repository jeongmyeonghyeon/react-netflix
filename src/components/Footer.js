import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Base>
      <Wrapper>
        <FooterLinks>
          <FooterLinkItem>
            <FooterLink href="#">
              <FooterLinkContent>넷플릭스 소개</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="##">
              <FooterLinkContent>고객 센터</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="###">
              <FooterLinkContent>미디어 센터</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="####">
              <FooterLinkContent>이용 약관</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#">
              <FooterLinkContent>투자 정보(IR)</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="##">
              <FooterLinkContent>입사 정보</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="###">
              <FooterLinkContent>이용 약관</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="####">
              <FooterLinkContent>개인정보</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#">
              <FooterLinkContent>법적 고지</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="##">
              <FooterLinkContent>쿠키 설정</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="###">
              <FooterLinkContent>회사 정보</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="####">
              <FooterLinkContent>문의하기</FooterLinkContent>
            </FooterLink>
          </FooterLinkItem>
        </FooterLinks>
      </Wrapper>
      <Copyright>REACT NETFLIX</Copyright>
    </Base>
  );
}

const Base = styled.div`
  color: grey;
  margin: 20px auto 0;
  max-width: 980px;
  padding: 0 4%;

  @media (max-width: 769px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const FooterLinks = styled.ul`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  margin: 0 0 14px;
  padding: 0;
`;

const FooterLinkItem = styled.li`
  list-style-type: none;
  flex-basis: 25%;
  box-sizing: border-box;
  // flex: 0 0 50%;
  list-style-type: none;
  margin-bottom: 16px;

  @media (max-width: 769px) {
    flex: 0 0 50%;
  }
`;

const FooterLink = styled.a`
  color: grey;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinkContent = styled.span``;

const Copyright = styled.div`
  display: inline-block;
  margin-bottom: 2em;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export default Footer;
