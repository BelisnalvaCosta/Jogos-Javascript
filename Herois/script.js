// Classe Herói
// @ts-ignore
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou com algo desconhecido';
                break;
        }
        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Função para exibir o resultado do ataque
function exibirResultado(heroi) {
    const resultadoDiv = document.getElementById('resultado');
    // @ts-ignore
    resultadoDiv.innerHTML = heroi.atacar();
}

// Event listener para os botões dos heróis
document.querySelectorAll('.heroi-btn').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.getAttribute('data-nome');
        const idade = button.getAttribute('data-idade');
        const tipo = button.getAttribute('data-tipo');

        // Criar um novo herói com os atributos do botão clicado
        const heroi = new Heroi(nome, idade, tipo);

        // Exibir o resultado do ataque
        exibirResultado(heroi);
    });
});
