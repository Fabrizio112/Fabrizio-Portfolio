export type experienceType={
    id:number
    title:string
    description:string
    date:string
    goals:{
        point:string
    }[],
    technologies:{
        tech:string
    }[]
}

export const experience : experienceType[] = [
  {
    id: 1,
    title: "SISEP - Gestión Deportiva de Clubes (En progreso)",
    date:"2025 - Proyecto Final",
    description:
      "Aplicación web desarrollada como proyecto académico para mejorar la organización interna y la comunicación entre los clubes deportivos y sus socios. El sistema busca centralizar información clave y digitalizar procesos que suelen realizarse de forma manual o desorganizada.",
    goals: [
      {
        point: "Permitir la inscripción a actividades deportivas."
      },
      {
        point: "Consultar horarios y cronogramas de actividades."
      },
      {
        point: "Gestionar y actualizar datos personales de los socios."
      },
      {
        point: "Facilitar la comunicación entre socios y administración del club."
      },
      {
        point: "Proveer acceso desde cualquier dispositivo, de forma simple y rápida."
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
        tech: "MySQL"
      },
      {
        tech: "Diseño de sistemas (UML, casos de uso, etc.)"
      }
    ]
  },
  {
    id: 2,
    title: "ARGBroker Demo ",
    date:"2024 - Proyecto Final",
    description:
      "Aplicación desarrollada como proyecto integrador del módulo Programador, en la que se simula el funcionamiento básico de un broker en el mercado bursátil argentino. El proyecto fue realizado por el grupo 'Seven' y tiene como objetivo permitir operaciones de compra y venta de acciones en un entorno demo.",
    goals: [
      { point: "Simular transacciones bursátiles con un saldo inicial ficticio de $1.000.000." },
      { point: "Consultar en tiempo real cotizaciones de acciones argentinas (modo demo)." },
      { point: "Comprar y vender acciones al precio de mercado (precio de compra/venta actual)." },
      { point: "Visualizar el portafolio con detalle de inversiones, saldo restante, y ganancias/pérdidas." },
      { point: "Calcular comisiones del broker del 1.5% por operación." },
      { point: "Diseñar las clases del sistema aplicando UML y principios de Programación Orientada a Objetos." },
      { point: "Diseñar y documentar la base de datos en 3FN, con modelo relacional y descripciones por tabla." }
    ],
    technologies: [
      { tech: "Python" },
      { tech: "POO" },
      { tech: "Diagrama de clases UML" },
      { tech: "Modelado de Base de Datos" },
      { tech: "GitHub" }
    ]
  }
];