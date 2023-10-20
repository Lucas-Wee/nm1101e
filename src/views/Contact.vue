<template>
    <div class="container mx-auto py-10">
      <div class="text-2xl font-bold mb-6">Podcasts</div>
      <ul>
        <li
          v-for="podcast in podcasts"
          :key="podcast.id"
          class="mb-4 p-4 border rounded shadow"
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
    };
  },
   };
  </script>  