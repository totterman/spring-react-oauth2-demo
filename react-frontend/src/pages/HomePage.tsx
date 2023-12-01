import { useTranslation } from 'react-i18next';
import Pagestyle from './Pagestyle';
import Sectionstyle from './Sectionstyle';
import Liststyle from './Liststyle';
import ListItem from './ListItem';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Pagestyle header={t('welcome')}></Pagestyle>
      <Sectionstyle>{t('home1')}</Sectionstyle>
      <Sectionstyle>{t('home2')}</Sectionstyle>
      <Liststyle>
        <>
          <ListItem>{t('list1')}</ListItem>
          <ListItem>{t('list2')}</ListItem>
        </>
      </Liststyle>
      <Sectionstyle>{t('home3')}</Sectionstyle>
      <Sectionstyle>{t('home4')}</Sectionstyle>
    </>
  );
}
