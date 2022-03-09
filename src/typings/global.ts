import { IconType } from 'react-icons';

type LocalesKeys = 'pt-BR' | 'en-US';

type ServiceItemProps = { title: string; description: string; Icon: IconType };

type IconLinkProps = {
  href: string;
  title: string;
  Icon: IconType;
};

interface OutlinedAnchorProps {
  id: string;
  text: string;
}

interface ResumeItemProps {
  title: string;
  description: string;
  startDate: string | number;
  endDate: string | number;
  last: boolean;
}

export type {
  LocalesKeys,
  ServiceItemProps,
  IconLinkProps,
  OutlinedAnchorProps,
  ResumeItemProps,
};
