function checkKey(event) {
  var key = event.which || event.keyCode;
  if (key == 13) {
    // Kiểm tra phím Enter
    doSearch();
  }
}

function doSearch() {
  var frm = document.forms["frm-search"];
  if (frm.words.value.length > 0) frm.submit();
}

function showSearch() {
  var url = new URL(window.location);
  var ws = url.searchParams.get("words");
  document.getElementById("searchDetail").innerHTML =
    "<h1>Từ khóa tìm kiếm</h1> <b>" + ws + "</b>";
}

function loginValidate(frm) {
  var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailReg.test(frm.email.value)) {
    alert("Vui lòng nhập email hợp lệ.");
    frm.email.focus();
    return false;
  }
  if (frm.psw.value.length < 8) {
    alert("Mật khẩu có tối thiểu 8 ký tự.");
    frm.psw.focus();
    return false;
  }
  alert("Đã gửi dữ liệu Đăng nhập.");
  return true;
}

function registerValidate(frm) {
  var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailReg.test(frm.email.value)) {
    alert("Vui lòng nhập email hợp lệ.");
    frm.email.focus();
    return false;
  }
  if (frm.psw.value.length < 8) {
    alert("Mật khẩu có tối thiểu 8 ký tự.");
    frm.psw.focus();
    return false;
  }
  if (frm.psw2.value.length === 0) {
    alert("Vui lòng nhập lại mật khẩu.");
    frm.psw2.focus();
    return false;
  }
  if (frm.psw.value !== frm.psw2.value) {
    alert("Mật khẩu và Nhập lại mật khẩu phải giống nhau.");
    frm.psw.focus();
    return false;
  }
  alert("Đã gửi dữ liệu Đăng ký.");
  return true;
}
