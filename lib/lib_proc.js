"use strict";

const { spawn } = require('child_process');


const asyncSleep = (miliseconds) => new Promise(async function(resolve, reject){
    try{
        setTimeout(function(){
            resolve();
        }, miliseconds);
    }catch(ex){
        reject(ex);
    }
})

const asyncRunCommand = (command, params) => new Promise(async function(resolve, reject){
    try{
        let cmd = spawn(command, params);
        cmd.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        cmd.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
            reject(data);
        });

        cmd.on('close', (code) => {
            resolve(code);
        });
    }catch(ex){
        reject(ex);
    }

});

exports.asyncRunCommand = asyncRunCommand;
exports.asyncSleep = asyncSleep;
