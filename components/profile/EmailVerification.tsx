"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { authAPI } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/authStore";

interface EmailVerificationProps {
  userId: string;
  currentEmail: string;
  onUpdateSuccess?: () => void;
}

export default function EmailFieldWithVerification({
  userId,
  currentEmail,
  onUpdateSuccess = () => {},
}: EmailVerificationProps) {
  const [email, setEmail] = useState(currentEmail);
  const [isEditing, setIsEditing] = useState(false);
  const [otp, setOtp] = useState("");
  const [isPendingVerification, setIsPendingVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuthStore();

  // تحديث الحالة عند تغيير currentEmail من الخارج
  useEffect(() => {
    setEmail(currentEmail);
  }, [currentEmail]);

  const handleUpdateEmail = async () => {
    if (!email || email === currentEmail) return;
    
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      
      await authAPI.updateProfileAfterLogin(formData, token);
      
      setIsPendingVerification(true);
      toast.success("تم إرسال كود التحقق إلى بريدك الجديد");
    } catch (error) {
      toast.error("فشل في تحديث البريد الإلكتروني");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setIsLoading(true);
      const { success } = await authAPI.verifyEmailCode(userId, parseInt(otp));
      
      if (success) {
        toast.success("تم التحقق من البريد الإلكتروني بنجاح");
        setEmail(email); // تأكيد استخدام الإيميل الجديد
        setIsEditing(false);
        setIsPendingVerification(false);
        onUpdateSuccess(); // تنبيه المكون الأب بالتحديث
      } else {
        toast.error("كود التحقق غير صحيح");
      }
    } catch (error) {
      toast.error("فشل في التحقق من الكود");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm text-muted-foreground mb-2">البريد الإلكتروني</label>
      
      {isPendingVerification ? (
        <div className="space-y-3">
          <div className="text-sm text-primary">تم إرسال كود التحقق إلى {email}</div>
          <div className="flex gap-2">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="أدخل كود التحقق المكون من 6 أرقام"
              className="flex-1 px-4 py-2 bg-background border border-border/10 rounded-lg focus:outline-none focus:border-primary"
            />
            <button
              onClick={handleVerifyOtp}
              disabled={isLoading || otp.length !== 6}
              className="px-4 py-2 bg-primary text-background rounded-lg disabled:opacity-50"
            >
              {isLoading ? "جاري التحقق..." : "تحقق"}
            </button>
          </div>
        </div>
      ) : isEditing ? (
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 bg-background border border-border/10 rounded-lg focus:outline-none focus:border-primary"
          />
          <button
            onClick={handleUpdateEmail}
            disabled={isLoading || email === currentEmail}
            className="px-4 py-2 bg-primary text-background rounded-lg disabled:opacity-50"
          >
            {isLoading ? "جاري الإرسال..." : "تأكيد"}
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEmail(currentEmail);
            }}
            className="px-4 py-2 border border-border/10 rounded-lg"
          >
            إلغاء
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span className="flex-1 px-4 py-2 bg-background rounded-lg">{email}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-primary text-background rounded-lg"
          >
            تغيير
          </button>
        </div>
      )}
    </div>
  );
}