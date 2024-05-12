/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_ZkQBdAak.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gradient-to-r from-[#11b8bb] to-[#0b9ba0] border-gray-200 dark:bg-gray-900 py-10"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"> <a href="/" class="flex items-center mx-5 space-x-3 rtl:space-x-reverse"> <img src="/Logo.png" class="h-20" alt="Logo de Fundación Silvia Flores"> </a> <button id="menu-button" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 mx-5 w-10 h-10 justify-center text-sm text-slate-200 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <!-- <MenuIcon class="h-10 w-10 mx-5 text-white md:hidden" id="navbar-menu" /> --> <div class="hidden w-full md:block md:w-auto" id="menu-open"> <ul class="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-150 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-200 md:dark:bg-gray-200 dark:border-gray-200"> <li class="border-2 border-transparent p-2 hover:md:border-b-gray-100 border-b-4"> <a href="/" class="block py-2 px-3 text-xl font-bold text-[#f0fdfc] rounded md:bg-transparent md:p-0" aria-current="page">Home</a> </li> <li class="border-2 border-transparent p-2 hover:md:border-b-gray-100 border-b-4"> <a href="/la-fundacion" class="block py-2 px-3 text-xl font-bold text-[#f0fdfc] rounded md:bg-transparent md:p-0">La Fundación</a> </li> <li class="border-2 border-transparent p-2 hover:md:border-b-gray-100 border-b-4"> <a href="/capacitaciones" class="block py-2 px-3 text-xl font-bold text-[#f0fdfc] rounded md:bg-transparent md:p-0">
Capacitaciones</a> </li> <li class="border-2 border-transparent p-2 hover:md:border-b-gray-100 border-b-4"> <a href="/novedades" class="block py-2 px-3 text-xl font-bold text-[#f0fdfc] rounded md:bg-transparent md:p-0">
Novedades</a> </li> </ul> </div> </div> </nav> `;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/Header.astro", void 0);

const $$Astro$b = createAstro();
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Instagram.astro", void 0);

const $$Astro$a = createAstro();
const $$Facebook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Facebook.astro", void 0);

const $$Astro$9 = createAstro();
const $$TikTok = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TikTok;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/TikTok.astro", void 0);

const $$Astro$8 = createAstro();
const $$YouTube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$YouTube;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path><path d="M10 9l5 3l-5 3z"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/YouTube.astro", void 0);

const $$Astro$7 = createAstro();
const $$Codigo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Codigo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Codigo.astro", void 0);

const $$Astro$6 = createAstro();
const $$Whatsapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Whatsapp.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-r from-[#11b8bb] to-[#0b9ba0] py-20"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="flex flex-col items-center justify-center"> <div class="mb-2 md:mb-0"> <a href="https://fundacionsilflo.org" class="flex items-center"> <img src="./Logo.png" class="h-24 me-3" alt="Logo de la Fundación Silvia Flores"> </a> </div> <div class="flex flex-col mt-10 w-full gap-10 justify-between items-center text-center sm:flex sm:flex-row"> <div> <h2 class="mb-6 text-xl font-bold text-[#032b30] uppercase">
Contacto
</h2> <ul class="text-white dark:text-white font-medium"> <a href=""> <li class="mb-4 flex justify-center items-center gap-2"> ${renderComponent($$result, "Whatsapp", $$Whatsapp, { "class": "w-6 h-6" })} <span>11-3900-8840</span> </li> </a> <li> <span>Montevideo 496 5to Piso Of. 51 C.A.B.A</span> </li> </ul> </div> <div> <h2 class="mb-6 text-xl font-bold text-[#032b30] uppercase">
Nuestras Redes Sociales
</h2> <div class="flex mb-10 items-center justify-center"> <a href="#" class="text-white hover:text-slate-600"> ${renderComponent($$result, "Facebook", $$Facebook, {})} <span class="sr-only">Facebook</span> </a> <a href="https://www.instagram.com/fundacion_academica_silflo/" class="text-white hover:text-slate-600 ms-5"> ${renderComponent($$result, "Instagram", $$Instagram, {})} <span class="sr-only">Instagram</span> </a> <a href="https://www.tiktok.com/@fundacionsilflo" class="text-white hover:text-slate-600 ms-5"> ${renderComponent($$result, "TikTok", $$TikTok, {})} <span class="sr-only">Tiktok</span> </a> <a href="https://www.youtube.com/@fundacionsilflo" class="text-white hover:text-slate-600 ms-5"> ${renderComponent($$result, "YouTube", $$YouTube, { "class": "w-6 h-6" })} <span class="sr-only">You Tube</span> </a> </div> </div> <div> <h2 class="mb-2 text-xl font-bold text-[#032b30] uppercase">
Legal
</h2> <ul class="text-white dark:text-white font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline">Política de privacidad</a> </li> <li> <a href="https://tailwindcss.com/" class="hover:underline">Términos &amp; Condiciones</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8"> <div class="sm:flex sm:items-center sm:justify-around"> <span class="flex flex-col items-center justify-center text-sm text-[#032b30] font-medium sm:text-center">
© 2023 Fundación Académica Silvia Flores.
</span> <div class="flex mt-2 gap-2 text-white text-center items-center justify-center"> ${renderComponent($$result, "Codigo", $$Codigo, { "class": "text-[#032b30]" })} <spa class="text-sm text-[#032b30] sm:text-center font-medium">Creado por Gabriel Agüero</spa> </div> </div> </div> </footer>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Arrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5l0 14"></path><path d="M18 11l-6 -6"></path><path d="M6 11l6 -6"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Arrow.astro", void 0);

const $$Astro$3 = createAstro();
const $$ArrowNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArrowNav;
  return renderTemplate`${maybeRenderHead()}<div data-dial-init class="fixed end-6 bottom-6 group"> <div id="speed-dial-menu-click" class="flex flex-col items-center mb-4 space-y-2"></div> <a href="#top"> <button type="button" data-dial-toggle="speed-dial-menu-click" data-dial-trigger="click" aria-controls="speed-dial-menu-click" aria-expanded="false" class="flex items-center justify-center text-white bg-[#0f5c60] rounded-full w-14 h-14 hover:bg-[#032b30] dark:bg-bg-[#0b9ba0] dark:hover:bg-[#0b9ba0d0] focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-bg-[#0b9ba0d0]"> ${renderComponent($$result, "Arrow", $$Arrow, {})} </button> </a> </div> <div data-dial-init class="fixed end-6 bottom-24 group"> <div id="speed-dial-menu-click" class="flex flex-col items-center mb-4 space-y-2"></div> <a href="https://wa.me/541139008840?text=Gracias por comunicarte con nosotros enviános tu mensaje, te respondemos a la brevedad.!!!" target="_blank"> <button type="button" data-dial-toggle="speed-dial-menu-click" data-dial-trigger="click" aria-controls="speed-dial-menu-click" aria-expanded="false" class="flex items-center justify-center text-white bg-[#0f5c60] rounded-full w-14 h-14 hover:bg-[#032b30] dark:bg-bg-[#0b9ba0] dark:hover:bg-[#0b9ba0d0] focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-bg-[#0b9ba0d0]"> ${renderComponent($$result, "Whatsapp", $$Whatsapp, {})} </button> </a> </div>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/ArrowNav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon-fundacion.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ArrowNav", $$ArrowNav, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Educacion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Educacion;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path></svg>`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/components/icons/Educacion.astro", void 0);

const db = [
	{
		title: "Kinesiología Respiratoria",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Duración 4 Meses",
		imagen: "../src/Cursos/Kinesio/ktr.webp"
	},
	{
		title: "Terapia Manual",
		categoria: "Kinesio",
		modalidad: "Presencial",
		descripcion: "Duración 3 Meses",
		imagen: "../src/Cursos/Kinesio/terpia-manual.webp"
	},
	{
		title: "Cuidador Domiciliario",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Junio 2024 - Gratis",
		imagen: "../src/Cursos/Salud/cuidado-domiciliario.webp"
	},
	{
		title: "Asistente de Fonoaudiología",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Inicia 10 de Mayo",
		imagen: "../src/Cursos/Salud/fonoaudiologia-asistente.webp"
	},
	{
		title: "Terapia Ocupacional",
		categoria: "Kinesio",
		modalidad: "Presencial",
		descripcion: "Inicia 9 de Mayo",
		imagen: "../src/Cursos/Kinesio/terapia-ocupacional.webp"
	},
	{
		title: "Asistente de Fonoaudiología",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Inicia 10 de Mayo",
		imagen: "../src/Cursos/Salud/fonoaudiologia-nuevo.webp"
	},
	{
		title: "Botón Gástrico",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "4 Clases con Certificación",
		imagen: "../src/Cursos/Salud/boton-gastrico.webp"
	},
	{
		title: "Técnica en Internación Domiciliaria",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Doble Certf.",
		imagen: "../src/Cursos/Salud/domiciliaria.webp"
	},
	{
		title: "Asistente Auxiliar",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Doble Certf.",
		imagen: "../src/Cursos/Salud/enfermeria.webp"
	},
	{
		title: "Enfermería Pediátrica",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Certf. Oficial",
		imagen: "../src/Cursos/Salud/enfermeria-pediatria.webp"
	},
	{
		title: "Técnico en Ergometría y Electrocardiograma",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Nuevo Curso",
		imagen: "../src/Cursos/Salud/ergometria.webp"
	},
	{
		title: "Extraccionista",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "8 Clases con Carnet Oficial",
		imagen: "../src/Cursos/Salud/extraccionista.webp"
	},
	{
		title: "Asistente de Fonoaudiología",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Nuevo Curso",
		imagen: "../src/Cursos/Salud/fonoaudiologia.webp"
	},
	{
		title: "Asistente de Quirófano",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "Nuevo Curso",
		imagen: "../src/Cursos/Salud/quirofano.webp"
	},
	{
		title: "Signos Vitales",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "4 Clases con Certificación",
		imagen: "../src/Cursos/Salud/signos-vitales.webp"
	},
	{
		title: "Colocación de Sonda Vesical",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "4 Clases con Certificación",
		imagen: "../src/Cursos/Salud/sonda-vesical.webp"
	},
	{
		title: "Colocación de suero e Inyectables",
		categoria: "Salud",
		modalidad: "Presencial",
		descripcion: "8 Calses con Certificación",
		imagen: "../src/Cursos/Salud/suero-inyectable.webp"
	},
	{
		title: "Esp. Trastorno del Neurodesarrollo",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Psicologia/desarrollo.webp"
	},
	{
		title: "Estimulacion Temprana infantojuvenil",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Nuevo Curso",
		imagen: "../src/Cursos/Psicologia/estimulacion.webp"
	},
	{
		title: "Juegos Lúdicos",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Trastorno del Aprendizaje",
		imagen: "../src/Cursos/Psicologia/juegos.webp"
	},
	{
		title: "Motricidad Fina",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "AVD - Actividades de la vida diaria",
		imagen: "../src/Cursos/Psicologia/motricidad.webp"
	},
	{
		title: "Pedagogia",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Montessori en Educación Especial",
		imagen: "../src/Cursos/Psicologia/pedagogia.webp"
	},
	{
		title: "Psicologia",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Curso Infanto Juvenil",
		imagen: "../src/Cursos/Psicologia/psicologia.webp"
	},
	{
		title: "Psicopedagogia",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Asistente y Aprendizaje",
		imagen: "../src/Cursos/Psicologia/psicopedagogia.webp"
	},
	{
		title: "Terapia Ocupacional",
		categoria: "Psicologia",
		modalidad: "Online",
		descripcion: "Esp. en Pictogramas",
		imagen: "../src/Cursos/Psicologia/terapia-ocupacional.webp"
	},
	{
		title: "Herramientas Digitales",
		categoria: "Tecnologia",
		modalidad: "Online",
		descripcion: "Para Adultos y Principiantes",
		imagen: "../src/Cursos/Idioma-Tecno/digital.webp"
	},
	{
		title: "Inglés",
		categoria: "Idioma",
		modalidad: "Online",
		descripcion: "Nuevo Curso",
		imagen: "../src/Cursos/Idioma-Tecno/ingles.webp"
	},
	{
		title: "AKM",
		categoria: "Kinesiologia",
		modalidad: "Online",
		descripcion: "Duracion 6 Meses",
		imagen: "../src/Cursos/Kinesio/akm.webp"
	},
	{
		title: "Asistente en Kinesiología",
		categoria: "Kinesiologia",
		modalidad: "Online",
		descripcion: "Duración 6 Meses",
		imagen: "../src/Cursos/Kinesio/kinesio.webp"
	},
	{
		title: "Kinesio Taping",
		categoria: "Kinesiologia",
		modalidad: "Online",
		descripcion: "Duración 6 Meses",
		imagen: "../src/Cursos/Kinesio/kinesio-taping.webp"
	},
	{
		title: "Rejuvenecimiento Facial",
		categoria: "Kinesiologia",
		modalidad: "Online",
		descripcion: "Duración 8 Clases",
		imagen: "../src/Cursos/Kinesio/rejuvenecimiento.webp"
	},
	{
		title: "Terapia Manual",
		categoria: "Kinesiologia",
		modalidad: "Online",
		descripcion: "Duracion 6 Meses",
		imagen: "../src/Cursos/Kinesio/terapia-manual.webp"
	},
	{
		title: "Esp. en Adicciones",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/adicciones.webp"
	},
	{
		title: "Esp. en Adolescencia",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/adolescencia.webp"
	},
	{
		title: "Trastorno Alimenticios",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/alimenticios.webp"
	},
	{
		title: "Esp. en Ansiedad y Depresión",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/ansiedad-depresion.webp"
	},
	{
		title: "Autismo y TEA",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/autismo.webp"
	},
	{
		title: "Esp. en Bulling Escolar",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/bulling-escolar.webp"
	},
	{
		title: "Esp. en Ciberacoso",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/ciberacoso.webp"
	},
	{
		title: "Esp. en ESI",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/esi.webp"
	},
	{
		title: "Gerontológico",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/gerontologico-terapeutico.webp"
	},
	{
		title: "Inclusión Escolar",
		categoria: "Acompañamiento Terapéutico",
		modalidad: "Online",
		descripcion: "Formación y empleo",
		imagen: "../src/Cursos/Acompañamiento/inclusion-escolar.webp"
	}
];

const $$Astro = createAstro();
const $$Capacitaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Capacitaciones;
  const cursos = db;
  let filter = "";
  function cursosFiltrados() {
    if (filter === "") {
      return cursos;
    } else {
      return cursos.filter((curso) => curso.modalidad === filter);
    }
  }
  function handleFilterChange(modalidad) {
    return () => {
      filter = modalidad;
      console.log(filter);
    };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Capacitaciones", "description": "Todos los cursos y capacitaciones de la fundaci\xF3n Silvia Flores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container my-24 mx-auto md:px-6"> <div class="inline-flex rounded-md shadow-sm" role="group"> <button type="button" class="px-4 py-2 text-sm font-medium text-[#0b9ba0] bg-transparent border border-[#0b9ba0] rounded-s-lg hover:bg-[#0b9ba0] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#0b9ba0] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
Presencial
</button> <button type="button" class="px-4 py-2 text-sm font-medium text-[#0b9ba0] bg-transparent border-t border-b border-[#0b9ba0] hover:bg-[#0b9ba0] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#0b9ba0] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
A Distancia
</button> <button type="button" class="px-4 py-2 text-sm font-medium text-[#0b9ba0] bg-transparent border border-[#0b9ba0] rounded-e-lg hover:bg-[#0b9ba0] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#0b9ba0] focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"${addAttribute(handleFilterChange("Presencial"), "@onclick")}>
Todos
</button> </div> <section class="mb-32 text-center lg:text-left"> <h2 class="mb-12 text-center text-3xl font-bold text-[#0b9ba0]">
Nuestros cursos
</h2> <div class="grid gap-12 lg:grid-cols-3"> ${cursosFiltrados().map((curso) => renderTemplate`<div class="mb-12 lg:mb-0 shadow-md shadow-[#0b9ba0]"> <div class="relative mb-6 overflow-hidden bg-cover bg-no-repeat transition duration-700 hover:ease-in-out hover:opacity-55 shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light"> <a href="#"> <img${addAttribute(curso.imagen, "src")} class="w-full"> </a> </div> <div class="mb-4 flex items-center justify-start gap-14 text-sm font-medium text-[#032b30]"> <div class="flex gap-2 items-center justify-center px-2"> ${renderComponent($$result2, "Educacion", $$Educacion, {})} ${curso.modalidad} </div> <a href="https://wa.me/541139008840?text=Gracias por comunicarte con nosotros enviános tu mensaje, te respondemos a la brevedad.!!!"> <span class="py-2 text-[#11b8bb] font-extrabold text-lg hover:text-[#0b9ba0]">
Inscribirme
</span> </a> </div>  </div>`)} </div> </section> </div> ` })}`;
}, "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/pages/capacitaciones.astro", void 0);

const $$file = "/media/gaby/GABY/Programacion/Proyectos/fundacionsilflo/src/pages/capacitaciones.astro";
const $$url = "/capacitaciones";

const capacitaciones = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Capacitaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Facebook as a, $$Instagram as b, $$TikTok as c, $$YouTube as d, $$Educacion as e, capacitaciones as f };
