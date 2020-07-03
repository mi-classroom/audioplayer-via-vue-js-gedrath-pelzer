
/*
 * Store
 */

const StoreStructure = {
	state: {
		playlist: [],
		audioplayer: {
			isPlaying: false,
			selectedSong: null
		}
	},

	mutations: {
		mutateSetPlaylist(state, playlist) {
			state.playlist = playlist;
		},
		mutateIsPlaying(state, value) {
			state.audioplayer.isPlaying = value;
		},
		mutateSelectedSong(state, song) {
			state.audioplayer.selectedSong = song;
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

		setSong({ commit }, song) {
			commit('mutateSelectedSong', song);
		},

		setIsPlaying({ commit }, state) {
			commit('mutateIsPlaying', state);
		},

		stopSong({ commit }) {
			commit('mutateSelectedSong', null);
			commit('mutateIsPlaying', false);
		}
	},
};

export function createStore(Vuex) {
	return new Vuex.Store(StoreStructure);
};
