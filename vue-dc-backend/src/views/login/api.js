import { request } from '@/utils'

export default {
  login: (data) => request.post('/auth/signin', data, { noNeedToken: true }),
}
