---
title: "Building Chrome extensions, in simple terms (hopefully)"
author: Jaime
date: "09-09-2024"
image:
  url: "/blog-post.webp"
  alt: "Post Thumbnail"
---

A few years ago, I wanted to work on a project that would ~~force~~ motivate me to deepen my knowledge of javascript, and eventually React. I knew that the best way for me to learn was by doing, I was set on building _something_... anything! I would often find myself coding along youtube tutorials and found a pain-point in my learning. I would take the time to view all these videos by my favorite creators, but a week, a month, 4 months later I would forget what I learned! I would have to try and remember "that one video where they break down redux using a bank metaphor 🤔" or "The reason react rerenders". Eventually, I would locate it but I know there had to be a better way. Timestamped notes... you might be thinking (like I was), just throw it in the notes app, notion, sheets, any other note taking app. "bookmarks and notes are filled with webpages never to be remembered" I thought. I needed something that could not be ignored, something that reduces the friction of leaving the current webpage in order to access, the laziest way to get from point **A** to point **B**. Enter
<a href="https://developer.chrome.com/docs/extensions" target="_blank">Chrome Extentions</a>

<div class="center">
  <img class="pro-img" width="500px" height="281" src="/chromeExtDevScreenshot.png" alt="screenshot of developer.chrome.com. Has text `Welcome to extensions`" />
</div>

After a lot of trial and error (i.e. ignoring the docs, don't be like me) and fumbling on my IDE, I took a step back and read some of the documentation to get my bearings. There are 3 main environment that we should know when it comes to extensions.

The background(script) / service workers- the event handlers of the whole thing... This does a better job of explaining. <a href="https://developer.chrome.com/docs/extensions/develop/concepts/service-workers" target="_blank">(read it, it's short)</a> Can be used to pass messages between content scripts and Popup.

The Content(script) - the webpage environment. Want to change the background on webpages? sure. hide certain sections, can do. The content script has you covered.
The Popup - Think dropdown from extension bar

<div class="center">
  <img class="pro-img" width="500px" height="281" src="/chromeExtEnv.png" alt="youtube.com showing a dropdown from browser extension, a popup window, and the background devtools" />
</div>

There are tons of things that can be down with chrome extensions. It's a great way to build tools that enhance your browsing experience and sharpen your dev chops. While building from scratch is great, not all of us have the priviledge of time. There are tons of
<a href="https://github.com/search?q=chrome%20extension%20boilerplate&type=repositories" target="_blank">boilerplates to get you started</a>
