import { GetUser,checkLoggedIn, checkLoggedOut, postLogOut } from "./auth.js";
import { Recaptha } from "./recaptchaCtrl.js";
import { Authenticate } from "./passportCtrl.js";


export let CtrlPanelRoutes = (root, router) => {
  router.post(`${root}/logout`, postLogOut);
  router.post(`${root}/login`, Recaptha, Authenticate);
  router.post(`${root}/get-user`, GetUser);
  router.get(`${root}/login`, checkLoggedOut,  async (req, res) => {
    res.render("pages/ctrl-panel/login.hbs", {
      sitename: "Login | Artıdoksan",
      page: "Login | Artıdoksan",
      title: "Login | Artıdoksan Page",
      url: `https://artidoksancert.com/ctrl-panel/login`,
      siteurl: `https://artidoksancert.com/ctrl-panel/login`,
      publicdata: "/ctrl-panel/main",
      layout: "ctrl-panel",
    });
  });
  router.get(`${root}/*`,checkLoggedIn,  async (req, res) => {
    res.render("pages/ctrl-panel/main.hbs", {
      sitename: "Ctrlpanel | Artıdoksan",
      page: "Ctrlpanel | Artıdoksan",
      title: "Ctrlpanel | Artıdoksan Page",
      url: `https://artidoksancert.com/ctrl-panel/`,
      siteurl: `https://artidoksancert.com/ctrl-panel/`,
      publicdata: "/ctrl-panel/main",
      layout: "ctrl-panel",
    });
  });
  // router.get("/register", RegisterPage);
  // router.post("/register", Recaptha, validateRegister, CreateNewUser);
};

