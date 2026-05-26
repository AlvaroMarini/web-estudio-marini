import { useState } from 'react';
import { Plus, Minus, Gavel } from 'lucide-react';

export const FaqYJurisprudencia = () => {
    // Estado para controlar qué pregunta del acordeón está abierta
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
    };

    const faqs = [
    { id: 1, p: "¿Es obligatorio pasar a PAMI al jubilarse?", r: "No. La ley de obras sociales y la jurisprudencia actual avalan tu derecho a elegir y mantener tu cobertura de origen." },
    { id: 2, p: "¿Puedo conservar mi prepaga?", r: "Sí, tenés derecho a exigir la continuidad de tu plan en idénticas condiciones a las que tenías antes de jubilarte." },
    { id: 3, p: "¿Qué pasa con mis aportes?", r: "Tus aportes jubilatorios de salud pueden ser derivados a la obra social o prepaga que elijas mediante el trámite correspondiente." },
    { id: 4, p: "¿Necesito iniciar juicio?", r: "En muchos casos se resuelve mediante un reclamo administrativo o una acción de amparo rápida. Evaluamos cada situación particular." },
    { id: 5, p: "¿Cuánto demora el trámite?", r: "Depende de la vía (administrativa o judicial), pero las medidas cautelares en salud suelen salir en cuestión de días o semanas." },
    ];

    const jurisprudencias = [
    {
        id: 1,
        titulo: "Conservación de cobertura médica tras jubilación",
        desc: "Fallos que reconocen el derecho del afiliado a mantener su cobertura médica al momento de jubilarse."
    },
    {
        id: 2,
        titulo: "Continuidad de prepaga para afiliado jubilado",
        desc: "Jurisprudencia que garantiza la continuidad de la prestación sin traspaso forzoso a PAMI."
    },
    {
        id: 3,
        titulo: "Acción de amparo por derecho a la salud",
        desc: "Reconocimiento del derecho a la salud y a la libre elección de la cobertura médica."
    }
    ];

    return (
    <section className="bg-white py-20 px-8" id="faq">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Columna Izquierda: Preguntas Frecuentes */}
        <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gray-300"></div>
            <h2 className="text-[#0A122A] text-lg font-serif tracking-[0.2em]">PREGUNTAS FRECUENTES</h2>
            <div className="h-px w-12 bg-gray-300"></div>
            </div>

            <div className="flex flex-col border-t border-gray-200">
            {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200">
                <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 flex justify-between items-center text-left hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                    <span className="text-[#0A122A] font-medium pr-4">{faq.p}</span>
                    {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    ) : (
                    <Plus className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    )}
                </button>
                {/* Contenido desplegable */}
                {openId === faq.id && (
                    <div className="pb-4 text-gray-600 text-sm animate-fade-in">
                    {faq.r}
                    </div>
                )}
                </div>
            ))}
            </div>
            
            <button className="mt-8 border border-[#D4AF37] text-[#D4AF37] px-6 py-2 text-sm font-semibold w-fit hover:bg-[#D4AF37]/10 transition-colors cursor-pointer mx-auto lg:mx-0">
            VER TODAS LAS PREGUNTAS
            </button>
        </div>

        {/* Columna Derecha: Jurisprudencia Destacada */}
        <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gray-300"></div>
            <h2 className="text-[#0A122A] text-lg font-serif tracking-[0.2em]">JURISPRUDENCIA DESTACADA</h2>
            <div className="h-px w-12 bg-gray-300"></div>
            </div>

            <div className="flex flex-col gap-8">
            {jurisprudencias.map((item) => (
                <div key={item.id} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A122A] flex items-center justify-center shrink-0">
                    <Gavel className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#0A122A] font-serif font-semibold mb-1">{item.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                    <a href="#" className="text-[#D4AF37] text-sm font-semibold hover:underline flex items-center gap-1">
                    Ver fallo →
                    </a>
                </div>
                </div>
            ))}
            </div>

            <button className="mt-8 border border-gray-400 text-gray-600 px-6 py-2 text-sm font-semibold w-fit hover:bg-gray-50 transition-colors cursor-pointer mx-auto lg:mx-0">
            VER MÁS JURISPRUDENCIA
            </button>
        </div>

        </div>
    </section>
    );
};