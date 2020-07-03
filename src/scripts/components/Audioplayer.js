
/*
 * component/Audioplayer
 */

const template = `
  <div class="audioplayer">
    <div class="audioplayer__toolbar">
      <button class="audioplayer__button-previous-song">
        <span class="icon icon--xl">skip_previous</span>
      </button>

      <button class="audioplayer__button-play-pause">
        <span v-if="!isPlaying" v-on:click="setIsPlaying(true)" class="icon icon--xl">play_circle_filled</span>
        <span v-else  v-on:click="setIsPlaying(false)" class="icon icon--xl">pause_circle_filled</span>
      </button>

      <button class="audioplayer__button-stop">
        <span v-on:click="stopSong" class="icon icon--xl">stop</span>
      </button>
      <button class="audioplayer__button-next-song">
        <span class="icon icon--xl">skip_next</span>
      </button>

    </div>
    <div class="audioplayer__infobox">
      <div class="audioplayer__textinfos">
      <h2 class="audioplayer__title">{{ selectedSong.artist }}</h2>
      <h3 class="audioplayer__artist">{{ selectedSong.title }}</h3>
      </div>
      <div class="audioplayer__duration">
      <p class="audioplayer__time-played">00:00</p>
      <div class="audioplayer__duration-indicator-wrap">
        <div class="audioplayer__duration-indicator"></div>
      </div>
      <p class="audioplayer__duration-number">00:00</p>
      </div>
    </div>
  </div>
`;

export default {
  name: 'Audioplayer',

  computed: {
    isPlaying() {
      return this.$store.state.audioplayer.isPlaying;
    },

    selectedSong() {
      return this.$store.state.audioplayer.selectedSong;
    }
  },

  template,

  methods: {
    setSong(song) {
      this.$store.dispatch('setSong', song);
    },

    setIsPlaying(state) {
      this.$store.dispatch('setIsPlaying', state);
    },

    stopSong() {
      this.$store.dispatch('stopSong');
    }
  }

  /*
    data,

    computed,

    methods,

    watch,
  */
};
