"use client";

import styled from "styled-components";
import FAQAccordion from "./components/FAQAccordion";
import { Layout } from "../components/navigation";
import { useInView } from "react-intersection-observer";
import { ILocale } from "./page";

const FAQSection = styled.section`
  background-color: #1a1f27;
  margin-top: 140px;
  padding-top: 60px;
  padding-bottom: 140px;

  @media (min-width: 768px) {
    padding-top: 80px;
    margin-top: 120px;
  }
`;

const FAQTitle = styled.p`
  font-weight: 600;
  line-height: 1.14;
  color: #fff;
  font-size: 42px;

  @media (min-width: 768px) {
    padding-left: 10px;
    font-size: 40px;
  }
`;

const FAQAccordionWrap = styled.div`
  margin-top: 55px;
`;

const questions: IQuestions = {
  en: [
    {
      title: "서비스를 MVP 모델로 만들고 싶으신가요?",
      body: `MVP 모델은 초기에 필수적인 기능만을 갖춘 제품으로 빠르게 개발 및 출시하여 시장의 반응을 확인하고 피드백을 수집하는 전략입니다. 코드스페이스에서는 파트너에게 가장 필요한 핵심 기능만 담은 MVP 모델을 통해 초기 투자를 최소화하고 사용자 요구사항을 빠르게 이해할 수 있는 전략을 제공하고 있습니다.`,
    },
    {
      title: "기획서가 없으면 프로젝트 진행이 힘든가요?",
      body: `기획서가 없어도 괜찮습니다. 함께 협력하여 프로젝트를 만들어나갈 수 있도록 초기에는 아이디어와 목표를 공유하고 함께 토론하면서 필요한 기능과 요구사항을 정의하고 있습니다. 이를 바탕으로 프로젝트 방향성을 함께 설계하고 사용자의 필요에 맞게 기능을 개발하여 진행하고 있습니다.`,
    },
    {
      title: "유지보수는 어떻게 진행되나요?",
      body: `유지보수는 프로젝트가 완료된 후에도 파트너와 함께 협력하여 버그 수정 및 보안 업데이트와 같은 중요한 사항은 적시에 처리하여 안정적인 서비스를 제공하고 있습니다. 프로젝트가 완료된 이후에도 지속적인 소통을 유지하며 사용자 피드백을 수용하고 서비스 성능과 품질을 지속적으로 향상시키고 있습니다.`,
    },
    {
      title: "프로젝트는 어떻게 진행이 되나요?",
      body: `프로젝트는 먼저 파트너의 플랫폼에 대해 알아가기 위한 인터뷰를 시작으로 기획, UX 전략, 설계, 디자인, 개발, 테스트, 배포, 유지단계 순으로 이루어집니다. 각 단계마다 프로젝트 진행, 보고 일정을 통해 퀄리티 품질을 유지하며 프로젝트를 완료, 제공하고 있습니다.`,
    },
    {
      title: "코드스페이스가 다른 에이전시와 다른 점은 무엇인가요?",
      body: `코드스페이스는 단순히 개발, 디자인, 기획 등을 하는 에이전시를 벗어나 끊임없이 프로덕트 마켓핏에 대해 고민하고 있는 에이전시 중 하나입니다. 실제로 다양한 서비스를 직접 사이드 프로젝트로 테스트 하면서 향후 프로젝트가 진행될 시 파트너의 입장에서 누구보다 진심으로 공감, 고민하고 가장 필요한 단계, 투자를 제안하고 있습니다. 단순히 퍼블리싱, 디자인을 그리는 것이 아닌 긴 호흡으로 파트너의 서비스와 함께 하고 있습니다.`,
    },
    {
      title: "플랫폼을 만드는데 가장 중요한 것은 무엇인가요?",
      body: `플랫폼을 만들 때 가장 중요한 것은 사용자 경험을 통해 만들어지는 레이아웃 그에 따른 디자인들 개발을 통해 구축되는 보안, 성능, 향후 비즈니스 확장성, 유지보수성 등 여러가지를 이야기할 수 있습니다. 코드스페이스는 위 내용 중 파트너의 요구와 시장 조건에 맞춰 가장 적합한 단계, 과정을 선택하고 제안하며 빠른 초기진입 이후 지속적인 사용자 피드백을 수용하며 플랫폼을 향상 시키는데 목표를 하고 있습니다.`,
    },
  ],
  ko: [
    {
      title: "서비스를 MVP 모델로 만들고 싶으신가요?",
      body: `MVP 모델은 초기에 필수적인 기능만을 갖춘 제품으로 빠르게 개발 및 출시하여 시장의 반응을 확인하고 피드백을 수집하는 전략입니다. 코드스페이스에서는 파트너에게 가장 필요한 핵심 기능만 담은 MVP 모델을 통해 초기 투자를 최소화하고 사용자 요구사항을 빠르게 이해할 수 있는 전략을 제공하고 있습니다.`,
    },
    {
      title: "기획서가 없으면 프로젝트 진행이 힘든가요?",
      body: `기획서가 없어도 괜찮습니다. 함께 협력하여 프로젝트를 만들어나갈 수 있도록 초기에는 아이디어와 목표를 공유하고 함께 토론하면서 필요한 기능과 요구사항을 정의하고 있습니다. 이를 바탕으로 프로젝트 방향성을 함께 설계하고 사용자의 필요에 맞게 기능을 개발하여 진행하고 있습니다.`,
    },
    {
      title: "유지보수는 어떻게 진행되나요?",
      body: `유지보수는 프로젝트가 완료된 후에도 파트너와 함께 협력하여 버그 수정 및 보안 업데이트와 같은 중요한 사항은 적시에 처리하여 안정적인 서비스를 제공하고 있습니다. 프로젝트가 완료된 이후에도 지속적인 소통을 유지하며 사용자 피드백을 수용하고 서비스 성능과 품질을 지속적으로 향상시키고 있습니다.`,
    },
    {
      title: "프로젝트는 어떻게 진행이 되나요?",
      body: `프로젝트는 먼저 파트너의 플랫폼에 대해 알아가기 위한 인터뷰를 시작으로 기획, UX 전략, 설계, 디자인, 개발, 테스트, 배포, 유지단계 순으로 이루어집니다. 각 단계마다 프로젝트 진행, 보고 일정을 통해 퀄리티 품질을 유지하며 프로젝트를 완료, 제공하고 있습니다.`,
    },
    {
      title: "코드스페이스가 다른 에이전시와 다른 점은 무엇인가요?",
      body: `코드스페이스는 단순히 개발, 디자인, 기획 등을 하는 에이전시를 벗어나 끊임없이 프로덕트 마켓핏에 대해 고민하고 있는 에이전시 중 하나입니다. 실제로 다양한 서비스를 직접 사이드 프로젝트로 테스트 하면서 향후 프로젝트가 진행될 시 파트너의 입장에서 누구보다 진심으로 공감, 고민하고 가장 필요한 단계, 투자를 제안하고 있습니다. 단순히 퍼블리싱, 디자인을 그리는 것이 아닌 긴 호흡으로 파트너의 서비스와 함께 하고 있습니다.`,
    },
    {
      title: "플랫폼을 만드는데 가장 중요한 것은 무엇인가요?",
      body: `플랫폼을 만들 때 가장 중요한 것은 사용자 경험을 통해 만들어지는 레이아웃 그에 따른 디자인들 개발을 통해 구축되는 보안, 성능, 향후 비즈니스 확장성, 유지보수성 등 여러가지를 이야기할 수 있습니다. 코드스페이스는 위 내용 중 파트너의 요구와 시장 조건에 맞춰 가장 적합한 단계, 과정을 선택하고 제안하며 빠른 초기진입 이후 지속적인 사용자 피드백을 수용하며 플랫폼을 향상 시키는데 목표를 하고 있습니다.`,
    },
  ],
};
type IQuestion = {
  title: string;
  body: string;
};
interface IQuestions {
  en: IQuestion[];
  ko: IQuestion[];
}
const getQuestion = (locale: string): IQuestion[] => {
  if (locale === "en") return questions.en;
  if (locale === "ko") return questions.ko;
  return questions.en;
};
const FAQ = ({ locale }: { locale: ILocale }) => {
  const [ref, inView] = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  return (
    <FAQSection ref={ref}>
      <Layout>
        <FAQTitle>FAQ</FAQTitle>
        <FAQAccordionWrap>
          {getQuestion(locale).map(({ title, body }, index) => {
            return <FAQAccordion header={title} body={body} eventKey={`${index}`} key={index} isView={inView} />;
          })}
        </FAQAccordionWrap>
      </Layout>
    </FAQSection>
  );
};

export default FAQ;
