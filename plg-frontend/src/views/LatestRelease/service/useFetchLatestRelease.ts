import { api } from 'src/services/api'

const fetchLatestRelease = async () => {
  const latestReleaseResponse = await api.get('/latest')

  return latestReleaseResponse.data
}

export { fetchLatestRelease }
