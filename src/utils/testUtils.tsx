import {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Suspense,
} from 'react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import {InitialEntry} from 'history';
import i18n from '../i18nTestingConfig';

type IRouterType = { path: string, children?: ReactNode, initialEntries?: InitialEntry[] }

export const I18wrapper: FC<PropsWithChildren> = ({children}): ReactElement => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
)

export const RouterWrapper = (
  props: IRouterType
): ReactElement => {
  const {path, children, initialEntries} = props
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={path} element={children}/>
      </Routes>
    </MemoryRouter>
  )
}

export const SuspenseWrapper: FC<PropsWithChildren> = ({children}) => (
  <Suspense fallback='Loading...'>
    {children}
  </Suspense>
)

export const I18SuspenseRouterWrapper = (
  props: IRouterType
) => {
  const {path, children, initialEntries} = props
  return (
    <I18wrapper>
      <SuspenseWrapper>
        <RouterWrapper path={path} initialEntries={initialEntries} children={children}/>
      </SuspenseWrapper>
    </I18wrapper>
  )
}
