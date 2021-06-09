import dotEnv from 'dotenv';
const result = dotEnv.config();
console.log(process.env.SECRET);
import http from 'http';
import mongo  from './src/helpers/mongo';
import app from './src/server';
const server = http.createServer(app);
const uri: string = process.env.MONGO_URL||"";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongo.connect(uri,options);
const PORT = process.env.PORT || 3000;
server.listen(PORT,function(){
    console.log("server running at http://localhost:"+PORT+"/");
})