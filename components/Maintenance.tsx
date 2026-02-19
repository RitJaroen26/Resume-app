import React from 'react';
import { ShieldCheck, Construction, Github, Twitter, Mail } from 'lucide-react';

/**
 * ส่วนประกอบหน้า Maintenance ที่ออกแบบให้ดูทันสมัยและเป็นมืออาชีพ
 * ใช้ Tailwind CSS สำหรับการจัดเลย์เอาต์และความสวยงาม
 */
export const MaintenancePage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
            {/* เอฟเฟกต์พื้นหลังไล่เฉดสีแบบนุ่มนวล */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px] opacity-60"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100 blur-[120px] opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-lg w-full">
                <div className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-12 text-center">

                    {/* ส่วนของไอคอน */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                                <ShieldCheck className="w-12 h-12 text-blue-600" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-amber-100 p-2 rounded-lg border border-white shadow-sm">
                                <Construction className="w-5 h-5 text-amber-600" />
                            </div>
                        </div>
                    </div>

                    {/* ข้อความแจ้งเตือน */}
                    <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                        ขออภัย เว็บไซต์ปิดปรับปรุงชั่วคราว
                    </h1>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        เรากำลังทำการอัปเดต <span className="font-semibold text-blue-600">ระบบความปลอดภัยล่าสุด</span>
                        เพื่อปกป้องข้อมูลและเพิ่มประสิทธิภาพให้ดียิ่งขึ้น คาดว่าจะกลับมาให้บริการได้ในเร็วๆ นี้ครับ
                    </p>
                </div>

                {/* Footer เล็กๆ */}
                <p className="mt-8 text-center text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </div>
    );
};