import { ScCcPage } from './app.po';

describe('sc-cc App', function() {
  let page: ScCcPage;

  beforeEach(() => {
    page = new ScCcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
