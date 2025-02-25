export const LiftPage = (req,res)=>{
    res.render('pages/urun/lift.hbs',{
        sitename:'Artıdoksan',
        page:'Ürün Belgelendirme',
        title:'Ürün Belgelendirme | Asansör Yönetmeliği',
        url:`https://artidoksancert.com/urun-belgelendirme/lift`,
        siteurl:`https://artidoksancert.com/urun-belgelendirme/lift`,
        publicdata:'/urun/lift',
        layout:'urun'
    })
}
export const MachineryPage = (req,res)=>{
    res.render('pages/urun/machinery.hbs',{
        sitename:'Artıdoksan',
        page:'Ürün Belgelendirme',
        title:'Ürün Belgelendirme | Makine Emniyet Yönetmeliği',
        url:`https://artidoksancert.com/urun-belgelendirme/machinery`,
        siteurl:`https://artidoksancert.com/urun-belgelendirme/machinery`,
        publicdata:'/urun/machinery',
        layout:'urun'
    })
}