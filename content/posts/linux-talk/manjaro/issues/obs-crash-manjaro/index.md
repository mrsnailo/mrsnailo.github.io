---
title: "Resolving OBS Crashes on Manjaro"
date: 2024-01-14T20:30:00+0600
tags:
    - manjaro
    - nvidia-driver
    - obs
categories: linux-journey
description: obs recorder crashes on nvidia driver on manjaro. 
---
### আমার অভিজ্ঞতা
ভোগান্তির আরেক নাম nvidia। ইউনিক্স ব্যবহারকারীরা যাদের nvidia card  আছে, প্রায়শই driver সম্পর্কিত ছোটখাটো ইস্যু তে পড়া হয়। যেমন আমি গেমপ্লে রেকর্ড করার জন্যে obs ইনস্টল করার পর দেখি রান হয়না। 

### ডিবাগিং

টার্মিনাল এ obs লিখে যদি এমন লগ দেখতে পান, তাহলে আপনি ও আমি একই সমস্যার ভুক্তভোগী। পেরা নিয়েন না, সমাধান আছে। 

```log
debug: Found portal inhibitor
debug: Attempted path: share/obs/obs-studio/locale/en-US.ini
debug: Attempted path: /usr/share/obs/obs-studio/locale/en-US.ini
debug: Attempted path: share/obs/obs-studio/locale.ini
debug: Attempted path: /usr/share/obs/obs-studio/locale.ini
debug: Attempted path: share/obs/obs-studio/themes/Yami.qss
debug: Attempted path: /usr/share/obs/obs-studio/themes/Yami.qss
info: Using EGL/X11
info: CPU Name: Intel(R) Core(TM) i5-4690 CPU @ 3.50GHz
info: CPU Speed: 3784.901MHz
info: Physical Cores: 4, Logical Cores: 4
info: Physical Memory: 32043MB Total, 20399MB Free
info: Kernel Version: Linux 6.1.19-1-MANJARO
info: Distribution: "Manjaro Linux" Unknown
info: Session Type: x11
info: Window System: X11.0, Vendor: The X.Org Foundation, Version: 1.21.1
info: Qt Version: 6.4.2 (runtime), 6.4.2 (compiled)
info: Portable mode: false
qt.core.qmetaobject.connectslotsbyname: QMetaObject::connectSlotsByName: No matching signal for on_tbar_position_valueChanged(int)
info: OBS 29.0.2-1 (linux)
info: ---------------------------------
info: ---------------------------------
info: audio settings reset:
        samples per sec: 48000
        speakers:        2
        max buffering:   960 milliseconds
        buffering type:  dynamically increasing
info: ---------------------------------
info: Initializing OpenGL...
info: Loading up OpenGL on adapter NVIDIA Corporation NVIDIA GeForce GTX 970/PCIe/SSE2
info: OpenGL loaded successfully, version 3.3.0 NVIDIA 525.89.02, shading language 3.30 NVIDIA via Cg compiler
info: ---------------------------------
info: video settings reset:
        base resolution:   1920x1080
        output resolution: 1920x1080
        downscale filter:  Bicubic
        fps:               60/1
        format:            NV12
        YUV mode:          Rec. 709/Partial
info: NV12 texture support not available
info: P010 texture support not available
info: Audio monitoring device:
        name: Default
        id: default
info: ---------------------------------
warning: Failed to load 'en-US' text for module: 'decklink-captions.so'
warning: Failed to load 'en-US' text for module: 'decklink-output-ui.so'
libDeckLinkAPI.so: cannot open shared object file: No such file or directory
warning: A DeckLink iterator could not be created.  The DeckLink drivers may not be installed
warning: Failed to initialize module 'decklink.so'
info: [pipewire] Available captures:
info: [pipewire]     - Desktop capture
info: [pipewire]     - Window capture
info: NVENC supported
zsh: segmentation fault (core dumped)  obs
```



