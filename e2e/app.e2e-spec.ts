import { CalinPage } from './app.po';

describe('calin App', () => {
  let page: CalinPage;

  beforeEach(() => {
    page = new CalinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
