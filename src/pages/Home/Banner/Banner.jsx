import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.wikihow.com/images/thumb/8/8e/Calculate-Roof-Pitch-Step-05.jpg/v4-460px-Calculate-Roof-Pitch-Step-05.jpg.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t('banner.title')}</h1>
          <p className="mb-5">{t('banner.descriptions')}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
