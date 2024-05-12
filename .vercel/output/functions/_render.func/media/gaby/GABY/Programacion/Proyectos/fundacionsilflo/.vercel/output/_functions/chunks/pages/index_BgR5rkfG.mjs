/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, s as spreadAttributes, f as addAttribute } from '../astro_ZkQBdAak.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Facebook, b as $$Instagram, c as $$TikTok, d as $$YouTube, $ as $$Layout } from './capacitaciones_ie_pUf2P.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$b = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900" id="about"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"> <div class="flex flex-col justify-center"> <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
Fundación Silvia Flores
</h1> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Nuestro compromiso se basa en potenciar el crecimiento de las personas,
        fomentando la igualdad de oportunidades en el acceso a la salud. Creemos
        firmemente en el poder transformador de la información y la formación en
        este campo crucial. Únete a nosotros en nuestra búsqueda continua de un
        país más saludable, donde cada individuo tenga la oportunidad de acceder
        a los recursos y conocimientos necesarios para cuidar de su bienestar.
        Juntos, podemos construir un futuro más brillante y equitativo para
        todos. ¡Explora nuestro sitio para conocer más sobre nuestras
        iniciativas, programas y cómo puedes involucrarte!
</p> <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0"> <a href="la-fundacion" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#11b8bb] hover:bg-[#0b9ba0]">
Mas Información...
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div> <div class="flex flex-col gap-8 items-center justify-center"> <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:mt-10 sm:h-96 shadow-xl" src="https://www.youtube.com/embed/8_3yyepO5kk?si=GVrZ5KJi2oaDgLvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe> <div class="flex mb-10 gap-10"> <a href="#" class="hover:text-slate-600 text-black"> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "w-8 h-8" })} <span class="sr-only">Facebook</span> </a> <a href="https://www.instagram.com/fundacion_academica_silflo/" class="text-black hover:text-slate-600 ms-5"> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "w-8 h-8" })} <span class="sr-only">Instagram</span> </a> <a href="https://www.tiktok.com/@fundacionsilflo" class="text-black hover:text-slate-600 ms-5"> ${renderComponent($$result, "TikTok", $$TikTok, { "class": "w-8 h-8" })} <span class="sr-only">Tiktok</span> </a> <a href="https://www.youtube.com/@fundacionsilflo" class="text-black hover:text-slate-600 ms-5"> ${renderComponent($$result, "YouTube", $$YouTube, { "class": "w-8 h-8" })} <span class="sr-only">You Tube</span> </a> </div> </div> </div> </section>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/about.astro", void 0);

const $$Astro$a = createAstro();
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/ArrowRight.astro", void 0);

const $$Astro$9 = createAstro();
const $$CapacitacionesItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CapacitacionesItems;
  const { titulo, categoria, modalidad, descripcion, imagen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cursor-pointer w-full md:w-2/5 lg:w-1/4 sm:mb-0 mb-6 bg-[#105a5f] hover:bg-[#11b8bb] border-[#0d7278] shadow-xl shadow-[#124b4f]
   transition duration-500 ease-in-out transform
   overflow-clip sm:group-hover:-translate-y-1
   sm:group-hover:shadow-2xl sm:hover:border-[#0d7278]
   sm:h-full hover:md:scale-110 md:group-hover:scale-105"> <div class="h-64 overflow-hidden relative"> <img alt="content" class="object-cover object-center w-full h-56 transition duration-500 sm:h-full hover:md:scale-125 md:group-hover:scale-105" loading="lazy"${addAttribute(imagen, "src")}> </div> <div class="flex items-center justify-between mt-4 mx-4 text-xl font-light text-[#f0fdfc]"> <h2 class="text-xl font-bold text-[#f0fdfc] mt-2 mx-5"> ${categoria} </h2> <p class="text-[#f0fdfc] text-center"> ${modalidad} </p> </div> <a href="/capacitaciones" class="text-[#f0fdfc] font-bold mx-5 inline-flex gap-2 justify-start items-center my-4 cursor-pointer hover:text-[#032b30]"> ${renderComponent($$result, "ArrowRight", $$ArrowRight, {})} <span class="text-center items-center hover:text-[#032b30]">Más información</span> </a> </div>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/CapacitacionesItems.astro", void 0);

const $$Astro$8 = createAstro();
const $$Wave = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Wave;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill" fill="#0CEAF2" fill-opacity="1"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill" fill="#0CEAF2" fill-opacity="1"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill" fill="#0CEAF2" fill-opacity="1"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Wave.astro", void 0);

const $$Astro$7 = createAstro();
const $$Capacitaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Capacitaciones;
  const CURSO = [
    {
      titulo: "Enfermer\xEDa Pedi\xE1trica",
      categoria: "Salud",
      modalidad: "Presencial",
      descripcion: "Certf. Oficial",
      imagen: "/src/Cursos/Salud/enfermeria-pediatria.webp"
    },
    {
      titulo: "Estimulacion Temprana",
      categoria: "Psicologia",
      modalidad: "Online",
      descripcion: "Nuevo Curso",
      imagen: "/src/Cursos/Psicologia/estimulacion.webp"
    },
    {
      titulo: "Herramientas Digitales",
      categoria: "Tecnologia",
      modalidad: "Online",
      descripcion: "Para Adultos y Principiantes",
      imagen: "/src/Cursos/Idioma-Tecno/digital.webp"
    },
    {
      titulo: "Ingl\xE9s",
      categoria: "Idioma",
      modalidad: "Online",
      descripcion: "Nuevo Curso",
      imagen: "/src/Cursos/Idioma-Tecno/ingles.webp"
    },
    {
      titulo: "AKM",
      categoria: "Kinesiologia",
      modalidad: "Online",
      descripcion: "Duraci\xF3n 6 Meses",
      imagen: "/src/Cursos/Kinesio/akm.webp"
    },
    {
      titulo: "Autismo y TEA",
      categoria: "Acompa\xF1amiento",
      modalidad: "Online",
      descripcion: "Formaci\xF3n y Empleo",
      imagen: "/src/Cursos/Acompa\xF1amiento/autismo.webp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white/75" id="capacitaciones"> <div class="container px-5 py-24 mx-auto"> <div class="flex flex-col"> <div class="h-1 bg-gray-900 rounded overflow-hidden"> <div class="w-24 h-full bg-[#0d7278]"></div> </div> <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12 text-[#0d7278]"> <h1 class="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0">
Fundación SILFLO te capacita
</h1> <p class="sm:w-3/5 font-bold text-xl leading-relaxed sm:pl-10 pl-0 text-[#0b9096]">
El Sistema de Aula invertida de Fundación SILFLO, te va a convertir en
          un experto aprendiz del área que te estés formando.
</p> </div> </div> <div class="flex flex-wrap p-5 sm:-m-4 -mx-4 -mb-10 -mt-4 gap-10 justify-center"> ${CURSO.map((curso) => renderTemplate`${renderComponent($$result, "CapacitacionesItems", $$CapacitacionesItems, { ...curso })}`)} </div> </div> </div> <div class="custom-shape-divider-bottom-1713505436"> ${renderComponent($$result, "Wave", $$Wave, {})} </div>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/capacitaciones.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="w-full relative bg-slate-900"> <video class="w-full shadow-lg opacity-30" src="/public/Presentación.mp4" autoplay loop muted></video> <div class="absolute w-64 mx-5 bottom-0 text-center flex flex-col md:w-full top-[50%] rigth-[50%]"> <h1 class="text-[#11b8bb] text-2xl font-extrabold md:text-5xl">
Fundación Académica Silvia Flores
</h1> <p class="hidden text-2xl py-5 font-semibold text-white px-2 md:block">
Potenciamos el Crecimiento de las Personas Fomentando la Igualdad de Oportunidades !!!
</p> </div> </section>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Check = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checks"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12l5 5l10 -10"></path><path d="M2 12l5 5m5 -5l5 -5"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Check.astro", void 0);

const Donaciones = [
	{
		title: "Egresados",
		descripcion: "El  día 4 de Diciembre del año 2023 en Puerto Madero- CABA Buenos Aires, , Nuestra  Fundación Académica Silvia Flores, llevó a cabo la realización del Acto de Graduación del cierre del ciclo lectivo 2023."
	},
	{
		title: "Aula de Simulación clínica",
		descripcion: "Nuestra fundación SILFLO, cuenta con un espacio  de Simulación Clínica, destinado a la formación y prácticas académicas , donde el alumno desarrolla su entrenamiento práctico, como si estuviera trabajando en un sector de internación domiciliaria, clínica u hospitalaria."
	},
	{
		title: "Donaciones",
		descripcion: "Durante el año 2023, hemos recibido diferentes donaciones de material descartable, instrumental para prácticas, sillas de ruedas entre otros. Agradecemos a nuestra alumna  Sra. Liz, Amarilla por sus generosas donaciones."
	},
	{
		title: "Uniformes institucionales",
		descripcion: "El diseño de  nuestros ambos académicos , están diseñados y confeccionados por la Sra Pamela Avila, estudiante de nuestra intuición."
	},
	{
		title: "Educacion a Distancia",
		descripcion: "El Sistema de Aula invertida de Fundación SILFLO, te va a convertir en un experto aprendiz del área que te estés formando. Durante el 2022 y 2023, se han recibido 267, alumnos adultos entre los cuales 230 eran Secundario de Adultos y 37 estudiantes adultos  del Primario."
	},
	{
		title: "Jornadas de R.C.P y DEA",
		descripcion: "En colaboración con un equipo experto y comprometido, ofrecemos clases y jornadas de Reanimación Cardiopulmonar (RCP) diseñadas para capacitar a individuos y grupos en habilidades vitales de primeros auxilios."
	}
];

const $$Astro$4 = createAstro();
const $$Novedades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Novedades;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white text-white flex flex-col justify-center items-center" id="novedades"> <div class="flex flex-col justify-center items-center max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"> <div class="flex flex-col"> <h2 class="text-3xl font-bold sm:text-4xl text-gray-900">
Nodedades sobre la Fundación
</h2> <p class="mt-4 text-gray-900">
Bienvenido a nuestra sección de novedades, donde te mantendremos al día
        con las últimas noticias y eventos de la Fundación SILFLO. Aquí
        encontrarás información emocionante sobre nuestros egresados destacados,
        donaciones generosas que impulsan nuestra misión, iniciativas de
        educación a distancia para llegar a más personas, emocionantes jornadas
        de RCP, detalles sobre los uniformes distintivos de nuestra fundación y
        actualizaciones sobre nuestras modernas aulas de simulación. ¡Explora
        esta sección para descubrir cómo estamos avanzando en nuestra misión de
        promover la educación en salud y hacer una diferencia positiva en
        nuestras comunidades!
</p> <div class="mt-12"> <a href="/novedades" class="inline-block rounded  px-12 py-3 text-sm font-medium
           text-white transition bg-[#11b8bb] hover:bg-[#0b9ba0]">
Más sobre nosotros
</a> </div> </div> <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"> ${Donaciones.map((data) => renderTemplate`<div class="flex items-start gap-4"> <span class="shrink-0 rounded-lg bg-gray-800 p-4"> ${renderComponent($$result, "Check", $$Check, {})} </span> <div> <h2 class="text-lg font-bold text-gray-900">${data.titulo}</h2> <p class="mt-1 text-sm text-gray-900">${data.descripcion}</p> </div> </div>`)} </div> </div> </section>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/Novedades.astro", void 0);

const $$Astro$3 = createAstro();
const $$Next = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Next;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Next.astro", void 0);

const $$Astro$2 = createAstro();
const $$Back = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Back;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Back.astro", void 0);

const $$Astro$1 = createAstro();
const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carrusel;
  return renderTemplate`${maybeRenderHead()}<div class="slider" data-astro-cid-sxgvwazn> <div class="list" data-astro-cid-sxgvwazn> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-15.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-6.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-7.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-14.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-2.jpg" alt="" data-astro-cid-sxgvwazn> </div> </div> <div class="thumbnail" data-astro-cid-sxgvwazn> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-15.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-6.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-7.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-14.jpg" alt="" data-astro-cid-sxgvwazn> </div> <div class="item" data-astro-cid-sxgvwazn> <img src="/src/images/img-2.jpg" alt="" data-astro-cid-sxgvwazn> </div> </div> <div class="nextPrevArrows" data-astro-cid-sxgvwazn> <button id="prev" class="prev p-2" data-astro-cid-sxgvwazn> ${renderComponent($$result, "Back", $$Back, { "data-astro-cid-sxgvwazn": true })} </button> <button id="next" class="next p-2" data-astro-cid-sxgvwazn> ${renderComponent($$result, "Next", $$Next, { "data-astro-cid-sxgvwazn": true })} </button> </div> </div>  `;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/Carrusel.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fundaci\xF3n Acad\xE9mica Silvia Flores", "description": "La Fundaci\xF3n Silvia Flores promueve la Educaci\xF3n en el \xE1mbito de la salud" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, { "id": "about" })} ${renderComponent($$result2, "Capacitaciones", $$Capacitaciones, { "id": "Capacitaciones" })} ${renderComponent($$result2, "Novedades", $$Novedades, {})} ${renderComponent($$result2, "Carrusel", $$Carrusel, {})} </main> ` })}`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/pages/index.astro", void 0);

const $$file = "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
