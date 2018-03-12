import { HmSpeedrunToolPage } from './app.po';

describe('hm-speedrun-tool App', () => {
  let page: HmSpeedrunToolPage;

  beforeEach(() => {
    page = new HmSpeedrunToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
