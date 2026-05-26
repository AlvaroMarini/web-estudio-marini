import { TbBrandWhatsapp } from "react-icons/tb";

export const BotonWhatsApp = () => {
    return (
    <a 
        href="https://wa.me/5492214202444" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center hover:-translate-y-1 transition-transform duration-300"
    >
        
        {/* Cartelito blanco siempre visible */}
        <div className="bg-white pl-4 pr-6 py-2 rounded-l-2xl shadow-md text-[13px] font-semibold text-gray-600 leading-tight z-0 border border-gray-100">
        Consultanos<br />por WhatsApp
        </div>
        
        {/* Círculo verde superpuesto (con margen negativo y borde blanco) */}
        <div className="bg-[#25D366] w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-10 -ml-4 border-4 border-white">
        <TbBrandWhatsapp className="w-8 h-8 text-white stroke-[1.5]" />
        </div>

    </a>
    );
};