import { HomePagePage } from './app.po';

describe('home-page App', () => {
  let page: HomePagePage;

  beforeEach(() => {
    page = new HomePagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
