import beforeAfterCompare from "./components/beforeAfterCompare.vue"

export default {
  install: (app, options) => {
    app.component("beforeAfterCompare", beforeAfterCompare)
  },
}
