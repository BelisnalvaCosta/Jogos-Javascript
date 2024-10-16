function classificarHeroi() {
    // @ts-ignore
    const nome = document.getElementById('hero-name').value;
    // @ts-ignore
    const xp = parseInt(document.getElementById('hero-xp').value);
    let nivel = '';
    let fase = '';
    let resultado = '';
    let vitoria = false;

    if (xp < 950) {
        nivel = 'Ferro';
        fase = '1';
        resultado = `A Heroína ${nome} está no nível ${nivel}, com pouca XP e perdeu esta fase. Tente novamente!`;
        vitoria = false;
    } else if (xp >= 951 && xp <= 2000) {
        nivel = 'Bronze';
        fase = '2';
        vitoria = true;
    } else if (xp >= 2001 && xp <= 5200) {
        nivel = 'Prata';
        fase = '3';
        vitoria = true;
    } else if (xp >= 5201 && xp <= 7300) {
        nivel = 'Ouro';
        fase = '4';
        vitoria = true;
    } else if (xp >= 7301 && xp <= 8500) {
        nivel = 'Platina';
        fase = '5';
        vitoria = true;
    } else if (xp >= 8501 && xp <= 9000) {
        nivel = 'Ascendente';
        fase = '6';
        vitoria = true;
    } else if (xp >= 9001 && xp <= 10100) {
        nivel = 'Imortal';
        fase = '7';
        vitoria = true;
    } else if (xp >= 10101) {
        nivel = 'Radiante';
        fase = '8';
        vitoria = true;
    }

    if (vitoria) {
        resultado = `A Heroína de nome ${nome} está no nível ${nivel}, mudou para a fase ${fase}, parabéns pela vitória!`;
    }

    // @ts-ignore
    document.getElementById('resultado').textContent = resultado;

    // Alterar imagem conforme vitória ou derrota
    let heroImage = document.getElementById('hero-image');
    let resultadoImagem = document.getElementById('resultado-imagem');
    // @ts-ignore
    resultadoImagem.innerHTML = '';

    if (vitoria) {
        // @ts-ignore
        heroImage.src = `nalva-vitoria.png`;
        // @ts-ignore
        resultadoImagem.innerHTML = `<img src="nalva-fase${fase}.png" alt="Heroína na fase ${fase}">`;
    } else {
        // @ts-ignore
        heroImage.src = `nalva-derrota.png`;
        // @ts-ignore
        resultadoImagem.innerHTML = `<img src="nalva-derrota.png" alt="Heroína perdeu">`;
    }
}
