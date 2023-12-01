import { useTranslation } from 'react-i18next';
import { useUserContext } from '../auth/UserContext';
import Pagestyle from './Pagestyle';

export default function AdminPage() {
  const { user } = useUserContext();
  const { t } = useTranslation();

  if (user?.roles.includes('NICE')) {
    return <Pagestyle header={t('adminp')}>{t('isadmin')}</Pagestyle>;
  }
  return <Pagestyle>{t('noadmin')}</Pagestyle>;
}
