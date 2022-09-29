import { api } from 'src/services/api'

const fetchNextRelease = async () => {
  const nextReleaseResponse = await api.get('/next')

  return nextReleaseResponse.data
}

export { fetchNextRelease }
