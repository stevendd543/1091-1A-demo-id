const db =require('../utils/database');

const Web_84 = class Web_84{
constructor(id ,name,cat_id,local_url){
    this.id=id;
    this.name=name;
    this.cat_id=cat_id;
    this.local_url=local_url;
}

static fetchimg(){
    return db.execute('SELECT * FROM msclone.img where cat_id=1');
}
static fetchshoecase(){
    return db.execute('SELECT * FROM msclone.img where cat_id=2');
}
}

const test=async(req,res)=>{
    try{
        await Web_84.fetchimg().then(([rows])=>{
            console.log(JSON.stringify(rows));
        })

    }catch(err){
        console.log(err);
    }
}
// test();
module.exports=Web_84