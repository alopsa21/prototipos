import {Saludo} from './saludo';

describe('Saludo', () => {
  it('should create an instance', () => {
    expect(new Saludo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let saludo = new Saludo({
      id: 1,
      title: "Hello",      
      seleccionado: true,
      idioma: 'ingles',
    });
    expect(saludo.title).toEqual('Hello');
    expect(saludo.seleccionado).toEqual(true);
  });
});
