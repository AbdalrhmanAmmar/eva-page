"use client"

import { ArrowLeft, CheckCircle2, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const RequestConfirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5 py-16"
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
          <div className="relative bg-background p-6 rounded-full border border-primary/20 shadow-lg">
            <CheckCircle2 className="w-16 h-16 text-emerald-500" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          شكراً لتسجيل طلبك
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          تم استلام طلبك بنجاح وسوف يقوم فريقنا بالتواصل معك خلال <span className="text-primary font-medium">24 ساعة</span>. 
          <br />
          {/* رقم الطلب: <span className="font-mono bg-primary/10 px-2 py-1 rounded">#{(Math.random() * 10000).toFixed(0)}</span> */}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button asChild size="lg" className="px-8 shadow-md">
            <Link href="/services">
              تصفح المزيد من الخدمات
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="/">
              العودة للرئيسية
              <Home className="w-5 h-5 mr-2" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50  rounded-md" >
          <h3 className="text-lg font-medium text-black font-bold mb-4">
            للاستفسارات الفورية
          </h3>
          <div className="flex justify-center gap-6">
        <a href="tel:+966540800987" className="flex items-center text-primary hover:text-primary/80">
  <Phone className="w-4 h-4 mr-2" />
  <span dir="rtl">‪+966 54 080 0987‬</span>
</a>
            <a href="mailto:info@example.com" className="flex items-center text-primary hover:text-primary/80">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@evasaudi.com</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RequestConfirmation;