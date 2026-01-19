export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    reportUrl: string;
    category: "Python" | "Power BI" | "SQL" | "ML";
    results?: Record<string, string>;
    image?: string;
    videoUrl?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Análisis y Predicción del Precio de Automóviles Usados utilizando Regresión Lineal Múltiple",
        description: "Desarrollo de un modelo predictivo para estimar el precio de venta de vehículos",
        results: {
            data_processing: "Se redujo el conjunto de datos de 8,128 a 6,717 registros tras la eliminación de valores NaN y duplicados.",
            model_optimization: "Se realizaron pruebas con múltiples tasas de aprendizaje (alphas: 0.1, 0.2, 0.3, 0.4, 0.5) ejecutando 1,000 iteraciones en cada caso para identificar el parámetro óptimo de convergencia del gradiente.",
            visual_validation: "Se generaron gráficos comparativos entre los valores reales ('Actual Values') y las predicciones del modelo ('Our Prediction'), demostrando la capacidad del modelo para seguir la tendencia de los precios en relación con variables clave como el kilometraje (km_driven)."
        },
        tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
        reportUrl: "https://colab.research.google.com/drive/1oGKm7nHm7NHIXGXqqJT-i8mf0HTt-KTr?usp=sharing",
        category: "Python",
        image: "/img/p1.png",

    },
    {
        id: "2",
        title: "Diagnóstico Temprano: Prediciendo la Diabetes con Machine Learning",
        description: "Este proyecto desarrolla un modelo de clasificación para la detección temprana de la diabetes utilizando algoritmos de aprendizaje supervisado. El flujo de trabajo incluye la exploración estadística y visual de un dataset de 1,000 registros médicos (analizando variables como glucosa, IMC, edad y presión arterial), la limpieza de datos para asegurar la integridad del modelo, y la implementación de un Árbol de Decisión para predecir si un paciente tiene diabetes basándose en sus indicadores clínicos.",
        results: {
            "data_analysis": "Se analizó un conjunto de datos equilibrado con 1,000 registros, donde el 50% de los casos corresponden a diagnósticos positivos de diabetes.",
            "statistical_insights": "Se identificaron métricas clave como un promedio de glucosa de 124.4 mg/dL y un IMC promedio de 32.5 en la muestra estudiada.",
            "model_implementation": "Se entrenó con éxito un clasificador de Árbol de Decisión capaz de generar predicciones basadas en perfiles específicos de pacientes (glucosa, presión, insulina, etc.) y se exportó la lógica del modelo en formato .dot para su visualización jerárquica."
        },
        tags: [
            "Python",
            "Machine Learning",
            "Scikit-learn",
            "Data Analysis",
            "Decision Trees",
            "Health Analytics",
            "Pandas",
            "Data Visualization"
        ],
        reportUrl: "https://colab.research.google.com/drive/1oFh3GZ6nmQ_MZlRDTAUUTa9UiYbCd36U?usp=sharing",
        category: "Python",
        image: "/img/p2.png",
        videoUrl: "https://youtube.com"
    }
];
