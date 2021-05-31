import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class VaultsService {
  async getVaults() {
    const res = await api.get('api/vaults')
    AppState.vaults = res.data
  }

  async getVaultById(id) {
    const res = await api.get(`api/vaults/${id}`)
    AppState.activeVault = res.data
  }

  async createVault(newVault) {
    const res = await api.post('api/vualts', newVault)
    this.getVaults(res.data)
  }
}

export const vaultsService = new VaultsService()
