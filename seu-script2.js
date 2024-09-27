// Adicionar um pop-up ao carregar a página
window.onload = function() {
    let popup = document.createElement('div');
    popup.style.width = '300px';
    popup.style.height = '200px';
    popup.style.backgroundColor = 'gray';
    popup.style.color = 'white';
    popup.style.padding = '20px';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.boxShadow = '0px 0px 10px black';

    popup.innerHTML = `
        <h2>Promoção ER Calçados Torricella</h2>
        <p>Compre agora e ganhe 10% de desconto!</p>
        <a href='https://er-calcados-torricella.lojaintegrada.com.br' style='color:yellow;'>Visite nossa loja online!</a>
    `;

    document.body.appendChild(popup);
};
