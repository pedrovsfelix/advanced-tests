const { fetchData, fetchDataPromise } = require("../src/asyncFunctions.js");
const expect = require("chai").expect;

describe("Função fechData com Callback", () => {
    it('Deve retornar "Dados recebidos"', (done) => {
        fetchData((resultado) => {
            expect(resultado).to.equal("Dados recebidos");
            done();
        });
    });
});

describe("Função fetchData com Promise", () => {
    it('Deve retornar "Dados recebidos"', () => {
        return fetchDataPromise().then((resultado) => {
            expect(resultado).to.equal("Dados recebidos");
        });
    });
});

describe("Função fetchData com async/await", () => {
    it('Deve retornar "Dados recebidos"', async () => {
        const resultado = await fetchDataPromise();
        expect(resultado).to.equal("Dados recebidos");
    });
});