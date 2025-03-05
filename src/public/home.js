import "./home.scss";
$(document).ready(function () {
 

  let banCurrInd = 0;
  const makeIndexBan = () => {
    $.map($(".home-banner-slide"), function (item, index) {
      if (index === banCurrInd) {
        $(item).addClass("bshow");
        $(item).removeClass("bhide");
      } else {
        $(item).addClass("bhide");
        $(item).removeClass("bshow");
      }
    });
  };
  setInterval(() => {
    banCurrInd += 1;
    if (banCurrInd > $(".home-banner-slide").length - 1) {
      banCurrInd = 0;
    } else if (banCurrInd < 0) {
      banCurrInd = $(".home-banner-slide").length - 1;
    }
    makeIndexBan();
  }, 4000);

  $(".modulGBtn").css("z-index","1");
  $(".modulGBtn").click(function (e) {
    $(this).addClass("active");
    $(".modulBBtn").removeClass("active");
    $(".modulEBtn").removeClass("active");
    $(".modulH1Btn").removeClass("active");
    $(".modulGCls").css("z-index","1");;
    $(".modulBCls").css("z-index","0");
    $(".modulECls").css("z-index","0");
    $(".modulH1Cls").css("z-index","0");
  });
  $(".modulBBtn").click(function (e) {
    $(this).addClass("active");
    $(".modulGBtn").removeClass("active");
    $(".modulEBtn").removeClass("active");
    $(".modulH1Btn").removeClass("active");
    $(".modulBCls").css("z-index","1");;
    $(".modulGCls").css("z-index","0");
    $(".modulECls").css("z-index","0");
    $(".modulH1Cls").css("z-index","0");
  });
  $(".modulEBtn").click(function (e) {
    $(this).addClass("active");
    $(".modulGBtn").removeClass("active");
    $(".modulBBtn").removeClass("active");
    $(".modulH1Btn").removeClass("active");
    $(".modulECls").css("z-index","1");
    $(".modulBCls").css("z-index","0");
    $(".modulGCls").css("z-index","0");
    $(".modulH1Cls").css("z-index","0");
  });
  $(".modulH1Btn").click(function (e) {
    $(this).addClass("active");
    $(".modulGBtn").removeClass("active");
    $(".modulEBtn").removeClass("active");
    $(".modulBtn").removeClass("active");
    $(".modulH1Cls").css("z-index","1");
    $(".modulECls").css("z-index","0");
    $(".modulGCls").css("z-index","0");
    $(".modulBCls").css("z-index","0");
  });
});
