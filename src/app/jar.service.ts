import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarService {

  result : String  = ""

  constructor() { 
  }

  runJar(){
    const { spawn} = window.require('node:child_process');
    const ls = spawn('java', ['-jar', './src/assets/electron_demo.jar']);
    
    ls.stdout.on('data', (data: any) => {
      console.log(`stdout: ${data}`);
      this.result = data;
    });
    
    ls.stderr.on('data', (data: any) => {
      console.error(`stderr: ${data}`);
    });
    
    ls.on('close', (code: any) => {
      console.log(`child process exited with code ${code}`);
    }); 
  }
}
