require('../../module/components/logo/logo');
require('../../module/components/loginForm/loginForm');
require('../../module/components/regForm/regForm');
require('../../module/components/searchForm/searchForm');
require('../../module/components/searchDict/searchDict');
require('../../module/components/linkContainer/linkContainer');
require('../../module/components/footBar/footBar');
require('./login.scss');
require('../../scss/main.scss');

$('.reg-form').off('submit').on('submit', () => {
  $('.reg-error').css('margin-top', 0);
  return false;
});

if (module.hot) {
  // 當狀態改變(任何檔案儲存)就重整頁面，密集修改 css, ejs 時可以暫時使用這方式自動重整
  // 生產階段發佈時這些會被自動移除
  module.hot.addStatusHandler((state) => {
    if (state === 'dispose') window.location.reload();
  });
}
