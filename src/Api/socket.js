import socketio from 'socket.io-client'

const socket = socketio(process.env.REACT_APP_API_URL, {
  autoConnect: false,
  secure: false,
})

function subscriberDadosPista(subcribeFunction, id) {
  console.log('ID Certo ' + id)
  socket.on('mensagem', subcribeFunction)
}

function connect(marketId) {
  socket.io.opts.query = {
    marketId,
  }
  socket.nsp = '/' + marketId
  socket.connect()
  socket.emit('cliente', marketId)
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect()
  }
}

export { connect, disconnect, subscriberDadosPista }
