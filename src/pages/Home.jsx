import React from 'react';
import { ChevronRight, Code, Bot, Settings, CheckCircle, TrendingUp, Brain, Users, Shield, Clock, Award, Target, Mail, Phone, MapPin, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Sites",
      description: "Criação de sites modernos, responsivos e integrados aos seus sistemas – do institucional ao e-commerce.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes", 
      description: "Automatize atendimentos, gere leads e otimize a experiência dos seus clientes com bots personalizados e multicanal.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Integração de Aplicativos",
      description: "Conectamos ERPs, CRMs, gateways de pagamento, logística e qualquer outro sistema necessário para escalar seu negócio com automação.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Search,
      title: "Consulta de API",
      description: "Consultas de CPF, CNPJ, CEP e outros dados essenciais para seu negócio. Pacotes premium a partir de 5 centavos por pesquisa.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const pillars = [
    {
      icon: Code,
      title: "Tecnologia",
      description: "Soluções de ponta que acompanham as mudanças do mercado"
    },
    {
      icon: Settings,
      title: "Integração", 
      description: "Sistemas conectados para ganho de produtividade"
    },
    {
      icon: Bot,
      title: "Automação",
      description: "Processos inteligentes que economizam tempo e recursos"
    }
  ];

  const differentials = [
    {
      icon: CheckCircle,
      title: "Soluções completas",
      description: "do planejamento à entrega"
    },
    {
      icon: Shield,
      title: "Segurança e performance",
      description: "alta disponibilidade e proteção de dados"
    },
    {
      icon: Users,
      title: "Atendimento próximo",
      description: "suporte humano e consultivo"
    },
    {
      icon: TrendingUp,
      title: "Tecnologia escalável",
      description: "preparada para o seu crescimento"
    }
  ];

  const results = [
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Tecnologia que impulsiona resultados"
    },
    {
      icon: Brain,
      title: "Inovação", 
      description: "Soluções criativas para problemas reais"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Experiências mais fluídas e eficientes para seus clientes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💡</span>
              </div>
              <span className="text-2xl font-bold text-white">CaFiTech</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Serviços</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800"></div>
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Tecnologia • Inovação • Automação
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tecnologia que<br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              conecta, automatiza
            </span><br />
            e transforma
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Soluções personalizadas em web, IA e integração de sistemas para impulsionar o seu negócio.
          </p>
          
          <div className="flex justify-center mb-16">
            <a href="#services">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-xl">
                  Conhecer Serviços
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">+389</div>
              <div className="text-white/80">projetos entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98,9%</div>
              <div className="text-white/80">uptime garantido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">suporte técnico dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quem <span className="text-purple-600">Somos</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Na CaFiTech, unimos tecnologia, inovação e inteligência digital para criar soluções sob medida que impulsionam negócios. Combinamos expertise em desenvolvimento web, inteligência artificial e integração de sistemas para entregar plataformas eficientes, escaláveis e orientadas a resultado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-purple-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em tecnologia para impulsionar seu negócio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <a 
                    href={`https://wa.me/5511982034094?text=Olá! Gostaria de solicitar uma cotação para: ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Fale com o especialista
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-purple-600">Diferenciais</span>
            </h2>
            <p className="text-xl text-gray-600">
              O que nos faz ser a escolha certa para o seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((diff, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <diff.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{diff.title}</h3>
                <p className="text-gray-600">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Nossa <span className="text-blue-200">Missão</span>
            </h2>
            <blockquote className="text-xl md:text-2xl text-white/90 italic mb-12 leading-relaxed">
              "Transformar a tecnologia em aliada de empresas que querem crescer, inovar e atender melhor seus clientes."
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <result.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                    <p className="text-white/80 text-sm">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💡</span>
              </div>
              <span className="text-2xl font-bold">CaFiTech</span>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Transformando negócios com tecnologia e automação inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a href="mailto:contato@cafitech.com.br" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                contato@cafitech.com.br
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 CaFiTech | Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}