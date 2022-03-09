import {
  AboutMe,
  Contact,
  Footer,
  Header,
  MyService,
  NavBar,
  Portfolio,
  Resume,
} from 'components';
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTerminalBoxLine,
} from 'react-icons/ri';

const SECTIONS = {
  Components: [
    {
      Component: NavBar,
      position: 1,
      props: {
        'en-US': {
          sectionsName: [
            'home',
            'about',
            'services',
            'resume',
            'portfolio',
            'contact',
          ],
        },
        'pt-BR': {
          sectionsName: [
            'início',
            'sobre',
            'serviços',
            'currículo',
            'portfólio',
            'contato',
          ],
        },
      },
    },
    {
      Component: Header,
      position: 2,
      props: {
        'en-US': {
          labels: {
            welcome: 'Welcome To My Website',
            typewriterBase: "I'm",
            typewriter: [
              ' Gabriel Raposo',
              ' a Software Engineer',
              ' a React Specialist',
              ' a Fullstack Developer',
            ],
          },
          links: [
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
              title: 'Link to Gabriel GitHub',
            },
          ],
          anchors: [
            { id: 'portfolio', text: 'View Work' },
            { id: 'contact', text: 'Hire Me' },
          ],
        },
        'pt-BR': {
          labels: {
            welcome: 'Bem vindo ao meu Site',
            typewriterBase: 'Eu sou',
            typewriter: [
              ' Gabriel Raposo',
              ' a Engenherio de Software',
              ' Especialista em React',
              ' Desenvolvedor Fullstack',
            ],
          },
          links: [
            {
              href: 'https://www.instagram.com/gabrielrraposo/',
              Icon: RiInstagramLine,
              title: 'Link para o Instagram do Gabriel',
            },
            {
              href: 'https://www.linkedin.com/in/gabrielrraposo/',
              Icon: RiLinkedinLine,
              title: 'Link para o Linkedin do Gabriel',
            },
            {
              href: 'https://github.com/GabrielRaposoD',
              Icon: RiGithubLine,
              title: 'Link para o GitHub do Gabriel',
            },
          ],
          anchors: [
            { id: 'portfolio', text: 'Meu Trabalho' },
            { id: 'contact', text: 'Me Contrate' },
          ],
        },
      },
    },
    {
      Component: AboutMe,
      position: 3,
      props: {
        'en-US': {
          title: 'About Me',
          labels: {
            name: 'I am',
            title: 'SOFTWARE ENGINEER',
            description:
              'I am a freelancer based in US and I have been working as a software engineer for 5 years. I diligently keep track of the latest techs trends, so I can help convert your vision or idea into a meaningful and useful product. Having a sharp eye for product development helps me prioritize tasks, iterate quickly, and deliver faster.',
            button: 'Download my Cv',
          },
        },
        'pt-BR': {
          title: 'Sobre Mim',
          labels: {
            name: 'Eu sou',
            title: 'ENGENHEIRO DE SOFTWARE',
            description:
              'Sou um freelancer que atualmente mora nos EUA e trabalho como engenheiro de software há 5 anos. Eu acompanho diligentemente as últimas tendências de tecnologia, para que eu possa ajudar a converter sua visão ou ideia em um produto significativo e útil. Ter um olho afiado para o desenvolvimento de produtos me ajuda a priorizar tarefas, iterar eficientemente e entregar mais rapidamente.',
            button: 'Baixe meu Currículo',
          },
        },
      },
    },
    {
      Component: MyService,
      position: 4,
      props: {
        'en-US': {
          title: 'My Services',
          services: [
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
          ],
        },
        'pt-BR': {
          title: 'Meus Serviços',
          services: [
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
          ],
        },
      },
    },
    {
      Component: Resume,
      position: 5,
      props: {
        'en-US': {
          title: 'Work & Education',
          timeline: [
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
          ],
        },
        'pt-BR': {
          title: 'Trabalho e Educação',
          timeline: [
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
          ],
        },
      },
    },
    {
      Component: Portfolio,
      position: 6,
      props: {
        'en-US': {
          title: 'Portfolio',
        },
        'pt-BR': { title: 'Portfólio' },
      },
    },
    {
      Component: Contact,
      position: 7,
      props: {
        'en-US': {
          title: 'Get In Touch',
        },
        'pt-BR': { title: 'Entre em Contato' },
      },
    },
    {
      Component: Footer,
      position: 8,
      props: {
        'en-US': {
          copyright: 'All Rights Reserved.',
          madeBy: 'Designed by Gabriel Raposo.',
          links: [
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
              title: 'Link to Gabriel GitHub',
            },
          ],
        },
        'pt-BR': {
          copyright: 'Todos os direitos reservados.',
          madeBy: 'Feito por Gabriel Raposo.',
          links: [
            {
              href: 'https://www.instagram.com/gabrielrraposo/',
              Icon: RiInstagramLine,
              title: 'Link para o Instagram do Gabriel',
            },
            {
              href: 'https://www.linkedin.com/in/gabrielrraposo/',
              Icon: RiLinkedinLine,
              title: 'Link para o Linkedin do Gabriel',
            },
            {
              href: 'https://github.com/GabrielRaposoD',
              Icon: RiGithubLine,
              title: 'Link para o GitHub do Gabriel',
            },
          ],
        },
      },
    },
  ],
};

export { SECTIONS };
