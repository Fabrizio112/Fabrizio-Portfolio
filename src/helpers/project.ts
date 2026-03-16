import appControlGastos from "../assets/images/projects/controlGastos.png"
import appVeterinaria from "../assets/images/projects/seguimientoVet.png"
import appTodo from "../assets/images/projects/toDoApp.png"
import appCrud from "../assets/images/projects/crudUsers.png"
import adoptaVet from "../assets/images/projects/adoptaVet.png"
import upTask from "../assets/images/projects/upTask.png"

export type ProjectDataType = {
    id?: number
    title: string
    description: string
    github: string
    link: string
    image: string
    technologies: {
        text: string
        id: number
    }[]
}

export const projectsData: ProjectDataType[] = [
    {
        id: 1,
        title: "Adopta Vet",
        description: "Aplicacion de Adopcion de Animales",
        github: "https://github.com/Fabrizio112/adopta-vet",
        link: "https://adopta-vet.netlify.app/",
        image: adoptaVet,
        technologies: [
            {
                text: "Tailwind",
                id: 0
            },
            {
                text: "TypeScript",
                id: 1
            },
            {
                text: "Zustand",
                id: 2
            },
            {
                text: "React Query",
                id: 3
            },
            {
                text: "Node.Js",
                id: 4
            },
            {
                text: "Express",
                id: 5
            },
            {
                text: "JWT",
                id: 6
            }
        ]
    },
    {
        id: 2,
        title: "Up Task",
        description: "Aplicacion de gestion de proyectos",
        github: "https://github.com/Fabrizio112/proyects-curso-ts/tree/main/up-task",
        link: "https://up-task-fabrizio.netlify.app/",
        image: upTask,
        technologies: [
            {
                text: "Tailwind",
                id: 0
            },
            {
                text: "TypeScript",
                id: 1
            },
            {
                text: "Zustand",
                id: 2
            },
            {
                text: "React Query",
                id: 3
            },
            {
                text: "Node.Js",
                id: 4
            },
            {
                text: "Express",
                id: 5
            },
            {
                text: "JWT",
                id: 6
            }
        ]
    },
    {
        id: 3,
        title: "App de Control de Gastos",
        description: "Aplicacion de control de gastos que permite al usuario registrar sus gastos y asi tener un control sobre el presupuesto que posee",
        github: "https://github.com/Fabrizio112/proyects-curso-ts/tree/main/control-gastos-context",
        link: "https://app-presupuesto-fabri.netlify.app/",
        image: appControlGastos,
        technologies: [
            {
                text: "Tailwind",
                id: 0
            },
            {
                text: "TypeScript",
                id: 1
            },
            {
                text: "React",
                id: 2
            },
            {
                text: "Context API",
                id: 3
            },
            {
                text: "use Reducer",
                id: 4
            }
        ]
    },
    {
        id: 4,
        title: "App de Seguimiento de Pacientes",
        description: "Aplicacion de seguimiento de pacientes orientada en una veterinaria que permite cargar al paciente , su cuidador y sus sintomas",
        github: "https://github.com/Fabrizio112/proyects-curso-ts/tree/main/pacientes-zustand",
        link: "https://pacientes-fabri.netlify.app/",
        image: appVeterinaria,
        technologies: [
            {
                text: "Tailwind",
                id: 0
            },
            {
                text: "TypeScript",
                id: 1
            },
            {
                text: "React",
                id: 2
            },
            {
                text: "Zustand",
                id: 3
            }
        ]
    },
    {
        id: 5,
        title: "To Do App",
        description: "Proyecto Final para el Curso de Full Stack Codo a Codo .Es una aplicacion web que te permite gestionar las diferentes tareas que agregues y organizar de forma personal estas mismas",
        github: "https://github.com/Fabrizio112/ToDo-List-FrontEnd",
        link: "https://todo-fabri.netlify.app/",
        image: appTodo,
        technologies: [
            {
                text: "JavaScript",
                id: 0
            },
            {
                text: "Vue",
                id: 1
            },
            {
                text: "Python",
                id: 2
            },
            {
                text: "Flask",
                id: 3
            },
            {
                text: "MySQL",
                id: 4
            }
        ]
    },
    {
        id: 6,
        title: "Crud Usuarios",
        description: "Proyecto Pre Final para el Curso de Full Stack Codo a Codo. Es un CRUD de usuarios",
        github: "https://github.com/Fabrizio112/Frontend-TPFinal-CaC4.0",
        link: "https://cac-tp-crud-users.netlify.app/",
        image: appCrud,
        technologies: [
            {
                text: "JavaScript",
                id: 0
            },
            {
                text: "Vue",
                id: 1
            },
            {
                text: "Python",
                id: 2
            },
            {
                text: "Flask",
                id: 3
            },
            {
                text: "MySQL",
                id: 4
            },
            {
                text: "Bootstrap",
                id: 5
            }
        ]
    }

];
