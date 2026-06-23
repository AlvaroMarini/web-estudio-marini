import { Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
    return (
    <footer id="contacto" className="bg-[#0A122A] text-white pt-16 pb-8 px-8 border-t border-[#D4AF37]/30">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-[#D4AF37]/30 mb-12">
        
        {/* Columna 1: Marca y Descripción */}
        <div className="flex flex-col md:pr-10">
            <div className="flex items-center gap-3 mb-4">
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
            <p className="text-sm text-gray-400 leading-relaxed mt-2">
            Especializado en el derecho a la conservación de una Obra Social o medicina Prepaga. Acompañamos a jubilados y pensionados para defender su derecho a elegir.
            </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="flex flex-col md:px-10">
            <h3 className="text-[#D4AF37] text-sm font-semibold tracking-wider mb-6">CONTACTO</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
            <a className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                +54 9 221-4202444
            </a>
            <a className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                estudiojuridicomarini@gmail.com
            </a>
            </div>
        </div>

        {/* Columna 3: Horarios */}
        <div className="flex flex-col md:px-10">
            <h3 className="text-[#D4AF37] text-sm font-semibold tracking-wider mb-6">HORARIOS DE ATENCIÓN</h3>
            <div className="flex gap-3 text-sm text-gray-300">
            <Clock className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="flex flex-col">
                <span>Lunes a Viernes</span>
                <span>9:00 a 18:00 hs</span>
            </div>
            </div>
        </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex justify-center text-center">
        <p className="text-xs text-gray-500">
            © 2026 Dr. Carlos Alberto Marini. Todos los derechos reservados.
        </p>
        </div>
    </footer>
    );
};