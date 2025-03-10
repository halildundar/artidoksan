import express from "express";
import { HomePage } from "./pages/home.js";
import { HakkimizdaPage } from "./pages/hakkimizda.js";
import {
  ISO9001Page,
  ISO14001Page,
  ISO22000Page,
  ISO27001Page,
  ISO45001Page,
  ISO13485Page,
  ISO10002Page,
  ISO50001Page,
} from "./pages/sistem.js";
import { LiftPage, MachineryPage } from "./pages/urun.js";
import {
  AsansorCEPage,
  IkinciTarafDenetimPage,
  PeriyodikOlmayanPage,
} from "./pages/asansor.js";
import { CtrlPanelRoutes } from "./pages/ctrl-panel/main.js";

let router = express.Router({ mergeParams: true });
import { SslStatus } from "./ssl.js";
import { initPassportLocal } from "./pages/ctrl-panel/passportCtrl.js";
initPassportLocal();
export let appRoutes = (app) => {
  router.get("/", HomePage);
  router.get("/hakkimizda", HakkimizdaPage);
  router.get("/sistem-belgelendirme", (req, res) =>
    res.redirect("/sistem-belgelendirme/iso9001")
  );
  router.get("/sistem-belgelendirme/iso9001", ISO9001Page);
  router.get("/sistem-belgelendirme/iso14001", ISO14001Page);
  router.get("/sistem-belgelendirme/iso22000", ISO22000Page);
  router.get("/sistem-belgelendirme/iso27001", ISO27001Page);
  router.get("/sistem-belgelendirme/iso45001", ISO45001Page);
  router.get("/sistem-belgelendirme/iso13485", ISO13485Page);
  router.get("/sistem-belgelendirme/iso10002", ISO10002Page);
  router.get("/sistem-belgelendirme/iso50001", ISO50001Page);
  router.get("/urun-belgelendirme", (req, res) =>
    res.redirect("/urun-belgelendirme/lift")
  );
  router.get("/urun-belgelendirme/lift", LiftPage);
  router.get("/urun-belgelendirme/machinery", MachineryPage);
  router.get("/asansor/ce", AsansorCEPage);
  router.get("/asansor/2-taraf-denetim", IkinciTarafDenetimPage);
  router.get("/asansor/periyodik-olmayan-denetim", PeriyodikOlmayanPage);
  router.get(
    "/.well-known/pki-validation/8EF0E148BC848A44E6EAFE8F9FADF56F.txt",
    SslStatus
  );
  router.get("/sitemap", async (req, res) => {
    const lastmod = new Date(2025, 1, 8, 15, 12, 55).toISOString();
    const sitename = "https://artidoksancert.com"//"https://compassionate-villani.89-250-72-218.plesk.page/";
    const sitemapIcerik = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

        <url>
            <loc>${sitename}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
         <url>
            <loc>${sitename}/hakkimizda</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
         <url>
            <loc>${sitename}/sistem-belgelendirme</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
         <url>
            <loc>${sitename}/urun-belgelendirme</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>${sitename}/asansor/ce</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>${sitename}/asansor/2-taraf-denetim</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
         <url>
            <loc>${sitename}/asansor/periyodik-olmayan-denetim</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
       

    </urlset>`;
    // res.set("Content-Type", "text/xml; charset=utf-8");//'application/xml'
    res.setHeader("content-type", "text/xml");
    res.status(200).send(sitemapIcerik);
  });

  CtrlPanelRoutes("/ctrl-panel", router);
  return app.use("/", router);
};
