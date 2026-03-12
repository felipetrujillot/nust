<script setup lang="ts">
import { ref } from "vue";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Objeto principal unificado simulando la respuesta de un backend o CMS
const pageData = ref({
  brandName: "BusExpres",
  hero: {
    title: "Tu Viaje, Nuestra Pasión",
    subtitle:
      "Disfruta del confort, seguridad y puntualidad en cada kilómetro. Viaja con los mejores buses de la región.",
    buttonText: "Descubre Más",
    backgroundImage:
      "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop",
  },
  navLinks: [
    { name: "Inicio", id: "inicio" },
    { name: "Nosotros", id: "nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Contáctanos", id: "contactanos" },
  ],
  sections: {
    nosotros: {
      title: "¿Quiénes Somos?",
      description:
        "Somos una empresa comprometida con brindarte la mejor experiencia de viaje. Contamos con décadas de experiencia uniendo destinos.",
      cards: [
        {
          title: "Nuestra Flota",
          description: "Buses modernos y cómodos para tu mejor viaje.",
          image:
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        },
        {
          title: "Conductores Expertos",
          description: "Personal altamente capacitado y certificado.",
          image:
            "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Seguridad",
          description: "Monitoreo 24/7 y altos estándares de seguridad.",
          image:
            "https://images.unsplash.com/photo-1629895240974-bc5db0c6bf75?q=80&w=1935&auto=format&fit=crop",
        },
      ],
    },
    servicios: {
      title: "Nuestros Servicios",
      description:
        "Soluciones integrales de transporte pensadas para ti. Ya sea que viajes por negocios, placer o necesites enviar un paquete.",
      items: [
        {
          icon: "🚐",
          title: "Viajes Interprovinciales",
          desc: "Rutas seguras y directas a nivel nacional con salidas diarias.",
        },
        {
          icon: "🎒",
          title: "Turismo Especial",
          desc: "Alquiler de unidades para excursiones y viajes de turismo en grupo.",
        },
        {
          icon: "📦",
          title: "Envío de Encomiendas",
          desc: "Servicio de carga y mensajería rápida, segura y económica.",
        },
      ],
    },
    contactanos: {
      title: "Contáctanos",
      description: "Encuentra nuestras oficinas principales y visítanos.",
      office: {
        title: "Oficina Central",
        addressLine1: "Av. Principal 1234",
        addressLine2: "Ciudad, Centro",
        email: "contacto@busexpres.com",
        phone: "+1 234 567 890",
      },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.312953235653!2d-77.036667!3d-12.060155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c69f880f05%3A0x6bba3b578c77174e!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    },
  },
  footer: {
    slogan: "Conectando tus sueños, kilómetro a kilómetro.",
    copy: "Todos los derechos reservados.",
  },
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden"
  >
    <!-- Navbar -->
    <header
      class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between"
      >
        <div
          class="flex items-center gap-2 cursor-pointer"
          @click="scrollTo('inicio')"
        >
          <span class="text-2xl font-bold text-blue-600 tracking-tighter">{{
            pageData.brandName
          }}</span>
        </div>
        <nav class="hidden md:flex gap-6">
          <button
            v-for="link in pageData.navLinks"
            :key="link.id"
            @click="scrollTo(link.id)"
            class="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {{ link.name }}
          </button>
        </nav>
        <!-- Mobile menu stub -->
        <button class="md:hidden p-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>

    <main>
      <!-- Inicio (Hero) -->
      <section
        id="inicio"
        class="relative h-screen flex items-center justify-center pt-16"
      >
        <div class="absolute inset-0 z-0">
          <img
            :src="pageData.hero.backgroundImage"
            alt="Bus en la ruta"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>

        <div
          class="relative z-10 container mx-auto px-4 text-center text-white"
        >
          <h1
            class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up"
          >
            {{ pageData.hero.title }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            {{ pageData.hero.subtitle }}
          </p>
          <button
            @click="scrollTo('servicios')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            {{ pageData.hero.buttonText }}
          </button>
        </div>
      </section>

      <!-- Nosotros -->
      <section id="nosotros" class="py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {{ pageData.sections.nosotros.title }}
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              {{ pageData.sections.nosotros.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(card, index) in pageData.sections.nosotros.cards"
              :key="index"
              class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div class="h-64 overflow-hidden relative">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-900">
                  {{ card.title }}
                </h3>
                <p class="text-gray-600">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Servicios -->
      <section id="servicios" class="py-24 bg-gray-50 text-center">
        <div class="container mx-auto px-4">
          <div class="mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {{ pageData.sections.servicios.title }}
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              {{ pageData.sections.servicios.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              v-for="(service, index) in pageData.sections.servicios.items"
              :key="index"
              class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center"
            >
              <div class="text-5xl mb-6">{{ service.icon }}</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contáctanos -->
      <section id="contactanos" class="py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {{ pageData.sections.contactanos.title }}
            </h2>
            <p class="text-lg text-gray-600">
              {{ pageData.sections.contactanos.description }}
            </p>
          </div>

          <div
            class="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          >
            <!-- Info Panel -->
            <div
              class="lg:w-1/3 p-10 flex flex-col justify-center bg-blue-600 text-white"
            >
              <h3 class="text-2xl font-bold mb-6">
                {{ pageData.sections.contactanos.office.title }}
              </h3>

              <div class="flex items-start gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mt-1 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4 class="font-semibold mb-1">Dirección</h4>
                  <p class="text-blue-100">
                    {{ pageData.sections.contactanos.office.addressLine1
                    }}<br />{{
                      pageData.sections.contactanos.office.addressLine2
                    }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <h4 class="font-semibold mb-1">Email</h4>
                  <p class="text-blue-100">
                    {{ pageData.sections.contactanos.office.email }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
                <div>
                  <h4 class="font-semibold mb-1">Teléfono</h4>
                  <p class="text-blue-100">
                    {{ pageData.sections.contactanos.office.phone }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="lg:w-2/3 min-h-[400px]">
              <iframe
                :src="pageData.sections.contactanos.mapUrl"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 py-12 text-gray-300">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="flex flex-col items-center md:items-start">
          <span class="text-2xl font-bold text-white tracking-tighter mb-2">{{
            pageData.brandName
          }}</span>
          <p class="text-sm text-gray-500">
            {{ pageData.footer.slogan }}
          </p>
        </div>

        <nav class="flex gap-6">
          <button
            v-for="link in pageData.navLinks"
            :key="link.id"
            @click="scrollTo(link.id)"
            class="text-sm hover:text-white transition-colors"
          >
            {{ link.name }}
          </button>
        </nav>

        <div class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} {{ pageData.brandName }}.
          {{ pageData.footer.copy }}
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
