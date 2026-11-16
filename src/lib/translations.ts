export type Lang = "it" | "en" | "es";

export type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    faq: string;
    contact: string;
    brandbook: string;
  };
  hero: {
    title: string;
    sub: string;
    cta: string;
    badge: string;
  };
  about: {
    title: string;
    sub: string;
    badge: string;
    bio: string;
  };
  services: {
    title: string;
    sub: string;
    items: Array<{ title: string; desc: string }>;
  };
  process: {
    title: string;
    sub: string;
    steps: Array<{ title: string; desc: string }>;
  };
  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  contact: {
    title: string;
    sub: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
    phone: string;
    email: string;
    address: string;
  };
  footer: {
    legal: string;
    privacy: string;
    cookies: string;
    albo: string;
  };
};

const base = {
  nav: {
    home: "Home",
    about: "Chi sono",
    services: "Servizi",
    process: "Come lavoro",
    faq: "FAQ",
    contact: "Contatti",
    brandbook: "Brand",
  },
  hero: {
    badge: "Consulente immobiliare • Bologna",
  },
  about: {
    badge: "Iscritta all'albo e al ruolo • CCIAA Bologna",
  },
  services: {
    title: "Servizi 360°",
    sub: "Non solo compravendita: un unico referente per l'intero ciclo di vita del tuo immobile.",
  },
  process: {
    title: "Come lavoro",
    sub: "Un metodo chiaro, dalla prima valutazione fino al rogito e oltre.",
  },
  faq: {
    title: "Domande frequenti",
  },
  contact: {
    title: "Fissa una chiamata",
    sub: "Raccontami del tuo immobile. Ti richiamo io entro 24 ore, senza impegno.",
    form: {
      name: "Nome e cognome",
      phone: "Telefono",
      email: "Email (opzionale)",
      message: "Qualche dettaglio sull'immobile",
      submit: "Invia la richiesta",
      success: "Richiesta inviata. Ti richiamo io entro 24 ore.",
    },
    phone: "Telefono",
    email: "Email",
    address: "Bologna",
  },
  footer: {
    legal: "Marinelys Marte — Agente immobiliare",
    privacy: "Privacy",
    cookies: "Cookie",
    albo: "Iscritta all'albo e al ruolo degli agenti di affari in mediazione — CCIAA Bologna",
  },
} as const;

export const t: Record<Lang, Translations> = {
  it: {
    ...base,
    nav: { ...base.nav },
    hero: {
      title: "Il tuo immobile, la mia cura.",
      sub: "Dalla stima al rogito, ti seguo in ogni fase della vendita a Bologna: trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche.",
      cta: "Richiedi una chiamata",
      ...base.hero,
    },
    about: {
      title: "Chi sono",
      sub: "Marinelys Marte, agente immobiliare regolarmente iscritta all'albo e al ruolo. Opero a Bologna con un metodo di consulenza 360° pensato per i proprietari che devono vendere.",
      bio: "Credo che vendere casa non sia solo una trattativa, ma un percorso di cura dell'immobile: dalla valutazione realistica alla preparazione della casa, dalla gestione condominiale alla diagnosi energetica, fino alle comunità energetiche. Un unico referente, zero call center.",
      ...base.about,
    },
    services: {
      ...base.services,
      items: [
        {
          title: "Vendita e trattativa",
          desc: "Valutazione realistica, marketing mirato, gestione delle visite e trattativa fino al prezzo giusto.",
        },
        {
          title: "Gestioni condominiali",
          desc: "Supporto nella gestione delle pratiche condominiali legate all'immobile in vendita.",
        },
        {
          title: "Riqualificazioni",
          desc: "Interventi di recupero e valorizzazione per aumentare il valore dell'immobile prima della vendita.",
        },
        {
          title: "Diagnosi energetica",
          desc: "Analisi dell'efficienza energetica dell'edificio e indicazioni per migliorare la classe energetica.",
        },
        {
          title: "Comunità energetiche",
          desc: "Consulenza su comunità energetiche rinnovabili e autoconsumo condiviso per il tuo immobile.",
        },
      ],
    },
    process: {
      ...base.process,
      steps: [
        { title: "Audit dell'immobile", desc: "Sopralluogo e analisi del mercato di zona per definire il valore reale." },
        { title: "Strategia su misura", desc: "Piano di vendita personalizzato: canali, tempistiche, azioni di marketing." },
        { title: "Esecuzione e trattativa", desc: "Gestione visite, proposte e trattativa fino all'accordo migliore." },
        { title: "Cura post-vendita", desc: "Assistenza sulle pratiche fino al rogito e oltre, incluse riqualificazioni ed efficienza energetica." },
      ],
    },
    faq: {
      ...base.faq,
      items: [
        {
          q: "Quanto costa vendere con te?",
          a: "Il mio compenso è provvigionale, pattuito in modo chiaro e scritto prima di ogni incarico. Nessuna sorpresa.",
        },
        {
          q: "Quanto tempo ci vuole per vendere?",
          a: "Dipende dall'immobile e dalla zona. Grazie alla valutazione realistica e al marketing mirato, i tempi sono ottimizzati rispetto alla media di Bologna.",
        },
        {
          q: "Cos'è la diagnosi energetica?",
          a: "È un'analisi dell'efficienza energetica dell'edificio che individua interventi per migliorare la classe energetica e il valore dell'immobile.",
        },
        {
          q: "Cosa sono le comunità energetiche?",
          a: "Sono associazioni di produttori e consumatori di energia rinnovabile. Posso guidarti nell'accesso per il tuo immobile a Bologna.",
        },
      ],
    },
  },
  en: {
    ...base,
    nav: { ...base.nav },
    hero: {
      title: "Your property, my care.",
      sub: "From valuation to the deed, I guide you through every stage of the sale in Bologna: negotiation, condominium management, renovations, energy diagnosis and energy communities.",
      cta: "Request a call",
      ...base.hero,
    },
    about: {
      title: "About me",
      sub: "Marinelys Marte, real estate agent duly enrolled in the register and role. I operate in Bologna with a 360° consulting method designed for owners who need to sell.",
      bio: "I believe selling a home is not just a negotiation, but a path of care for the property: from realistic valuation to home preparation, from condominium management to energy diagnosis, up to energy communities. A single contact, no call center.",
      ...base.about,
    },
    services: {
      ...base.services,
      items: [
        {
          title: "Sale and negotiation",
          desc: "Realistic valuation, targeted marketing, viewing management and negotiation up to the right price.",
        },
        {
          title: "Condominium management",
          desc: "Support in managing condominium practices related to the property for sale.",
        },
        {
          title: "Renovations",
          desc: "Recovery and enhancement works to increase the property value before sale.",
        },
        {
          title: "Energy diagnosis",
          desc: "Analysis of building energy efficiency and indications to improve the energy class.",
        },
        {
          title: "Energy communities",
          desc: "Consulting on renewable energy communities and shared self-consumption for your property.",
        },
      ],
    },
    process: {
      ...base.process,
      steps: [
        { title: "Property audit", desc: "Site visit and analysis of the local market to define the real value." },
        { title: "Tailored strategy", desc: "Customized sales plan: channels, timing, marketing actions." },
        { title: "Execution and negotiation", desc: "Viewing management, offers and negotiation up to the best agreement." },
        { title: "After-sales care", desc: "Assistance with paperwork up to the deed and beyond, including renovations and energy efficiency." },
      ],
    },
    faq: {
      ...base.faq,
      items: [
        {
          q: "How much does it cost to sell with you?",
          a: "My fee is commission-based, clearly agreed in writing before any assignment. No surprises.",
        },
        {
          q: "How long does it take to sell?",
          a: "It depends on the property and the area. Thanks to realistic valuation and targeted marketing, times are optimized compared to the Bologna average.",
        },
        {
          q: "What is the energy diagnosis?",
          a: "It is an analysis of the building's energy efficiency that identifies interventions to improve the energy class and the property value.",
        },
        {
          q: "What are energy communities?",
          a: "They are associations of renewable energy producers and consumers. I can guide you through access for your property in Bologna.",
        },
      ],
    },
  },
  es: {
    ...base,
    nav: { ...base.nav },
    hero: {
      title: "Su inmueble, mi cuidado.",
      sub: "Desde la tasación hasta la escritura, le acompaño en cada etapa de la venta en Bolonia: negociación, gestiones condominiales, rehabilitaciones, diagnóstico energético y comunidades energéticas.",
      cta: "Solicite una llamada",
      ...base.hero,
    },
    about: {
      title: "Quién soy",
      sub: "Marinelys Marte, agente inmobiliaria debidamente inscrita en el colegio y el rol. Opera en Bolonia con un método de asesoría 360° pensado para propietarios que deben vender.",
      bio: "Creo que vender una vivienda no es solo una negociación, sino un camino de cuidado del inmueble: desde la tasación realista hasta la preparación de la casa, desde la gestión condominial hasta el diagnóstico energético, llegando a las comunidades energéticas. Un único referente, sin call center.",
      ...base.about,
    },
    services: {
      ...base.services,
      items: [
        {
          title: "Venta y negociación",
          desc: "Tasación realista, marketing dirigido, gestión de visitas y negociación hasta el precio justo.",
        },
        {
          title: "Gestiones condominiales",
          desc: "Apoyo en la gestión de trámites condominiales relacionados con el inmueble en venta.",
        },
        {
          title: "Rehabilitaciones",
          desc: "Intervenciones de recuperación y valorización para aumentar el valor del inmueble antes de la venta.",
        },
        {
          title: "Diagnóstico energético",
          desc: "Análisis de la eficiencia energética del edificio e indicaciones para mejorar la clase energética.",
        },
        {
          title: "Comunidades energéticas",
          desc: "Asesoría sobre comunidades energéticas renovables y autoconsumo compartido para su inmueble.",
        },
      ],
    },
    process: {
      ...base.process,
      steps: [
        { title: "Auditoría del inmueble", desc: "Visita al inmueble y análisis del mercado de zona para definir el valor real." },
        { title: "Estrategia a medida", desc: "Plan de venta personalizado: canales, tiempos, acciones de marketing." },
        { title: "Ejecución y negociación", desc: "Gestión de visitas, ofertas y negociación hasta el mejor acuerdo." },
        { title: "Cuidado postventa", desc: "Asistencia en los trámites hasta la escritura y más allá, incluidas rehabilitaciones y eficiencia energética." },
      ],
    },
    faq: {
      ...base.faq,
      items: [
        {
          q: "¿Cuánto cuesta vender con usted?",
          a: "Mi honorario es por comisión, pactado por escrito y de forma clara antes de cada encargo. Sin sorpresas.",
        },
        {
          q: "¿Cuánto tiempo se tarda en vender?",
          a: "Depende del inmueble y de la zona. Gracias a la tasación realista y al marketing dirigido, los tiempos se optimizan respecto a la media de Bolonia.",
        },
        {
          q: "¿Qué es el diagnóstico energético?",
          a: "Es un análisis de la eficiencia energética del edificio que identifica intervenciones para mejorar la clase energética y el valor del inmueble.",
        },
        {
          q: "¿Qué son las comunidades energéticas?",
          a: "Son asociaciones de productores y consumidores de energía renovable. Puedo guiarla en el acceso para su inmueble en Bolonia.",
        },
      ],
    },
  },
};
