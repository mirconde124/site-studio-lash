"use client";

import { useState, useEffect } from "react";
import { MessageCircle, MapPin, Phone, Instagram, ChevronLeft, ChevronRight, Star, Sparkles, ArrowRight, Menu, Clock, Award, Heart, Users, Target, Shield, CheckCircle, Send, Calendar, UserCheck, ClipboardCheck, Stethoscope, FileText, RefreshCw, Scissors } from "lucide-react";

export default function StudioLashPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Raissa Britto",
      text: "Amo o salão, me senti muito bem acolhida e o atendimento é excelente. Toda a equipe está de parabéns.",
      category: "Experiência Geral"
    },
    {
      name: "Rosane Galvão",
      text: "Atendimento nota mil. Meu resultado foi além de um cabelo bonito, foi minha autoestima recuperada.",
      category: "Cabelo"
    },
    {
      name: "Patrícia Nardone",
      text: "Trabalho impecável de todos os profissionais. Recomendo o Studio Lash para todas as mulheres.",
      category: "Experiência Geral"
    },
    {
      name: "Luana Fonseca Lima",
      text: "O ambiente é ótimo, tranquilo e muito agradável. O resultado superou minhas expectativas.",
      category: "Lash"
    },
    {
      name: "Robson Iogiacco",
      text: "Equipe super profissional, ambiente confortável e atendimento excelente.",
      category: "Experiência Geral"
    },
    {
      name: "Fernanda Bonatto",
      text: "Profissional excepcional. Meu cabelo mudou completamente depois que comecei a cuidar aqui.",
      category: "Cabelo"
    }
  ];

  const services = [
    {
      category: "Lash & Sobrancelhas",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=600&fit=crop",
      items: [
        {
          name: "Extensão de Cílios",
          description: "Olhar marcante que valoriza sua beleza natural.",
          forWho: "Para quem busca expressão sem perder naturalidade."
        },
        {
          name: "Volume Brasileiro",
          description: "Volume equilibrado com leveza sofisticada.",
          forWho: "Ideal para cílios volumosos e naturais."
        },
        {
          name: "Volume Russo",
          description: "Máxima densidade com glamour.",
          forWho: "Para quem ama olhar impactante."
        },
        {
          name: "Lash Lifting",
          description: "Curvatura natural e duradoura.",
          forWho: "Perfeito para valorizar cílios naturais."
        },
        {
          name: "Design de Sobrancelhas",
          description: "Arquitetura facial personalizada.",
          forWho: "Para sobrancelhas perfeitamente desenhadas."
        }
      ]
    },
    {
      category: "Cabelos",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
      items: [
        {
          name: "Corte Feminino",
          description: "Corte que realça sua personalidade.",
          forWho: "Para quem busca estilo e praticidade."
        },
        {
          name: "Coloração Premium",
          description: "Cor vibrante com saúde dos fios.",
          forWho: "Ideal para transformação com cuidado."
        },
        {
          name: "Tratamentos Capilares",
          description: "Recuperação profunda com produtos premium.",
          forWho: "Para cabelos que precisam de cuidado intensivo."
        },
        {
          name: "Escova Progressiva",
          description: "Alisamento natural e duradouro.",
          forWho: "Para praticidade sem abrir mão da saúde."
        }
      ]
    },
    {
      category: "Estética Facial",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
      items: [
        {
          name: "Limpeza de Pele",
          description: "Pele limpa e renovada.",
          forWho: "Essencial para saúde da pele."
        },
        {
          name: "Tratamento Facial",
          description: "Cuidado específico para seu tipo de pele.",
          forWho: "Para resultados visíveis e duradouros."
        },
        {
          name: "Drenagem Facial",
          description: "Contornos definidos e rosto desinchado.",
          forWho: "Ideal para reduzir inchaço."
        },
        {
          name: "Peeling",
          description: "Renovação e luminosidade natural.",
          forWho: "Para pele uniforme e radiante."
        }
      ]
    },
    {
      category: "Unhas & Nail Art",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
      items: [
        {
          name: "Manicure Premium",
          description: "Unhas impecáveis e bem cuidadas.",
          forWho: "Para mãos sempre perfeitas."
        },
        {
          name: "Alongamento de Unhas",
          description: "Unhas longas e resistentes.",
          forWho: "Ideal para unhas duráveis."
        },
        {
          name: "Nail Art",
          description: "Arte exclusiva nas suas unhas.",
          forWho: "Para quem ama criatividade."
        },
        {
          name: "Spa dos Pés",
          description: "Relaxamento e renovação completa.",
          forWho: "Perfeito para autocuidado."
        }
      ]
    }
  ];

  const pillars = [
    {
      icon: Award,
      title: "Técnica",
      description: "Profissionais capacitados e protocolos exclusivos."
    },
    {
      icon: Heart,
      title: "Atendimento",
      description: "Cada cliente é única. Cuidado em cada etapa."
    },
    {
      icon: Sparkles,
      title: "Experiência",
      description: "Ambiente pensado para conforto e bem-estar."
    },
    {
      icon: Target,
      title: "Resultado",
      description: "Beleza natural e sofisticação nos detalhes."
    }
  ];

  const journey = [
    {
      step: "01",
      title: "Agendamento",
      description: "Simples e rápido pelo WhatsApp.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=300&fit=crop"
    },
    {
      step: "02",
      title: "Recepção",
      description: "Acolhimento em ambiente sofisticado.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop"
    },
    {
      step: "03",
      title: "Avaliação",
      description: "Consulta personalizada para você.",
      icon: ClipboardCheck,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop"
    },
    {
      step: "04",
      title: "Procedimento",
      description: "Execução com excelência técnica.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
    },
    {
      step: "05",
      title: "Orientações",
      description: "Cuidados para resultados duradouros.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop"
    },
    {
      step: "06",
      title: "Acompanhamento",
      description: "Suporte contínuo e manutenções.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    }
  ];

  const differentials = [
    "Mais de 60 profissionais especializados",
    "Referência em Alphaville há mais de 10 anos",
    "Protocolos personalizados",
    "Produtos premium internacionais",
    "Atendimento humanizado",
    "Ambiente planejado para conforto"
  ];

  const values = [
    {
      icon: Heart,
      title: "Respeito à individualidade",
      description: "Cada cliente é única."
    },
    {
      icon: Award,
      title: "Excelência em cada detalhe",
      description: "Compromisso com qualidade."
    },
    {
      icon: Target,
      title: "Crescimento contínuo",
      description: "Capacitação constante."
    },
    {
      icon: Shield,
      title: "Ética e profissionalismo",
      description: "Transparência e integridade."
    }
  ];

  const faqItems = [
    {
      question: "Preciso agendar com antecedência?",
      answer: "Sim, recomendamos agendar para garantir seu horário. Entre em contato pelo WhatsApp."
    },
    {
      question: "Como funciona a manutenção?",
      answer: "A manutenção deve ser feita a cada 2-3 semanas para manter o resultado perfeito."
    },
    {
      question: "O atendimento é personalizado?",
      answer: "Sim! Cada cliente passa por avaliação individual para criar um plano exclusivo."
    },
    {
      question: "Quanto tempo dura cada procedimento?",
      answer: "O tempo varia conforme o serviço. Informamos o tempo exato no agendamento."
    },
    {
      question: "Quais cuidados após os procedimentos?",
      answer: "Fornecemos orientações detalhadas após cada atendimento para garantir durabilidade."
    }
  ];

  const brands = [
    { name: "L'Oréal Professionnel", logo: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/036aedfc-5bea-485c-b072-52d62334d650.png" },
    { name: "Truss Professional", logo: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/77c6f8bb-b35b-4627-a4e0-3cc493f8c994.png" },
    { name: "Wella Professionals", logo: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d43deb7b-109e-431e-86cd-3e2dec29e5ca.png" },
    { name: "Kérastase", logo: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/273148a8-e215-4364-983e-aa4779b61363.png" },
    { name: "Schwarzkopf Professional", logo: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e1d7e775-df1c-4640-a131-4de57c2d9202.png" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511989311875&text=Ol%C3%A1%2C+gostaria+de+agendar+um+hor%C3%A1rio%21+&type=phone_number&app_absent=0";

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#8B1538] relative overflow-hidden">
      {/* Header Fixo Premium */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#8B1538]/95 backdrop-blur-xl shadow-2xl border-b border-[#D4AF37]/20" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/da6d9aa6-2461-44e5-b023-77b051bec703.png" 
                alt="Studio Lash" 
                className="h-32 lg:h-40 w-auto object-contain drop-shadow-2xl cursor-pointer transition-transform hover:scale-105"
                onClick={() => scrollToSection('home')}
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'sobre', label: 'Studio Lash' },
                { id: 'experiencia', label: 'Experiência' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'espaco', label: 'Nosso Espaço' },
                { id: 'resultados', label: 'Resultados' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base ${activeSection === item.id ? 'text-[#D4AF37]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA WhatsApp Desktop */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-3 bg-white text-[#8B1538] hover:bg-[#D4AF37] hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-2xl hover:scale-105 text-sm xl:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Agende seu horário
            </a>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#8B1538]/98 backdrop-blur-xl border-t border-[#D4AF37]/20">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'sobre', label: 'Studio Lash' },
                { id: 'experiencia', label: 'Experiência' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'espaco', label: 'Nosso Espaço' },
                { id: 'resultados', label: 'Resultados' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-[#D4AF37] transition-colors font-medium text-left ${activeSection === item.id ? 'text-[#D4AF37]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Botão WhatsApp Flutuante Mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-white text-[#8B1538] p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* 1️⃣ HOME - Hero Section Minimalista Premium */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de Fundo em Tela Cheia */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6f0a8f76-da78-4e60-bdbc-5db988ebbab3.jpg"
            alt="Interior Studio Lash"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay Escuro Sutil */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Conteúdo Centralizado */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-10 lg:mb-12 leading-tight tracking-tight">
            Desde 2006 cuidando da sua beleza em Alphaville
          </h1>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#8B1538] hover:bg-[#D4AF37] hover:text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Agende seu horário
          </a>
        </div>
      </section>

      {/* 2️⃣ CONHEÇA NOSSO ESPAÇO - IMAGENS REAIS */}
      <section id="espaco" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nosso Espaço</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Conheça Nosso Espaço
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ambiente pensado para conforto, sofisticação e bem-estar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a18d63c7-f707-4321-96e7-3cd5809a3e22.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/cdd2a6f8-edbf-4e55-880f-a684c3ed5b05.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b0752cc2-45f6-41b8-9832-b1dcb9a78acc.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b7cda1cf-2665-4df4-bec7-818ebde86d3d.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/316e7bb8-ed12-4976-90ef-e38662336979.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/29b26e03-85ca-4734-95ce-4a0bcd7ff176.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/407fdaad-6bd6-4ce8-ac14-8d3f30ff3c25.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e21595b1-3527-4a97-863e-1085cb482312.jpg",
              "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/cc385605-7cc7-4467-8b97-baa6c4c4466a.jpg"
            ].map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                <img 
                  src={img}
                  alt={`Espaço Studio Lash ${index + 1}`}
                  className="w-full h-80 lg:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ TRABALHAMOS COM AS MELHORES MARCAS */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossas Marcas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Trabalhamos com as melhores marcas
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Produtos premium internacionais para resultados excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:scale-105">
                <img 
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-auto max-h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O STUDIO LASH */}
      <section id="sobre" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
                <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossa História</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Mais que beleza, uma experiência
              </h2>
              <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-relaxed">
                <p>
                  Fundado há mais de 10 anos em Alphaville, transformamos o cuidado com a beleza em algo verdadeiramente especial.
                </p>
                <p>
                  Mais de 60 profissionais qualificados, cada um especialista em sua área. Investimos em capacitação contínua e técnicas internacionais.
                </p>
                <p>
                  Referência consolidada pela qualidade técnica e experiência completa. Ambiente pensado para conforto e bem-estar.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <p className="text-white font-medium">Fundação em Alphaville</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <p className="text-white font-medium">Expansão da equipe</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <p className="text-white font-medium">Referência consolidada</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#8B1538] rounded-3xl blur-2xl opacity-30"></div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3b60d275-0789-400b-8741-20796d16085b.jpg"
                  alt="Espaço Studio Lash"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossos Pilares</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O que nos torna únicos
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-10 h-10 text-[#8B1538]" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Por que escolher o Studio Lash
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {differentials.map((diff, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <p className="text-white text-base lg:text-lg">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section id="experiencia" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] rounded-3xl blur-2xl opacity-30"></div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c5487839-651b-4a95-a2a8-31fa19426387.jpg"
                  alt="Ambiente Studio Lash"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30 object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
                <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Experiência Única</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Como é ser atendida aqui
              </h2>
              <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-relaxed mb-10">
                <p>
                  Cada etapa é pensada para proporcionar conforto, tranquilidade e bem-estar.
                </p>
                <p>
                  Atendimento humanizado. Cada cliente é única, com necessidades e expectativas próprias.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Heart, text: "Atendimento humanizado" },
                  { icon: Users, text: "Avaliação personalizada" },
                  { icon: Award, text: "Técnicas escolhidas para você" },
                  { icon: Sparkles, text: "Conforto e bem-estar" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <p className="text-white text-base lg:text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada da Cliente */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Sua Jornada</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Como funciona a experiência
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journey.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Imagem */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4 w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#8B1538]" />
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-5xl font-bold text-[#D4AF37]/20 mb-3">{step.step}</div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✂️ ESPECIALISTA EM CORTES MASCULINOS */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
                <Scissors className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Cortes Masculinos</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Especialista em Cortes Masculinos
              </h2>
              <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-relaxed mb-10">
                <p>
                  Especialistas em cortes masculinos que unem técnica, estilo e personalidade.
                  Cada detalhe é pensado para valorizar o formato do rosto, o tipo de cabelo e o estilo de vida de cada cliente.
                </p>
                <p>
                  Trabalhamos com técnicas modernas e clássicas, sempre com acabamento preciso, transições perfeitas e resultado natural — do corte executivo ao visual contemporâneo.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Atendimento personalizado",
                  "Profissionais especializados",
                  "Estilo sob medida para você"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                    <p className="text-white text-base lg:text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#D4AF37] text-xl lg:text-2xl font-serif font-bold italic">
                Seu corte, sua identidade.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#8B1538] rounded-3xl blur-2xl opacity-30"></div>
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4bfa04cb-ef80-4b5b-8df1-4aa1b70b3544.png"
                  alt="Cortes Masculinos Studio Lash"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossos Serviços</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Excelência em cada técnica
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-24">
            {services.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Header da Categoria com Imagem de Fundo */}
                <div className="relative mb-10 lg:mb-12 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={category.image}
                      alt={category.category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/95 via-[#8B1538]/90 to-[#8B1538]/80"></div>
                  </div>
                  <div className="relative py-12 px-6 text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <category.icon className="w-8 h-8 text-[#D4AF37]" />
                      <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white">{category.category}</h3>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.items.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border-2 border-white/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
                      <h4 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4">{service.name}</h4>
                      <p className="text-gray-200 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                      <div className="mb-6">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">{service.forWho}</p>
                        </div>
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-medium transition-colors"
                      >
                        Agendar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSA EQUIPE */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossa Equipe</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Profissionais Especializados
            </h2>
            <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-relaxed">
              <p>
                Mais de 60 profissionais capacitados e apaixonados. Formação contínua e técnicas internacionais.
              </p>
              <p>
                Excelência técnica com atendimento humanizado. Equipe treinada em escuta ativa e cuidado individualizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS - SEM IMAGENS */}
      <section id="resultados" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Resultados</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Resultados Reais
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Beleza realçada com naturalidade e cuidado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-12 lg:p-16 rounded-3xl border-2 border-[#D4AF37]/30">
              <Sparkles className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                Transformações que falam por si
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Cada cliente é única e merece um resultado personalizado que realce sua beleza natural.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#8B1538] hover:bg-[#D4AF37] hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                Agende e veja seu resultado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Depoimentos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O que nossas clientes dizem
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl p-8 lg:p-14 rounded-3xl border-2 border-[#D4AF37]/30 shadow-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 lg:w-8 lg:h-8 fill-[#D4AF37] text-[#D4AF37] mx-1" />
                ))}
              </div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] text-sm font-medium">
                  {testimonials[currentTestimonial].category}
                </span>
              </div>
              <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 text-center italic font-light">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-[#D4AF37] font-semibold text-xl lg:text-2xl text-center tracking-wide">
                {testimonials[currentTestimonial].name}
              </p>
            </div>

            <div className="flex justify-center items-center gap-6 mt-10 lg:mt-12">
              <button
                onClick={prevTestimonial}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-[#8B1538] p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-[#D4AF37] w-12" : "bg-white/30 w-2"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-[#8B1538] p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura & Valores */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Nossos Valores</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              O que nos move
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-[#8B1538]" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO & CONTATO */}
      <section id="contato" className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Localização</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Onde Estamos
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 lg:mb-12 leading-relaxed">
              Coração de Alphaville, Barueri.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border-2 border-[#D4AF37]/30 shadow-2xl mb-8">
              <div className="flex items-start justify-center gap-4 mb-8">
                <MapPin className="w-7 h-7 lg:w-8 lg:h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-xl lg:text-2xl font-semibold text-white mb-3">Studio Lash</p>
                  <p className="text-gray-200 text-lg lg:text-xl">Alameda Araguaia, 671</p>
                  <p className="text-gray-200 text-lg lg:text-xl">Alphaville – Barueri, SP</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                  <a href={whatsappLink} className="text-gray-200 hover:text-[#D4AF37] transition-colors text-base lg:text-lg">
                    +55 11 98931-1875
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                  <p className="text-gray-200 text-base lg:text-lg">Seg-Sex: 9h-20h | Sáb: 9h-18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Dúvidas Frequentes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border-2 border-white/20 hover:border-[#D4AF37] transition-all duration-300">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4">{item.question}</h3>
                <p className="text-gray-200 leading-relaxed text-sm lg:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAÇA PARTE DA EQUIPE */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Carreiras</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Faça Parte da Nossa Equipe
            </h2>
            <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-relaxed mb-10 lg:mb-12">
              <p>
                Buscamos profissionais que acreditam em excelência e evolução constante.
              </p>
              <p>
                Ambiente inspirador, desenvolvimento profissional e cultura de respeito.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#8B1538] hover:bg-[#D4AF37] hover:text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Send className="w-6 h-6" />
              Envie seu currículo
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
              Pronta para sua transformação?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 lg:mb-12 leading-relaxed">
              Agende seu horário e descubra por que somos referência em Alphaville.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#8B1538] hover:bg-[#D4AF37] hover:text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Agende agora pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a0a12] via-[#2d0a1a] to-[#1a0a12] border-t border-[#D4AF37]/20 text-white py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/da6d9aa6-2461-44e5-b023-77b051bec703.png" 
                alt="Studio Lash" 
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Há mais de 10 anos elevando a autoestima através de atendimento exclusivo.
              </p>
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-6 text-[#D4AF37]">Contato</h3>
              <div className="space-y-4 text-gray-400 text-sm lg:text-base">
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-[#D4AF37]" />
                  Alameda Araguaia, 671 – Alphaville
                </p>
                <a 
                  href={whatsappLink}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#D4AF37]" />
                  +55 11 98931-1875
                </a>
                <a 
                  href="https://instagram.com/lashalphaville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0 text-[#D4AF37]" />
                  @lashalphaville
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-6 text-[#D4AF37]">Horário</h3>
              <div className="space-y-3 text-gray-400 text-sm lg:text-base">
                <p>Segunda a Sexta: 9h às 20h</p>
                <p>Sábado: 9h às 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Studio Lash. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
