const nav_links = document.querySelectorAll(".navbar .nav-link")

if (window.location.href.includes("orion-tech-desk")) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('Service Worker registrado com sucesso', reg))
            .catch((err) => console.log('Erro ao registrar o Service Worker', err));
    }
    
    nav_links.forEach((link) => {
        if (link.id === "apontamento_horas") link.remove()
        if (link.id === "demonstrativo_ferias") link.remove()
    })
} else {
    nav_links.forEach((link) => {
        if (link.id === "funcionarios") link.remove()
    })
}
