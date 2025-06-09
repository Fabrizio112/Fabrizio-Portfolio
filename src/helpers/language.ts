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
            description: `Effort and Consistency are my strengths <br /> Software Development Technicature Student and Self taught developer that is looking for an opportunity to gain experience and grow my technical and soft skills . Always  willing to face challenges and proofs. Enjoy facing my limits and learn new technologies. Curiosity and versatility are the fuel for learning more day to day <br /> My two passions : Technology and Sports .<br/> I love Football. 
            `,
            buttonD: "Resume",
            buttonC:"Contact Me"
        },
        projects: {
            title: "My Projects",
            cards: {
                1: {
                    title: "Expenses Control App",
                    description: "Expenses control application that allows the user to add some expenses and have  control over them",
                },
                2: {
                    title: "Patient Tracking App",
                    description: "Patient tracking application that is oriented to a veterinarian and allows you to add patient, caregiver and symptoms",
                },
                3: {
                    title: "To Do App",
                    description: "Final Project of the Full Stack Development course. It is a web web that allows you to manage the different tasks you add and organize them",
                },
                4: {
                    title: "Users Crud",
                    description: "Pre-final project of the Full Stack Development course. It is a crud",
                },
                5: {
                    title: "Smart Shopping",
                    description: "Ecommerce with different and varied products. Developed to practise react.It has different seccions and handles the main logic in the cart. The information was brought through an API",
                },
                6:{
                    title: "Currencies App",
                    description: "App of currencies that can compare and convert currencies",
                }
            }
        },
        tech: {
            title: "Skills"
        },
        contact: {
            title: "Contact Me !!!",
            subtitle: "If you wish to contact me , you can send me a message. I will be happy to answer your query",
        },
        send: {
            success: "The form was submit successfully "
        }

    } as const;

export type languageDictionaryType= typeof languageDictionary