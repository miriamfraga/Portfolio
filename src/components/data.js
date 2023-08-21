const Data = {
    firstName: "Miriam",
    lastName: "Fraga", 
    birth: "1989", 
    based: "Cádiz",
    "image": 
        {
         src: "./assets/miriam.jpg",
         alt: "miriam photo"}
    ,
    contact: [
            {
                way: "https://www.linkedin.com/in/miriamfraga/",
            },
            {
                way: "https://github.com/miriamfraga"
            },
            {
                way: "miriam.fraga@bootcamp-upgrade.com"
            }
             ], 
    aboutMe: "I greatly enjoy learning new knowledge, now shifting towards a full-stack profile. I like to stay thirsty for new challenges. My work experience tells me that teamwork takes us further. I am a woman who identifies with responsibility, personal growth, ambition, and creativity.",
    education: [
        
        {
            studie: "Bootcamp",
            level: "Front End Developer",
            university: "Upgrade Hub",
            year: "2023",
            image: {
                src: "./assets/upgrade.png", 
                alt:"Upgrade Hub logo"
            }
         },
         {
            studie: "Posgrado",
            level: "Violencia de Género",
            university: "Fundación Ifis",
            year: "2021",
            image: {
                src: "./assets/ifis.png", 
                alt:"Ifis logo"
            }
         },
         {
            studie: "Posgrado",
            level: "Especialista Gestión Políticas de Igualdad",
            university: "Universidad Carlos III de Madrid",
            year: "2019",
            image: {
                src: "./assets/uc3m.jpeg", 
                alt:"Carlos III logo"
            }
         },
         {
            studie: "Certificado de Profesionalidad",
            level: "Promoción para la Igualdad Efectiva de Mujeres y Hombres",
            university: "SEPE",
            year: "2018",
            image: {
                src: "", 
                alt:""
            }
         },
         {
            studie: "Máster",
            level: "Psicología de la Intervención Social Comunitaria",
            university: "Universidad de Sevilla",
            year: "2017",
            image: {
                src: "./assets/use.png", 
                alt:"Universidad de Sevilla logo"
            }
         },
         {
            studie: "Licenciatura",
            level: "Psicología",
            university: "Universidad de Jaén",
            year: "2015",
            image: {
                src: "./assets/uja.gif", 
                alt:"Universidad de Jaén logo"
            }
         },
    ], 
    languages: [
        {
            skill: "Inglés",
            level: "B2"
        }, 
        {
            skill: "Francés",
            level: "B2"
        }, 
    ], 
    skills: [
        {sk: "HTML", 
         color: "#ff6600", 
         image: "./assets/html.png"}, 
        {sk: "CSS",
        color: "#00aeff", 
        image: "./assets/css.png"}, 
        {sk:"SASS", 
        color: "#e465b8"},
        {sk: "BOOTSTRAP", 
        color: "#9a34e3"},
        {sk: "JAVASCRIPT", 
        color: "#eec50a"},
        {sk: "ANGULAR",
         color: "#d82e07"},
        {sk: "REACT",
         color: "#0ae3f2"},
        {sk: "REDUX",
         color: "#a720f6"},
    ],
    environment: [
        {env: "GITHUB"},
        {env: "VISUAL STUDIO CODE"},
        {env: "ECLIPSE"}
    ]
}
export default Data