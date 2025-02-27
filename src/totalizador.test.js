import totalizador from "./totalizador"

describe("Calcular precio neto", () => {
    it("deberia calcular el precio neto", () => {
      expect(totalizador.calcularPrecioNeto(3, 2)).toEqual(6);
    });
  });