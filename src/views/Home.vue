<template>
  <div class="home">
    
    <v-carousel class="pt-0">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

   <!-- middle -->
   <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Create your test anytime,anywhere</h2>
              <span class="subheading">
                Your candidates can now sit for their exams anywhere in the world
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">About</div>
                    </v-card-title>
                    <v-card-text>
                      ExamTone is a user-friendly online assessment platform that allows you to asses candidates for FREE!

A user-friendly and headache eliminating, online platform that allows you to assess candidates for free at your own discretion!

ExamTone features an automated system of assessments without borders.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">How it Works</div>
                    </v-card-title>
                    <v-card-text>
                     Examtone is simple and easy to use, in just 4 easy steps:

Sign up FREE
 1 Create a test
2 Create your test by setting your questions and answer options.
3 Send Invitations
4 Send test invitations to the candidates that you want to take your test..
5 Get Results
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Testimonials</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


  <!-- footer -->
 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
   data () {
      return {
        items: [
          {
            src: '/math-5.jpg',
          },
          {
            src: '/math-2.jpg',
          },
          {
            src: '/math-3.jpg',
          },
          {
            src: '/math-4.jpg',
          },
        ],
        icons: [
        'mdi-facebook-box',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      }
    },
}
</script>
