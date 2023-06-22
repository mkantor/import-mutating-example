import { liveUserSockets } from './socketUtils'

class Socket {}
const userId = '123'
const socket = new Socket()

if (liveUserSockets[userId]) {
  liveUserSockets[userId].push(socket)
} else {
  liveUserSockets[userId] = [socket]
}

export async function balanceUpdate(n: number, user: string) {
  console.log('liveUserSockets in balanceUpdate:', liveUserSockets)
  // for (let socket of liveUserSockets[user]) {
  //   socket.send('balanceupdate', n)
  // }
}
