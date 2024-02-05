import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import ContentsSection from "./ContentsSection";
import HeaderSection from "./HeaderSection";
import SwiperSection from "./SwiperSection";
import { ILocale } from "../(home)/page";

function Services({ params: { locale } }: { params: { locale: ILocale } }) {
  const t = useTranslations("Services");
  HeaderSection;
  ContentsSection;
  SwiperSection;
  const HeaderSectionTranslation = {
    title: t.rich("HeaderSection.title", { br: () => <br /> }),
    description: t.rich("HeaderSection.description", { br: () => <br /> }),
  };
  const SwiperSectionTranslation = {
    title: t.rich("SwiperSection.title", { br: () => <br /> }),
  };
  return (
    <>
      <Layout>
        <HeaderSection translation={HeaderSectionTranslation} />
      </Layout>
      <ContentsSection locale={locale} />
      <SwiperSection translation={SwiperSectionTranslation} />
    </>
  );
}

export default Services;
