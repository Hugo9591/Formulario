(function(){
    const formulario = document.querySelector('#formulario'),
          nombre = formulario.nombre,
          correo = formulario.correo,
          sexo = formulario.sexo,
          terminos = formulario.terminos;

    const validarCampos = (e) =>{
        e.preventDefault();

        const campos = {
            Nombre: nombre.value.trim(),
            Correo: correo.value.trim(),
            Sexo: sexo.value,
            Terminos: terminos.checked
        }

        const error = document.querySelector('#error');

        error.innerHTML = '';

        let hayErrores = false;

        for(const campo in campos){
            console.log(campos);
            if(!campos[campo]){
                error.style.display = 'block';

                //const li = document.createElement("li");
                error.innerHTML += `<li>Por favor completa el campo ${campo}.</li>`;
                //error.appendChild(li); // Agrega el mensaje a la lista
                hayErrores = true;
                
                MensajeAnimacion();
            }
            if(!hayErrores){
                error.style.display = 'none';
                console.log('Formulario Enviado');
            }
        }
    }

    const MensajeAnimacion = () =>{
        setTimeout(() => {
            //const exito = document.querySelector('.mjeExito');
            error.classList.add('animacion');
            
            setTimeout(() =>{
                error.classList.remove('animacion');
                error.style.display = 'none';
            },1000)
        }, 2000);
    }
    formulario.addEventListener('submit', validarCampos); 
}())