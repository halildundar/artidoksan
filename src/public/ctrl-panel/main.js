import "./templates/ce-belgeler.html";
import "./templates/dashboard.html";
import "./templates/404.html";
import "./templates/login.html";
import { LoginInit } from "./lib/login.js";
import "./main.scss";
import { InitPage } from "./router.js";

$(document).ready(function () {

  // console.log(currPath)
  // GoToPage(currPath, "#root_view", {});
  InitPage();
  LoginInit();
});
