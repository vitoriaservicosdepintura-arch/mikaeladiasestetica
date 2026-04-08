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
    time: 'há 6 meses',
    body: 'Super indico essa profissional da beleza, ela é incrível, mãos abençoada! Em todos os serviços ela me surpreende, limpeza de pele dela é sem igual, remoção de …',
    avatar: '/1.png'
  },
  {
    name: 'Mel Carolainy',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'É maravilhosa! Super atenciosa e profissional. Os cílios ficaram lindos e bem naturais, exatamente como eu queria. O espaço é aconchegante e ela explica tudo direitinho, me deixando muito à vontade. Recomendo demais o trabalho dela! 💖',
    avatar: '/2.png'
  },
  {
    name: 'Teresa Martín Gilabert',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Finalmente encontrei em Lagos o espaço perfeito! Desde que me mudei para Portugal andava à procura de alguém que fizesse massagens drenantes e, depois de meses, …',
    avatar: '/3.png'
  },
  {
    name: 'Karine Santos',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Estou completamente apaixonada pelos resultados das minhas pestanas! A Mika é incrível super atenciosa, profissional e tem mãos de fada. Sempre saio com um olhar maravilhoso, e o trabalho dela é impecável. Recomendo de olhos fechados! 💖✨',
    avatar: '/4.png'
  },
  {
    name: 'Crisna Moreira',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 7 meses',
    body: 'Já fiz alguns procedimentos com a Mikaela e fui sempre muito bem recebida e cuidada. Seja pela massagem maravilhosa ou pelo café delicioso. Mas, com certeza uma profissional espetacular e cuidadosa. Super indico.',
    avatar: '/5.png'
  },
  {
    name: 'Jaianny Borges',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Fiz um tratamento na Mikaela dias para perder medidas e AMEI ! Mais de 5cm em 5 sessões de tratamento e sem flacidez ! Sem falar dos tratamentos de relaxamento! Amo ! Obrigada Mikaela.',
    avatar: '/1.png'
  },
  {
    name: 'Beyza Karli',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 8 meses',
    body: 'I went to Mikaela today for eyelash filling and i was super satisfied with her work. she works very precise and clean. she is also a very sweet and friendly …',
    avatar: '/2.png'
  },
  {
    name: 'Marisa Martins',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 7 meses',
    body: 'Ja fiz vários serviços com a Micaela e tenho adorado 🥰 Super atenciosa e cuidadosa. … Mais',
    avatar: '/3.png'
  },
  {
    name: 'Teresa António',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'Editado há 6 meses',
    body: 'Já estou com a Mika a quase 2 anos, bastante profissional e atenciosa.',
    avatar: '/4.png'
  },
  {
    name: 'Sarah Monzani',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há um ano',
    body: 'Eu sempre tive cílios retos e, mesmo aplicando rímel, nunca consegui curvá-los como gostaria. Então, decidi fazer o procedimento de lash lifting para resolver …',
    avatar: '/5.png'
  },
  {
    name: 'Ana Clara',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Foi uma ótima experiência, uma ótima profissional que faz um trabalho espetacular, super simpática e gentil. Adorei!💗',
    avatar: '/1.png'
  },
  {
    name: 'Maria Dias Mary',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 7 meses',
    body: 'Eu amei o resultado da limpeza de pele. muito obrigada, parabéns por sua dedicação e carisma.❤️',
    avatar: '/2.png'
  },
  {
    name: 'Karol Novais',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 4 meses',
    body: 'Excelente atendimento, foi super atenciosa. Preços acessíveis… amei',
    avatar: '/3.png'
  },
  {
    name: 'Alice Nascimento',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Excelente profissional. Ambiente acolhedor, tratamento vip. … Mais',
    avatar: '/4.png'
  },
  {
    name: 'Leonor Jesus',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há um ano',
    body: 'Super atenciosa e comunicativa no seu serviço, não falha nunca em me deixar sentir mais bonita cada vez que saio do studio! Maravilhosa❤️',
    avatar: '/5.png'
  },
  {
    name: 'Emilly Beatriz',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 7 meses',
    body: 'Ótimo atendimento, o espaço super confortável e um trabalho impecável',
    avatar: '/1.png'
  },
  {
    name: 'Jessica Fernandes',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 6 meses',
    body: 'Muito bom, é muito simpática adoro 😍😍😍😍😍😍😍😍',
    avatar: '/2.png'
  },
  {
    name: 'Kamila Santana',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há um ano',
    body: 'Maravilhosa e muito atenciosa, amo o trabalho dela😍',
    avatar: '/3.png'
  },
  {
    name: 'Margarida Carvalho',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há um ano',
    body: 'Massagem incrível e muito relaxante, recomendo 😃',
    avatar: '/4.png'
  },
  {
    name: 'Mylena Silva',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há um ano',
    body: 'Perfeita em tudo que faz❤️amo 🫶🏽',
    avatar: '/5.png'
  },
  {
    name: 'Amanda Souza',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há 3 dias',
    body: 'Nova - Um dos melhores cursos em portugal que já realizei. Muito didático, muita informação que acrescenta no crescimento das alunas. A orientadora Mikaela é uma …',
    avatar: '/1.png'
  },
  {
    name: 'Kelli Cristina',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há uma semana',
    body: 'Nova - Gostaria de expressar meu agradecimento pelo excelente atendimento e profissionalismo. …',
    avatar: '/2.png'
  },
  {
    name: 'Lucia',
    role: 'Crítica de Google',
    rating: '5/5',
    time: 'há uma semana',
    body: 'Nova',
    avatar: '/3.png'
  }
]


function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
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

          <motion.a
            href="https://wa.me/351912808295?text=Olá%20Mikaela,%20gostaria%20de%20mais%20informações"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-full border-2 border-primary shadow-lg">
                <img src="/1.png" alt="Mikaela Dias" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Falar com Mikaela Dias
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-white"></div>
            </motion.div>
          </motion.a>

          {/* <FluidSimulation /> */}
        </motion.div>
    )
}

function Navigation({ isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <motion.button
              key={item}
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
            </motion.button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                onClick={() => scrollToSection(item === 'Início' ? 'hero' : item === 'Sobre' ? 'about' : item === 'Serviços' ? 'services' : item === 'Preços' ? 'pricing' : 'contact')}
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
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
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
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
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
          className="text-lg md:text-xl font-body font-400 text-white max-w-2xl mx-auto mb-12 drop-shadow-md"
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
      <div className="max-w-6xl mx-auto px-6 relative">
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
      <div className="max-w-6xl mx-auto px-6">
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
      <div className="max-w-6xl mx-auto px-6">
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
              O Studio Mikaela Dias iniciou no dia 5 de Março de 2024, no conforto do meu quarto de casa. Começámos apenas com massagens, extensão de pestanas e lifting de pestanas.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              Ao longo do ano, fui me especializando na área da Limpeza de Pele, fazendo duas formações adicionais para me sentir mais segura e confiante no serviço. Esta especialização permitiu-me oferecer tratamentos mais eficientes e personalizados.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed mb-6">
              Para além das especializações em limpeza de pele, consegui adicionar outros serviços corporais, como massagem com pedras quentes, ampliando ainda mais a variedade de tratamentos oferecidos.
            </p>
            <p className="font-body font-300 text-muted-foreground leading-relaxed">
              Localizada em Lagos, a clínica proporciona um ambiente sofisticado e acolhedor, onde cada tratamento é uma experiência única de cuidado e relaxamento.
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
      <div className="max-w-6xl mx-auto px-6">
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
  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body font-300">Avaliações do Google</p>
          <h2 className="font-heading text-4xl md:text-5xl italic text-foreground">O que dizem sobre o nosso trabalho</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0, 0, 0, 0.08)' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/80 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-5">
                <img src={review.avatar} alt={review.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-heading text-lg italic text-foreground">{review.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-300">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <span>{review.rating}</span>
                <span>·</span>
                <span>{review.time}</span>
              </div>
              <p className="font-body font-300 text-muted-foreground leading-relaxed">{review.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
      <div className="max-w-4xl mx-auto px-6 relative">
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
      <div className="max-w-6xl mx-auto px-6">
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