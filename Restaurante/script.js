// --- Datos del Menú (Ajustando precios a Euros y manteniendo el contenido) ---
const menuData = {
    'Platos Fuertes': [
        { name: "Bandeja Paisa de Lujo", description: "Frijoles cargamantos cocinados a fuego lento, arroz cremoso, carne de res molida, chicharrón crocante de cerdo, huevo frito con yema blanda, plátano maduro caramelizado y arepa. Un festín elevado.", price: "€ 22.00", image: "https://picsum.photos/400/250?random=4" },
        { name: "Ajiaco Santafereño (El Clásico)", description: "Caldo de pollo premium con tres tipos de papa, mazorca dulce y guascas. Acompañado de crema de leche fresca, alcaparras y aguacate.", price: "€ 19.50", image: "https://picsum.photos/400/250?random=5" },
        { name: "Posta Negra Cartagenera con Panela", description: "Cortes de res tiernos cocidos lentamente en una salsa oscura y dulce de panela y especias. Servida con arroz con coco cremoso.", price: "€ 25.00", image: "https://picsum.photos/400/250?random=6" },
        { name: "Sancocho de Gallina Criolla (Fin de Semana)", description: "Caldo potente y reparador con gallina criolla, yuca, papa, plátano verde y cilantro fresco.", price: "€ 18.00", image: "https://picsum.photos/400/250?random=7" },
        { name: "Mojarra Frita con Patacón y Suero", description: "Mojarra entera frita a la perfección, con patacones y suero costeño artesanal.", price: "€ 21.00", image: "https://picsum.photos/400/250?random=8" },
        { name: "Sobrebarriga a la Criolla", description: "Corte de carne tierno cocido en salsa de tomate y especias. Servida con yuca al vapor y papas chorreadas.", price: "€ 23.00", image: "https://picsum.photos/400/250?random=9" },
        { name: "Lechona Tolimense Personal", description: "Piel de cerdo tostada y rellena de carne de cerdo y arvejas, cocida en horno de leña. Servida con arepa blanca.", price: "€ 24.50", image: "https://picsum.photos/400/250?random=21" },
        { name: "Tamal Santandereano", description: "Masa de maíz envuelta en hoja de plátano, rellena de pollo, cerdo, tocino, garbanzos y huevo cocido.", price: "€ 17.00", image: "https://picsum.photos/400/250?random=22" },
        { name: "Arroz Atollado del Pacífico", description: "Arroz cremoso cocido con mariscos frescos (camarón, calamar, langostino) y sazonado con achiote.", price: "€ 28.00", image: "https://picsum.photos/400/250?random=23" },
        { name: "Frijolada con Chicharrón y Maduritos", description: "Cazuela de frijoles rojos con chorizo y especias, coronada con chicharrón extra-crujiente y plátano maduro.", price: "€ 19.00", image: "https://picsum.photos/400/250?random=24" },
        { name: "Chuletón de Cerdo Valluno", description: "Corte grueso de cerdo apanado, frito y servido con arroz blanco y ensalada fresca.", price: "€ 22.50", image: "https://picsum.photos/400/250?random=25" }, // Plato #11
    ],
    'Entradas y Aperitivos': [
        { name: "Empanadas de Res y Papa (Trío)", description: "Tres empanadas de maíz crujientes rellenas de guiso de carne de res y papa. Servidas con salsa de ají de maní.", price: "€ 8.50", image: "https://picsum.photos/400/250?random=10" },
        { name: "Abrazos de Plátano y Queso (Aborrajados)", description: "Plátano maduro dulce frito, relleno de queso costeño derretido, ligeramente azucarado.", price: "€ 10.00", image: "https://picsum.photos/400/250?random=11" },
        { name: "Arepas Rellenas de Chicharrón", description: "Mini arepas de maíz tierno, infladas y rellenas con guiso de chicharrón crocante y cilantro.", price: "€ 11.50", image: "https://picsum.photos/400/250?random=12" },
    ],
    'Postres y Dulces': [
        { name: "Brevas con Arequipe y Queso", description: "Brevas (higos) confitadas en almíbar, servidas con arequipe (dulce de leche) premium y queso fresco.", price: "€ 7.50", image: "https://picsum.photos/400/250?random=13" },
        { name: "Milhojas Clásica", description: "Finas capas de hojaldre crujiente intercaladas con crema pastelera suave y arequipe.", price: "€ 6.50", image: "https://picsum.photos/400/250?random=14" },
    ],
    'Bebidas y Licores (No Alcohólicas)': [
        { name: "Limonada de Coco", description: "Bebida refrescante y tropical de leche de coco natural y limón.", price: "€ 5.50", image: "https://picsum.photos/400/250?random=15" },
        { name: "Jugo de Lulo en Agua", description: "Jugo natural de lulo (Naranjilla), ácido y vibrante.", price: "€ 4.50", image: "https://picsum.photos/400/250?random=16" },
        { name: "Chocolate Santafereño", description: "Chocolate amargo tradicional, servido caliente y espumoso, acompañado de queso fresco.", price: "€ 6.00", image: "https://picsum.photos/400/250?random=17" },
        { name: "Avena Colombiana (Fría)", description: "Bebida cremosa y dulce de avena, canela y leche.", price: "€ 5.00", image: "https://picsum.photos/400/250?random=18" },
        { name: "Agua de Panela con Limón", description: "Infusión de panela con un chorrito de limón, servida fría o caliente.", price: "€ 4.00", image: "https://picsum.photos/400/250?random=19" },
        { name: "Jugo de Maracuyá", description: "Jugo natural de fruta de la pasión, con equilibrio perfecto entre dulce y ácido.", price: "€ 4.50", image: "https://picsum.photos/400/250?random=20" },
    ]
};

// Función para generar el menú (solo se ejecuta en menu.html)
function generateMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;

    for (const category in menuData) {
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'menu-category-title';
        categoryTitle.textContent = category;
        menuContainer.appendChild(categoryTitle);

        menuData[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            
            const itemImage = document.createElement('img');
            itemImage.className = 'item-image';
            itemImage.src = item.image;
            itemImage.alt = item.name;

            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'item-details';

            detailsDiv.innerHTML = `
                <h4>${item.name}</h4>
                <span class="price">${item.price}</span>
                <p>${item.description}</p>
            `;

            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(detailsDiv);

            menuContainer.appendChild(itemDiv);
        });
    }
}

// FUNCIÓN: Manejo del Menú Hamburguesa (para Responsividad)
function setupMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}

// FUNCIÓN CLAVE: Manejo de Reservas (Abre nueva pestaña y reemplaza el formulario)
function handleReservation() {
    const form = document.getElementById('reservation-form');
    const messageBox = document.getElementById('reservation-message');
    const formContainer = document.querySelector('.reservation-form-container');
    
    if (!form || !formContainer) return; 

    // Establecer la fecha mínima de reserva a hoy
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', minDate);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Recoger datos
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        let isValid = true;
        let errorMessage = '';

        // 2. Validación de Horario y Días (Madrid: 19:30 a 23:00, Cerrado Dom/Lun)
        const [hour, minute] = time.split(':').map(Number);
        const timeInMinutes = hour * 60 + minute;
        const minTimeInMinutes = 19 * 60 + 30; // 19:30
        const maxTimeInMinutes = 23 * 60;      // 23:00

        if (timeInMinutes < minTimeInMinutes || timeInMinutes > maxTimeInMinutes) {
             isValid = false;
            errorMessage = 'Las reservas solo están disponibles entre las 19:30 y las 23:00.';
        }

        const selectedDate = new Date(date + 'T00:00:00'); 
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 1) { // 0=Domingo, 1=Lunes
            isValid = false;
            errorMessage = 'Sazón Andino está cerrado los domingos y lunes. Por favor, seleccione otra fecha.';
        }
        
        // 3. Mostrar Resultado, Abrir Nueva Pestaña y Reemplazar Formulario
        
        if (isValid) {
            // Abrir la nueva pestaña de gratitud, pasando el nombre y la hora
            window.open(`gratitude.html?name=${encodeURIComponent(name)}&time=${encodeURIComponent(time)}`, '_blank');

            // 1. Iniciar la transición para ocultar el formulario
            formContainer.style.opacity = '0';
            formContainer.style.transition = 'opacity 0.5s ease-out';
            
            // 2. Mostrar el mensaje de éxito grande y permanente tras la transición
            setTimeout(() => {
                formContainer.innerHTML = `
                    <div class="success-screen-replacement" style="text-align: center; padding: 40px;">
                        <h2 style="font-family: 'Playfair Display', serif; color: var(--color-secondary); font-size: 2rem;">¡Reserva para ${name} Aceptada!</h2>
                        <p style="margin: 20px 0; font-size: 1.1rem;">Hemos procesado su solicitud para el ${date} a las ${time}.</p>
                        <p style="margin-bottom: 30px;">Por favor, revise la nueva pestaña (o su correo) para la confirmación detallada.</p>
                        <a href="menu.html" class="btn-primary" style="margin-top: 15px;">Ver el Menú</a>
                    </div>
                `;
                formContainer.style.opacity = '1';
                formContainer.style.boxShadow = 'none'; // Quitar sombra para un look más limpio
                document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });

            }, 500); // Duración de la transición de opacidad

        } else {
            // Manejo de error: muestra el error sin ocultar el formulario
            messageBox.style.display = 'block';
            messageBox.className = 'message-box error';
            messageBox.innerHTML = `❌ **Error en la Reserva**:<br>${errorMessage}`;
            messageBox.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Función para manejar el formulario de contacto (solo simulación)
function handleContactForm() {
    const form = document.getElementById('contact-form');
    const messageBox = document.getElementById('contact-message-status');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        messageBox.style.display = 'block';
        messageBox.className = 'message-box success';
        messageBox.innerHTML = '✅ **Mensaje Enviado**.<br>Gracias por contactarnos. Le responderemos a la brevedad.';
        form.reset();
        messageBox.scrollIntoView({ behavior: 'smooth' });
    });
}

// Ejecutar funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Definir la variable CSS para usarla en JS (útil para el mensaje de éxito)
    document.documentElement.style.setProperty('--color-secondary', '#C8A359');
    
    setupMenuToggle();
    if (document.getElementById('menu-container')) {
        generateMenu();
    }
    handleReservation();
    handleContactForm();
});