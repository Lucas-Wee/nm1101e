<template>
  <div class="container mx-auto py-10">
    <div class="text-2xl font-bold mb-6">Podcasts</div>
    <ul>
      <li
        v-for="podcast in podcasts"
        :key="podcast.id"
        class="mb-4 p-4 border rounded shadow cursor-pointer"
        @click="openPopup(podcast)"
      >
        <div class="flex items-center">
          <button class="text-xl bg-blue-500 text-white p-2 rounded-full mr-4">
            Play
          </button>
          <div>
            <div class="font-bold text-xl">{{ podcast.title }}</div>
            <p>{{ podcast.description }}</p>
          </div>
        </div>
      </li>
    </ul>

<!-- Full-Screen Popup -->
<div v-if="showPopup" class="fullscreen-popup">
  <div class="popup-content">
    <!-- Display the podcast title -->
    <div class="font-bold text-xl">{{ currentPodcast.title }}</div>
    
    <h3>Continue where you left off?</h3>
        <p>Timestamp: 3min 25seconds </p>
        <!-- Add progress bar here -->
<!-- Buttons -->
<div class="popup-buttons">
      <button class="button continue">Continue</button>
      <button class="button restart">Restart</button>
      <button class="button exit" @click="showPopup = false">Exit</button>
    </div>
  </div>
</div>
      </div>
</template>

  
  <script>
   export default {
  data() {
    return {
      podcasts: [
        {
          id: 1,
          title: 'Episode 1: The Best Hokkien Dishes in Singapore',
          description: 'In this episode, we explore the unique hokkien dishes of Singapore.',
        },
        {
          id: 2,
          title: 'Episode 2: Our Favourite Cantonese Shows of All Time',
          description: 'In this episode, We review the best cantonese shows of all time',
        },
        {
          id: 3,
          title: 'Episode 3: Which Dialect Group Has The Best Curry?',
          description: 'In this episode, Hokkien vs Cantonese vs Teochew vs Hakka vs Hainan',
        },
        {
          id: 4,
          title: 'Episode 4: Interview with SFCCA Director',
          description: 'In this episode, We interview the man',
        },
        {
          id: 5,
          title: 'Episode 5: Cantonese shows for all',
          description: 'We review the best cantonese shows of all time',
        },
        // ... add more placeholder podcast data as needed
      ],
      showPopup: false,
      currentPodcast: null,
    };
  },
  methods: {
    openPopup(podcast) {
      this.currentPodcast = podcast;
      this.showPopup = true;
    },
  },
};
</script>

<style>
.fullscreen-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button.continue {
  background-color: rgb(131, 227, 86); /* Pastel green */
  color: white;
}

.button.restart {
  background-color: rgb(246, 183, 66); /* Pastel orange */
  color: white;
}

.button.exit {
  background-color: #ec5d56; /* Pastel red */
  color: white;
}

.button:hover {
  opacity: 0.9;
}
</style>
