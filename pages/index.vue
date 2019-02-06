<template>
  <section class="container">
    <div>
      <big message="Hello Vue World!" />
      <logo />
      <h3>{{ counter }}</h3>
      <button id="incBtn" @click="add">
        Increment
      </button>
      <button id="resBtn" @click="reset">
        Reset counter value
      </button>
      <big message="Another text" />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Big from '@/components/Header.vue'

export default {
  components: {
    Logo,
    Big
  },
  data: () => {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++
    },
    reset() {
      this.counter = 0
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
