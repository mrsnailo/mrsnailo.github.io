---
title: "Fix OBS Recording Glitches with NVIDIA Graphics Card"
date: 2024-01-19T21:25:00+0600
tags: 
    - nvidia
    - glitch 
    - obs
categories: linux-talk
description: "recording obs glitches while recording gameplay" 
---

Have you ever encountered frustrating glitches while recording with OBS, especially during gameplay sessions with your trusty NVIDIA card? If so, you're not alone, and I've got a potential solution for you.

In my own quest to capture gameplay for testing purposes, I opted for OBS. However, despite my device handling the game smoothly, the recorded video exhibited annoying glitches, manifesting as thick black rectangles.

Eager to troubleshoot, I turned to Google  but found no clear answers. Undeterred, I considered an alternative and installed SimpleScreenRecorder. To my surprise, SimpleScreenRecorder identified a culprit – a feature within the NVIDIA proprietary driver known as "Allow Flipping." This feature, when enabled, seemed to be the source of the recording glitches during gameplay.

Disabling "Allow Flipping" indeed resolved the issue, but it's not without trade-offs. Unfortunately, turning off this feature breaks V-Sync and marginally reduces FPS. It's a balancing act between glitch-free recordings and maintaining other essential gaming features.

## How to Disable Allow Flipping? 

- Launch Nvidia X Server Settings. You'll see a window similiar to this

![Nvidia X server Settings](https://i.ibb.co/hfDXrkN/image.png)

- Select OpenGL Settings Under "X screen 0"

![Nvidia X server Settings](https://i.ibb.co/6sq5VbQ/image.png)

- Untick the option "Allow Flipping"

![Nvidia X server Settings](https://i.ibb.co/6PJSDWS/image.png)



And Yes, No more weird glitches . 

