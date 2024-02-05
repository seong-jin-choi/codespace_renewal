"use client";

import { styled } from "styled-components";
import UnderLineText from "../components/UnderLineText";
import { fadeInAndUp2Sec } from "../animations/fadeInAndUp";
import { ITranslation } from "../(home)/page";

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 2px 120px 10px;
  gap: 10px;

  @media (min-width: 768px) {
    padding: 0px 0px 120px 26px;
  }
`;

const TitleWrap = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 60px;
  width: 100%;
  @media (min-width: 768px) {
    opacity: 0;
    ${fadeInAndUp2Sec}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  line-height: 44px;

  @media (min-width: 768px) {
    line-height: 48px;
    font-weight: 500;
  }
`;

export const ContactPhoneSection = ({ translation }: { translation: ITranslation }) => {
  return (
    <SectionWrap>
      <TitleWrap>
        <Title>{translation.description}</Title>
        <UnderLineText mbSize={32} pcSize={36} text={"010-0000-0000"} />
      </TitleWrap>
    </SectionWrap>
  );
};
