import { resolveToken } from '../utils'

const users = {
  admin:{
    id:1,
    name:'数据管道工',
    avatar: 'https://avatars.githubusercontent.com/u/25055927?s=400&u=bcc4d3b7f11debafd93abecb15f28a0ddaec1fe9&v=4',//'https://assets.qszone.com/images/avatar.jpg',
    email: 'Ronnie@123.com',
    role: ['admin'],
  }

  // admin: {
  //   id: 1,
  //   name: '大脸怪(admin)',
  //   avatar: 'https://assets.qszone.com/images/avatar.jpg',
  //   email: 'Ronnie@123.com',
  //   role: ['admin'],
  // },
  // editor: {
  //   id: 2,
  //   name: '大脸怪(editor)',
  //   avatar: 'https://assets.qszone.com/images/avatar.jpg',
  //   email: 'Ronnie@123.com',
  //   role: ['editor'],
  // },
  // guest: {
  //   id: 3,
  //   name: '访客(guest)',
  //   avatar: 'https://assets.qszone.com/images/avatar.jpg',
  //   role: [],
  // },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
]
