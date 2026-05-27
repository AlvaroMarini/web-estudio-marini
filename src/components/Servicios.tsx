import { 
    Scale, 
    ShieldPlus, 
    UserCheck, 
    Users, 
    Landmark, 
    Handshake 
} from 'lucide-react';

export const Servicios = () => {
    const servicios = [
    { id: 1, icon: <Scale className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Restitución de obra social" },
    { id: 2, icon: <ShieldPlus className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Amparos de salud" },
    { id: 3, icon: <UserCheck className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Continuidad de prepaga" },
    { id: 4, icon: <Users className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Cobertura médica para jubilados" },
    { id: 5, icon: <Landmark className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Obras sociales sindicales" },
    { id: 6, icon: <Handshake className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.2} />, title: "Conflictos con prepagas" }
    ];

    return (
    <section className="bg-[#0A122A] text-white py-16 px-8" id="servicios">
        <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-25 bg-[#D4AF37]/50"></div>
            <h2 className="text-[#D4AF37] text-xl font-serif tracking-[0.2em]">NUESTROS SERVICIOS</h2>
            <div className="h-px w-25 bg-[#D4AF37]/50"></div>
        </div>

        {/* Grilla de 6 columnas en pantallas grandes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 lg:divide-x divide-[#D4AF37]/30 text-center">
            {servicios.map((servicio) => (
            <div 
                key={servicio.id} 
                className="flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer lg:px-4"
            >
                <div className="h-16 flex items-center justify-center">
                {servicio.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-300 leading-snug px-2">
                {servicio.title}
                </h3>
            </div>
            ))}
        </div>

        </div>
    </section>
    );
};