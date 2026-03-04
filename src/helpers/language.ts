export const languageDictionary = {
    nav: {
        button1: "Home",
        button2: "Projects",
        button3: "Skills",
        button4: "Contact"
    },
    header: {
        title: "Hello, I´m",
        subtitle: "FullStack Developer",
        description: `Student of Software Development and self-taught developer. I am passionate about solving problems through code and am constantly learning on my own. Today, I am looking for my first job opportunity to continue growing alongside a team and transform that learning into real impact.`,
        buttonD: "Resume",
        buttonC: "Contact Me"
    },
    projects: {
        title: "My Projects",
        cards: {
            1: {
                title: "Adopta Vet",
                description: "Animal adoption application",
            },
            2: {
                title: "Up Task",
                description: "Project management application",
            }
            ,
            3: {
                title: "Expenses Control App",
                description: "Expenses control application that allows the user to add some expenses and have  control over them",
            },
            4: {
                title: "Patient Tracking App",
                description: "Patient tracking application that is oriented to a veterinarian and allows you to add patient, caregiver and symptoms",
            },
            5: {
                title: "To Do App",
                description: "Final Project of the Full Stack Development course. It is a web web that allows you to manage the different tasks you add and organize them",
            },
            6: {
                title: "Users Crud",
                description: "Pre-final project of the Full Stack Development course. It is a crud",
            }
        }
    },
    experience: {
        title: "Experience",
        logros: "Notable achievements",
        tecnologias: "Technologies used",
        cards: [
            {
                id: 1,
                title: "SISEP - Sports Club Management System",
                date: "2025 - Final Project",
                description:
                    "Web application developed as an academic project to improve internal organization and communication between sports clubs and their members. The system aims to centralize key information and digitize processes that are often done manually or in a disorganized way.",
                goals: [
                    {
                        point: "Allow users to register for sports activities."
                    },
                    {
                        point: "Consult schedules and activity calendars."
                    },
                    {
                        point: "Manage and update personal member data."
                    },
                    {
                        point: "Facilitate communication between members and club administration."
                    },
                    {
                        point: "Provide access from any device in a simple and fast way."
                    }
                ],
                technologies: [
                    {
                        tech: "HTML/CSS/JavaScript"
                    },
                    {
                        tech: "Angular"
                    },
                    {
                        tech: "TypeScript"
                    },
                    {
                        tech: "MySQL"
                    },
                    {
                        tech: "Python"
                    },
                    {
                        tech: "Django"
                    },
                    {
                        tech: "System design (UML, use cases, etc.)"
                    }
                ]
            },
            {
                id: 2,
                title: "ARGBroker Demo",
                date: "2024 - Final Project",
                description:
                    "Application developed as a final integrative project for the Programming module, simulating the basic operation of a broker in the Argentine stock market. The project was developed by the team 'Seven' and aims to allow stock trading operations in a demo environment.",
                goals: [
                    { point: "Simulate stock market transactions with an initial fictitious balance of $1,000,000." },
                    { point: "Consult real-time quotes of Argentine company stocks (demo mode)." },
                    { point: "Buy and sell stocks at current market price (buy/sell price)." },
                    { point: "View portfolio with investment details, remaining balance, and profit/loss." },
                    { point: "Calculate broker commissions at 1.5% per transaction." },
                    { point: "Design system classes using UML and Object-Oriented Programming principles." },
                    { point: "Design and document the database in 3NF, with relational model and table descriptions." }
                ],
                technologies: [
                    { tech: "Python" },
                    { tech: "OOP" },
                    { tech: "UML Class Diagram" },
                    { tech: "Database Modeling" },
                    { tech: "GitHub" }
                ]
            }
        ]
    },
    contact: {
        title: "Contact Me !!!",
        subtitle: "If you wish to contact me , you can send me a message. I will be happy to answer your query",
    },
    send: {
        success: "The form was submit successfully "
    }

} as const;

export type languageDictionaryType = typeof languageDictionary