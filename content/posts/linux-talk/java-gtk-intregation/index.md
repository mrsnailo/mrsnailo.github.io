---
title: "Enhance Java App Appearance with GTK+ Font & Theme Settings"
date: 2024-01-14T20:30:00+0600
tags:
    - theme
    - JavaUI
    - GTK+
categories: linux-talk
description: Improve the visual appeal of your Java applications by aligning them with GTK theme styles and font settings
---

If you find your Java applications lacking visual appeal and wish to synchronize them with GTK theme styles and font settings, you've come to the right place. Let's accomplish this together!

To achieve this, you need to set an environment variable.
For Bash or Zsh

Test the effectiveness of this solution by executing the following command:

bash

```bash 
export _JAVA_OPTIONS="-Dawt.useSystemAAFontSettings=on -Dswing.aatext=true -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -Dswing.crossplatformlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel ${_JAVA_OPTIONS}"

```

For a permanent change, add the above definition of the _JAVA_OPTIONS variable to ~/.profile (for your user only) or /etc/profile.d/90-java_ops.sh (system-wide).
For Fish Shell

fish

```fish

set -Ux _JAVA_OPTIONS "-Dawt.useSystemAAFontSettings=on -Dswing.aatext=true -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -Dswing.crossplatformlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel" $_JAVA_OPTIONS

```
If everything goes smoothly, your previously unattractive Java applications should now adopt GTK theme components, greatly enhancing their appearance.