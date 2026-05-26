import { useState } from 'react';
import { ClipboardList, Lock } from 'lucide-react';

export const EvaluaTuCaso = () => {
    // Estado para guardar las selecciones del formulario
    const [formData, setFormData] = useState({
    jubilado: '',
    cobertura: '',
    derivado: '',
    conservar: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Acá en el futuro podés enviar estos datos por mail (ej: usando EmailJS o una API)
    console.log("Datos listos para enviar:", formData);
    alert("¡Evaluación enviada! Nos contactaremos a la brevedad.");
    };

    return (
    <section id="evalua" className="bg-[#F4F1EA] py-12 px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Bloque Izquierdo: Título e Ícono */}
        <div className="flex items-center gap-4 lg:w-1/3">
            <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center shrink-0 bg-transparent">
            <ClipboardList className="w-8 h-8 text-[#0A122A]" strokeWidth={1.2} />
            </div>
            <div>
            <h2 className="text-[#0A122A] text-xl font-serif font-semibold mb-1">EVALÚA TU CASO</h2>
            <p className="text-gray-600 text-sm leading-tight">
                Respondé algunas preguntas y obtené una evaluación orientativa de tu situación.
            </p>
            </div>
        </div>

        {/* Bloque Derecho: Formulario */}
        <form onSubmit={handleSubmit} className="grow w-full flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Select 1 */}
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-600 font-semibold uppercase tracking-wider">¿Ya está jubilado?</label>
                <select 
                name="jubilado" 
                value={formData.jubilado} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-sm p-2.5 text-sm bg-white text-gray-700 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                required
                >
                <option value="">Seleccionar ▾</option>
                <option value="si">Sí</option>
                <option value="no">No, estoy en trámite</option>
                </select>
            </div>

            {/* Select 2 */}
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-600 font-semibold uppercase tracking-wider">¿Qué cobertura posee?</label>
                <select 
                name="cobertura" 
                value={formData.cobertura} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-sm p-2.5 text-sm bg-white text-gray-700 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                required
                >
                <option value="">Seleccionar ▾</option>
                <option value="osde">OSDE</option>
                <option value="swiss_medical">Swiss Medical</option>
                <option value="galeno">Galeno</option>
                <option value="otra">Otra Obra Social/Prepaga</option>
                </select>
            </div>

            {/* Select 3 */}
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-600 font-semibold uppercase tracking-wider">¿Fue derivado a PAMI?</label>
                <select 
                name="derivado" 
                value={formData.derivado} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-sm p-2.5 text-sm bg-white text-gray-700 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                required
                >
                <option value="">Seleccionar ▾</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
                </select>
            </div>

            {/* Select 4 */}
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-600 font-semibold uppercase tracking-wider">¿Desea conservar su cobertura?</label>
                <select 
                name="conservar" 
                value={formData.conservar} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-sm p-2.5 text-sm bg-white text-gray-700 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer"
                required
                >
                <option value="">Seleccionar ▾</option>
                <option value="si">Sí, es prioridad</option>
                <option value="asesoramiento">Necesito asesoramiento</option>
                </select>
            </div>

            </div>

            {/* Fila Inferior: Candado y Botón */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-2">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>Tus datos están protegidos. Evaluación sin compromiso.</span>
            </div>
            <button 
                type="submit" 
                className="bg-[#c29b2b] text-[#0A122A] px-8 py-2.5 text-sm font-semibold hover:bg-[#b5952f] transition-colors w-full lg:w-auto shadow-sm"
            >
                EVALUAR MI CASO
            </button>
            </div>
        </form>

        </div>
    </section>
);
};