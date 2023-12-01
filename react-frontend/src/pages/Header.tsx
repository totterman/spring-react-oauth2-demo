import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { useUserContext } from '../auth/UserContext';
import { getLoginOptions } from '../auth/getLoginOptions';
import { getLogin } from '../auth/getLogin';
import { getMe } from '../auth/getMe';
import { postLogout } from '../auth/postLogout';
import { useEffect } from 'react';
import { LANGUAGES } from '../locales';
import { useTranslation } from 'react-i18next';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

/*
 * Header includes functions for user login/logout and language selection
 */
export function Header() {
  const { user, loading, dispatch } = useUserContext();
  const { i18n, t } = useTranslation();

  function onChangeLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const langcode = e.target.value;
    i18n.changeLanguage(langcode);
  }

  /*
   * When the page is refreshed, request current user status from the OAuth2 provider
   */
  useEffect(() => {
    async function refresh() {
      const userdto = await getMe();
      console.log('Header me:', userdto ?? 'null');
      if (userdto.username !== '') {
        dispatch({
          type: 'loggedin',
          user: userdto,
        });
      }
    }

    refresh();
  }, [dispatch]);

  /*
   * Initiate the OAuth2 login flow:
   * Request login options from the BFF server
   * Then redirect to OAuth2 provider
   */
  async function handleLoginClick() {
    dispatch({ type: 'findprovider' });
    const loginOptions = await getLoginOptions();
    dispatch({
      type: 'hasprovider',
      options: loginOptions,
    });
    if (loginOptions.length === 1) {
      dispatch({ type: 'login' });
      getLogin(loginOptions[0].loginUri);
    }
  }

  async function handleLogoutClick() {
    await postLogout();
    dispatch({ type: 'logout' });
  }

  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center sticky top-0 z-10 py-4 bg-slate-900">
        <div className="flex-shrink-0 ml-6 cursor-pointer">
          <Link to="">
            <img src={logo} alt="Logo" className="inline-block h-20" />
            <span className="text-3xl font-semibold text-slate-200">{t('title')}</span>
          </Link>
        </div>

        <nav className="flex items-baseline mr-2">
          <MenuItem to="greetings">{t('greetings')}</MenuItem>
          <MenuItem to="admin">{t('admin')}</MenuItem>

          <div className="text-white no-underline p-1 pb-0.5">
            {user ? (
              <>
                <span className="ml-auto font-bold">
                  {user.username} {t('signedin')}
                </span>
                <MenuButton callback={handleLogoutClick} loading={loading}>
                  {t('logout')}
                </MenuButton>
              </>
            ) : (
              <MenuButton callback={handleLoginClick} loading={loading}>
                {t('login')}
              </MenuButton>
            )}

            <select
              className="text-white border border-transparent bg-slate-900 hover:cursor-pointer"
              defaultValue={i18n.language}
              onChange={onChangeLang}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </header>
    </div>
  );
}
