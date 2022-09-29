import { api } from 'src/services/api'

const fetchPastReleases = async () => {
  const pastReleaseResponse = await api.get('/past')

  return pastReleaseResponse.data
}

export { fetchPastReleases }
