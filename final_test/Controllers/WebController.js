const Web=require('../Model/WebModel');
exports.getPicture= async(req,res)=>{
let data={};
try {
    await Web.fetchimg().then(([rows])=>{
        console.log(JSON.stringify(rows));
        data.Web=rows;
    });
  } catch (err) {
    console.log(err);
  }

    
res.render('msclone',{
    data: data.Web
});


}