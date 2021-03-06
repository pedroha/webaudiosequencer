define(function () {
	var selectPreviousTrack = function (args) {
		var index = Math.max(0, args.index - 1);

		this.eventBus.trigger("selectTrack", {
			trackModel: this.trackCollection.at(index)
		});
	};

	return selectPreviousTrack;
});
