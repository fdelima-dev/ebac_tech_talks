AOS.init();

const dataDoEvento = new Date("Dec 12, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timesTempAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 *  60 * 60;
    const minutoEmMs = 1000 * 60;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s` 


    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
}, 1000)