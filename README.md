# homebridge-re-yeelight
[![npm version](https://badge.fury.io/js/homebridge-re-yeelight.svg)](https://badge.fury.io/js/homebridge-re-yeelight)

Yeelight plugin for homebridge(Rewrited)   
   
Thanks for [nfarina](https://github.com/nfarina)(the author of [homebridge](https://github.com/nfarina/homebridge)), [OpenMiHome](https://github.com/OpenMiHome/mihome-binary-protocol), [aholstenson](https://github.com/aholstenson)(the author of [miio](https://github.com/aholstenson/miio)), all other developer and testers.   

## Supported Types
1.ColorLEDBulb

## Installation
1. Install HomeBridge, please follow it's [README](https://github.com/nfarina/homebridge/blob/master/README.md).   
If you are using Raspberry Pi, please read [Running-HomeBridge-on-a-Raspberry-Pi](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi).   
2. Make sure you can see HomeBridge in your iOS devices, if not, please go back to step 1.   
3. Install packages.   
```
npm install -g miio homebridge-re-yeelight
```
## Configuration
```
"platforms": [
    {
        "platform": "ReYeelightPlatform",
        "deviceCfgs": [{
            "type": "ColorLEDBulb",
            "ip": "192.168.50.139",
            "token": "c69b8726240a0279894853eba94a12cb",
            "Name": "LED Bulb"
        }]
    }]
```
## Get token
Download miio2.db From your android device - path: /data/data/com.xiaomi.smarthome/databases/miio2.db
Use http://miio2.yinhh.com/ to read it
Or You can
Open command prompt or terminal. Run following command:
```
miio --discover
```
Wait until you get output similar to this:
```
Device ID: xxxxxxxx   
Model info: Unknown   
Address: 192.168.88.xx   
Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx via auto-token   
Support: Unknown   
```
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" is token.   
If token is "???", then reset device and connect device created Wi-Fi hotspot.   
Run following command:   
```
miio --discover --sync
```
Wait until you get output.   
For more information about token, please refer to [OpenMiHome](https://github.com/OpenMiHome/mihome-binary-protocol) and [miio](https://github.com/aholstenson/miio).   
## Version Logs  
### 0.0.1
1.add support for ColourLEDBulb.  
