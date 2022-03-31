import { IconType } from 'react-icons';

type LocalesKeys = 'pt-BR' | 'en-US';

type ServiceItemProps = { title: string; description: string; Icon: IconType };

type IconLinkProps = {
  href: string;
  title: string;
  Icon: IconType;
};

type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  description: string;
};

type OutlinedAnchorProps = {
  id: string;
  text: string;
};

type ResumeItemProps = {
  title: string;
  description: string;
  startDate: string | number;
  endDate: string | number;
  last: boolean;
};

type Section = {
  name: string;
  id: string;
};

export type {
  LocalesKeys,
  ServiceItemProps,
  IconLinkProps,
  OutlinedAnchorProps,
  ResumeItemProps,
  PortfolioItem,
  Section,
};
