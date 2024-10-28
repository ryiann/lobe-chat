import { Icon } from '@lobehub/ui';
import { Segmented } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import { AsteriskSquare, ScanFace } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useServerConfigStore } from '@/store/serverConfig';
import { featureFlagsSelectors, serverConfigSelectors } from '@/store/serverConfig/selectors';

import AccessCodeForm from './AccessCodeForm';
import OAuthForm from './OAuthForm';
import { ErrorActionContainer } from './style';

enum Tab {
  Api = 'api',
  Oauth = 'oauth',
  Password = 'password',
}

interface InvalidAccessCodeProps {
  id: string;
  provider?: string;
}

const InvalidAccessCode = memo<InvalidAccessCodeProps>(({ id }) => {
  const { t } = useTranslation('error');
  const isEnabledOAuth = useServerConfigStore(serverConfigSelectors.enabledOAuthSSO);
  const defaultTab = isEnabledOAuth ? Tab.Oauth : Tab.Password;
  const [mode, setMode] = useState<Tab>(defaultTab);
  const { showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);
  const isEnabledTab = showOpenAIApiKey || isEnabledOAuth;

  return (
    <ErrorActionContainer>
      {isEnabledTab && (
        <Segmented
          block
          onChange={(value) => setMode(value as Tab)}
          options={
            [
              isEnabledOAuth
                ? {
                    icon: <Icon icon={ScanFace} />,
                    label: t('oauth', { ns: 'common' }),
                    value: Tab.Oauth,
                  }
                : undefined,
              {
                icon: <Icon icon={AsteriskSquare} />,
                label: t('unlock.tabs.password'),
                value: Tab.Password,
              },
            ].filter(Boolean) as SegmentedLabeledOption[]
          }
          style={{ width: '100%' }}
          value={mode}
        />
      )}

      <Flexbox gap={24}>
        {mode === Tab.Password && <AccessCodeForm id={id} />}
        {isEnabledOAuth && mode === Tab.Oauth && <OAuthForm id={id} />}
      </Flexbox>
    </ErrorActionContainer>
  );
});

export default InvalidAccessCode;
