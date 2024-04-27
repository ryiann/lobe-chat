import { ActionIcon, Icon } from '@lobehub/ui';
import { Dropdown, MenuProps } from 'antd';
import { Book, Github, HardDriveDownload, HardDriveUpload, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DOCUMENTS, GITHUB } from '@/const/url';
import DataImporter from '@/features/DataImporter';
import { configService } from '@/services/config';
import { GlobalStore, useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';

export interface BottomActionProps {
  tab?: GlobalStore['sidebarKey'];
}

const BottomActions = memo<BottomActionProps>(({ tab }) => {
  const { t } = useTranslation('common');

  const [, useCheckLatestVersion] = useGlobalStore((s) => [
    s.hasNewVersion,
    s.useCheckLatestVersion,
  ]);

  useCheckLatestVersion();

  const items: MenuProps['items'] = [
    {
      icon: <Icon icon={HardDriveUpload} />,
      key: 'import',
      label: <DataImporter>{t('import')}</DataImporter>,
    },
    {
      children: [
        {
          key: 'allAgent',
          label: <div>{t('exportType.allAgent')}</div>,
          onClick: configService.exportAgents,
        },
        {
          key: 'allAgentWithMessage',
          label: <div>{t('exportType.allAgentWithMessage')}</div>,
          onClick: configService.exportSessions,
        },
        {
          key: 'globalSetting',
          label: <div>{t('exportType.globalSetting')}</div>,
          onClick: configService.exportSettings,
        },
        {
          type: 'divider',
        },
        {
          key: 'all',
          label: <div>{t('exportType.all')}</div>,
          onClick: configService.exportAll,
        },
      ],
      icon: <Icon icon={HardDriveDownload} />,
      key: 'export',
      label: t('export'),
    },
  ];

  return (
    <>
      <Link aria-label={'GitHub'} hidden={true} href={GITHUB} target={'_blank'}>
        <ActionIcon icon={Github} placement={'right'} title={'GitHub'} />
      </Link>
      <Link aria-label={t('document')} hidden={true} href={DOCUMENTS} target={'_blank'}>
        <ActionIcon icon={Book} placement={'right'} title={t('document')} />
      </Link>
      <Dropdown arrow={false} menu={{ items }} trigger={['click']}>
        <ActionIcon active={tab === SidebarTabKey.Setting} icon={Settings2} />
      </Dropdown>
    </>
  );
});

export default BottomActions;
