import {
    ynov,
    eliefaure,
    java,
    linux,
    cpp,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    jobit,
    threejs,
    groupietracker,
    whethearapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "c++",
      icon: cpp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "Lycée",
      company_name: "Elie Faure",
      icon: eliefaure,
      iconBg: "#383E56",
      date: "Septembre 2019- Juin 2022",
      points: [
        "Baccalauréat Scientifique",
        "Apprentissage de la programmation en python",
      ],
    },
    {
      title: "Université",
      company_name: "Ynov",
      icon: ynov,
      iconBg: "#E6DEDD",
      date: "Septembre 2022 - Juin 2027",
      points: [
        "Apprentissage de la programmetion web en première année, ainsi que de Linux et du réseau",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Groupie-Tracker",
      description:
        "Application web permettant de suivre les groupes de musique que l'on aime, et de découvrir de nouveaux groupes.",
      tags: [
        {
          name: "golang",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "api",
          color: "purple-text-gradient",
        }
      ],
      image: groupietracker,
      source_code_link: "https://github.com/Matsuell/groupieTracker.git",
    },
    {
      name: "Forum",
      description:
        "Création d'un forum avec un système de login et de création de post.",
      tags: [
        {
          name: "golang",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "purple-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Wheater App",
      description:
        "Application web permettant de suivre la météo de n'importe quel ville du monde.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: whethearapp,
      source_code_link: "https://github.com/Matsuel/WheatherAppReact.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };