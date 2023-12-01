import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';
import Warningstyle from './Warningstyle';

export function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation();
  if (isError(error) && error.message.startsWith('401')) {
    return <Warningstyle>{t('please')}</Warningstyle>;
  }
  return (
    <div className="text-center p-5 text-xl">
      <h1 className="text-xl text-slate-900">{t('error')}</h1>
      {isError(error) && <p className="text-base text-slate-700">{error.message}</p>}
    </div>
  );
}

function isError(error: any): error is Error {
  return true;
}
