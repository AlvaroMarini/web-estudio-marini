import { useState, useEffect } from 'react';
import { Plus, Minus, Gavel, X, FileText} from 'lucide-react';

interface Fallo {
    titulo: string;
    descripcion: string;
    textoCompleto: string;
    link: string;
}

export const FaqYJurisprudencia = () => {
    const [preguntaActiva, setPreguntaActiva] = useState<number | null>(null);
    
    // ESTADO ESCALABLE: Empezamos mostrando 3 fallos
    const [cantidadVisible, setCantidadVisible] = useState<number>(3);
    
    const [falloAbierto, setFalloAbierto] = useState<Fallo | null>(null);

    useEffect(() => {
        if (falloAbierto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [falloAbierto]);

    const togglePregunta = (index: number) => {
        setPreguntaActiva(preguntaActiva === index ? null : index);
    };

    const preguntas = [
        {
            pregunta: "¿Es obligatorio pasar a PAMI al jubilarse?",
            respuesta: "No, la ley ampara su derecho a continuar con su misma cobertura médica al momento de jubilarse, evitando el traspaso forzoso."
        },
        {
            pregunta: "¿Puedo conservar mi prepaga o mi obra social?",
            respuesta: "Sí. El cese de la relación laboral o de la actividad como autónomo, en virtud de haber adquirido una jubilación, no autoriza a la empresa de medicina prepaga a dar de baja la afiliación transfiriéndola al PAMI."
        },
        {
            pregunta: "¿Qué pasa con mis aportes?",
            respuesta: "Sus aportes de ANSES pueden ser derivados a la obra social o prepaga que usted elija mantener, mediante el trámite correspondiente."
        },
        {
            pregunta: "¿Necesito iniciar juicio?",
            respuesta: "Depende del caso y de la respuesta de la prepaga. Muchas veces se resuelve con intimaciones formales, en otras es necesario una acción de amparo."
        },
        {
            pregunta: "¿Cuánto demora el trámite?",
            respuesta: "Los tiempos varían. Si requiere medida cautelar judicial, la protección de su salud suele resolverse de forma rápida y prioritaria."
        }
    ];

    const fallos: Fallo[] = [
        {
            titulo: "Morales, Sandra Nélida c/ Obra Social de Petroleros",
            descripcion: "La Corte Federal precisó que cambiar la cobertura a favor del PAMI tiene carácter facultativo. Requiere una manifestación inequívoca del afiliado.",
            textoCompleto: "La Corte Federal precisó que la decisión de cambiar la cobertura a favor del Instituto Nacional de Servicios Sociales para Jubilados y Pensionados tiene carácter facultativo y requiere una manifestación inequívoca de los afiliados que alcanzan la jubilación para recién así cesar los compromisos contraídos por la obra social originaria, razón por la que concluyó que el art. 16 de la ley 19.032 no autoriza a presumir renuncia tácita del jubilado al servicio de salud que lo amparaba.",
            link: "/jurisprudencia.pdf"
        },
        {
            titulo: "V. R. A. c/ OSPE s/ Amparo",
            descripcion: "Garantiza la libertad de elección de los prestadores médicos sin que se realice una desafiliación automática.",
            textoCompleto: "El análisis preliminar de las normativas citadas permite suponer que el actor puede escoger un agente diferente que el INSSJP o continuar con la Obra Social donde se encontraba afiliado, sin que se realice una automática desafiliación y una obligatoria afiliación al PAMI. El principio consagrado en el art. 16 de la ley 19.032 aparece corroborado con el dictado de sucesivas normas legales destinadas a garantizar paulatinamente la libertad de elección.",
            link: "/jurisprudencia.pdf"
        },
        {
            titulo: "Albónico, Guillermo c/ Instituto Obra Social (C.S.J.N.)",
            descripcion: "Fallo de la Corte Suprema que ratifica que con la creación del PAMI no se produjo un pase automático de los beneficiarios.",
            textoCompleto: "A partir del examen simultáneo de las leyes 18610, 18980 y 19032, con la creación del INSSJP no se produjo un pase automático de los beneficiarios de las obras sociales al ente creado mediante la última de las normas, sino que tal transferencia se encontraba supeditada a la opción que voluntariamente realizaran quienes estuvieren interesados en ello, pues en caso contrario, mantendrían su afiliación a aquélla.",
            link: "/jurisprudencia.pdf"
        },
        {
            titulo: "Andrada, Martina c/ OSPAT s/ Amparo (C.S.J.N.)",
            descripcion: "Fallo de la Corte Suprema que reafirma el criterio de que el jubilado mantiene su afiliación a la obra social de origen.",
            textoCompleto: "Quienes se jubilan tienen derecho a continuar con la obra social 'de origen', esto quiere decir la obra social que tuvieron en sus años de actividad. La Corte Suprema de Justicia de la Nación ha ratificado este criterio, estableciendo que si no existe una opción voluntaria expresa de traspaso, el afiliado mantiene su cobertura original.",
            link: "/jurisprudencia.pdf"
        },
        {
            titulo: "Morelli, Enriqueta c/ OSMEDICA y otro",
            descripcion: "La Justicia sostiene que la mera circunstancia de obtener la jubilación no implica la transferencia al INSSJP.",
            textoCompleto: "La ley 23660 -de obras sociales-, especialmente en su art. 8, y su decreto reglamentario 576/93, confirmaron que la mera circunstancia de obtener la jubilación no implicaba -sin más- la transferencia del beneficiario al INSSJP, sino que subsistía para el ex trabajador el derecho de permanecer en la obra social que le prestaba servicios hasta entonces.",
            link: "/jurisprudencia.pdf"
        },
        {
            titulo: "Derecho a la vida y preservación de la salud (C.S.J.N.)",
            descripcion: "La Corte Suprema reconoce el derecho a la vida como el primer derecho garantizado por la Constitución Nacional.",
            textoCompleto: "Es preciso señalar que el derecho a la vida ha sido reconocido por la Corte Suprema de Justicia de la Nación como el primer derecho de la persona humana que resulta reconocido y garantizado por la Constitución Nacional (Fallos: 302:1284; 310:112; 321:1684). Esto fundamenta el derecho inalienable a mantener las prestaciones de salud al entrar en la etapa de pasividad.",
            link: "/jurisprudencia.pdf"
        }
    ];

    // Cortamos el array según la cantidad visible actual
    const fallosAMostrar = fallos.slice(0, cantidadVisible);

    return (
        <>
            <section className="py-20 bg-white text-[#0A122A]">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* COLUMNA IZQUIERDA: PREGUNTAS FRECUENTES */}
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
                            <span className="font-bold font-serif text-[17px] text-gray-800">{item.pregunta}</span>
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

                {/* COLUMNA DERECHA: JURISPRUDENCIA */}
                <div id="jurisprudencia" className="flex flex-col scroll-mt-28">
                    <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-[#D4AF37] grow"></div>
                    <h2 className="text-base font-serif tracking-widest uppercase font-semibold text-gray-800">
                        JURISPRUDENCIA DESTACADA
                    </h2>
                    <div className="h-px bg-[#D4AF37] grow"></div>
                    </div>

                    <div className="flex flex-col gap-10">
                    {fallosAMostrar.map((item, index) => (
                        <div key={index} className="flex gap-6 animate-in fade-in duration-500">
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
                            <button 
                            onClick={() => setFalloAbierto(item)}
                            className="text-[#D4AF37] text-sm font-semibold hover:text-[#b5952f] transition-colors flex items-center gap-1 w-fit cursor-pointer"
                            >
                            Ver fallo completo &rarr;
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* BOTONES DE CARGA ESCALABLE */}
                    <div className="mt-10">
                    {cantidadVisible < fallos.length ? (
                        <button 
                            onClick={() => setCantidadVisible(prev => prev + 3)}
                            className="inline-block border border-gray-400 text-gray-600 px-6 py-2.5 text-xs font-semibold tracking-wide hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            VER MÁS JURISPRUDENCIA
                        </button>
                    ) : (
                        <button 
                            onClick={() => setCantidadVisible(3)}
                            className="inline-block border border-gray-400 text-gray-600 px-6 py-2.5 text-xs font-semibold tracking-wide hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            VER MENOS
                        </button>
                    )}
                    </div>
                </div>

                </div>
            </section>

            {/* MODAL DE JURISPRUDENCIA */}
            {falloAbierto && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                        onClick={() => setFalloAbierto(null)}
                    ></div>

                    <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                        
                        <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3 pr-8">
                                <Gavel className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <h3 className="font-serif font-bold text-xl text-[#0A122A] leading-tight">
                                    {falloAbierto.titulo}
                                </h3>
                            </div>
                            <button 
                                onClick={() => setFalloAbierto(null)} 
                                className="text-gray-400 hover:text-[#0A122A] transition-colors bg-white rounded-full p-1 shadow-sm border border-gray-100 shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto text-gray-700">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Extracto del Fallo</h4>
                            <div className="flex items-start gap-4 bg-[#F4F1EA]/50 p-5 rounded-md border-l-4 border-[#D4AF37] mb-6">
                                <FileText className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5 opacity-80" />
                                <p className="text-[15px] italic leading-relaxed text-[#0A122A]/90 font-medium">
                                    "{falloAbierto.textoCompleto}"
                                </p>
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Implicancia Legal</h4>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {falloAbierto.descripcion}
                            </p>
                        </div>

                        <div className="p-5 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-end items-center gap-3">
                            <button 
                                onClick={() => setFalloAbierto(null)} 
                                rel="noopener noreferrer" 
                                className="bg-[#0A122A] text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#1a2542] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
                            >
                                Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};