# Undo Video Seek

A Safari extension that allows you to *undo* a video seek. The reason why I wanted this is that every once in a while I'll accidentally hit one of the number keys while watching a YouTube video, causing the video to seek and **lose my playback position**. It's *always* annoying, *especially* on a long video (like a podcast). So I whipped up this simple Safari extension to solve the problem.

I'm sorry **it's a bit of a pain to set this up**. I don't have a developer account because I don't have $99/yr to blow so I can develop the occasional extremely simple app / Safari extension and have five people be able to get it more easily. Every once in a while I do a search to see if Apple has dropped their fee for developers that only put out free apps, but I'm not holding my breath.

## Installation

You must sign the application yourself. (This is because don't have a paid Apple developer account.)

### Requirements

- [Xcode](https://apps.apple.com/ca/app/xcode/id497799835) (free)
- Apple Developer account (free)

### Steps to install

(note: screenshots were taken from a [different project](https://github.com/mattdanielmurphy/open-in-music), but the concept is identical)

1. [Download](https://github.com/mattdanielmurphy/undo-video-seek/releases/download/v0.1/Undo-Video-Seek.zip) the release.
2. Open `Undo Video Seek.xcodeproj` in Xcode.
3. Sign the app to run locally:
   1. Select the project in the navigator.
   2. Click the first target, `Open in Music`.
   3. Click the `Signing & Capabilities` tab.
   4. Change `Team` to your account.
   5. Repeat the previous step for the second target, `Undo Video Seek Extension`.
   ![Screnshot-1](https://user-images.githubusercontent.com/18738486/110280922-ecd3eb80-7f98-11eb-9e99-66e01e01b95a.png)
4. In the menu bar, select `Product` -> `Archive`.
   ![Screnshot-2](https://user-images.githubusercontent.com/18738486/110279699-c57c1f00-7f96-11eb-9ea0-6199317efaab.png)
5. Click `Distribute App` and select `Copy App` as the method of distribution.
   ![Screenshot-3](https://user-images.githubusercontent.com/18738486/110278199-07f02c80-7f94-11eb-82ab-54e03b37a7a0.png)
6. Drag `Undo Video Seek.app` to your `Applications` folder.
7. Open the application, click the button, and enable the extension in Safari.
