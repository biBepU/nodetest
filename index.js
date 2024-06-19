const fs = require('fs');

// fs.readFile('./docs/read.txt',(err,data)=>{
    
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })


// if (!fs.existsSync('./docs/read1.txt')){

//     fs.writeFile('./docs/read1.txt','Hello i am note test1',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('After writing file')
//     }
   
// )


// }else{
//     fs.unlink('./docs/read1.txt',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("file deleted")
//     })
// }


// if (!fs.existsSync('./newFolder')){
//     fs.mkdir('./newFolder',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("doc created")
//     })
// }else{
//     fs.rmdir('./newFolder',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("doc deleated")
//     })
// }