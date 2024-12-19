//(function(){

    const formulario = document.querySelector('#formulario'),
          nombre = formulario.nombre,
          correo = formulario.correo,
          sexo = formulario.sexo,
          terminos = formulario.terminos,
          error = document.querySelector('#error');

    
    const validarNombre = e =>{
        if(nombre.value == '' || nombre.value == null){
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor Completa el Nombre</li>';

            MensajeAnimacion();

            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }
    const validarCorreo = e =>{
        if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';

            MensajeAnimacion();

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
    }
    function validarSexo (e){
        if(sexo.value == '' || sexo.value == null){
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor Marca el Sexo</li>';

            MensajeAnimacion();

            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }
    const validarTerminos = e =>{
        if(terminos.checked == false){
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor Marca los Terminos y Condiciones</li>';

            MensajeAnimacion();

            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
        
    }

    const validarFormulario = e =>{
        error.innerHTML = '';

        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }
    
    formulario.addEventListener('submit', validarFormulario); 

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

//}())