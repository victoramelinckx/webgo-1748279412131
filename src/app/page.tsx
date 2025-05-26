
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tu Negocio en 24 Horas" subheadline="WebGo te ayuda a generar ventas online de manera rápida y sencilla. Creamos tu sitio web en menos de un día y brindamos soporte 24/7." cta1="Empieza Ahora" />
<How step1Title="Comparte tu negocio" step1Desc="Nos cuentas sobre tu negocio y tus productos." step2Title="Nosotros hacemos el trabajo" step2Desc="Construimos tu sitio web de ventas en 24 horas." step3Title="Vende en línea fácilmente" step3Desc="Comienza a digitalizar tus ventas con soporte 24/7." />
<Aboutus headline="WebGo: Impulsando Negocios Digitales a Santiago" subheadline="Facilitamos las ventas online para dueños de pequeños negocios sin tiempo para la web" beneficiotitulo1="Ventas Eficientes" beneficio1="Transformamos recomendaciones en ventas digitales" beneficiotitulo2="Gestión Simplificada" beneficio2="Manejamos tu presencia online, tú enfócate en tu negocio" />
<Services heading="Digitaliza tus ventas, multiplica tus ingresos" description="Con WebGo, te ayudamos a generar ventas online eficazmente. Sin tiempo para gestionar un sitio web? Nosotros lo hacemos por ti." services={[{"name":"Diseño Web","icon":"globe","description":"Sitios web optimizados y atractivos en 24 horas."},{"name":"Soporte 24/7","icon":"clock","description":"Siempre disponibles para solucionar tus problemas."},{"name":"Optimización SEO","icon":"search","description":"Posicionamos tu web en los primeros resultados."},{"name":"E-commerce","icon":"shop","description":"Transformamos tu web en una tienda online."},{"name":"Redes Sociales","icon":"users","description":"Conectamos tu negocio con tus clientes."},{"name":"Marketing Digital","icon":"bullhorn","description":"Creamos estrategias que aumentan tus ventas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en soluciones web poderosas y de alto impacto" />
<Faq faqs={[{"pregunta":"¿Cómo puedo llevar mi pequeño negocio al mundo digital con WebGo?","respuesta":"En WebGo, simplificamos la digitalización de su negocio. Nuestro equipo de expertos crea un sitio web atractivo y fácil de usar que se adapta a sus necesidades. También nos encargamos de todo el mantenimiento, lo que significa que puede centrarse en lo que mejor sabe hacer: dirigir su negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"Entendemos que la gestión de un sitio web puede ser un desafío para los dueños de pequeños negocios. En WebGo, no solo creamos su sitio web, sino que también nos encargamos de su mantenimiento y actualizaciones. Nuestro objetivo es hacer que la digitalización de su negocio sea lo más sencilla posible."},{"pregunta":"Mis clientes actuales solo me conocen por recomendación, ¿cómo puede ayudarme WebGo a generar ventas online?","respuesta":"El poder de las ventas online reside en su capacidad para llegar a un público más amplio. En WebGo, optimizamos su sitio web para los motores de búsqueda, ayudándole a llegar a clientes potenciales que no habría alcanzado solo con las recomendaciones. Transformamos su negocio en un imán de clientes online."},{"pregunta":"¿Necesito tener conocimientos técnicos para digitalizar mi negocio con WebGo?","respuesta":"No, en WebGo nos encargamos de todo el proceso técnico por usted. Nuestro equipo de expertos diseñará, implementará y mantendrá su sitio web, dejándole más tiempo para enfocarse en su negocio."},{"pregunta":"¿Cómo WebGo puede ayudar a mi negocio a destacar en el mercado digital?","respuesta":"WebGo se especializa en crear sitios web personalizados que resaltan lo mejor de su negocio. Además, optimizamos su sitio web para los motores de búsqueda, asegurándonos de que su negocio sea fácil de encontrar online. En resumen, hacemos que su negocio brille en el mundo digital."}]} />
<BookAppointment heading="Transforma tu Negocio, Digitaliza tus Ventas" description="No esperes más, lleva tu negocio a la era digital con WebGo. Te ayudamos a crear y gestionar tu sitio web para incrementar tus ventas." />
<Footer />
    </main>
  );
}
