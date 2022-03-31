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
  RiCloudy2Line,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiSearchLine,
  RiShareLine,
  RiSmartphoneLine,
  RiTerminalBoxLine,
} from 'react-icons/ri';

const SEO = {
  'pt-BR': {
    title: 'Gabriel Raposo | Desenvolvedor Web | Engenheiro de Software',
    description:
      'Bem vindo ao meu portfólio, eu sou um Engenheiro de Software com anos de experiência e ênfase em Desenvolvimento Web do início ao fim, aprenda um pouco mais sobre mim aqui.',
    name: 'Gabriel Raposo Portfólio',
  },
  'en-US': {
    title: 'Gabriel Raposo | Software Engineer',
    description:
      "Welcome to my portfolio, I'm a Software Engineer with years of experience and an emphasis on Web Development from start to finish, learn a little more about me here.",
    name: 'Gabriel Raposo Portfolio',
  },
};

const SECTIONS = {
  Components: [
    {
      Component: NavBar,
      position: 1,
      props: {
        'en-US': {
          sections: [
            { name: 'home', id: 'home' },
            { name: 'about', id: 'about' },
            { name: 'services', id: 'services' },
            { name: 'resume', id: 'resume' },
            { name: 'portfolio', id: 'portfolio' },
            { name: 'contact', id: 'contact' },
          ],
        },
        'pt-BR': {
          sections: [
            { name: 'início', id: 'home' },
            { name: 'sobre', id: 'about' },
            { name: 'serviços', id: 'services' },
            { name: 'currículo', id: 'resume' },
            { name: 'portfólio', id: 'portfolio' },
            { name: 'contato', id: 'contact' },
          ],
        },
      },
    },
    {
      Component: Header,
      position: 2,
      props: {
        'en-US': {
          id: 'home',
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
          id: 'início',
          labels: {
            welcome: 'Bem vindo ao meu Site',
            typewriterBase: 'Eu sou',
            typewriter: [
              ' Gabriel Raposo',
              ' Engenherio de Software',
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
              title: 'Fullstack Development',
              description:
                'Using the best tecnology saves you the budget for spending with meaninfull things, how can I use the best tecnology to help you?',
              Icon: RiTerminalBoxLine,
            },
            {
              title: 'Cloud Services',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              Icon: RiCloudy2Line,
            },
            {
              title: 'Mobile Responsive',
              description:
                'Smartphones are everywhere in our life and may be the first contact with your brand and I can help you toward this new step!',
              Icon: RiSmartphoneLine,
            },
            {
              title: 'SEO Optimization',
              description:
                'Being sure that the best keywords are being used is the way to highlight yourself amoung others and get more traffic within the search engines.',
              Icon: RiSearchLine,
            },
            {
              title: 'Fast Comunication',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              Icon: RiShareLine,
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
              Icon: RiCloudy2Line,
            },
            {
              title: 'Mobile Responsive',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              Icon: RiSmartphoneLine,
            },
            {
              title: 'Web Development',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              Icon: RiSearchLine,
            },
            {
              title: 'Web Development',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              Icon: RiShareLine,
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
              startDate: '2017',
              endDate: 'CURRENT',
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
              title: 'Engenheiro de Software',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              startDate: '2017',
              endDate: 'ATUAL',
            },
            {
              title: 'Exsign',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.',
              startDate: '2020',
              endDate: '2021',
            },
            {
              title: 'Bacharelado em Ciência da Computação',
              description:
                'Formando em Ciência da Computação pela Universidade Católica de Brasília (UCB), Monitor de diversas matérias relacionadas a lógica de programação, algoritmos, estrutura de dados e computação, Bolsista do projeto E-Lixo, Participante do projeto de Alfabetização Digital, Expositor na SNCT 2019 e Voluntário na CBIE 2019',
              startDate: '2018',
              endDate: '2022',
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
          portfolioItems: [
            {
              id: 'akio',
              category: 'Concept',
              title: 'Akio',
              description: '#CC555B',
            },
          ],
        },
        'pt-BR': {
          title: 'Portfólio',
          portfolioItems: [
            {
              id: 'akio',
              category: 'Concept',
              title: 'Akio',
              description: '#CC555B',
            },
            {
              id: 'bayer',
              category: 'Freelance',
              title: 'Smart Bayer',
              description: '#CC555B',
            },
            {
              id: 'bayer2',
              category: 'Freelance',
              title: 'Smart Bayer 2',
              description: '#CC555B',
            },
            {
              id: 'saintgobain',
              category: 'Freelance',
              title: 'Smart Saint Gobain',
              description: '#CC555B',
            },
            {
              id: 'casasbahia',
              category: 'Landing Page',
              title: 'Retira Casas Bahia',
              description: '#CC555B',
            },
            {
              id: 'extra',
              category: 'Landing Page',
              title: 'Retira Extra',
              description: '#CC555B',
            },
            {
              id: 'pontofrio',
              category: 'Landing Page',
              title: 'Retira Ponto Frio',
              description: '#CC555B',
            },
            {
              id: 'guio',
              category: 'Work',
              title: 'Guio',
              description: '#CC555B',
            },
            {
              id: 'shortener',
              category: 'Project',
              title: 'Encurtador de URL',
              description: '#CC555B',
            },
          ],
        },
      },
    },
    {
      Component: Contact,
      position: 7,
      props: {
        'en-US': {
          title: 'Get In Touch',
          namePlaceholder: 'Name',
          subjectPlaceholder: 'Subject',
          messagePlaceholder: 'Message',
          button: 'Send Message',
        },
        'pt-BR': {
          title: 'Entre em Contato',
          namePlaceholder: 'Nome',
          subjectPlaceholder: 'Assunto',
          messagePlaceholder: 'Menssagem',
          button: 'Enviar Menssagem',
        },
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

export { SECTIONS, SEO };
