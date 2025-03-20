export const HomePage = (req,res)=>{
    res.render('pages/home.hbs',{
        sitename:'Artıdoksan',
        page:'Home',
        title:'HomePage',
        origin:`https://artidoksancert.com`,
        url:`https://artidoksancert.com`,
        siteurl:`https://artidoksancert.com`,
        publicdata:'/home'
    })
}
