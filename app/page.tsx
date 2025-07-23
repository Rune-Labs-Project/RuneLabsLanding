
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [hoveredRune, setHoveredRune] = useState<string | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToRunes = () => {
    const runesSection = document.getElementById('runas-section');
    if (runesSection) {
      runesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const runas = [
    {
      id: 'fehu',
      symbol: 'ᚠ',
      name: 'Fehu',
      subtitle: 'Digitalización',
      concept: 'Riqueza y nuevo comienzo',
      description: 'Transforma tu negocio con nuestras soluciones de digitalización. Optimizamos procesos, implementamos tecnologías avanzadas y te preparamos para el futuro digital.',
      whatWeDo: 'Automatizamos procesos empresariales, implementamos sistemas de gestión digital y optimizamos flujos de trabajo para maximizar la eficiencia operativa.',
      currentServices: [
        'Automatización de procesos',
        'Sistemas ERP personalizados',
        'Gestión documental digital',
        'Integración de plataformas'
      ]
    },
    {
      id: 'ansuz',
      symbol: 'ᚨ',
      name: 'Ansuz',
      subtitle: 'Capacitación',
      concept: 'Comunicación y sabiduría',
      description: 'Empodera a tu equipo con programas de capacitación diseñados a medida. Ofrecemos talleres interactivos y cursos especializados en las últimas herramientas digitales.',
      whatWeDo: 'Desarrollamos programas de capacitación personalizados que combinan teoría práctica con ejercicios hands-on para garantizar un aprendizaje efectivo y duradero.',
      currentServices: [
        'Talleres interactivos',
        'Certificaciones técnicas',
        'Capacitación en herramientas digitales',
        'Programas de desarrollo profesional'
      ]
    },
    {
      id: 'sowilo',
      symbol: 'ᛊ',
      name: 'Sowilo',
      subtitle: 'Auditoría',
      concept: 'Guía y éxito',
      description: 'Obtén una visión clara del rendimiento de tu infraestructura digital. Nuestras auditorías exhaustivas identifican fortalezas, debilidades y oportunidades de mejora.',
      whatWeDo: 'Realizamos auditorías técnicas completas evaluando seguridad, rendimiento y escalabilidad. Entregamos reportes detallados con recomendaciones prioritizadas.',
      currentServices: [
        'Auditoría de infraestructura',
        'Evaluación de seguridad',
        'Análisis de rendimiento',
        'Consultoría estratégica'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Animation */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=mystical%20nordic%20digital%20technology%20background%20with%20golden%20runes%20and%20circuit%20patterns%20flowing%20through%20dark%20space%2C%20futuristic%20tree%20of%20life%20yggdrasil%20with%20glowing%20nodes%2C%20digital%20particles%20and%20energy%20streams%2C%20minimalist%20dark%20atmosphere%20with%20golden%20accents&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Animated Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-2000 ease-out ${isAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Logo Animation */}
            <div className="mb-8">
              <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-pulse">
                ᚱᚢᚾᛖ
              </div>
              <div className="text-2xl md:text-3xl font-light text-yellow-400 mt-2 tracking-widest">
                LABS
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Forjando el 
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                Futuro Digital
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Tu Guía en la Era Tecnológica
            </p>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToRunes}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 whitespace-nowrap cursor-pointer"
            >
              Descubre Nuestras Runas
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Runas Section */}
      <section id="runas-section" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                Descubre Nuestras Runas de Servicio:
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl">Tu Camino hacia el Éxito Digital</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada Runa representa un servicio fundamental, cuidadosamente diseñado para el crecimiento y la optimización empresarial. 
              Desentraña el poder de la tecnología con nuestras soluciones especializadas.
            </p>
          </div>

          {/* Runas Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {runas.map((runa, index) => (
              <div
                key={runa.id}
                className="group relative h-96 perspective-1000"
                onMouseEnter={() => setHoveredRune(runa.id)}
                onMouseLeave={() => setHoveredRune(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${ 
                  hoveredRune === runa.id ? 'rotate-y-180' : ''
                }`}>
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/20">
                    {/* Rune Symbol */}
                    <div className="text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 font-bold mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse">
                      {runa.symbol}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {runa.name}
                    </h3>
                    <p className="text-yellow-400 font-semibold text-lg mb-2">
                      {runa.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm italic mb-4">
                      {runa.concept}
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {runa.description}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl text-yellow-400 mr-3">{runa.symbol}</span>
                        <h4 className="text-xl font-bold text-white">{runa.name}</h4>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-yellow-400 font-semibold mb-2 text-sm">¿Qué hacemos?</h5>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {runa.whatWeDo}
                        </p>
                      </div>
                      
                      <div className="flex-1">
                        <h5 className="text-yellow-400 font-semibold mb-2 text-sm">Servicios Actuales:</h5>
                        <ul className="space-y-1">
                          {runa.currentServices.map((service, idx) => (
                            <li key={idx} className="flex items-start text-xs">
                              <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Nordic Pattern */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
                          <section className="py-20 px-4  from-black to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            ¿Quieres contactarnos?
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Escríbenos directamente a nuestro correo y cuéntanos sobre tu proyecto o consulta.
          </p>
          <a
            href="mailto:perth@rune-labs.com?subject=Contacto%20desde%20Rune%20Labs"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
          >
            Enviar correo
          </a>
        </div>
      </section>
          <div className="text-3xl text-yellow-400 mb-4">ᚱᚢᚾᛖ ᛚᚨᛒᛊ</div>
          <p className="text-gray-400 mb-6">
            Forjando el futuro digital de tu empresa
          </p>

          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            2025 Rune Labs. Todos los derechos reservados.
          </div>

        </div>
      </footer>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
