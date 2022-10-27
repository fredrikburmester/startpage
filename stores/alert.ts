
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
      alert: false,
      alertMessage:  'Hej!',
      alertType:  'success',
  }),
  actions: {
    getAlertStatus(): boolean {
      return this.alert
    },
    removeAlert() {
      this.alert = false
    },
    setAlert(alertMessage: string, alertType: string) {
      this.alertType = alertType
      this.alertMessage = alertMessage
      this.alert = true
    },
  },
})