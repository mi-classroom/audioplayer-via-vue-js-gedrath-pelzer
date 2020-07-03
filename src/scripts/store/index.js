
/*
 * Store
 */

const StoreStructure = {
	state: {
		playlist: [],
		audioplayer: {
			isPlaying: false,
			currentSong: null
		}
	},

	mutations: {
		mutateSetPlaylist(state, playlist) {
			state.playlist = playlist;
		},
		mutateIsPlaying(state, value) {
			state.audioplayer.isPlaying = value;
		},
		mutateCurrentSong(state, song) {
			state.audioplayer.currentSong = song;
		} 
	},

	actions: {
		async loadPlaylist({ commit }, url) {
			const result = await fetch(url);

			if (!result.ok) {
				throw new Error(`Could not access ${this.url}`);
			}

			const playlist = await result.json();

			commit('mutateSetPlaylist', playlist);
		},

		playSong({ commit }, song) {
			commit('mutateCurrentSong', song);
			commit('mutateIsPlaying', true);
		},

		pauseSong({ commit }) {
			commit('mutateIsPlaying', false);
		},

		stopSong({ commit }) {
			commit('mutateCurrentSong', null);
			commit('mutateIsPlaying', false);
		}
	},
};

export function createStore(Vuex) {
	return new Vuex.Store(StoreStructure);
};
