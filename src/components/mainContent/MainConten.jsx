import React from "react";
import WorkExp from "../workExp/WorkExp";
import "./main-content.scss";

function MainConten() {
    const exp = [
        {
            logo: "/gorilla_logic_logo.jpeg",
            company: "Gorilla Logic",
            position: "Fullstack Node/React Developer Senior",
            start: "Enero 2021",
            end: "enero 2024",
            description:
                "Como Desarrollador Node.js/React.js en Gorilla Logic, lideré el avance tecnológico en soluciones de pagos. Destacando en el desarrollo front-end con React.js y prácticas de prueba robustas, contribuí a la evolución de la interfaz de usuario. En el desarrollo back-end, utilicé Node.js con Express para construir APIs escalables. Esta experiencia no solo fortaleció mis habilidades, sino que también desempeñé un papel clave en proyectos críticos. Posteriormente, en Education Advanced, especializándome en Blazor, C# y Vue.js, continué destacando en el desarrollo de soluciones innovadoras.",
        },
        {
            logo: "/Prodigious.png",
            company: "Prodigious",
            position: "Principal Front End Engineer",
            start: "Octubre 2020",
            end: "diciembre 2020",
            description:
                "En mi rol como Desarrollador Front-End en Razorfish (Prodigious Latin America), contribuí significativamente al desarrollo de soluciones innovadoras para Aflac, líder en seguros en Estados Unidos. Especializado en Angular (v8), lideré la creación de interfaces dinámicas y receptivas. Implementé prácticas sólidas de prueba con Jasmine, Cypress y Mocha para garantizar la calidad del software. Mi participación activa en equipos multidisciplinarios y entornos colaborativos aseguró la entrega exitosa de soluciones de alta calidad.",
        },
        {
            logo: "/heinsohn.jpg",
            company: "Heinsohn",
            position: "Developer Advanced",
            start: "Noviembre 2019",
            end: "octubre 2020",
            description:
                "En mi rol como Desarrollador Web en BrightInsight, una empresa del grupo Heinsohn, desempeñé un papel fundamental en proyectos de soluciones digitales de alta escala para la industria de la salud. Utilicé Angular (v8) para desarrollar interfaces de usuario dinámicas y receptivas, y apliqué prácticas rigurosas de prueba con Jasmine y Mocha para garantizar la calidad del Front-End. Colaboré estrechamente con equipos multidisciplinarios, incluyendo diseñadores y desarrolladores de backend, para cumplir con estándares regulatorios y ofrecer soluciones de alta calidad en el ámbito de la salud.",
        },
        {
            logo: "/Globant India Logo.jpeg",
            company: "Globant",
            position: "Web UI Developer",
            start: "Agosto 2018",
            end: "noviembre 2019",
            description:
                "En Globant, participé activamente en proyectos clave, destacándome en diversas iniciativas tecnológicas. Contribuí al proyecto Studio NorthStar en Disney, mejorando aplicaciones con PHP, AngularJS y Angular 5. En colaboración con el equipo, lideré el rediseño de aplicaciones web para HM Electronics, utilizando ReactJS y SVN para mejorar la interfaz de usuario. Además, colaboré con Sodimac Colombia para actualizar aplicaciones web utilizando Angular y Angular Material, asegurando mejoras visuales y funcionales. Mi experiencia destacada en la mejora de proyectos subraya mi capacidad para adaptarme a diversas tecnologías y colaborar efectivamente en entornos multidisciplinarios.",
        },
    ];

    return (
        <div className="main-content">
            {exp.map((x) => (
                <WorkExp {...x} />
            ))}
        </div>
    );
}

export default MainConten;
