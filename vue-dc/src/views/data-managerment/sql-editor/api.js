import { request,parseLineageBySql } from '@/utils'


export default {
  getSQLAnalysisRes: (data) => request.post('/data/sql_analysis', data, { noNeedToken: true }),
  getLineageBySql:(data) =>parseLineageBySql(data)
}
