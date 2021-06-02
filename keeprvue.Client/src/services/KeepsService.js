import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class KeepsService {
  async getKeeps() {
    const res = await api.get('api/keeps')
    AppState.keeps = res.data
  }

  async getKeepsByProfile(id) {
    const res = await api.get(`api/profiles/${id}/keeps`)
    AppState.profileKeeps = res.data
  }

  async getKeepById(id) {
    const res = await api.get(`api/keeps/${id}`)
    AppState.activeKeep = res.data
  }

  async createKeep(newKeep) {
    const res = await api.post('api/keeps', newKeep)
    this.getKeeps(res.data)
  }

  async deleteKeep(id) {
    await api.delete(`api/keeps/${id}`)
    AppState.keeps = AppState.keeps.filter(k => k.id !== id)
  }
}

export const keepsService = new KeepsService()
