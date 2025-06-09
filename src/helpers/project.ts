import appControlGastos from "../assets/images/projects/controlGastos.png"
import appVeterinaria from "../assets/images/projects/seguimientoVet.png"
import appTodo from "../assets/images/projects/toDoApp.png"
import appCrud from "../assets/images/projects/crudUsers.png"
import appSmartShopping from "../assets/images/projects/smartShopping.png"
import appDivisas from "../assets/images/projects/divisasApp.png"

export type ProjectDataType={
    id?:number
    title:string
    description:string
    github:string
    link:string
    image:string
    technologies:{
        text:string
        id:number
    }[]
}

export const projectsData : ProjectDataType[] = [
        {
            id:1,
            title: "App de Control de Gastos",
            description: "Aplicacion de control de gastos que permite al usuario registrar sus gastos y asi tener un control sobre el presupuesto que posee",
            github: "",
            link: "",
            image:appControlGastos,
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
            id:2,
            title: "App de Seguimiento de Pacientes",
            description: "Aplicacion de seguimiento de pacientes orientada en una veterinaria que permite cargar al paciente , su cuidador y sus sintomas",
            github: "https://github.com/Fabrizio112",
            link: "",
            image:appVeterinaria,
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
            id:3,
            title: "To Do App",
            description: "Proyecto Final para el Curso de Full Stack Codo a Codo .Es una aplicacion web que te permite gestionar las diferentes tareas que agregues y organizar de forma personal estas mismas",
            github: "https://github.com/Fabrizio112",
            link: "",
            image:appTodo,
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
            id:4,
            title: "Crud Usuarios",
            description: "Proyecto Pre Final para el Curso de Full Stack Codo a Codo. Es un CRUD de usuarios",
            github: "https://github.com/Fabrizio112",
            link: "",
            image:appCrud,
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
        },
        {
            id:5,
            title: "Smart Shopping",
            description: "Aplicacion de Ecommerce desarrollada para practicar react.Posee diferentes secciones y maneja la logica principal en el carrito de compras.La informacion se obtiene de una Api Externa",
            github: "https://github.com/Fabrizio112",
            link: "",
            image:appSmartShopping,
            technologies: [
                {
                    text: "Sass",
                    id: 0
                },
                {
                    text: "JavaScript",
                    id: 1
                },
                {
                    text: "React",
                    id: 2
                },
                {
                    text: "Context Api",
                    id: 3
                },
                {
                    text: "use Reducer",
                    id: 4
                },
                {
                    text: "React Router",
                    id: 5
                }
            ]
        },
         {
            id:6,
            title: "App de Divisas",
            description: "Aplicacion la cual se pueden comparar divisas y calcularlas",
            github: "https://github.com/Fabrizio112",
            link: "",
            image:appDivisas,
            technologies: [
                {
                    text: "Sass",
                    id: 0
                },
                {
                    text: "Bootstrap",
                    id: 1
                },
                {
                    text: "React",
                    id: 2
                },
                {
                    text: "Redux",
                    id: 3
                },
                {
                    text: "React Query",
                    id: 4
                },
                {
                    text: "React Router",
                    id: 5
                }
            ]
        }
 ];
