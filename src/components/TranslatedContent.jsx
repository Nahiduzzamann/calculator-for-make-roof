import { useTranslation } from 'react-i18next';

const TranslatedContent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
      <h2>{t('features.title')}</h2>
      <ul>
        <li>{t('features.feature1')}</li>
        <li>{t('features.feature2')}</li>
        <li>{t('features.feature3')}</li>
      </ul>
    </div>
  );
};

export default TranslatedContent;
