import { Icon } from '@lobehub/ui';
import { Bot, Brain, Mic2, Settings2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { MenuProps } from '@/components/Menu';
import { SettingsTabs } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

export const useCategory = () => {
  const { t } = useTranslation('setting');
  const { enableWebrtc, showLLM } = useServerConfigStore(featureFlagsSelectors);

  const cateItems: MenuProps['items'] = useMemo(
    () =>
      [
        {
          icon: <Icon icon={Settings2} />,
          key: SettingsTabs.Common,
          label: (
            <Link href={'/settings/common'} onClick={(e) => e.preventDefault()}>
              {t('tab.common')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Sparkles} />,
          key: SettingsTabs.SystemAgent,
          label: (
            <Link href={'/settings/system-agent'} onClick={(e) => e.preventDefault()}>
              {t('tab.system-agent')}
            </Link>
          ),
        },
        showLLM && {
          icon: <Icon icon={Brain} />,
          key: SettingsTabs.LLM,
          label: (
            <Link href={'/settings/llm'} onClick={(e) => e.preventDefault()}>
              {t('tab.llm')}
            </Link>
          ),
        },

        {
          icon: <Icon icon={Mic2} />,
          key: SettingsTabs.TTS,
          label: (
            <Link href={'/settings/tts'} onClick={(e) => e.preventDefault()}>
              {t('tab.tts')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Bot} />,
          key: SettingsTabs.Agent,
          label: (
            <Link href={'/settings/agent'} onClick={(e) => e.preventDefault()}>
              {t('tab.agent')}
            </Link>
          ),
        },
      ].filter(Boolean) as MenuProps['items'],
    [t, enableWebrtc, showLLM],
  );

  return cateItems;
};
