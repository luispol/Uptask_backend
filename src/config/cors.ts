import { CorsOptions } from 'cors'


// Le pasamos origin, que es dese donde se presentan la peticoin y callback va hacer lo que va  apermitir la conxion
export const corsConfig : CorsOptions = {
    origin : function(origin, callback){
        console.log(process.argv)

        const whitelist = [process.env.FRONTEND_URL] 

        if (process.argv[2] === '--api') {
            whitelist.push(undefined)
        }

        if (whitelist.includes(origin)) {
            callback(null,true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}