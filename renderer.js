export default new class OpenInApps {
	log(msg) {
		console.info(`%c[${this.constructor.name}] `, "color:#7d0000", msg)
	}
	openLink(e) {
		if (e.target.localName == "a"){
			// Steam Links
			if (
				e.target.href.startsWith(
					"https://steamcommunity." ||
				 	"https://help.steampowered." ||
				  	"https://store.steampowered." ||
				   	"https://s.team")
			) {
				e.preventDefault();
				window.openInApp(e.target.href, 'steam://openurl/');
			}

			// Spotify Links
			if (e.target.href.startsWith("https://open.spotify.com")) {
				e.preventDefault();
				window.openInApp(e.target.href, 'spotify://');
			}

		}
	}
	start() {
		this.log("started")
		document.addEventListener("click", this.openLink )
	}
	stop() {
		document.removeEventListener("click", this.openLink);
		this.log('stopped')
	}
}
