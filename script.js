let autoScrollAtivo = false;

const atraso = (ms = 0) => new Promise(resposta => setTimeout(resposta, ms));

const autoScroll = async () => {

    // FIX de onde veio esse 182????
    const limiteScroll = document.body.clientHeight - 182;
    console.log(limiteScroll);

    while (document.documentElement.scrollTop < limiteScroll && autoScrollAtivo) {
        console.log(document.documentElement.scrollTop);

        document.scrollingElement.scrollBy(0, 1);
        await new Promise(resolve => setTimeout(resolve, 20));
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