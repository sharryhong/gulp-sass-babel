'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regex_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var regex_pwd = /^.*(?=.{6,15})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;

var olimId = $('#olim-id'),
    olimPassword = $('#olim-password'),
    olimRePassword = $('#olim-re-password'),
    olimEmail = $('#olim-email'),
    olimCompany = $('#olim-company'),
    olimName = $('#olim-name'),
    olimPost = $('#olim-post'),
    olimAdd = $('#olim-add'),
    olimRegunumResult = $('#olim-regunum-result'),
    olimReginum02 = $('#olim-reginum02'),
    olimTel = $('#olim-tel'),
    olimMobile = $('#olim-mobile'),
    olimMobileBtn = $('#olim-mobile-btn'),
    olimAddBtn = $('#olim-add-btn');

// 비밀번호 유효성 검사
function pw_chk(obj) {
  console.log(obj.value.length);
  if (obj.value.length > 0) {
    if (!regex_pwd.test(obj.value)) {
      console.log('nono');
    } else {
      console.log('okok');
    }
  }
  console.log(olimPassword.val(), olimRePassword.val());
  if (olimPassword.val() === olimRePassword.val()) {
    console.log('같아유');
  }
}

// es6 test

var Polygon = function Polygon(height, width) {
  _classCallCheck(this, Polygon);

  this.height = height;
  this.width = width;
};