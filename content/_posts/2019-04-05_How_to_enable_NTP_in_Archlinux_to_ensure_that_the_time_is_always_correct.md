---
title: How to enable NTP in Archlinux to ensure that the time is always correct
tags: ntp,archlinux
url: how_to_enable_ntp_in_archlinux
baseUrl: 
date: 2019-04-05
---
The problem occurs when the daylight saving time is applied. Without NTP enabled, Archlinux is falling behind this change. Enabling it pretty simple though:

```timedatectl set-ntp true```

Enter the root password when asked and that is it.