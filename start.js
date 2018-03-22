"use strict";

const path = require("path");
const fs = require("fs");
const Proc = require("./lib/lib_proc.js");


let sh_filename = path.join(__dirname, "sample.sh");

if(process.env.SCRIPT_FILE){
    sh_filename = process.env.SCRIPT_FILE;
}

try{
    if(fs.lstatSync(sh_filename).isFile()){
        console.log(`script start ${sh_filename}`);
        Run(sh_filename);
    }else{
        console.error(`scrip file not found in [${sh_filename}]`);
    }
}catch(ex){
    console.error(ex);
}

async function Run(script){
    try{
        for(;;){
            try{

                await Proc.asyncRunCommand("sh", [script]);
            }catch(ex){
                console.error("process finished from daemon");
                console.error(ex);
            }

            await Proc.asyncSleep(2000); // sleep 2 seconds
        }
    }catch(ex){
        console.log(ex);
    }
}


