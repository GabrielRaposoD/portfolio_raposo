import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri';

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

const SECTIONS = ['home', 'about', 'service', 'resume', 'portfolio', 'contact'];

export { FOOTER_LINKS, SECTIONS };
