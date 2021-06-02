import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class VaultsService {
  async getVaults(id) {
    const res = await api.get(`api/profiles/${id}/vaults`)
    AppState.vaults = res.data
  }

  async getVaultById(id) {
    const res = await api.get(`api/vaults/${id}`)
    AppState.activeVault = res.data
  }

  async createVault(newVault) {
    const res = await api.post('api/vaults', newVault)
    this.getVaults(res.data)
  }

  async addKeep(vaultId, body) {
    const res = await api.post(`api/vaultKeeps/${vaultId}`, body)
    AppState.vaultKeeps = res.data
  }
}

export const vaultsService = new VaultsService()
