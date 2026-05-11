const languages = {
    java: "Java",
    javascript: "Javascript",
    python: "Python",
    php: "PHP",
    dart: "Dart",
}
const frameworks = {
    springBoot: "Spring Boot",
    react: "React",
    nextjs: "Next.js",
    fastapi: "FastAPI",
    laravel: "Laravel",
    flutter: "Flutter",
}
const databaseSystems = {
    postgresql: "PostgreSQL",
    oracle: "Oracle",
    redis: "Redis",
    mysql: "Mysql",
}
const apisAndWebsites = {
    restfulApi: "RESTful API",
    jwt: "JWT",
    oauth2: "OAuth2",
    basicAuth: "Basic Auth",
    apiKey: "API Key",
}
const devopsAndDeployments = {
    docker: "Docker",
    dockerCompose: "Docker Compose",
    jenkins: "Jenkins",
}
const serverManagementAndConfigurations = {
    apacheTomcat: "Apache Tomcat",
    nginx: "Nginx",
    apache: "Apache",
    redhatos: "Redhat OS",
    centos: "CentOS",
    ubuntu: "Ubuntu",
}
const versionControlAndTools = {
    git: "Git",
    gitlab: "GitLab",
    github: "Github",
    gitFlow: "Git Flow",
    postman: "Postman",
    swagger: "Swagger",
}

const experiences = {
    aeonBank: {
        companyName: "AEON Specialized Bank Cambodia",
        fromYear: "2023",
        toYear: "Present",
        position: "Backend Developer (Supervisor)",
        responsibilities: [
            "Plan, analyze, design, develop new/existing application based on Business Requirement Description.",
            "Engage with stakeholder for Business Requirement Description clarification.",
            "Conduct fasibility study on requirement and provide suggestion solution to business.",
            "Deploy application to UAT environment and Production environment.",
            "Server installation and configuration Apache, Tomcat, MySQL, Nginx.",
            "Support, resolve issues and enhance all existing application.",
            "Lead, assign and follow up task of team members.",
        ],
        listOfImplement: [
            "Email Sending Tool",
            "One Point Service (Integrate with HR System)",
            "One Point Service (Staff Work Anniversary)",
            "Integration with CBS",
            "Bakong and Bakong Cross Border",
            "Power BI",
        ]
    },
    aeonBankOutsourcing: {
        companyName: "AEON Specialized Bank Cambodia",
        fromYear: "2021",
        toYear: "2023",
        position: "Officer Web Developer",
        responsibilities: [
            "List down task, Estimate time.",
            "Review all concerns related to business requirement.",
            "Support, resolve issues and enhance all existing application.",
            "Develop requirement document such as System Flow, ERD, User Guideline."
        ],
        listOfImplement: [
            "Card E-Application (included few enhancement)",
            "Lucky Draw Program",
            "E-Request (included few enhancement)",
        ]
    },
    remoteFreelancer: {
        companyName: "Remote Freelancer",
        fromYear: "2023",
        toYear: "2024",
        responsibilities: [
            "POS (Flutter Desktop Application)",
        ]
    }
};

const educations = {
    setecInstitute: {
        schoolName: "Setec Institute",
        fromYear: "2018",
        toYear: "2022",
        major: "Bachelor's Degree in Management Information System (MIS)"
    },
    chbarAmpovHighSchool: {
        schoolName: "Chbar Ampov High School",
        fromYear: "2015",
        toYear: "2018",
        major: "Completed High School",
    },
    russeyKeoHighSchool: {
        schoolName: "Russey Keo High School",
        fromYear: "2012",
        toYear: "2015",
        major: "Completed Secondary School",
    }
}

const technicalTraining = {
    udemyReact: {
        platform: "Udemy Online Course",
        courseName: "The Ultimate React Course 2025: React, Next.js, Redux & More",
        fromYear: "2026",
        toYear: "Present",
    },
    udemyJavaSpringBoot: {
        platform: "Udemy Online Course",
        courseName: "Master Microservices with Spring Boot and Spring Cloud",
        fromYear: "2025",
        toYear: "Present",
    },
    courseraMetaBackend: {
        platform: "Coursera",
        courseName: "Meta Backend Developer Professional Certificate",
        fromYear: "2023",
        toYear: "2024",
        certificateLinks: [
            "https://coursera.org/share/cf48d14171a7da508bd8ded563161d22",
            "https://coursera.org/share/a02c9460d984f3f8bc8fe3cdc02fb686",
            "https://coursera.org/share/892c462564daed842f3d35510c691318",
        ]
    },
    oneSaleApp: {
        platform: "One Sala App",
        courseName: "Web Development & PHP/Laravel",
        fromYear: "2022",
    },
    reanIT: {
        platform: "Rean IT - Online Courses (Zoom)",
        courseName: "Java Programming",
        fromYear: "2021",
    },
    itTrainingCenter: {
        platform: "IT Training Center",
        courseName: "C# and SQL",
    }
}

const technicalStack = {
    programmingLanguages: [
        "Java", "Python", "JavaScript", "PHP", "Dart",
    ],
    frameworks: [
        "Java Spring Boot", "FastAPI", "React", "Next.js", "Laravel", "Flutter",
    ],
    databaseSystems: [
        "PostgreSQL", "Oracle", "Redis", "MySQL",
    ],
    apisAndWebServices: [
        "REST & RESTful API", "JWT", "OAuth2", "Basic Authentication", "API Keys",
    ],
    devopsAndDeployments: [
        "Docker", "Docker Compose", "Jenkins",
    ],
    serverManagementAndConfigurations: [
        "Apache Tomcat", "NGINX", "Apache", "RedHat OS", "CentOS", "Ubuntu",
    ],
    versionControlAndTools: [
        "Git", "GitLab", "GitHub", "Git Flow", "Postman", "Swagger",
    ]
}

const summaryProjects = {
    staffWorkAnniversary: {
        projectName: "Staff Work Anniversary (One Point Service)",
        companyName: "AEON Specialized Bank",
        fromYear: "2025",
        toYear: "2025",
        techStack: [
            frameworks.springBoot,
            apisAndWebsites.restfulApi,
            databaseSystems.mysql
        ]
    },
    emailSendingToolEnhancement: {
        projectName: "Email Sending Tool - Enhancement",
        companyName: "AEON Specialized Bank",
        fromYear: "2024",
        toYear: "2025",
        techStack: [
            frameworks.springBoot,
            apisAndWebsites.restfulApi,
            databaseSystems.mysql,
            apisAndWebsites.jwt
        ]
    },
    cardEApplicationEnhancement: {
        projectName: "Card E-Application - Enhancement",
        companyName: "AEON Specialized Bank",
        fromYear: "2024",
    },
    onePointService: {
        projectName: "Integrate HR System (One Point Service)",
        companyName: "AEON Specialized Bank",
        fromYear: "2023",
        toYear: "2024",
    }
}



$(document).ready(function () {
    /// init experiences


    /// init educations


    /// init technical training


    /// init technical stack


    /// init summary projects
})