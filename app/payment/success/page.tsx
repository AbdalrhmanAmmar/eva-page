"use client"

import { useSearchParams } from 'next/navigation'
import { CheckCircle, FileText, Download, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentSuccess() {
  const searchParams = useSearchParams()
  const requestId = searchParams.get('requestId') || ''

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* القسم العلوي */}
          <div className="bg-green-600 p-8 text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">تمت عملية الدفع بنجاح</h1>
            <p className="text-lg">شكراً لك على ثقتك بنا</p>
          </div>

          {/* تفاصيل الدفع */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-6 text-gray-800">تفاصيل الطلب</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">رقم الطلب:</span>
                    <span className="font-medium">{requestId}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">حالة الدفع:</span>
                    <span className="font-medium text-green-600">مكتمل</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">طريقة الدفع:</span>
                    <span className="font-medium">جيديا - بطاقة ائتمانية</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">تاريخ الدفع:</span>
                    <span className="font-medium">
                      {new Date().toLocaleDateString('ar-SA')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-6 text-gray-800">الإيصال</h2>
                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">إيصال الدفع رقم: {requestId}</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      تحميل
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Printer className="w-4 h-4" />
                      طباعة
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* إجراءات إضافية */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">الخطوات التالية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a href="/profile/orders">
                    <div className="text-center">
                      <div className="font-medium">تتبع طلبك</div>
                      <div className="text-sm text-gray-500 mt-1">متابعة حالة الخدمة</div>
                    </div>
                  </a>
                </Button>
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a href="/services">
                    <div className="text-center">
                      <div className="font-medium">خدمات إضافية</div>
                      <div className="text-sm text-gray-500 mt-1">تصفح خدماتنا الأخرى</div>
                    </div>
                  </a>
                </Button>
                <Button className="h-auto py-4" asChild>
                  <a href="/">
                    <div className="text-center">
                      <div className="font-medium">العودة للرئيسية</div>
                      <div className="text-sm text-primary-foreground/80 mt-1">الانتقال للصفحة الرئيسية</div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* تذييل الصفحة */}
          <div className="bg-gray-50 p-6 text-center text-sm text-gray-500">
            <p>لأي استفسارات، يرجى التواصل مع خدمة العملاء على الرقم 920000000</p>
          </div>
        </div>
      </div>
    </div>
  )
}