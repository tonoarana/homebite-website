// Variable global para el mapa si necesitas acceder a él desde otras funciones
let map;

/**
 * Función de inicialización del mapa.
 * Es llamada automáticamente por la API de Google Maps cuando está lista.
 */
function initMap() {
    // Verifica si el contenedor del mapa existe
    const mapElement = document.getElementById("map-container");
    if (!mapElement) {
        console.error("El elemento #map-container no se encontró en el DOM.");
        return;
    }

    // Coordenadas para centrar el mapa (ej. una ubicación inicial general o de tu mercado objetivo)
    // Puedes cambiar esto a las coordenadas de tu ciudad de lanzamiento, por ejemplo.
    const initialLocation = { lat: 34.052235, lng: -118.243683 }; // Ejemplo: Los Ángeles, CA

    // Opciones para la creación del mapa
    const mapOptions = {
        center: initialLocation, // Centro inicial del mapa
        zoom: 12,                // Nivel de zoom (1 = mundo, 20 = muy cerca)
        // Puedes añadir más opciones aquí, como disableDefaultUI: true para simplificar la interfaz
    };

    // Crea una nueva instancia del mapa y la asocia al div 'map-container'
    map = new google.maps.Map(mapElement, mapOptions);

    // Opcional: Añade un marcador inicial en el centro del mapa
    new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "HomeBite - Centro"
    });

    // --- PRÓXIMOS PASOS AQUÍ ---
    // Aquí es donde en el futuro integrarías:
    // 1. Obtener la ubicación actual del usuario (HTML5 Geolocation).
    // 2. Cargar las ubicaciones de los cocineros desde Firebase (Firestore/Realtime Database).
    // 3. Añadir marcadores para cada cocinero.
    // 4. Implementar la funcionalidad de búsqueda o filtrado.
    // 5. Añadir InfoWindows para mostrar detalles del cocinero al hacer clic en el marcador.
}

// Nota: La función initMap no se llama directamente aquí.
// Es llamada automáticamente por el script de la API de Google Maps que se carga en map.html.