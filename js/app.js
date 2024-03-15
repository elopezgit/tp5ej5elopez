document.addEventListener('DOMContentLoaded', function () {
    // Variables globales
    let cronometro;
    let horas = 0, minutos = 0, segundos = 0;
    const cronometroElemento = document.getElementById('cronometro');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const pausarBtn = document.getElementById('pausarBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Función para iniciar el cronómetro
    function iniciarCronometro() {
        cronometro = setInterval(actualizarCronometro, 1000);
        iniciarBtn.disabled = true;
        pausarBtn.disabled = false;
        resetBtn.disabled = false;
    }

    // Función para actualizar el cronómetro
    function actualizarCronometro() {
        segundos++;
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
            if (minutos >= 60) {
                minutos = 0;
                horas++;
            }
        }
        cronometroElemento.textContent = `${(horas < 10 ? '0' : '')}${horas}:${(minutos < 10 ? '0' : '')}${minutos}:${(segundos < 10 ? '0' : '')}${segundos}`;
    }

    // Función para pausar el cronómetro
    function pausarCronometro() {
        clearInterval(cronometro);
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
    }

    // Función para resetear el cronómetro
    function resetearCronometro() {
        clearInterval(cronometro);
        horas = minutos = segundos = 0;
        cronometroElemento.textContent = '00:00:00';
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
        resetBtn.disabled = true;
    }

    // Event listeners
    iniciarBtn.addEventListener('click', iniciarCronometro);
    pausarBtn.addEventListener('click', pausarCronometro);
    resetBtn.addEventListener('click', resetearCronometro);
});
