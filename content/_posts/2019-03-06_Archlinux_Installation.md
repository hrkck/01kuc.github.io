---
title: Archlinux Installation
tags: archlinux,installation
url: archlinux_installation
baseUrl: 
date: 2019-03-06
---
*bu blog yeni. archlinuxu tekrar kurdugumda her adimi yeniden yazacagim.*

####Notlar

Her iki bilgisayara format atacagim. Birinde Archlinux, birinde windows ve archllunux olacak. Temiz, Unix felsefesine uygun olmalilar.

GPT ve MBR sistemlerini anlamaliyim. Dosya sistemlerinin sagligi buna bagli.

###Pass klasoru nasil yuklenir?

GPG ve SSH normal kopyalanir. 

 <<< code(`$ pass init <gpg-ID> # merge esnasinda duzeltilebilir
$ pass git init
$ pass git remote add origin <ssh linki>
# fix merging issues with 'git rebase'`) >>> 

**IMPORTANT:** have your ssh password and fsync pass in a secure, accesible place. Otherwise until q comp comes I am doomed to loose everything.

That'll be all.

Networking fix options:

 <<< code(`$ systemctl restart systemd-resolved
$ stop dhpcd@{eth0}.service
$ ip link set eth0 up
$ ping archlinux.org`) >>> 
