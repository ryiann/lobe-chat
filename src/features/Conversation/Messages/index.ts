import { useResponsive } from 'antd-style';

import { useGlobalStore } from '@/store/global';
import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import { OnAvatarsClick, RenderMessage } from '../types';
import { AssistantMessage } from './Assistant';
import { DefaultMessage } from './Default';
import { FunctionMessage } from './Function';
import { UserMessage } from './User';

export const renderMessages: Record<string, RenderMessage> = {
  assistant: AssistantMessage,
  default: DefaultMessage,
  function: FunctionMessage,
  user: UserMessage,
};

export const useAvatarsClick = (): OnAvatarsClick => {
  const [isInbox] = useSessionStore((s) => [sessionSelectors.isInboxSession(s)]);
  const [toggleSystemRole] = useGlobalStore((s) => [s.toggleSystemRole]);
  const { mobile } = useResponsive();

  return (role) => {
    switch (role) {
      case 'assistant': {
        return () => (isInbox ? null : mobile ? null : toggleSystemRole(true));
      }
    }
  };
};
