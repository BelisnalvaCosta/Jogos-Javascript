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
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Criando heróis
const herois = [
    new Heroi('Aragorn', 35, 'guerreiro'),
    new Heroi('Gandalf', 2019, 'mago'),
    new Heroi('Bruce Lee', 32, 'monge'),
    new Heroi('Naruto', 16, 'ninja')
];

// Laço de repetição para os heróis atacarem
herois.forEach(heroi => {
    heroi.atacar();
});
