import {
  ReactElement,
  ReactNode,
  Suspense,
} from 'react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import {InitialEntry} from 'history';
import i18n from '../i18nTestingConfig';

export const renderWithI18 = (children?: ReactNode | undefined): ReactElement => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
)

export const renderWithRouter = (
  component: ReactNode, path: string, initialEntries: InitialEntry[]
): ReactElement => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={path} element={component}/>
      </Routes>
    </MemoryRouter>
  )
}

export const renderWithSuspense = (children?: ReactNode | undefined) => (
  <Suspense fallback='Loading...'>
    {children}
  </Suspense>
)

export const renderWithI18AndSuspenseAndRouter = (
  component: ReactNode, path: string, initialEntries: InitialEntry[]
) => renderWithI18(renderWithSuspense(renderWithRouter(component, path, initialEntries)))

export const renderWithI18AndSuspense = (children?: ReactNode | undefined) => renderWithI18(renderWithSuspense(children))
