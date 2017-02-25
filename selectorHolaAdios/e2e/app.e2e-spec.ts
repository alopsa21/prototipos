import { SelectorHolaAdiosPage } from './app.po';

describe('selector-hola-adios App', () => {
  let page: SelectorHolaAdiosPage;

  beforeEach(() => {
    page = new SelectorHolaAdiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
