
        let currentSection = 'inicio';

        function showSection(sectionName) {
            // Ocultar todas las secciones
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remover clase active de todos los botones
            const buttons = document.querySelectorAll('.nav-links button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(sectionName);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Activar el botón correspondiente
                const activeButton = document.getElementById(`btn-${sectionName}`);
                if (activeButton) {
                    activeButton.classList.add('active');
                }

                // Mostrar/ocultar botón de volver según la sección
                const backButton = document.getElementById('backButton');
                if (sectionName === 'inicio') {
                    backButton.classList.remove('show');
                } else {
                    backButton.classList.add('show');
                }

                // Agregar animación de entrada
                setTimeout(() => {
                    const fadeElements = targetSection.querySelectorAll('.fade-in');
                    fadeElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }, 100);

                currentSection = sectionName;
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }

        // Formulario de contacto
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.background = '#28a745';
            
            setTimeout(() => {
                submitBtn.textContent = '¡Mensaje Enviado! ✓';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(45deg, #FF6B35, #FFD700)';
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Inicializar elementos fade-in
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s ease';
            });
        });

        // Navegación con teclado
        document.addEventListener('keydown', function(e) {
            const sections = ['inicio', 'historia', 'reglas', 'equipos', 'contacto'];
            const currentIndex = sections.indexOf(currentSection);
            
            if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
                showSection(sections[currentIndex + 1]);
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                showSection(sections[currentIndex - 1]);
            } else if (e.key === 'Home') {
                showSection('inicio');
            }
        });

        // Efectos adicionales
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
   