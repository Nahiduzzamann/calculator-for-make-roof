import { useTranslation } from 'react-i18next';

const Calculations = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h2>{t('features.title')}</h2>
      
    </div>
  );
};

export default Calculations;
