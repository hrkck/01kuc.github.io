---
title: How to deal with random freezes in Archlinux
tags: archlinux,random_freezes,baytrail_bug
url: How_to_deal_with_random_freezes_in_Archlinux
baseUrl: 
date: 2019-05-23
---
When the precessor is idle, on a random manner Archlinux and reportedly some other linux distributions freeze completely. 

It seems to be more often when a youtube instance is running with multiple windows of Firefox.

It is caused by 
 [a reported bug](https://bugzilla.kernel.org/show_bug.cgi?id=109051)  in Linux kernel.

The current fix is possible with a drastic trade-off in power management of the device (namely, laptops).

Assuming GRUB is the bootloader, this line should be added to `/etc/default/grub`:

`GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_idle.max_cstate=1"`

... as described in the bug report page. Generate GRUB config and you are good to go.

More info at:


 [https://bbs.archlinux.org/viewtopic.php?id=236686](https://bbs.archlinux.org/viewtopic.php?id=236686) 

 [https://wiki.archlinux.org/index.php/Power_management](https://wiki.archlinux.org/index.php/Power_management) 

 [https://gist.github.com/Brainiarc7/8dfd6bb189b8e6769bb5817421aec6d1](https://gist.github.com/Brainiarc7/8dfd6bb189b8e6769bb5817421aec6d1) 