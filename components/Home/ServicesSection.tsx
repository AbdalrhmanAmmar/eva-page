import { Shield, Building2, ClipboardList, ArrowLeft, Zap, Users, Award } from 'lucide-react';
import { RiAlarmWarningFill } from "react-icons/ri";

import { Button } from '@/components/ui/button';
import { OurClients } from './OurClient';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "عقد صيانه ادوات السلامة",
      description: 'وقع الان عقد صيانه شامل لمعدات السلامة',
      features: [
  'أنظمة الإنذار المبكر',
  'شبكات الاطفاء',
  'زيارات فورية',
  "تقارير فنية",
  "استجابة فوية"
],
FeatureIcons:[
  // <RiAlarmWarningFill  />,

],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-500'
    },
    {
      icon: Building2,
      title: ' مخططات هندسيه',
      description: 'مخططك لا تشيل همه احنا نصممه ',
      features: ['تصميم معماري حديث', 
        'مشاريع مستدامة',
        //  'مخططات هندسية كاملة',{
        //   text:["اخلاء","انذار","كهرباء","معمارية"]

        //  },
          'مخططات سلامة وفق كود الدفاع المدني'
        ],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-500'
    },
    {
      icon: ClipboardList,
      title: '🏢 إدارة الأملاك',
      description: 'خدمات إدارة شاملة للممتلكات العقارية مع التركيز على الكفاءة والربحية',
      features: ['إدارة الصيانة', 'تحصيل الإيجارات', 'التسويق العقاري', 'التقارير المالية'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-500'
    },
  ];



  const whyChooseUs = [
    {
      icon: Zap,
      title: 'حلول متكاملة',
      description: 'نقدم حلولاً شاملة تغطي جميع احتياجاتك الأمنية والعقارية'
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا ومنتجاتنا'
    },
    {
      icon: Users,
      title: 'دعم متميز',
      description: 'فريق متخصص يقدم الدعم على مدار الساعة'
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              خدماتنا المتميزة
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            نقدم <span className="text-gradient">حلولاً متكاملة</span>
          </h2>
          <p className="text-3xl text-muted-foreground max-w-3xl mx-auto">
            في مجال الأمن والسلامة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl glass-card hover:shadow-large transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${service.gradient}`}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn hover:bg-primary/10 hover:text-primary p-0 h-auto font-medium"
                >
                  اكتشف المزيد
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover/btn:-translate-x-1" />
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              </div>
            );
          })}
        </div>

        <OurClients/>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            لماذا تختار <span className="text-gradient">EVA</span>؟
          </h3>
          <p className="text-xl text-muted-foreground">
            نحن نقدم حلولاً متكاملة مع التركيز على الجودة والابتكار
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;