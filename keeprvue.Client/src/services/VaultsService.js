import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'
import router from '../router.js'

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

  async getUserVaults() {
    const res = await api.get('account/vaults')
    AppState.userVaults = res.data
  }

  async deleteVault(id) {
    await api.delete(`api/vaults/${id}`)
    AppState.vaults = AppState.vaults.filter(v => v.id !== id)
    router.push({ name: 'ProfilePage', params: { id: AppState.account.id } })
  }

  async addKeep(id, keep) {
    const vaultkeep = { vaultId: id, keepId: keep }
    const res = await api.post('api/vaultkeeps', vaultkeep)
    AppState.vaultKeeps = res.data
  }

  async getKeepsByVaultId(id) {
    const res = await api.get(`api/vaults/${id}/keeps`)
    AppState.vaultKeeps = res.data
  }
}

export const vaultsService = new VaultsService()
