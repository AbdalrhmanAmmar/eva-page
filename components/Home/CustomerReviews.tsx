"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "أحمد السديري",
      role: "مدير مشروع",
      company: "شركة البناء الحديث",
      content: "تعاملنا مع إيفاء في عدة مشاريع وكان أداؤهم ممتازاً من حيث الجودة والالتزام بالوقت. فريق محترف يعرف ما يفعلونه.",
      rating: 5,
      date: "15 يناير 2024"
    },
    {
      name: "نورة الفهد",
      role: "مديرة السلامة",
      company: "مجموعة التعليم المتميز",
      content: "خدمة ما بعد البيع ممتازة. يتابعون معنا بشكل دوري ويقدمون الدعم الفني عند الحاجة. شريك موثوق به.",
      rating: 4,
      date: "2 مارس 2024"
    },
    {
      name: "خالد الرشيد",
      role: "المدير العام",
      company: "مستشفى الرفاع",
      content: "ساعدونا في الحصول على جميع شهادات السلامة المطلوبة بسرعة وكفاءة. إجراءاتهم واضحة وشفافة.",
      rating: 5,
      date: "8 فبراير 2024"
    },
    {
      name: "لمى الناصر",
      role: "مهندسة سلامة",
      company: "شركة الصناعات الدوائية",
      content: "التقارير الفنية التي يقدمونها مفصلة ودقيقة. وفرت علينا الكثير من الوقت والجهد في عملية المراجعة.",
      rating: 5,
      date: "22 ديسمبر 2023"
    },
    {
      name: "فيصل الحربي",
      role: "مدير التشغيل",
      company: "مركز تجاري الرياض",
      content: "التزامهم بالمواعيد ممتاز. نفذوا المشروع حسب الجدول الزمني المتفق عليه دون أي تأخير.",
      rating: 4,
      date: "5 نوفمبر 2023"
    },
    {
      name: "سارة الغامدي",
      role: "مديرة المرافق",
      company: "جامعة الملك سعود",
      content: "نظام السلامة الذي قاموا بتركيبه يعمل بكفاءة عالية. الفنيون كانوا محترفين ونظيفين في العمل.",
      rating: 5,
      date: "30 أكتوبر 2023"
    },
    {
      name: "تركي العتيبي",
      role: "المدير المالي",
      company: "فندق الشيراتون",
      content: "التكلفة كانت معقولة مقارنة بجودة الخدمة المقدمة. ننصح بهم بشدة لمشاريع السلامة.",
      rating: 4,
      date: "12 سبتمبر 2023"
    }
  ];

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  const nextSlide = () => {
    if (currentIndex + 3 < reviews.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">تقييمات العملاء</h2>
          <p className="text-gray-500">آراء حقيقية من شركائنا حول تجربة العمل معنا</p>
        </div>

        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center mb-3 gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role} - {review.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{review.content}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextSlide}
              disabled={currentIndex + 3 >= reviews.length}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;