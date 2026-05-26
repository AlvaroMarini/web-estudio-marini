import { Phone, Mail, User, Shield, MessageSquare, Clock } from 'lucide-react';
import { TbBrandWhatsapp } from "react-icons/tb";

export const Hero = () => {
    return (
    <section className="bg-[#0A122A] text-white py-16 px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-col w-fit">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                Dr. Carlos <br /> Alberto MARINI
            </h1>
            <div className="flex items-center w-full gap-4 mt-2">
                <div className="h-px bg-[#D4AF37] grow"></div>
                <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm font-semibold">Abogado</span>
                <div className="h-px bg-[#D4AF37] grow"></div>
            </div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mt-4 leading-relaxed">
            Especializado en <span className="text-[#D4AF37] font-semibold">restitución de obra social médica</span> para jubilados, evitando el pase automático a <span className="text-[#D4AF37] font-semibold">PAMI</span>.
            </p>

            <div className="flex items-center gap-3 text-gray-300 mt-2">
            <span className="text-[#D4AF37] text-xl">♦</span>
            <p className="text-lg">Defendemos tu derecho a elegir tu cobertura médica.</p>
            </div>

            {/* Botones de acción convertidos en enlaces */}
            <div className="flex flex-wrap gap-4 mt-8">
            <a 
                href="https://wa.me/5492214202444?text=Hola%20Dr.%20Marini,%20me%20contacto%20desde%20su%20sitio%20web%20para%20hacer%20una%20consulta." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-[#0A122A] px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#b5952f] transition-colors rounded-sm cursor-pointer"
            >
                <TbBrandWhatsapp className="w-6 h-6 stroke-[1.5]" />
                WHATSAPP
            </a>
            <a 
                href="tel:2214202444"
                className="border border-white text-white px-6 py-3 font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors rounded-sm cursor-pointer"
            >
                <Phone className="w-5 h-5" /> LLAMAR
            </a>
            <a 
                href="mailto:lawyermarini@gmail.com?subject=Consulta%20legal%20-%20Sitio%20Web"
                className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors rounded-sm cursor-pointer"
            >
                <Mail className="w-5 h-5" /> CONSULTA
            </a>
            </div>
        </div>

        {/* Columna Derecha: Beneficios */}
        <div className="flex flex-col gap-8 md:pl-12 lg:pl-24">
            <div className="flex flex-col gap-6">
            
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-gray-500/30 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.2} />
                </div>
                <span className="text-lg font-medium text-gray-200">Atención personalizada</span>
            </div>
            
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-gray-500/30 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.2} />
                </div>
                <span className="text-lg font-medium text-gray-200">Especialistas en derecho de la salud</span>
            </div>
            
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-gray-500/30 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.2} />
                </div>
                <span className="text-lg font-medium text-gray-200">Seguimiento directo</span>
            </div>
            
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-gray-500/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.2} />
                </div>
                <span className="text-lg font-medium text-gray-200">Consultas rápidas</span>
            </div>

            </div>
        </div>

        </div>
    </section>
    )
}