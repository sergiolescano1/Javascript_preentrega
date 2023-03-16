//contadores de aciertos y fallidos
let contadorAcierto=0
let contadorFallido=0
//constantes de conversion y texto asociado 
//caso A
const constanteKm=0.277
const textoKm=' en Km/h' 

//caso B
const constanteMs=3.6
const textoMs=' en m/s'
//caso c
const constanteMph=1.6
const textoMph=' en mph'

//Funciones
const convertir =(constante, texto)=> {
let km;
let ms;
let final=true
//while(final=true){
    do{
        let comprobar='S'
    km= (prompt('Ingrese valor'+ texto+  '\n  (s) Para salir'))
    if(km == comprobar || km==comprobar.toLowerCase()) 
    { 
    final=false  
    return 'Menu principal'      
    }
        else
        {
            if (isNaN(parseFloat(km)))
            {
            alert('No se ingresó un valor correcto')
            contadorFallido+=1
            }
            else
            {
            ms = parseFloat(km)*constante
            contadorAcierto+=1
            return ms  
            }
        }
   }while (final)

}

//Inicio
alert('Simulador Interactivo de conversion de unidades')
let conversion =' '
let seleccion =' '
let continuar=true

do {
    conversion = prompt('Elija que unidad desea convertir: \n (A) Km/h -> m/s \n (B) m/s -> Km/h \n (C) Mph ->Km/h \n (S)Salir ').toUpperCase()
    switch (conversion) {
        case 'A':
            validar=convertir(constanteKm,textoKm)
            alert('El resultado de Km/h a m/s es: '+ validar +'m/s')
            break
        case 'B':
            validar=convertir(constanteMs,textoMs)
            alert('El resultado de m/s a Km/h es: '+ validar +'Km/h')
            break
        case 'C':
            validar=convertir(constanteMph,textoMph)
            alert('El resultado de Mph a Km/h es: '+ validar +'Km/h')
            break
        case 'S':
            alert('Salir')
            continuar=false
            alert('La cantidad total de conversiones erroneas fueron:'+contadorFallido + '\n La cantidad total de conversiones correctas fueron:' + contadorAcierto)
            break
        default:
            alert('Opción ingresada erronea')
            break
        }
    
    }while (continuar)
