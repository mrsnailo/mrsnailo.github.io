---
title: "OBS Crashes on Manjaro"
date: 2024-01-14T20:30:00+0600
tags:
    - manjaro
    - nvidia-driver
    - obs
categories: linux-talk
description: obs recorder crashes on nvidia driver on manjaro. 
---
## আমার অভিজ্ঞতা
ভোগান্তির আরেক নাম nvidia। ইউনিক্স ব্যবহারকারীরা যাদের nvidia card  আছে, প্রায়শই driver সম্পর্কিত ছোটখাটো ইস্যু তে পড়া হয়। যেমন আমি গেমপ্লে রেকর্ড করার জন্যে obs ইনস্টল করার পর দেখি রান হয়না। 😒

## ডিবাগিং

টার্মিনাল এ obs লিখে রান করে যদি এমন লগ দেখতে পান, তাহলে আপনি ও আমি একই সমস্যার ভুক্তভোগী। পেরা নিয়েন না, সমাধান আছে। 

```log
warning: Failed to load 'en-US' text for module: 'decklink-captions.so'
warning: Failed to load 'en-US' text for module: 'decklink-output-ui.so'
libDeckLinkAPI.so: cannot open shared object file: No such file or directory
warning: A DeckLink iterator could not be created.  The DeckLink drivers may not be installed
warning: Failed to initialize module 'decklink.so'
```
## সমাধান

বিভিন্ন artcile পড়ে অনেক সমাধান ই পেলাম,তবে সবথেকে ঝামেলাহীন এবং আমার কাছে যেইটা ভালো মনে হয়েছে , তা হল libva-vdpau-driver টা রিমুভ করা । 

### remove libva-vdpau-driver
```fish
sudo pacman -R libva-vdpau-driver
```

এবার obs-studio প্যাকেজটি একবার আনইন্সটল করে আবার ইনস্টল করলেই দেখবেন  obs রান হচ্ছে । 


### reinstall obs
```fish
sudo pacman -R obs-studio
```

```fish
sudo pacman -S obs-studio
```

## রান obs

obs রান করুন। আশা করি এখন obs-studio এখন ঠিকঠাক ভাবেই চলবে । 

![obs screeshon](https://i.ibb.co/r6625Dj/image.png)