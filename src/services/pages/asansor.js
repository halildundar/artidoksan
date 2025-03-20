
export const AsansorCEPage = (req, res) => {
    res.render("pages/asansor/ce.hbs", {
      sitename: "Artıdoksan",
      page: "Asansör CE",
      title: "Asansör CE Page",
      url: `https://artidoksancert.com/asansor/ce`,
      siteurl: `https://artidoksancert.com/asansor/ce`,
      publicdata: "/asansor/ce",
      layout: "asansor",
    });
  };
  export const IkinciTarafDenetimPage = (req, res) => {
    res.render("pages/asansor/2-taraf-denetim.hbs", {
      sitename: "Artıdoksan",
      page: "Asansör 2.Taraf Deentim",
      title: "Asansör 2.Taraf Deentim Page",
      url: `https://artidoksancert.com/asansor/2-taraf-denetim`,
      siteurl: `https://artidoksancert.com/asansor/2-taraf-denetim`,
      publicdata: "/asansor/2-taraf-denetim",
      layout: "asansor",
    });
  };
  
  export const PeriyodikOlmayanPage = (req, res) => {
    res.render("pages/asansor/periyodik-olmayan.hbs", {
      sitename: "Artıdoksan",
      page: "Asansör Periyodk Olmayan Denetim",
      title: "Asansör Periyodk Olmayan Denetim Page",
      url: `https://artidoksancert.com/asansor/periyodik-olmayan-denetim`,
      siteurl: `https://artidoksancert.com/asansor/periyodik-olmayan-denetim`,
      publicdata: "/asansor/periyodik-olmayan",
      layout: "asansor",
    });
  };
  