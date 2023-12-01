import { useLoaderData } from 'react-router-dom';
import { useUserContext } from '../auth/UserContext';
import { assertIsGreeting, getGreeting } from './getGreeting';
import { useTranslation } from 'react-i18next';
import Pagestyle from './Pagestyle';
import Warningstyle from './Warningstyle';

export function GreetingPage() {
  const { user } = useUserContext();
  const { t } = useTranslation();
  const greeting = useLoaderData();
  assertIsGreeting(greeting);

  if (!user || user.username === '') {
    return <Warningstyle>{t('please')}</Warningstyle>;
  }
  return (
    <Pagestyle header={t('greetings') + ', ' + user.username + '!'}>{greeting.message}</Pagestyle>
  );
}

export function GreetingLoader() {
  return getGreeting();
}
