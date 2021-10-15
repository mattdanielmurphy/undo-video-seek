browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
	const video = document.getElementsByTagName('video')[0]

	if (video) {
		let skipHistory = []
		
		// track last updated time to detect a skip rather than second-second playback
		let prevTime = Math.ceil(video.currentTime)
		
		// detect change of video source
		video.onloadeddata = e => {
			skipHistory = []
			prevTime = Math.ceil(video.currentTime)
			console.log('Data load detected. Skip history cleared.')
		}

		video.ontimeupdate = e => {
				const time = Math.ceil(video.currentTime)
				if (Math.abs(time - prevTime) > 1) { // when position moved more than one second in either direction
					skipHistory.push(prevTime)
					console.log('Skip recorded. Skip history:', skipHistory)
				}
				prevTime = time
		}
		
		document.onkeypress = e => {
			if (e.key === 'u' && e.metaKey) { // metaKey = command key
				if (skipHistory.length > 0) { // only try to undo as far as possible
					const prevSkipTime = skipHistory[skipHistory.length - 1]
					video.currentTime = prevSkipTime // undo skip
					prevTime = Math.ceil(video.currentTime) // so undone time isn't detected as another skip
					skipHistory.pop() // remove undone skip from history
					console.log('Skip undone. Skip history:', skipHistory)
				}
			}
		}
	}
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {});
