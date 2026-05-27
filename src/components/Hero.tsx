import { useState, useEffect } from 'react';
import { Mail, User, Shield, MessageSquare, Clock, X, Copy, Check } from 'lucide-react';
import { TbBrandWhatsapp } from "react-icons/tb";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, [isModalOpen]);

    const emailSoporte = "estudiojuridicomarini@gmail.com";
    const numeroWhatsApp = "5492214202444";
    const mensajeWhatsApp = encodeURIComponent("Hola Dr. Marini, me contacto desde su sitio web para hacerle una consulta.");
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

    const handleCopiarEmail = () => {
    navigator.clipboard.writeText(emailSoporte);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
    };

    return (
    <>
        <section className="bg-[#0A122A] text-white py-16 px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
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

            <div className="flex flex-wrap gap-4 mt-8">
                <a 
                href={linkWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4AF37] border border-[#D4AF37] text-[#0A122A] px-5 py-3 font-semibold flex items-center gap-2 hover:bg-[#b5952f] hover:border-[#b5952f] transition-colors rounded-sm cursor-pointer"
                >
                <TbBrandWhatsapp className="w-5 h-5" />
                WHATSAPP
                </a>
                
                <button 
                onClick={() => setIsModalOpen(true)}
                className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors rounded-sm cursor-pointer"
                >
                <Mail className="w-5 h-5" /> CONSULTA
                </button>
            </div>
            </div>

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

        {isModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
            ></div>

            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md p-8 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8 mt-2">
                <h3 className="text-2xl font-serif text-[#0A122A] font-bold mb-2">
                Elegí cómo contactarnos
                </h3>
                <p className="text-gray-600 text-sm">
                Te responderemos a la brevedad para evaluar tu caso.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <a 
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-3.5 px-4 rounded-md font-semibold hover:bg-[#20b858] transition-colors shadow-sm"
                >
                <TbBrandWhatsapp className="w-6 h-6 stroke-[1.5]" />
                Enviar mensaje por WhatsApp
                </a>

                <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 grow"></div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">O envianos un correo a</span>
                <div className="h-px bg-gray-200 grow"></div>
                </div>

                <div 
                onClick={handleCopiarEmail}
                className="flex items-center justify-between w-full border-2 border-gray-200 bg-gray-50 text-[#0A122A] py-3 px-4 rounded-md cursor-pointer hover:border-[#0A122A] hover:bg-white transition-all group"
                title="Hacé clic para copiar el email"
                >
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500 group-hover:text-[#0A122A] transition-colors" />
                    <span className="font-semibold text-[15px] sm:text-base">{emailSoporte}</span>
                </div>
                
                {copiado ? (
                    <div className="flex items-center gap-1 text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="text-xs font-bold">Copiado</span>
                    </div>
                ) : (
                    <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#0A122A] transition-colors" />
                )}
                </div>
            </div>
            </div>
        </div>
        )}
    </>
    );
};