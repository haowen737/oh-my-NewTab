import { OhMyNewTabPage } from './app.po';

describe('oh-my-new-tab App', () => {
  let page: OhMyNewTabPage;

  beforeEach(() => {
    page = new OhMyNewTabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
