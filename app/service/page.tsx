"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const ServiceClient = () => {
  const services = [
    { 
      icon: '🚒', 
      title: "أنظمة الإنذار من الحريق", 
      description: "تصميم وتركيب أنظمة إنذار الحريق المعتمدة وفق أحدث المعايير الدولية واللوائح المحلية",
      features: [
        "أنظمة كشف الدخان والحرارة",
        "لوحات تحكم ذكية",
        "نظام إنذار صوتي ومرئي",
        "صيانة دورية وفحص شامل"
      ]
    },
    { 
      icon: '💧', 
      title: "أنظمة الإطفاء الآلي", 
      description: "حلول إطفاء متكاملة لجميع أنواع المخاطر بمختلف أحجام المنشآت",
      features: [
        "أنظمة رشاشات مائية أوتوماتيكية",
        "أنظمة إطفاء بالغاز",
        "أنظمة إطفاء بالرغوة",
        "تركيب وصيانة طفايات الحريق"
      ]
    },
    { 
      icon: '🏢', 
      title: "أنظمة إدارة الأزمات", 
      description: "خطط طوارئ وأنظمة إخلاء ذكية تضمن سلامة الأفراد في حالات الطوارئ",
      features: [
        "لوحات إرشاد ذكية",
        "أنظمة إضاءة طوارئ",
        "مخارج طوارئ معتمدة",
        "تدريبات إخلاء افتراضية"
      ]
    },
    { 
      icon: '🔌', 
      title: "أنظمة الإنذار الذكية", 
      description: "حلول متكاملة للكشف المبكر عن الحرائق باستخدام أحدث التقنيات",
      features: [
        "أجهزة استشعار متطورة",
        "ربط مع أنظمة الأمن الأخرى",
        "مراقبة عن بعد 24/7",
        "إشعارات فورية للهواتف"
      ]
    },
    { 
      icon: '🛡️', 
      title: "استشارات السلامة", 
      description: "دراسات تقييم المخاطر وخطط السلامة الشاملة للمنشآت بكافة أحجامها",
      features: [
        "تقييم مخاطر شامل",
        "خطط سلامة مخصصة",
        "متوافقة مع لوائح الدفاع المدني",
        "حلول توفير الطاقة"
      ]
    },
    { 
      icon: '📋', 
      title: "التدريب والتأهيل", 
      description: "برامج تدريبية معتمدة في مجال السلامة من الحريق والطوارئ",
      features: [
        "تدريب فرق الإخلاء",
        "برامج الإسعافات الأولية",
        "تدريبات عملية على طفايات الحريق",
        "شهادات معتمدة"
      ]
    },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              حلولنا المتكاملة في السلامة من الحرائق
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المصممة لحماية منشآتك وأصولك وأفرادك
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              onClick={() => scroll('left')} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 shadow-lg bg-background/90 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto pb-8 scrollbar-hide space-x-6 px-2"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-background rounded-2xl shadow-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-3xl mr-3 bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    طلب الخدمة
                    <span className="mr-2 animate-pulse">←</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              onClick={() => scroll('right')} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 shadow-lg bg-background/90 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-6 text-lg border-2">
            تصفح جميع خدماتنا
            <ChevronLeft className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceClient;