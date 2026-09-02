import type { IJobsExperience } from "../interfaces/IJobExperience";

export const jobs: IJobsExperience[] = [
    {
        enterpriseName: "Independent",
        modality: "Remoto",
        role: "Senior Software Engineer",
        startDate: "Nov 2024",
        endDate: "Pres",
        tasks: [
            "Modelé una aplicación de punto de venta para un restaurante en forma de menú, dónde los clientes podían realizar el pedido a través de una pantalla usando Rust y Tauri, y para el estilo se ocupo boostrap, la base de datos fue construida en MySQL y el backend fue construido en Go.",
            "Construí una tienda en linea para venta alimentos, permitiendo hacer pedidos a traves de ella, permitiendo elegir al cliente pagar en linea, con QR o en efectivo y elegir donde recoger el pedido. Use Angular 19 y material angular, la base de datos que se uso fue PostgreSQL y para backend se uso Rust con tokio.",
            "Desarrolle un runtime de compilacion a diferetes lenguajes de programacion usando Rust y Tauri.",
        ]
    },
    {
        enterpriseName: "ZippZap",
        modality: "Remoto",
        role: "Senior FullStack Developer",
        startDate: "Ene 2023",
        endDate: "Ago 2026",
        tasks: [
            "Lidere al equipo de desarrollo para los proyectos Crewmania y ASSA CREW LOG, ambos enfocados para palataformas iOS.",
            "Diseñe, para ambos proyectos, la base de datos desde 0, teniendo reuniones periodicas con los clientes, implementando metodologias agiles Scrum, usando como motor PostgreSQL y MySQL.",
            "Implemente, para ambos proyectos, un backend REST API funcional documentado a través de Swagger, usando tecnologias tales como NestJs, Spring Boot, Laravel y GraphQL, siguiendo las mejores practicas de codigo limpio y metodologias de desarrollo ciomo TDD, montando los patrones de diseño necesarios, además de implementar procedimientos almacenados usando PL/SQL, los cuales permitieron optimizar las consultas y creacion de nuevos registros un 20%",
            "Desarrolle e implemente las interfaces UX/UI en Figma para el diseño del panel admiinistrativo del proyecto ASSA CREW LOG usando React 19, tailwind y Zustand.",
            "Escribi tests unitarios y de integracion usando Mockito, Jazmin/Karma, y PHPUnit, logrando un 80% de corrección en la detección de posibles bugs y la cobertura de código.",
            "Configure todos los servicios necesarios en una instancia de AWS (EC2, S3, RDS, buckets) y desplegue todos los sistemas desarrollados en los proyectos de la empresa, ademas de implementar practicas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de entrega bajando los tiempos de despliegue más de un 80%"
        ]
    },
    {
        enterpriseName: "Whiz LATAM | Grupo Salinas",
        modality: "Híbrido",
        role: "Senior FullStack Developer",
        startDate: "Jul 2024",
        endDate: "Nov 2024",
        tasks: [
            "Developed UX/UI interfaces with Angular 13 on Ionic with Angular Material and responsive pure CSS.",
            "Built and maintained RESTful APIs with Spring Boot; enforced API quality and versioning through APIGee. ",
            "Performed continuous code quality analysis with SonarQube (code smells, security vulnerabilities, coverage gates) and participated in formal peer code reviews.",
            "Monitored distributed logs and application traces with Elastic Search / ELK stack.",
            "Deployed and maintained web applications on AWS and on-premises Windows Server environments."
        ]
    },
    {
        enterpriseName: "Galileo Global Education",
        modality: "Remoto",
        role: "Senior FullStack Developer",
        startDate: "Abr 2023",
        endDate: "Feb 2024",
        tasks: [
            "Developed and maintained two student-facing systems (course enrollment and social-service tracking) using Angular 15, applying lazy loading and modular architecture to improve Time-to-Interactive metric",
            "Engineered RESTful APIs with Symfony 6 (PHP) and Spring Boot (Java), following RESTful best practices (HTTP semantics, pagination, error handling).",
            "Designed and optimized relational schemas in MySQL; wrote complex queries and stored procedures for academic reporting.",
            "Conducted informal code reviews and mentored junior developers on clean-code and OOP best practices."
        ]
    },
    {
        enterpriseName: "ITSolutions | Volkswagen de México",
        modality: "Presencial",
        role: "Senior FullStack Developer",
        startDate: "Dec 2020",
        endDate: "Feb 2023",
        tasks: [
            "Delivered manufacturing web systems with React 16/17/18 (Material UI), applying component-level performance optimizations (memoization, code-splitting, React.lazy).",
            "Wrote Python and Spring Boot automation scripts for data extraction, ETL pipelines, and plant communication between Silao facility servers.",
            "Managed relational (MySQL, SQL Server) and document (MongoDB) databases; designed schemas and maintained data integrity.",
            "Built backend integrations with Node.js and pure PHP; maintained server-to-server communication protocols with plant teams."
        ]
    },
    {
        enterpriseName: "Liceo de México",
        modality: "Presencial",
        role: "Docente",
        startDate: "Jul 2020",
        endDate: "Dic 2023",
        tasks: [
            "Taught Python and Java programming at university level; delivered networking fundamentals (Cisco Packet Tracer) and technology courses to secondary and high-school students",
        ]
    },
    {
        enterpriseName: "Criteria VMJ Inteligencia de Negocios",
        modality: "Presencial",
        role: "Desarrollador Web (Resident Entry level)",
        startDate: "Jul 2019",
        endDate: "Jan 2020",
        tasks: [
            "Developed a CRM web portal (HTML, CSS, JavaScript, jQuery/AJAX) consuming RESTful APIs; built backend APIs with Spring Boot and automation scripts in Python for SAT invoice batch downloads",
            "Managed MySQL and MariaDB databases for business intelligence reporting"
        ]
    },
];