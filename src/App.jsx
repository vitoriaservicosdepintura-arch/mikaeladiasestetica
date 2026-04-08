import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Phone, Mail, Clock, ChevronDown, Sparkles, Heart, Eye, Wind } from 'lucide-react'
import FluidSimulation from './components/FluidSimulation'

const stats = [
  { value: '500+', label: 'Clientes Satisfeitos' },
  { value: '5+', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Tratamentos Realizados' },
  { value: '4.9', label: 'Avaliação Média' }
]

const services = [
  {
    icon: Sparkles,
    title: 'Tratamentos Faciais',
    desc: 'Limpeza profunda, hidratação e rejuvenescimento da pele com técnicas avançadas.'
  },
  {
    icon: Heart,
    title: 'Depilação a Laser',
    desc: 'Remoção definitiva de pelos com tecnologia de ponta e máxima segurança.'
  },
  {
    icon: Eye,
    title: 'Design de Sobrancelhas',
    desc: 'Sobrancelhas perfeitas com micropigmentação e técnicas de modelagem.'
  },
  {
    icon: Wind,
    title: 'Massagens Relaxantes',
    desc: 'Massagens terapêuticas para relaxamento e bem-estar geral.'
  }
]

const prices = [
  {
    category: 'Tratamentos Faciais',
    items: [
      { name: 'Limpeza de Pele', price: '€45' },
      { name: 'Hidratação Profunda', price: '€60' },
      { name: 'Rejuvenescimento', price: '€80' }
    ]
  },
  {
    category: 'Depilação',
    items: [
      { name: 'Axilas', price: '€20' },
      { name: 'Pernas Completas', price: '€50' },
      { name: 'Sessão Laser', price: '€100' }
    ]
  },
  {
    category: 'Estética',
    items: [
      { name: 'Design Sobrancelhas', price: '€25' },
      { name: 'Micropigmentação', price: '€150' },
      { name: 'Massagem Relaxante', price: '€40' }
    ]
  }
]

const reviews = [
  {
    name: 'Grazieli Soares',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 2 semanas',
    body: 'Atendimento impecável e resultados perfeitos nas sobrancelhas. Muito profissional e atenciosa, o ambiente é limpo e acolhedor. Recomendo sem pensar duas vezes!',
    avatar: '/avaliadores/grazieli-soares.png'
  },
  {
    name: 'Karine Santos',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 1 mês',
    body: 'Fiz extensão de cílios e o resultado ficou natural e duradouro. O cuidado com cada detalhe é sensacional, saí me sentindo linda e super valorizada.',
    avatar: '/avaliadores/karine-santos.png'
  },
  {
    name: 'Jessica Fernandes',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 3 semanas',
    body: 'A Mikaela é muito carinhosa e explica todo o procedimento. Saí do salão com a pele renovada e um sorriso no rosto. Atitude profissional nota 10!',
    avatar: '/avaliadores/jessica-fernandes.png'
  },
  {
    name: 'Crisna Moreira',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 1 mês',
    body: 'Já voltei várias vezes e cada sessão é uma nova experiência. Atendimento excelente, resultados visíveis e sempre com muito cuidado. Amo o trabalho dela.',
    avatar: '/avaliadores/crisna-moreira.png'
  },
  {
    name: 'Alice Nascimento',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 2 meses',
    body: 'Super profissional e atenciosa, o tratamento facial foi incrível. A pele ficou hidratada, iluminada e sem sensações de irritação. Recomendo para todas.',
    avatar: '/avaliadores/alice-nascimento.png'
  },
  {
    name: 'Marisa Martins',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 1 mês',
    body: 'O serviço de depilação é rápido e praticamente indolor, o resultado dura muito tempo. Ambiente muito agradável e atendimento de primeira.',
    avatar: '/avaliadores/marisa-martins.png'
  },
  {
    name: 'Maria Dias Mary',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 3 semanas',
    body: 'Experiência maravilhosa do início ao fim. Profissional super cuidadosa, explicou tudo e deixou a pele muito bem cuidada. Saí mais confiante.',
    avatar: '/avaliadores/maria-dias-mary.png'
  },
  {
    name: 'Leonor Jesus',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 1 mês',
    body: 'Gosto do cuidado e atenção que ela dá em cada sessão. Atendimento impecável e resultado excelente em todos os serviços que já fiz.',
    avatar: '/avaliadores/leonor-jesus.png'
  },
  {
    name: 'Beyza Karli',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 2 semanas',
    body: 'O trabalho com cílios e sobrancelhas ficou perfeito. Profissional dedicada, ambiente confortável e muita delicadeza no atendimento.',
    avatar: '/avaliadores/beyza-karli.png'
  },
  {
    name: 'Teresa Martín Gilabert',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 1 mês',
    body: 'Serviço excelente, resultados naturais e muito cuidado durante todo o procedimento. Recomendo para quem busca qualidade e simpatia.',
    avatar: '/avaliadores/teresa-martin-gilabert.png'
  }
]


function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showWhatsAppPhoto, setShowWhatsAppPhoto] = useState(false)

  const whatsappLink = 'https://wa.me/351912808295?text=Ol%C3%A1%20Mikaela%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - 88)
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background text-foreground font-body"
    >
      <Navigation isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} scrollToSection={scrollToSection} />

      <Hero />

          <Stats />

          <Services />

          <About />

          <Pricing />

          <ReviewsSection />

          <Contact />

          <Footer />

          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {showWhatsAppPhoto && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="w-48 sm:w-56 rounded-3xl bg-white/95 border border-slate-200 shadow-2xl overflow-hidden"
              >
                <img src="/1.png" alt="Mikaela Dias" className="w-full h-40 object-cover" />
                <div className="p-3">
                  <p className="font-body font-semibold text-slate-900">Mikaela Dias</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">Toque no botão abaixo para abrir o WhatsApp.</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </motion.div>
            )}

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWhatsAppPhoto((prev) => !prev)}
              className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl ring-2 ring-white"
              aria-label="Abrir WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </motion.button>
          </div>

          {/* <FluidSimulation /> */}
        </motion.div>
    )
}

function Navigation({ isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.div
          className="cursor-pointer flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/logo.png?v=1" alt="Mikaela Dias" className="h-12 w-auto" />
          <span className="font-heading text-2xl italic text-white hidden sm:block">Mikaela Dias</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Início', 'Sobre', 'Serviços', 'Preços', 'Contacto'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item === 'Início' ? 'hero' : item === 'Sobre' ? 'about' : item === 'Serviços' ? 'services' : item === 'Preços' ? 'pricing' : 'contact'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item === 'Início' ? 'hero' : item === 'Sobre' ? 'about' : item === 'Serviços' ? 'services' : item === 'Preços' ? 'pricing' : 'contact')}
              className="text-sm font-body font-300 text-white/90 hover:text-[#D4AF37] transition-colors uppercase tracking-wider relative"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            {['Início', 'Sobre', 'Serviços', 'Preços', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item === 'Início' ? 'hero' : item === 'Sobre' ? 'about' : item === 'Serviços' ? 'services' : item === 'Preços' ? 'pricing' : 'contact');
                }}
                className="block w-full text-left px-6 py-4 text-sm font-body font-300 text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider border-b border-border/50 last:border-0"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img src="/1.png" alt="Fundo de hero" className="absolute inset-0 w-full h-full object-cover" />
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/1.png"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
        </motion.video>
        {/* O vídeo agora está 100% visível, sem película branca por cima */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6 font-body font-400 font-bold drop-shadow-md"
        >
          Estética Facial e Corporal
        </motion.p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl italic text-[#D4AF37] mb-8 leading-tight drop-shadow-lg">
          Beleza que<br />transforma
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-base md:text-lg lg:text-xl font-body font-semibold text-white max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide drop-shadow-xl"
        >
          Tratamentos exclusivos de estética facial e corporal para revelar a sua melhor versão. Expertise e cuidado em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass-strong px-8 py-4 rounded-full text-white font-body font-400 uppercase tracking-wider text-sm bg-[#D4AF37] hover:bg-[#b8952b] transition-colors"
          >
            Agendar Consulta
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            className="liquid-glass px-8 py-4 rounded-full text-[#D4AF37] font-body font-400 uppercase tracking-wider text-sm border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
          >
            Ver Preços
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function Stats() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.p
                className="font-heading text-4xl md:text-5xl italic text-primary mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.15 + 0.2 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm font-body font-300 text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const galleryImages = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png']

  return (
    <section id="services" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body font-300">O que fazemos</p>
          <h2 className="font-heading text-4xl md:text-5xl italic text-foreground">Nossos Serviços</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
              className="liquid-glass p-8 md:p-10 rounded-3xl"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" stroke={1} />
              <h3 className="font-heading text-2xl italic text-foreground mb-4">{service.title}</h3>
              <p className="font-body font-300 text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body font-300">Galeria</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 0 2px rgba(212, 175, 55, 0.9), 0 0 20px rgba(212, 175, 55, 0.4)',
                }}
                className="relative overflow-hidden rounded-2xl border border-transparent transition-all duration-300"
              >
                <img src={img} alt={`Trabalho ${index + 1}`} className="w-full h-40 object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body font-300">Sobre nós</p>
            <h2 className="font-heading text-4xl md:text-5xl italic text-foreground mb-8">Expertise em<br />beleza e cuidado</h2>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              O Studio Mikaela Dias Iniciou na data do dia 5 de Março de 2024 no quarto da minha casa, apenas com algumas Massagens, Extensão de Pestanas  e Lifting de Pestanas, aos poucos fui aprimorando e adicionando alguns serviços na Área do facial como Dermaplaning, Hidragloss e Limpeza de Pele, pelos quais comecei logo a me apaixonar pela área do facial.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              Ao longo do ano fui me especializando na área da Limpeza de Pele a fim de me tornar mais prática e eficiente no serviço, foi aí que fiz mais 2 formações para me sentir mais segura e confiante. Para além das especializações da Limpeza de Pele ainda consegui adicionar outros serviços corporais como por exemplo Massagem com Pedras Quentes, Radiofrequência, Cavitação e Vacuoterapia.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              Hoje, conto com os seguintes serviços disponíveis para marcação.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              <strong>Massagens:</strong><br />
              Massagem Relaxante, Massagem Terapêutica, Massagem Profunda, Massagem Modeladora, Anticelulítica, Drenagem Linfática, Pós Operatório, Massagem com Pedras Quentes, Ventosaterapia, Radiofrequência, Cavitação, Vacuoterapia, Reflexologia Podal e Detox Corporal.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed">
              <strong>Facial:</strong><br />
              Extensão de Pestanas, Lifting de Pestanas, Dermaplaning, Limpeza de Pele, Hidragloss e Nanopigmentação Labial, Henna Labial e Designer de Sobrancelhas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="liquid-glass-strong p-8 md:p-12 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="font-body font-300 text-muted-foreground text-sm">Rua Francisco Xavier Ataíde de Oliveira, lote 33</p>
                  <p className="font-body font-300 text-muted-foreground text-sm">8600-775 Lagos</p>
                </motion.div>
                <motion.div
                  className="text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="font-body font-300 text-muted-foreground text-sm">+351 912 808 295</p>
                </motion.div>
                <motion.div
                  className="text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="font-body font-300 text-muted-foreground text-sm">myki.htinha@gmail.com</p>
                </motion.div>
                <motion.div
                  className="text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="font-body font-300 text-muted-foreground text-sm">2ª a 6ª: 9h30 - 18h</p>
                  <p className="font-body font-300 text-muted-foreground text-sm">Sáb: 9h - 13h</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body font-300">Tabelas de preços</p>
          <h2 className="font-heading text-4xl md:text-5xl italic text-foreground">Os Nossos Preços</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {prices.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
              className="liquid-glass p-6 md:p-8 rounded-3xl"
            >
              <h3 className="font-heading text-xl italic text-foreground mb-6 pb-4 border-b border-primary/20">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2">
                    <span className="font-body font-300 text-muted-foreground">{item.name}</span>
                    <span className="font-body font-500 text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section id="reviews" className="relative py-12 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body font-300">Avaliações do Google</p>
          <h2 className="font-heading text-4xl md:text-5xl italic text-foreground">O que dizem sobre o nosso trabalho</h2>
        </motion.div>

        <div className="relative flex h-[420px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <Marquee pauseOnHover className="w-full py-4">
            <div className="flex items-center gap-4 px-4">
              {firstRow.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </Marquee>

          <Marquee reverse pauseOnHover className="w-full py-4">
            <div className="flex items-center gap-4 px-4">
              {secondRow.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.figure
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative min-w-[16rem] max-w-sm w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 md:p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)] transition duration-300 hover:bg-slate-900/90"
    >
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          className="h-10 w-10 rounded-full object-cover"
          width="40"
          height="40"
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">{review.name}</span>
          <p className="text-xs text-slate-400">{review.role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-6 text-slate-300">{review.body}</blockquote>
    </motion.figure>
  )
}

function Marquee({ children, reverse = false, pauseOnHover = false, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div
        className="flex w-[200%]"
        animate={isHovered ? {} : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body font-300">Contacto</p>
          <h2 className="font-heading text-4xl md:text-5xl italic text-foreground">Vamos conversar?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-strong p-8 md:p-12 rounded-3xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-2xl italic text-foreground mb-4">Mensagem enviada!</h3>
              <p className="font-body font-300 text-muted-foreground">Obrigado pelo contacto. Responderemos em breve.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-body font-300 text-muted-foreground mb-2 uppercase tracking-wider">Nome</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground font-body font-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-300 text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground font-body font-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-300 text-muted-foreground mb-2 uppercase tracking-wider">Telemóvel</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground font-body font-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-300 text-muted-foreground mb-2 uppercase tracking-wider">Mensagem</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground font-body font-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full liquid-glass-strong py-4 rounded-full text-foreground font-body font-400 uppercase tracking-wider"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-16 bg-background border-t border-primary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl italic text-foreground mb-4">Mikaela Dias</h3>
            <p className="font-body font-300 text-muted-foreground">Estética facial e corporal em Lagos. Tratamentos exclusivos para o seu bem-estar.</p>
          </div>
          <div>
            <h4 className="font-body font-400 text-foreground uppercase tracking-wider mb-4 text-sm">Contacto</h4>
            <div className="space-y-3 font-body font-300 text-muted-foreground">
              <p>Rua Francisco Xavier Ataíde de Oliveira, lote 33, 8600-775 Lagos</p>
              <p>+351 912 808 295</p>
              <p>myki.htinha@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-body font-400 text-foreground uppercase tracking-wider mb-4 text-sm">Horário</h4>
            <div className="space-y-3 font-body font-300 text-muted-foreground">
              <p>2ª a 6ª-feira: 9h30 - 18h</p>
              <p>Sábado: 9h - 13h</p>
              <p>Domingo: Encerrado</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/20">
          <p className="font-body font-300 text-muted-foreground text-sm">© 2026 Mikaela Dias. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <motion.a
              href="https://www.instagram.com/mikaelabeautyclinic/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#D4AF37' }}
              className="liquid-glass p-3 rounded-full text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App