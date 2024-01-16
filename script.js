let autoScrollAtivo = false;

const atraso = (ms = 0) => new Promise(resposta => setTimeout(resposta, ms));

const autoScroll = async () => {

    const bodyElement = document.querySelector('body');

    if (!bodyElement) {
        console.error("Elemento 'body' não encontrado.");
        return;
    }

    const limiteScroll = bodyElement.clientHeight;

    while (document.documentElement.scrollTop < limiteScroll && autoScrollAtivo) {

        window.scrollBy(0, 1);
        await atraso(20);
    }

}

const vaiParaInicio = async () => {
   
    autoScrollAtivo = false;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

function vaiParaFinal() {
   
    autoScrollAtivo = false;

    window.scrollTo({ top: document.querySelector('body').clientHeight, behavior: 'smooth' });

}

const toggleAutoScroll = () => {

    autoScrollAtivo = !autoScrollAtivo;

    if (autoScrollAtivo) {
        autoScroll();
    }
}

const inverteTexto = () => {
    document.querySelectorAll('#texto p').forEach(p => {
        p.classList.toggle('texto-invertido');
        p.classList.toggle('texto-normal');
    })
}