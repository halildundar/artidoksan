export const HakkimizdaPage = (req,res)=>{
    res.render('pages/kurumsal/hakkimizda.hbs',{
        sitename:'Artıdoksan',
        page:'Hakkımızda',
        title:'HakkımızdaPage',
        origin:`https://artidoksancert.com`,
        url:`https://artidoksancert.com/hakkimizda`,
        siteurl:`https://artidoksancert.com/hakkimizda`,
        publicdata:'/hakkimizda'
    })
}
