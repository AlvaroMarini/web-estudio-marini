import { useState } from 'react';
import { Plus, Minus, Gavel } from 'lucide-react';

export const FaqYJurisprudencia = () => {
    const [preguntaActiva, setPreguntaActiva] = useState<number | null>(null);

    const togglePregunta = (index: number) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
    };

    const preguntas = [
    {
        pregunta: "¿Es obligatorio pasar a PAMI al jubilarse?",
        respuesta: "No, la ley ampara su derecho a continuar con su misma cobertura médica al momento de jubilarse, evitando el traspaso forzoso."
    },
    {
        pregunta: "¿Puedo conservar mi prepaga?",
        respuesta: "Sí. El cese de la relación laboral por jubilación no autoriza a la empresa de medicina prepaga a dar de baja la afiliación."
    },
    {
        pregunta: "¿Qué pasa con mis aportes?",
        respuesta: "Sus aportes de ANSES pueden ser derivados a la obra social o prepaga que usted elija mantener, mediante el trámite correspondiente."
    },
    {
        pregunta: "¿Necesito iniciar juicio?",
        respuesta: "Depende del caso y de la respuesta de la prepaga. Muchas veces se resuelve con intimaciones formales, en otras es necesario un amparo de salud."
    },
    {
        pregunta: "¿Cuánto demora el trámite?",
        respuesta: "Los tiempos varían. Si requiere medida cautelar judicial, la protección de su salud suele resolverse de forma rápida y prioritaria."
    }
    ];

    const fallos = [
    {
        titulo: "Conservación de cobertura médica tras jubilación",
        descripcion: "Fallos que reconocen el derecho del afiliado a mantener su cobertura médica al momento de jubilarse.",
        link: "#"
    },
    {
        titulo: "Continuidad de prepaga para afiliado jubilado",
        descripcion: "Jurisprudencia que garantiza la continuidad de la prestación sin traspaso forzoso a PAMI.",
        link: "#"
    },
    {
        titulo: "Acción de amparo por derecho a la salud",
        descripcion: "Reconocimiento del derecho a la salud y a la libre elección de la cobertura médica.",
        link: "#"
    }
    ];

    return (
    <section className="py-20 bg-white text-[#0A122A]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* COLUMNA IZQUIERDA: PREGUNTAS FRECUENTES (Acá está el ID "faq") */}
        <div id="faq" className="flex flex-col scroll-mt-28">
            <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-[#D4AF37] grow"></div>
            <h2 className="text-base font-serif tracking-widest uppercase font-semibold text-gray-800">
                PREGUNTAS FRECUENTES
            </h2>
            <div className="h-px bg-[#D4AF37] grow"></div>
            </div>

            <div className="flex flex-col border-t border-gray-200">
            {preguntas.map((item, index) => (
                <div key={index} className="border-b border-gray-200 overflow-hidden">
                <button
                    onClick={() => togglePregunta(index)}
                    className="w-full text-left py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <span className="font-bold text-[15px] text-gray-800">{item.pregunta}</span>
                    {preguntaActiva === index ? (
                    <Minus className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    ) : (
                    <Plus className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    )}
                </button>
                
                <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    preguntaActiva === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="text-gray-600 text-sm leading-relaxed pr-8">
                    {item.respuesta}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* COLUMNA DERECHA: JURISPRUDENCIA (Acá está el ID "jurisprudencia") */}
        <div id="jurisprudencia" className="flex flex-col scroll-mt-28">
            <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-[#D4AF37] grow"></div>
            <h2 className="text-base font-serif tracking-widest uppercase font-semibold text-gray-800">
                JURISPRUDENCIA DESTACADA
            </h2>
            <div className="h-px bg-[#D4AF37] grow"></div>
            </div>

            <div className="flex flex-col gap-10">
            {fallos.map((item, index) => (
                <div key={index} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0A122A] flex items-center justify-center shrink-0 shadow-md">
                    <Gavel className="w-5 h-5 text-[#D4AF37]" />
                </div>
                
                <div className="flex flex-col">
                    <h3 className="font-bold font-serif text-[17px] text-gray-900 mb-2">
                    {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 pr-4">
                    {item.descripcion}
                    </p>
                    <a 
                    href={item.link} 
                    className="text-[#D4AF37] text-sm font-semibold hover:text-[#b5952f] transition-colors flex items-center gap-1 w-fit"
                    >
                    Ver fallo &rarr;
                    </a>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-10">
            <a 
                href="#contacto"
                className="inline-block border border-gray-400 text-gray-600 px-6 py-2.5 text-xs font-semibold tracking-wide hover:bg-gray-50 transition-colors"
            >
                VER MÁS JURISPRUDENCIA
            </a>
            </div>
        </div>

        </div>
    </section>
    );
};