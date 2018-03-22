# node_pm2_shell

> PM2 daemonize


## How to Use
- create your own script in sh file like sample.sh
- use shell script for PM2
```html
  #RUN
  sh#> export SCRIPT_FILE="sample.sh" && pm2 start start.js --name your-daemon-name

  #Stop
  sh#> pm2 delete your-daemon-name

  #Check Logs
  sh#> pm2 logs
```