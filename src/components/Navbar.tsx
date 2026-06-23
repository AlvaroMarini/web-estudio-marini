import { useState, useEffect } from 'react';
import { CalendarDays, Menu, X, Mail, Copy, Check } from 'lucide-react';
import { TbBrandWhatsapp } from "react-icons/tb";

export const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
    if (menuAbierto || isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        // Si están cerrados, lo volvemos a la normalidad
        document.body.style.overflow = 'unset';
    }

    return () => {
        document.body.style.overflow = 'unset';
    };
    }, [menuAbierto, isModalOpen]); 

    const cerrarMenu = () => setMenuAbierto(false);

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
        <nav className="bg-[#0A122A] text-white py-6 px-8 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            
            <div className="flex items-center gap-3 relative z-50">
            <div className="text-[#D4AF37] text-3xl font-serif">⚖️</div>
            <div className="flex flex-col w-fit">
                <span className="text-xl font-serif tracking-wide">Dr. Carlos Alberto MARINI</span>
                <div className="flex items-center w-full gap-2 mt-1">
                <div className="h-px bg-[#D4AF37] grow"></div>
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-semibold">Abogado</span>
                <div className="h-px bg-[#D4AF37] grow"></div>
                </div>
            </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-5 text-[11px] xl:text-xs font-semibold tracking-wider text-gray-300">
                <li><a href="#" className="text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1 transition-colors">INICIO</a></li>
                <li><a href="#casos" className="hover:text-[#D4AF37] transition-colors">SITUACIONES HABITUALES</a></li>
                <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">SERVICIOS</a></li>
                <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
                <li><a href="#jurisprudencia" className="hover:text-[#D4AF37] transition-colors">JURISPRUDENCIA</a></li>
                <li><a href="#contacto" className="hover:text-[#D4AF37] transition-colors">CONTACTO</a></li>
            </ul>
            
            <button 
                onClick={() => setIsModalOpen(true)}
                className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors rounded-sm cursor-pointer"
            >
                <CalendarDays className="w-4 h-4" />
                CONSULTA
            </button>
            </div>

            <button 
            onClick={() => setMenuAbierto(true)}
            className="lg:hidden text-[#D4AF37] p-1 cursor-pointer"
            >
            <Menu className="w-7 h-7" />
            </button>

        </div>
        
        {menuAbierto && (
            <div 
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            onClick={cerrarMenu}
            />
        )}

        <div 
            className={`fixed top-0 right-0 h-full w-70 sm:w-80 bg-[#0A122A] z-50 border-l border-gray-800 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
            menuAbierto ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <span className="text-[#D4AF37] font-serif tracking-widest text-sm font-semibold">MENÚ</span>
            <button onClick={cerrarMenu} className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer">
                <X className="w-6 h-6" />
            </button>
            </div>

            <ul className="flex flex-col gap-6 p-8 text-sm font-semibold tracking-wider text-gray-300 overflow-y-auto grow">
            <li><a href="#" onClick={cerrarMenu} className="text-[#D4AF37] hover:text-white transition-colors block">INICIO</a></li>
            <li><a href="#casos" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">SITUACIONES HABITUALES</a></li>
            <li><a href="#servicios" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">SERVICIOS</a></li>
            <li><a href="#faq" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">FAQ</a></li>
            <li><a href="#jurisprudencia" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">JURISPRUDENCIA</a></li>
            <li><a href="#contacto" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">CONTACTO</a></li>
            </ul>

            <div className="p-8 pb-32 border-t border-gray-800 mt-auto bg-[#0A122A]">
            <button 
                onClick={() => {
                setIsModalOpen(true);
                cerrarMenu();
                }}
                className="bg-[#D4AF37] text-[#0A122A] px-5 py-3 text-xs font-bold flex justify-center items-center gap-2 hover:bg-[#b5952f] transition-colors rounded-sm cursor-pointer w-full"
            >
                <CalendarDays className="w-4 h-4" />
                CONSULTA
            </button>
            </div>
        </div>
        </nav>

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