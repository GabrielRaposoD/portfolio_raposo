import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTerminalBoxLine,
} from 'react-icons/ri';

const FOOTER_LINKS = [
  {
    href: 'https://www.instagram.com/gabrielrraposo/',
    Icon: RiInstagramLine,
    title: 'Link to Gabriel Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/gabrielrraposo/',
    Icon: RiLinkedinLine,
    title: 'Link to Gabriel Linkedin',
  },
  {
    href: 'https://github.com/GabrielRaposoD',
    Icon: RiGithubLine,
    title: 'Link to Gabriel Github',
  },
];

const SECTIONS = [
  'header',
  'about',
  'service',
  'resume',
  'portfolio',
  'contact',
];

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    Icon: RiTerminalBoxLine,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    Icon: RiTerminalBoxLine,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    Icon: RiTerminalBoxLine,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    Icon: RiTerminalBoxLine,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    Icon: RiTerminalBoxLine,
  },
];

const TIMELINE = [
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    startDate: '2020',
    endDate: '2021',
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    startDate: '2020',
    endDate: '2021',
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
    startDate: '2020',
    endDate: '2021',
  },
];

export { FOOTER_LINKS, SECTIONS, SERVICES, TIMELINE };
