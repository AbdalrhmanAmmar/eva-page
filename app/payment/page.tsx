"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Loader2, CreditCard, Banknote, Smartphone, QrCode } from 'lucide-react'
import { useState } from 'react'

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isProcessing, setIsProcessing] = useState(false)
  
  const requestId = searchParams.get('requestId') || `JOD-${Math.floor(10000 + Math.random() * 90000)}`
  const amount = searchParams.get('amount') || '0'
  const [activeMethod, setActiveMethod] = useState('cards')

  const paymentMethods = [
    {
      id: 'cards',
      name: 'البطاقات الائتمانية',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Visa, Mastercard, Mada'
    },
    {
      id: 'apple_pay',
      name: 'Apple Pay',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'الدفع عبر أجهزة آبل'
    },
    {
      id: 'stc_pay',
      name: 'STC Pay',
      icon: <QrCode className="w-5 h-5" />,
      description: 'الدفع عبر محفظة STC'
    },
    {
      id: 'bank',
      name: 'التحويل البنكي',
      icon: <Banknote className="w-5 h-5" />,
      description: 'تحويل مباشر للبنك'
    }
  ]

  const initiateJoodPayment = async () => {
    setIsProcessing(true)
    // هنا سيتم دمج كود جيديا الفعلي لاحقاً
    setTimeout(() => {
      router.push(`/payment/success?requestId=${requestId}`)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* شريط التقدم */}
      <div className="bg-primary h-2 w-full"></div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* قسم تفاصيل الطلب */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6 text-gray-800">ملخص الطلب</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">رقم الطلب</span>
                  <span className="font-medium">{requestId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">المبلغ المستحق</span>
                  <span className="font-bold text-primary text-xl">{amount} ر.س</span>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-2">تفاصيل الدفع</h3>
                  <p className="text-sm text-gray-500">
                    سيتم توجيهك لبوابة جيديا الآمنة لإتمام عملية الدفع
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* قسم طرق الدفع */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* عنوان الصفحة */}
              <div className="bg-primary p-6 text-white">
                <h1 className="text-2xl font-bold">إتمام عملية الدفع</h1>
                <p className="text-primary-foreground/90">اختر طريقة الدفع المناسبة</p>
              </div>

              {/* طرق الدفع */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        activeMethod === method.id 
                          ? 'border-primary ring-2 ring-primary/20 bg-primary/5' 
                          : 'hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          activeMethod === method.id ? 'bg-primary/10 text-primary' : 'bg-gray-100'
                        }`}>
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{method.name}</h3>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* تفاصيل طريقة الدفع المختارة */}
                {activeMethod === 'cards' && (
                  <div className="mb-8 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-4">البطاقات الائتمانية</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">رقم البطاقة</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456" 
                          className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-medium">تاريخ الانتهاء</label>
                          <input 
                            type="text" 
                            placeholder="MM/YY" 
                            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-medium">CVV</label>
                          <input 
                            type="text" 
                            placeholder="123" 
                            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMethod === 'bank' && (
                  <div className="mb-8 animate-fade-in">
                    <h3 className="text-lg font-semibold mb-4">معلومات التحويل البنكي</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">اسم البنك:</span>
                          <span className="font-medium">البنك الأهلي التجاري</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">رقم الحساب:</span>
                          <span className="font-medium">SA0380000000608010167519</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">اسم المستفيد:</span>
                          <span className="font-medium">شركة جيديا</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">المبلغ:</span>
                          <span className="font-medium">{amount} ر.س</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                        <p className="text-sm">برجاء إرفاق إيصال التحويل عبر الواتساب على الرقم: 966501234567</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* زر الدفع */}
                <Button
                  onClick={initiateJoodPayment}
                  disabled={isProcessing}
                  className="w-full py-6 text-lg font-bold"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      جاري معالجة الدفع...
                    </>
                  ) : (
                    `دفع ${amount} ر.س`
                  )}
                </Button>

                {/* شعار جيديا */}
                <div className="mt-6 flex justify-center">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                    <span className="text-sm text-gray-600">مدعوم من</span>
                    <span className="font-bold text-primary">جيديا</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}