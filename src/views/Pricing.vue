<template>
  <div class="pricing blue--text">
    <h1 class="text-center">Pricing</h1>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">{{item.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <h1 class="bold pa-3">{{item.price}}</h1>
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
   data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: 'Free',
          price: 'N 0',
          text: ''
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: 'Gold',
          price: 'N 10,000',
          text: ''
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: 'Platinum',
          price: 'N 20,000',
          text: ''
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          title: 'Jumbo',
          price: 'N 30,000',
          text: ''
        },
      ],
    })
}
</script>
