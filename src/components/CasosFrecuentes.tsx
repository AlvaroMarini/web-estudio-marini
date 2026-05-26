import { ArrowLeftRight, Heart, TrendingUp, FileX, ShieldAlert } from 'lucide-react';

export const CasosFrecuentes = () => {
    const casos = [
    {
        id: 1,
        icon: <ArrowLeftRight className="w-8 h-8 text-gray-700" strokeWidth={1.2} />,
        title: "Me quieren pasar a PAMI",
        desc: "Analizamos tu caso y defendemos tu derecho a elegir tu cobertura."
    },
    {
        id: 2,
        icon: <Heart className="w-8 h-8 text-gray-700" strokeWidth={1.2} />,
        title: "Quiero conservar OSDE al jubilarme",
        desc: "Te ayudamos a mantener tu prepaga al momento de jubilarte."
    },
    {
        id: 3,
        icon: <TrendingUp className="w-8 h-8 text-gray-700" strokeWidth={1.2} />,
        title: "Mi prepaga aumentó",
        desc: "Revisamos aumentos abusivos y buscamos una solución."
    },
    {
        id: 4,
        icon: <FileX className="w-8 h-8 text-gray-700" strokeWidth={1.2} />,
        title: "La obra social registró mi discontinuidad",
        desc: "Iniciamos el reclamo para que puedas conservar tu cobertura."
    },
    {
        id: 5,
        icon: <ShieldAlert className="w-8 h-8 text-gray-700" strokeWidth={1.2} />,
        title: "Me jubilé y perdí cobertura médica",
        desc: "Te asesoramos para recuperar tu cobertura y tus derechos."
    }
    ];

    return (
    <section className="bg-[#F9F8F6] py-20 px-8" id="casos">
        <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gray-300"></div>
            <h2 className="text-[#0A122A] text-xl font-serif tracking-[0.2em]">CASOS FRECUENTES</h2>
            <div className="h-px w-16 bg-gray-300"></div>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {casos.map((caso) => (
            <div 
                key={caso.id} 
                className="bg-white border border-gray-200/60 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
                <div className="w-16 h-16 rounded-full border border-gray-200/80 flex items-center justify-center mb-6 bg-gray-50/50">
                {caso.icon}
                </div>
                <h3 className="text-[#0A122A] font-serif text-lg font-semibold mb-4 leading-tight">
                {caso.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 grow">
                {caso.desc}
                </p>
                <button className="text-[#D4AF37] text-sm font-semibold hover:text-[#b5952f] transition-colors mt-auto cursor-pointer">
                Consultar →
                </button>
            </div>
            ))}
        </div>

        </div>
    </section>
    );
};