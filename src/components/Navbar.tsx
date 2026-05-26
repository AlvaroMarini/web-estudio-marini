import { useState } from 'react';
import { CalendarDays, Menu, X } from 'lucide-react';

export const Navbar = () => {
    // Este estado controla si el menú de celular está abierto (true) o cerrado (false)
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Función rápida para cerrar el menú (se usa al tocar un link o la X)
    const cerrarMenu = () => setMenuAbierto(false);

    return (
    <nav className="bg-[#0A122A] text-white py-6 px-8 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Sector Izquierdo: Logo y Nombre */}
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

        {/* Sector Derecho: Links Desktop (Se oculta en celulares con lg:flex) */}
        <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-5 text-[11px] xl:text-xs font-semibold tracking-wider text-gray-300">
            <li><a href="#" className="text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1 transition-colors">INICIO</a></li>
            <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">SERVICIOS</a></li>
            <li><a href="#casos" className="hover:text-[#D4AF37] transition-colors">CASOS FRECUENTES</a></li>
            <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">JURISPRUDENCIA</a></li>
            <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
            <li><a href="#evalua" className="hover:text-[#D4AF37] transition-colors">EVALÚA TU CASO</a></li>
            <li><a href="#contacto" className="hover:text-[#D4AF37] transition-colors">CONTACTO</a></li>
            </ul>
            
            <a 
            href="#formulario-consulta"
            className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors rounded-sm cursor-pointer"
            >
            <CalendarDays className="w-4 h-4" />
            CONSULTA
            </a>
        </div>

        {/* Botón de Menú Hamburguesa (Solo visible en celulares) */}
        <button 
            onClick={() => setMenuAbierto(true)}
            className="lg:hidden text-[#D4AF37] p-1 cursor-pointer"
        >
            <Menu className="w-7 h-7" />
        </button>

        </div>

        {/* --- DESPLEGABLE PARA CELULARES --- */}
        
        {/* 1. Fondo oscuro semitransparente (cuando hacés clic afuera, se cierra) */}
        {menuAbierto && (
        <div 
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            onClick={cerrarMenu}
        />
        )}

        {/* 2. El panel que se desliza desde la izquierda */}
        <div 
        className={`fixed top-0 right-0 h-full w-70 bg-[#0A122A] z-50 border-r border-gray-800 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
            menuAbierto ? 'translate-x-0' : 'translate-x-full'
        }`}
        >
        {/* Encabezado del panel lateral con el botón X */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <span className="text-[#D4AF37] font-serif tracking-widest text-sm font-semibold">MENÚ</span>
            <button onClick={cerrarMenu} className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer">
            <X className="w-6 h-6" />
            </button>
        </div>

        {/* Lista de enlaces verticales */}
        <ul className="flex flex-col gap-6 p-8 text-sm font-semibold tracking-wider text-gray-300 grow">
            <li><a href="#" onClick={cerrarMenu} className="text-[#D4AF37] hover:text-white transition-colors block">INICIO</a></li>
            <li><a href="#servicios" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">SERVICIOS</a></li>
            <li><a href="#casos" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">CASOS FRECUENTES</a></li>
            <li><a href="#faq" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">JURISPRUDENCIA</a></li>
            <li><a href="#faq" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">FAQ</a></li>
            <li><a href="#evalua" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">EVALÚA TU CASO</a></li>
            <li><a href="#contacto" onClick={cerrarMenu} className="hover:text-[#D4AF37] transition-colors block">CONTACTO</a></li>
        </ul>

        {/* Botón de consulta al fondo del panel */}
        <div className="p-8 border-t border-gray-800 mt-auto">
            <a 
            href="#formulario-consulta"
            onClick={cerrarMenu}
            className="bg-[#D4AF37] text-[#0A122A] px-5 py-3 text-xs font-bold flex justify-center items-center gap-2 hover:bg-[#b5952f] transition-colors rounded-sm cursor-pointer w-full"
            >
            <CalendarDays className="w-4 h-4" />
            CONSULTA
            </a>
        </div>
        </div>
        
    </nav>
    );
};