const data = {
    header: {
        img: 'profile.jpeg',
        name: 'Francisco Arleo',
        position: 'Fullstack Developer',
        mobile: '+573045495804',
        email: 'franciscoarleo336@gmail.com',
        address: 'Bogotá, Colombia'
    },
    side: {
        about: {
            icon: 'fa-solid fa-address-card',
            title: {
                en: 'About',
                es: 'Resumen'
            },
            text: {
                en: 'Full-Stack Developer with outstanding experience in React.js, Angular, and Node.js. Specialized in enhancing interfaces and contributing to the success of diverse projects. Strong skills in both front-end and back-end development.',
                es: 'Desarrollador Full-Stack con experiencia destacada en React.js, Angular y Node.js. Especializado en mejorar interfaces y contribuir al éxito de proyectos diversos. Habilidades sólidas en desarrollo front-end y back-end.'
            }
        },
        skills: {
            icon: 'fa-solid fa-sliders',
            title: {
                en: 'Skills',
                es: 'Habilidades'
            },
            skills: [
                {
                    name: 'ReactJs',
                    img: '/react.png',
                    link: 'https://react.dev/'
                },
                {
                    name: 'NodeJs',
                    img: '/node.png',
                    link: 'https://nodejs.org/'
                },
                {
                    name: 'Angular',
                    img: '/angular.png',
                    link: 'https://angular.io/'
                },
                {
                    name: 'C#',
                    img: '/csharp.svg',
                    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
                },
                {
                    name: 'Django',
                    img: '/django.png',
                    link: 'https://www.djangoproject.com/'
                },
                {
                    name: 'Git',
                    img: '/git.png',
                    link: 'https://git-scm.com/'
                },
                {
                    name: 'Express',
                    img: '/express.png',
                    link: 'https://expressjs.com/'
                },
                {
                    name: 'Redux',
                    img: '/redux.png',
                    link: 'https://redux.js.org/'
                },
                {
                    name: 'NGRX',
                    img: '/ngrx.svg',
                    link: 'https://ngrx.io/'
                },
                {
                    name: 'RxJS',
                    img: '/rxjs.png',
                    link: 'https://rxjs.dev/'
                },
                {
                    name: 'Cypress',
                    img: '/cypress.jpeg',
                    link: 'https://www.cypress.io/'
                },
                {
                    name: 'Playwright',
                    img: '/playwright.png',
                    link: 'https://playwright.dev/'
                },
                {
                    name: 'Jest',
                    img: '/jest.png',
                    link: 'https://jestjs.io/'
                },
                {
                    name: 'Sass',
                    img: '/sass.png',
                    link: 'https://sass-lang.com/'
                }
            ]
        },
        education: {
            icon: 'fa-solid fa-graduation-cap',
            title: {
                en: 'Education',
                es: 'Educación'
            },
            items: [
                {
                    institute: 'IUTA',
                    location: 'Los Teques, Venezuela',
                    title: {
                        en: 'Associate Degree in Computer Science',
                        es: 'T.S.U. en informática'
                    },
                    from: {es: 'Abr. 2003', en: 'Apr. 2003'},
                    to: {es: 'Oct. 2006', en: 'Oct. 2006'}
                },
                {
                    institute: 'Universidad Bicentenaria de Aragua',
                    location: 'Carrizal, Venezuela',
                    title: {
                        en: 'Lawyer',
                        es: 'Abogado'
                    },
                    from: {es: 'Jun. 2004', en: 'Jun. 2004'},
                    to: {es: 'Nov. 2009', en: 'Nov. 2009'}
                },
                {
                    institute: 'Universidad Simón Bolívar',
                    location: 'Baruta, Venezuela',
                    title: {
                        en: 'Specialization in Technology and Innovation Management',
                        es: 'Esp. en Gerencia de la Tecnología y la Innovación'
                    },
                    from: {es: 'Ago. 2011', en: 'Aug. 2011'},
                    to: {es: 'Nov. 2015', en: 'Nov. 2015'}
                }
            ]
        },

        languages: [
            {
                lang: {es: 'Español', en: 'Spanish'},
                level: {es: 'Nativo', en: 'Native'}
            },
            {
                lang: {es:'Ingles', en: 'English'},
                level: {es:'B2', en: 'B2'}
            }
        ]
    },
    exp: [
        {
            logo: '/gorilla_logic_logo.jpeg',
            company: 'Gorilla Logic',
            position: 'Fullstack Node/React Developer Senior',
            start: { es: 'Enero 2021', en: 'January 2021' },
            end: { es: 'Enero 2024', en: 'January 2024' },
            description: {
                es: 'Como Desarrollador Node.js/React.js en Gorilla Logic, lideré el avance tecnológico en soluciones de pagos. Destacando en el desarrollo front-end con React.js y prácticas de prueba robustas, contribuí a la evolución de la interfaz de usuario. En el desarrollo back-end, utilicé Node.js con Express para construir APIs escalables. Esta experiencia no solo fortaleció mis habilidades, sino que también desempeñé un papel clave en proyectos críticos. Posteriormente, en Education Advanced, especializándome en Blazor, C# y Vue.js, continué destacando en el desarrollo de soluciones innovadoras.',
                en: 'As a Node.js/React.js Developer at Gorilla Logic, I spearheaded technological advancements in payment solutions. Excelling in front-end development with React.js and robust testing practices, I contributed to the evolution of the user interface. On the back end, I utilized Node.js with Express to build scalable APIs. This experience not only strengthened my skills but also played a key role in critical projects. Subsequently, at Education Advanced, specializing in Blazor, C#, and Vue.js, I continued to excel in the development of innovative solutions.'
            }
        },
        {
            logo: '/Prodigious.png',
            company: 'Prodigious',
            position: 'Principal Front End Engineer',
            start: { es: 'Octubre 2020', en: 'October 2020' },
            end: { es: 'Deciembre 2020', en: 'Decembre 2020' },
            description: {
                es: 'En mi rol como Desarrollador Front-End en Razorfish (Prodigious Latin America), contribuí significativamente al desarrollo de soluciones innovadoras para Aflac, líder en seguros en Estados Unidos. Especializado en Angular (v8), lideré la creación de interfaces dinámicas y receptivas. Implementé prácticas sólidas de prueba con Jasmine, Cypress y Mocha para garantizar la calidad del software. Mi participación activa en equipos multidisciplinarios y entornos colaborativos aseguró la entrega exitosa de soluciones de alta calidad.',
                en: 'In my role as a Front-End Developer at Razorfish (Prodigious Latin America), I made significant contributions to the development of innovative solutions for Aflac, a leading insurance company in the United States. Specializing in Angular (v8), I led the creation of dynamic and responsive interfaces. I implemented robust testing practices with Jasmine, Cypress, and Mocha to ensure software quality. My active involvement in multidisciplinary teams and collaborative environments ensured the successful delivery of high-quality solutions.'
            }
        },
        {
            logo: '/heinsohn.jpg',
            company: 'Heinsohn',
            position: 'Developer Advanced',
            start: { es: 'Noviembre 2019', en: 'Novembre 2019' },
            end: { es: 'Octubre 2020', en: 'October 2020' },
            description: {
                es: 'En mi rol como Desarrollador Web en BrightInsight, una empresa del grupo Heinsohn, desempeñé un papel fundamental en proyectos de soluciones digitales de alta escala para la industria de la salud. Utilicé Angular (v8) para desarrollar interfaces de usuario dinámicas y receptivas, y apliqué prácticas rigurosas de prueba con Jasmine y Mocha para garantizar la calidad del Front-End. Colaboré estrechamente con equipos multidisciplinarios, incluyendo diseñadores y desarrolladores de backend, para cumplir con estándares regulatorios y ofrecer soluciones de alta calidad en el ámbito de la salud.',
                en: 'In my role as a Web Developer at BrightInsight, a company within the Heinsohn group, I played a pivotal role in high-scale digital solutions projects for the healthcare industry. I utilized Angular (v8) to create dynamic and responsive user interfaces, implementing rigorous testing practices with Jasmine and Mocha to ensure Front-End quality. I closely collaborated with multidisciplinary teams, including designers and backend developers, to meet regulatory standards and deliver high-quality healthcare solutions.'
            }
        },
        {
            logo: '/Globant India Logo.jpeg',
            company: 'Globant',
            position: 'Web UI Developer',
            start: { es: 'Agosto 2018', en: 'August 2018' },
            end: { es: 'November 2019', en: 'November 2019' },
            description: {
                es: 'En Globant, participé activamente en proyectos clave, destacándome en diversas iniciativas tecnológicas. Contribuí al proyecto Studio NorthStar en Disney, mejorando aplicaciones con PHP, AngularJS y Angular 5. En colaboración con el equipo, lideré el rediseño de aplicaciones web para HM Electronics, utilizando ReactJS y SVN para mejorar la interfaz de usuario. Además, colaboré con Sodimac Colombia para actualizar aplicaciones web utilizando Angular y Angular Material, asegurando mejoras visuales y funcionales. Mi experiencia destacada en la mejora de proyectos subraya mi capacidad para adaptarme a diversas tecnologías y colaborar efectivamente en entornos multidisciplinarios.',
                en: 'At Globant, I actively participated in key projects, standing out in various technological initiatives. I contributed to the Studio NorthStar project at Disney, enhancing applications with PHP, AngularJS, and Angular 5. Collaborating with the team, I led the redesign of web applications for HM Electronics, using ReactJS and SVN to enhance the user interface. Additionally, I collaborated with Sodimac Colombia to update web applications using Angular and Angular Material, ensuring visual and functional improvements. My notable experience in project enhancement underscores my ability to adapt to diverse technologies and collaborate effectively in multidisciplinary environments.'
            }
        }
    ]
};

export default data;