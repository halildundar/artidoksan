let User = null;
const Router = function (name, routes) {
  return {
    name: name,
    routes: routes,
  };
};

const Routes = new Router("myFirstRouter", [
  {
    path: "/ctrl-panel/",
    viewId: "#root_view",
    template: "dashboard.html",
    name: "Ctrl Panel Anasayfa",
    data: {},
  },
  {
    path: "/ctrl-panel/ce-belgeler",
    viewId: "#root_view",
    template: "ce-belgeler.html",
    name: "CE Belgeleri",
    data: {
      name: "Yeni Bilgi",
    },
  },
  {
    path: "/ctrl-panel/login",
    viewId: "#root_view",
    template: "login.html",
    name: "Giriş Yap",
    data: {
      name: "Yeni Bilgi",
    },
  },
]);
const IsAuthGet = (routePath)=>{
  const route = Routes.routes.filter(function (r) {
    return r.path.includes(routePath);
  })[0];
  $.ajax({
    type: "POST",
    url: "/ctrl-panel/get-user",
    contentType:'application/json',
    dataType: "json",
    success: function (response) {
      console.log("response",response);
      if (!response) {
        User = response;
        if (!!route) {
          GoToPage(route.path, route.viewId, route.data);
        } else {
          GoToPage(routePath, "#root_view", {});
        }
      } else {
        User = null;
        if(routePath !== "/ctrl-panel/login"){
          window.location.pathname = "/ctrl-panel/login";
        }
       
      }
    },
  });
}
const GetBtnRoutes = () => {
  const routes = $("[route]");
  $.map(routes, (el) => {
    $(el).unbind("click");
    $(el).click(function (e) {
      const routePath = $(el).attr("route");
      IsAuthGet(routePath);
    });
  });
};
const IfUserActiveForDom = ()=>{
  console.log(User);
  if(!User){
    $('.login').each(function(index){
      $(this).removeClass('flex');
      $(this).addClass('hidden');
    });
  }else{
    $('.login').each(function(index){
      $(this).removeClass('hidden');
      $(this).addClass('flex');
    });
  }

}
const LogOutBtn = ()=>{
  $('#logoutbtn').click(function(){
    $.ajax({
      type: "POST",
      url: "/ctrl-panel/logout",
      data: "AnyData",
      dataType: "json",
      contentType:"applciation/json",
      success: function (response) {
        console.log(response);
        window.location.pathname = '/ctrl-panel/login'
      }
    });
  })
}
const ShowTemplate = async (routePath, viewId) => {
  const route = Routes.routes.filter(function (r) {
    return r.path.includes(routePath);
  })[0];

  $(viewId).html("");
  if (!!route) {
    const resp = await fetch(`/ctrl-panel/templates/${route.template}`);
    const content = await resp.text();
    const rendered = Handlebars.compile(content);

    $(viewId).html(
      rendered({
        name: "Halil Dündar",
      })
    );
    LogOutBtn();
  } else {
    const resp = await fetch("/ctrl-panel/templates/404.hbs");
    const content = await resp.text();
    const temp404 = Handlebars.compile(content);
    $(viewId).html(temp404);
  }
  GetBtnRoutes();
  IfUserActiveForDom();

};

const GoToPage = (routePath, viewId, data) => {
  window.history.pushState(data, "", routePath);
  ShowTemplate(routePath, viewId);
  GetBtnRoutes();
};
export const InitPage = ()=>{
  const currPath = window.location.pathname;
  IsAuthGet(currPath);
}
