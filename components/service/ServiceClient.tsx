"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ServiceOpenModal from './ServiceOpenModal';

const ServiceClient = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  
  const services = [
    { 
      icon: '📋', 
      title: "تقرير فني فوري", 
      description: "تقرير فني شامل يتم إعداده فوراً مع توصيات فورية لتحسين السلامة من الحرائق",
      features: [
        "تقييم فوري للمخاطر",
        "توصيات فورية للتحسينات",
        "مخططات السلامة الأولية",
        "تقرير معتمد خلال 24 ساعة"
      ]
    },
    { 
      icon: '📊', 
      title: "تقرير فني غير فوري", 
      description: "تقرير مفصل مع تحليل شامل لاحتياجات السلامة من الحرائق في المنشأة",
      features: [
        "دراسة متعمقة للمخاطر",
        "خطط سلامة طويلة الأجل",
        "تحليل التكلفة والعائد",
        "تقرير مفصل خلال 3 أيام عمل"
      ]
    },
    { 
      icon: '🏅', 
      title: "شهادة تركيب أدوات السلامة", 
      description: "إصدار شهادات معتمدة لتركيب أنظمة السلامة ومكافحة الحريق حسب المعايير",
      features: [
        "فحص شامل للأدوات المثبتة",
        "شهادة معتمدة من الدفاع المدني",
        "توثيق كافة الأنظمة",
        "متابعة دورية للصيانة"
      ]
    }
  ];

  const handleOpen = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService("");
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
          <div className="flex justify-between pb-8 scrollbar-hide space-x-6 px-2">
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
                  
                  <Button 
                    onClick={() => handleOpen(service.title)} 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    طلب الخدمة
                    <span className="mr-2 animate-pulse">←</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceOpenModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        serviceTitle={selectedService} 
      />
    </section>
  );
};

export default ServiceClient;