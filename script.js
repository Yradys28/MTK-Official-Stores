// --- Datos de las tiendas oficiales ---
// Puedes editar esta información para agregar o quitar estados y tiendas.
// Si un estado no tiene tiendas, su array de 'tiendas' debe estar vacío: []
const datosTiendas = {
    "Amazonas": [],
    "Anzoátegui": [
        { nombre: "REPUESTOS JACOB CAR C.A", telefono: "04129790784", direccion: "CALLE ZAMORA CRUCE CON CALLE LA LINEA LOCAL S/N SECTOR BELLA VISTA PUERTO LA CRUZ ANZOÁTEGUI", tipo: "PREMIUM" },
        { nombre: "REPUESTOS5000.COM.VE.C.A", telefono: "04248561919", direccion: "CALLE A CASA NRO A23 URB LOS GERANIOS EL TIGRE -ANZOÁTEGUI", tipo: "PREMIUM" },
        { nombre: "MUNDO REPUESTOS FAVORITO", telefono: "04148085886", direccion: "AV CAJIGAL CASA NRO 18-280 SECTOR PORTUGAL BARCELONA EDO. ANZOÁTEGUI", tipo: "PREMIUM" },
        { nombre: "CASA DEL TRIPOIDE, C.A", telefono: "04248404686", direccion: "AV JORGE RODRÍGUEZ EDIFICIO HIELO ORIENTE PISO B PISO 1 LOCAL 2 SECTOR LAS GARZAS LECHERIA ANZOÁTEGUI", tipo: "PREMIUM" }
    ],
    "Apure": [],
    "Aragua": [],
    "Barinas": [],
    "Bolívar": [
        { nombre: "ERIKA NATHALIE RODRIGUEZ GARCIA", telefono: "04120680493", direccion: "CALLE 5 CON ESQUINA CARRERA 6 LOCAL 5-21 SECTOR LA CONCORDIA SAN CRISTÓBAL TACHIRA", tipo: "PREMIUM" },
        { nombre: "AUTOREPUESTOS BARUJ, C.A", telefono: "04120820679", direccion: "AV 15 CASA NRO 53 URBANIZACION FRANCISCO AVENDAÑO CIUDAD GUAYANA EDO BOLÍVAR", tipo: "PREMIUM" },
        { nombre: "MICROEMPRESA AUTOACCESORIOS ALDAMAR", telefono: "04241270793", direccion: "CALLE MIRANDA CASA S/N PARROQUIA SECCIÓN CAPITAL PIAR UPATA EDO BOLÍVAR", tipo: "PREMIUM" },
        { nombre: "AUTOREPUESTOS E IMPORTACIONES DIOS ES", telefono: "04121092632", direccion: "CALLE PRINCIPAL RUTA 8, MANZANA 135 CASA NRO 64-04 BARRIO LIBERTADOR I, SAN FÉLIX CIUDAD GUAYANA BOLÍVAR", tipo: "PREMIUM" }
    ],
    "Carabobo": [
        { nombre: "5 MILLAS AUTO REPUESTOS CA", telefono: "04144964353", direccion: "CALLE MICHELENA EDIF VENEZOLANA PISO PB LOCAL 108-63 SECTOR CANDELARIA VALENCIA CARABOBO", tipo: "PREMIUM" },
        { nombre: "AUTOREPUESTOS Z Y P, C.A", telefono: "04129434222", direccion: "AV. BOLÍVAR CRUCE CON CALLE PUERTO CABELLO EDIF. MIAMI PISO PLANTA BAJA LOCAL 3 Y 4 SECTOR NAGUANAGUA EDO CARABOBO", tipo: "ESTANDAR" },
        { nombre: "REPUESTOS MISTER MUNDO CA", telefono: "04125009540", direccion: "CALLE S/N LOCAL NUMERO B-2 PLANTA BAJA URB. LA ISABELICA 4TA AVENIDA ESTE-OESTE (AV. HERRY FORD) VALENCIA CARABOBO", tipo: "PREMIUM" }
    ],
    "Cojedes": [],
    "Delta Amacuro": [],
    "Dependencias Federales": [],
    "Distrito Capital": [
        { nombre: "INVERSIONES SUNIAKA 777 CA", telefono: "04242416464", direccion: "ESQ DE MIRANDO EDIF JUANITA PISO PB LOCAL B SECTOR SAN AGUSTIN NORTE CARACAS DISTRITO CAPITAL", tipo: "PREMIUM" },
        { nombre: "RHINO TOYO PARTS CA", telefono: "04242121072", direccion: "AV EL STADIUM QTA LAS TRES MARIAS NRO LOCAL 5 URB LOS CHAGUARAMOS CARACAS DISTRITO CAPITAL", tipo: "PREMIUM" },
        { nombre: "ACCESORIOS FORD MAX CA", telefono: "04242080867", direccion: "AV SUR 9 AV BOLIVAR Y AV LECUNA EDIF OJOS DE CHAVEZ PISO PB LOCAL 5 ZONA SANTA ROSALIA CARACAS DISTRITO CAPITAL", tipo: "PREMIUM" },
        { nombre: "YHORMAN FRANCISCO SANCHEZ CORONADO", telefono: "04141738133", direccion: "AV JOSE A. PAEZ Y AVENIDA 2 EDIF PALAU PISO 09 APT 91 URB MONTALBAN III CARACAS DISTRITO CAPITAL", tipo: "PREMIUM" },
        { nombre: "INYECTORES ANTIMANO CA", telefono: "04129121506", direccion: "CALLE ATRAS DE ANTIMANO LOCAL PB NRO 62 SECTOR ANTIMANO CARACAS DISTRITO CAPITAL", tipo: "PREMIUM" }
    ],
    "Falcón": [],
    "Guárico": [
        { nombre: "AUTO PARTES Y REPUESTOS JM CA", telefono: "04243708697", direccion: "CR 14 FINAL CON CARRETERA NACIONAL LOCAL S/N SECTOR CASCO CENTRAL CALABOZO", tipo: "PREMIUM" }
    ],
    "La Guaira": [
        { nombre: "REPUESTOS Y ACCESORIOS LOS CHAMOS CA", telefono: "04241172328", direccion: "CALLE REAL DE MONTESANO FTE-A LA BOMBA CARIBE LOCAL S/N NRO S/N SECTOR MONTESANO MAIQUETÍA EDO. LA GUAIRA", tipo: "PREMIUM" }
    ],
    "Lara": [],
    "Mérida": [
        { nombre: "HENRY JAVIER MENDEZ RAMIREZ", telefono: "04127853185", direccion: "CALLE PRINCIPAL CC BIMO CENTER NIVEL PB LOCAL 13 SECTOR EL ARADO TOVAR EDO-MÉRIDA TOVAR MÉRIDA", tipo: "PREMIUM" },
        { nombre: "MULTISERVICIOS AB MOTOR´S DURYNOC AUTOPARTES", telefono: "04147141303", direccion: "CARTA PANAMERICANA LOCAL S SECTOR LA CHERTOZA DIAGONAL A FARMABIEN AL LADO DE AGRÍCOLA MENDOZA NUEVA BOLIVIA MÉRIDA", tipo: "PREMIUM" }
    ],
    "Miranda": [
        { nombre: "DISTRIBUIDORA GATES AUTOMOTIVE CA", telefono: "04169115767", direccion: "CALLE CAURIMARE CC CARONI NIVEL PB LOCAL A-04 URB COLINAS DE BELLO MONTE CARACAS MIRANDA", tipo: "PREMIUM" },
        { nombre: "TRIPO CARS GUATIRE CA", telefono: "04241677832", direccion: "CALLE MIRANDA Y AV VILLA HEROICA LOCAL S/N SECTOR CANTARRANCA GUATIRE MIRANDA", tipo: "PREMIUM" },
        { nombre: "AUTOPARTES KRP CA", telefono: "04127124589", direccion: "AV. PRINCIPAL DE LOS DOS CAMINOS EDIF MIRANDA PISO PB LOCAL 5 URB LOS DOS CAMINOS CARACAS MIRANDA", tipo: "PREMIUM" }
    ],
    "Monagas": [],
    "Nueva Esparta": [
        { nombre: "MULTIREPUESTOS EL MESIAS CA", telefono: "04143834898", direccion: "CALLE PRINCIPAL DE CONUCO VIEJO CASA NRO S/N SECTOR VILLA ROSA NUEVA ESPARTA", tipo: "PREMIUM" }
    ],
    "Portuguesa": [],
    "Sucre": [
        { nombre: "REPUESTOS Y ACCESORIOS EL CHINO CUMANA CA", telefono: "04248708588", direccion: "CALLE MIRAMAR CASA NRO 91 SECTOR CENTRO DE LA CIUDAD DE CUMANÁ SUCRE", tipo: "PREMIUM" },
        { nombre: "REPUESTOS CELESTINO CA", telefono: "04248052194", direccion: "AV LA MARINA LOCAL NRO SN SECTOR LA MARINA SAN ANTONIO DEL GOLFO SAN ANTONIO DEL GOLFO SUCRE", tipo: "PREMIUM" }
    ],
    "Táchira": [
        { nombre: "RAFMAR D. SANCHEZ G", telefono: "04247186894", direccion: "CALLE CARRERA 6 BIS CASA 6- 78 SECTOR LA CONCORDIA SAN CRISTOBAL TÁCHIRA", tipo: "PREMIUM" },
        { nombre: "MULTIREPUESTOS LUNA CA", telefono: "04247307630", direccion: "CALLE 4 Y 5 CON CRA 6 BIS LOCAL # S-N SECTOR LA FRENTE BOUTIQUE DE DAEWOO C.A SAN CRISTOBAL TÁCHIRA", tipo: "PREMIUM" }
    ],
    "Trujillo": [
        { nombre: "INVERSIONES MOTORCARS CA", telefono: "04246493292", direccion: "AV 13 ENTRE CALLES 7 Y 8 LOCAL NRO 7-28 SECTOR CENTRO PQUIA MERCEDES DÍAZ VALERA TRUJILLO", tipo: "PREMIUM" },
        { nombre: "MULTIREPUESTOS Y ACCESORIOS LA 16", telefono: "04247750615", direccion: "CALLE 7 ENTRE AV. 12 Y 13 LOCAL NRO 12-61 SECTOR EL CENTRO, VALERA EDO TRUJILLO", tipo: "PREMIUM" }
    ],
    "Yaracuy": [],
    "Zulia": [
        { nombre: "TODO AUTO R&S CA", telefono: "04146229107", direccion: "AV INTERCOMUNAL LOCAL NRO S/N SECTOR LAS MOROCHAS CIUDAD OJEDA ZULIA", tipo: "PREMIUM" },
        { nombre: "TECNOMASTER COMPAÑIA ANONIMA", telefono: "04146286698", direccion: "AV 23A CASA 85-16 SECTOR 1RO DE MAYO MARACAIBO ZULIA", tipo: "PREMIUM" },
        { nombre: "INVERSIONES CHABAN COMPAÑÍA ANONIMA", telefono: "04144341173", direccion: "AV 15 LOCAL NRO 12-36 SECTOR SIERRA MAESTRA SIERRA MAESTRA (MARACAIBO) ZULIA", tipo: "PREMIUM" },
        { nombre: "GRUPO AFER, C.A", telefono: "04246994467", direccion: "AV 13 A CASA NRO 82-60 SECTOR BELLOSO MARACAIBO ZULIA", tipo: "PREMIUM" }
    ]
};

// --- Elementos del DOM ---
const estadosPanel = document.getElementById('estados-panel');
const tiendasPanel = document.getElementById('tiendas-panel');
const estadosLista = document.getElementById('estados-lista');
const tiendasTitulo = document.getElementById('tiendas-titulo');
const tiendasInfo = document.getElementById('tiendas-info');
const volverBtn = document.getElementById('volver-btn');

// --- Funciones para manejar la lógica ---

// Renderiza la lista de estados
function renderizarEstados() {
    estadosLista.innerHTML = ''; // Limpia la lista actual
    const estados = Object.keys(datosTiendas);
    estados.forEach(estado => {
        const estadoItem = document.createElement('div');
        estadoItem.classList.add('estado-item');
        estadoItem.textContent = estado;
        estadoItem.dataset.estado = estado;
        estadosLista.appendChild(estadoItem);
    });
}

// Muestra la información de las tiendas para el estado seleccionado
function renderizarTiendas(estado) {
    tiendasTitulo.textContent = estado;
    tiendasInfo.innerHTML = '';
    const tiendas = datosTiendas[estado];

    if (tiendas && tiendas.length > 0) {
        tiendas.forEach(tienda => {
            const tiendaCard = document.createElement('div');
            tiendaCard.classList.add('tienda-card');
            tiendaCard.innerHTML = `
                <div class="tienda-info">
                    <h3>${tienda.nombre}</h3>
                    <p>${tienda.telefono}</p>
                    <p>${tienda.direccion}</p>
                    <p class="red-text">${tienda.tipo}</p>
                </div>
            `;
            tiendasInfo.appendChild(tiendaCard);
        });
    } else {
        const noTiendasMensaje = document.createElement('p');
        noTiendasMensaje.classList.add('no-tiendas');
        noTiendasMensaje.textContent = 'No hay tiendas oficiales en este estado por el momento.';
        tiendasInfo.appendChild(noTiendasMensaje);
    }
}

// --- Event Listeners (Detectores de Clic) ---

// Maneja los clics en los estados
estadosLista.addEventListener('click', (e) => {
    if (e.target.classList.contains('estado-item')) {
        const estadoSeleccionado = e.target.dataset.estado;
        
        // Efecto visual: resalta el estado seleccionado
        document.querySelectorAll('.estado-item').forEach(item => {
            item.classList.remove('activo');
        });
        e.target.classList.add('activo');

        // Renderiza las tiendas del estado seleccionado
        renderizarTiendas(estadoSeleccionado);
        
        // Oculta el panel de estados y muestra el de tiendas
        estadosPanel.classList.remove('activo');
        tiendasPanel.classList.add('activo');
    }
});

// Maneja el clic en el botón de "Volver"
volverBtn.addEventListener('click', () => {
    // Oculta el panel de tiendas y muestra el de estados
    tiendasPanel.classList.remove('activo');
    estadosPanel.classList.add('activo');
    
    // Quita el resaltado del estado seleccionado
    const estadoActivo = document.querySelector('.estado-item.activo');
    if (estadoActivo) {
        estadoActivo.classList.remove('activo');
    }
});

// --- Inicialización ---
// Llama a la función inicial para renderizar todos los estados al cargar la página
renderizarEstados();