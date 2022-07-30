import {FC, Suspense} from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from '../../i18nTestingConfig';

const SuspenseAndTranslationWrapper: FC = ({children}) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback='Loading...'>
      {children}
    </Suspense>
  </I18nextProvider>
)

export default SuspenseAndTranslationWrapper
