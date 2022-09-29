import { api } from 'src/services/api'

const fetchUpcomingRelease = async () => {
  const upcomingResponse = await api.get('/upcoming')

  return upcomingResponse.data
}

export { fetchUpcomingRelease }
