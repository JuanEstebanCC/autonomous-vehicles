var carroEnMovimiento = false;
var destinoElegido = false;
var tiempoDeParada = Math.floor(Math.random() * 10 + 5);
var numParadas = Math.floor(Math.random() * 3 + 1);
var distanciaRecorrido = Math.floor(Math.random() * 1000 + 1);
var tiempoParada = Math.floor(Math.random() * 5 + 1);
class vehiculo {
  constructor(
    estacionaria,
    velocidad,
    estado,
    frenoDeMano,
    numCambio,
    direccionalDerecha,
    direccionalIzquierda,
    clutch,
    freno
  ) {
    this.estacionaria = estacionaria;
    this.velocidad = velocidad;
    this.estado = estado;
    this.direccionalDerecha = direccionalDerecha;
    this.direccionalIzquierda = direccionalIzquierda;
    this.frenoDeMano = frenoDeMano;
    this.numCambio = numCambio;
    this.clutch = clutch;
    this.freno = freno;
  }
  estadoVehiculoOn() {
    if (carro.frenoDeMano == true && carro.numCambio == 0) {
      document.getElementById("tablero").innerHTML += "<br>Vehiculo encendido!";
      document.getElementById("tablero").innerHTML += ``;
      console;
      return (carro.estado = true);
    } else if (carro.numCambio != 0) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br>¡El vehículo no se pudo encender!, revise que este en neutro, su cambio actual es: ${carro.numCambio}.`;
    } else {
      document.getElementById("tablero").innerHTML +=
        "<br>¡El vehículo no se pudo encender!, no tiene el freno de mano puesto.";
    }
  }

  encenderDireccionalDerecha() {
    document.getElementById("tablero").innerHTML +=
      "<br> Direccionales de la derecha encendida!";
    return (carro.direccionalDerecha = true);
  }

  encenderDireccionalIzquierda() {
    document.getElementById("tablero").innerHTML +=
      "<br> Direccionales de la izquierda encendida!";
    return (carro.direccionalIzquierda = true);
  }
  activarFrenoMano() {
    document.getElementById("tablero").innerHTML +=
      "<br> Freno de mano desactivado!";
    return (carro.frenoDeMano = false);
  }
  elegirDestino() {
    if (carro.estado == true) {
      document.getElementById(
        "tablero"
      ).innerHTML = `<br> Calculando distancia.... `;
      function kmPerParada(distanciaRecorrido, numParadas, tiempoParada) {
        let cadaParadakilometros = Math.floor(
          Math.random() * distanciaRecorrido + 1
        );
        setTimeout(function () {
          document.getElementById(
            "tablero"
          ).innerHTML += `<br>Información sobre su nuevo destino: <br> -Tiene <b>${numParadas}</b> <b>parada/s.</b><br> -Una <b> distancia </b> para recorrer de <br><b>${distanciaRecorrido} kilómetros</b>. <br> -Un <b> tiempo</b> de parada de <b> ${tiempoParada} segundo/s</b>. <br>  -Y a los<b> ${cadaParadakilometros} kilómetros</b>  se <b>ejecutará </b>la parada.`;
        }, 2000);
      }
      kmPerParada(distanciaRecorrido, numParadas, tiempoParada);
      return (
        (destinoElegido = true), distanciaRecorrido, numParadas, tiempoParada
      );
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se puede empezar el viaje por que el vehiculo esta apagado!`;
    }
  }

  pisarClutch() {
    document.getElementById("tablero").innerHTML = `<br> ¡Clutch pisado!`;
    return (carro.clutch = true);
  }
  pisarFreno() {
    document.getElementById("tablero").innerHTML += `<br> ¡Freno pisado!`;
    return (carro.freno = true);
  }
  cambiarNumCambio() {
    if (carro.numCambio >= 0 && carro.numCambio <= 7) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> Número de cambio en el que estás: ${carro.numCambio}`;
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡Clanck! ¡No existe ese cambio!`;
    }
    return carro.numCambio++;
  }
  arranque() {
    carro.numCambio = carro.numCambio - 1;
    if (
      carro.clutch == true &&
      carro.freno == true &&
      carro.frenoDeMano == false &&
      carro.numCambio == 1 &&
      destinoElegido == true
    ) {
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML = `<br> Comenzando arranque automático... `;
      }, 800);
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML = `<br> Freno de piso soltado! `;
      }, 1500);
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML += `<br> ¡Usted ha arrancado correctamente! `;
      }, 3500);
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML += `<br> Soltando clutch... `;
      }, 4500);
      carro.freno = false;

      document.getElementById("tablero").innerHTML += `<br> ¡Clutch soltado! `;
      carro.clutch = false;
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML += `<br> Auto en movimiento... `;
      }, 5500);
      function presionar_tecla() {
        var tecla = event.keyCode;
        setTimeout(function () {
          document.getElementById(
            "tablero"
          ).innerHTML = `<br> Subiendo a sexta...`;
        }, 6000);
        if (tecla == 76) {
          return carro.girarIzquierda();
        } else if (tecla == 82) {
          return carro.girarDerecha();
        }
      }
      window.onkeydown = presionar_tecla;
      setTimeout(function () {
        document.getElementById(
          "tablero"
        ).innerHTML = `<br> Presione la tecla L si desea ir a la izquierda, o presione R si desea ir a la derecha.`;
      }, 7500);

      let tiempoAleatorio = Math.floor(Math.random() * 25000 + 10000);
      setTimeout(function () {
        carro.frenadoAletorio();
      }, tiempoAleatorio);
      return (carroEnMovimiento = true), carro.clutch;
    } else if (destinoElegido == false) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido arrancar!, primero elige un destino. `;
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido arrancar!, verifique que se cumplan las condiciones. `;
      console.log(
        ` Clutch : ${carro.clutch}, Freno de piso ${carro.freno}, Freno de mano ${carro.frenoDeMano}, Num cambio ${carro.numCambio}`
      );
    }
  }

  girarIzquierda() {
    if (carroEnMovimiento == true && carro.direccionalIzquierda == true) {
      document.getElementById(
        "tablero"
      ).innerHTML = `<br> Girando a la izquierda...`;
      setTimeout(function () {
        document.getElementById("tablero").innerHTML += `<br> ¡Giro exitoso! `;
        document.getElementById(
          "tablero"
        ).innerHTML += `<br> Direccional izquierda apagada! `;
      }, 1000);
      return carro.numCambio, carro.direccionalIzquierda == false;
    } else if (carroEnMovimiento == false) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido girar!, primero pon el carro en movimiento.`;
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido girar!, primero activa las direccionales.`;
    }
  }
  girarDerecha() {
    if (carroEnMovimiento == true && carro.direccionalDerecha == true) {
      document.getElementById(
        "tablero"
      ).innerHTML = `<br> Girando a la derecha...`;
      setTimeout(function () {
        document.getElementById("tablero").innerHTML += `<br> ¡Giro exitoso! `;
        document.getElementById(
          "tablero"
        ).innerHTML += `<br> Direccional derecha apagada! `;
      }, 1000);
      return carro.numCambio, carro.direccionalDerecha == false;
    } else if (carroEnMovimiento == false) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido girar!, primero pon el carro en movimiento.`;
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido girar!, primero activa las direccionales.`;
    }
  }
  activarEstacionarias() {
    document.getElementById("tablero").innerHTML +=
      "<br> Estacionaria encendida!";
    return (carro.estacionaria = true);
  }
  frenadoAletorio() {
    carro.freno = true;
    carro.numCambio = 3;
    if (carro.numCambio > 2 && carro.numCambio < 6) {
      carro.activarEstacionarias();
      if (carro.estado == true) {
        setTimeout(function () {
          var contenido = (document.getElementById(
            "stop-counter"
          ).innerHTML += `  <style>
          body {
            background-color: lightgray;
            background-image: url(images/black.png);
            opacity: 0.8;
            background-repeat: no-repeat;
            background-size: 1366px 768px;
          }
          .count{
            display: flex;
              align-items: top;
              justify-content: center;
              font-size: 5vw;
              opacity: 1; !important
              height: 20vh;
              color: lightblue;
              margin-right: 4%;
          }
           .stop{
            display: flex;
              align-items: center;
              justify-content: center;
              width: 60vh;
              height: 50vh;
              opacity: 1; !important
              margin-left: 70vh;
           }
           
           .tablero{
            opacity: 0.1;
          }
          .button-estacionario{
            opacity: 0.1;
          }
          .button-freno-mano{
           opacity: 0.1;
         }
         .button-cambio{
           opacity: 0.1;
         }
         .button-acelerar{
           opacity: 0.1;
         }
         .button-power {
           opacity: 0.1;
         }
         .button-freno{
           opacity: 0.1;
        }
        .button-left{
         opacity: 0.1;
        }
        .button-right{
         opacity: 0.1;
         }
         .button-closs{
           opacity: 0.1;
        }
        .button-new-travel{
         opacity: 0.1;

        }
         .button-frenado-aleatorio{
         opacity: 0.1;
          }
          </style>
          
          <span id="countdown" class="count"></span>
          <img src="images/stop.png" alt="Stop" class="stop" />
        `);

          (function myLoop(i) {
            setTimeout(function () {
              document.getElementById("countdown").innerHTML = i;
              if (i == 1) {
                document.getElementById("stop-counter").innerHTML += `<style>
              body {
                background-image: url(images/tablero.jpg);
                background-repeat: no-repeat;
                background-size: 1366px 768px;
              }
              .count{
               display: none; !important
              }
               .stop{
                display: none; !important
               }
               
               .tablero{
                opacity: 1; !important
              }
              .button-estacionario{
                opacity: 1; !important
              }
              .button-freno-mano{
               opacity: 1; !important
             }
             .button-cambio{
               opacity: 1; !important
             }
             .button-acelerar{
               opacity: 1; !important
             }
             .button-power {
               opacity: 1; !important
             }
             .button-freno{
               opacity: 1; !important
            }
            .button-left{
             opacity: 1; !important
            }
            .button-right{
             opacity: 1; !important
             }
             .button-closs{
               opacity: 1; !important
            }
            .button-new-travel{
             opacity: 1; !important
    
            }
             .button-frenado-aleatorio{
             opacity: 1; !important
             }
              </style> `;
                setTimeout(function () {
                  document.getElementById(
                    "tablero"
                  ).innerHTML = `<br> Arrancando de nuevo...`;
                }, 1000);
                setTimeout(function () {
                  setTimeout(function () {
                    document.getElementById(
                      "tablero"
                    ).innerHTML += `<br> ¡Ha llegado a su destino!`;
                  }, 2000);
                  setTimeout(function () {
                    carro.pisarFreno();

                    setTimeout(function () {
                      for (let i = 0; i < 5; i++) {
                        carro.cambiarNumCambio();
                      }
                      document.getElementById(
                        "tablero"
                      ).innerHTML += `<br> ¡Reversa puesta!`;
                      setTimeout(function () {
                        document.getElementById(
                          "tablero"
                        ).innerHTML += `<br> Iniciando parqueo automático...
                       `;
                      }, 1000);

                      if (carro.numCambio == 8) {
                        setTimeout(function () {
                          document.getElementById(
                            "tablero"
                          ).innerHTML = `<br> Parqueando...`;
                        }, 3000);
                        setTimeout(function () {
                          document.getElementById(
                            "tablero"
                          ).innerHTML += `<br> Vehículo parqueado!`;
                        }, 5000);
                        carroEnMovimiento = false;
                        setTimeout(function () {
                          document.getElementById(
                            "tablero"
                          ).innerHTML += `<br> Freno de mano puesto!`;
                        }, 7000);
                        carro.frenoDeMano == true;
                        setTimeout(function () {
                          document.getElementById(
                            "tablero"
                          ).innerHTML += `<br>  Apagando vehiculo...`;
                        }, 9000);
                        setTimeout(function () {
                          document.getElementById(
                            "tablero"
                          ).innerHTML += `<br>  Vehiculo apagado.`;
                          console.log(carro.estado);
                          let tiempoLlegada = Math.floor(
                            Math.random() * 200 + 1
                          );
                          carro.velocidad = distanciaRecorrido / tiempoLlegada;
                          let tiempoQueTardo =
                            tiempoParada * numParadas + tiempoLlegada;
                          let velocidadMaxima = Math.floor(
                            Math.random() * 90 + 30
                          );
                          document.getElementById(
                            "tablero"
                          ).innerHTML = `<br>  Datos arrojados por los sensores: <br>
                            Velocidad apoximada: ${carro.velocidad.toFixed(2)} Km/h<br>
                            Tiempo que tardó en llegar:  ${tiempoQueTardo} minutos<br>
                            Velocidad máxima:   ${velocidadMaxima} Km/h`;
                          carro.estado = false;
                        }, 11000);
                      }
                    }, 2500);
                  }, 1000);
                }, 2000);
              }
              if (--i) myLoop(i);
            }, 1000);
          })(tiempoDeParada);
        }, 1000);
      }
    } else if (carro.freno == false) {
      document.getElementById(
        "tablero"
      ).innerHTML += `<br> ¡No se ha podido iniciar el frenado aleatorio, primero pise el freno.`;
    } else {
      document.getElementById("tablero").innerHTML +=
        "<br> El frenado solo funciona si esta despues de poner 2 y antes de 6.";
    }
  }
}

const carro = new vehiculo(
  false,
  100,
  false,
  true,
  0,
  false,
  false,
  false,
  false
);
