// import tls from 'tls'

// /*	Socket connection options */

// function conectarBetfairSocket(idMarcket) {
//   var client
//   var options = {
//     host: 'stream-api.betfair.com',
//     port: 443,
//   }

//   var retortno
//   console.log('id que chegou da tela ' + idMarcket)

//   /*	Establish connection to the socket */

//   client = tls.connect(options, function () {
//     console.log('Connected')
//   })

//   /*	Send authentication message */

//   client.write(
//     '{"op": "authentication", "appKey": "XQzvGbEmSL9JwR7n", "session": "NGs5AXnmykcYAcNHfp+8UjwbTV8NjLwjhi1pvgF5Mm8="}\r\n'
//   )

//   /*	Subscribe to order/market stream */
//   client.write(
//     '{"op":"marketSubscription","id":2,"marketFilter":{"marketIds":["' +
//       idMarcket +
//       '"]},  "bspMarket": true, "marketDataFilter":{"fields":["EX_BEST_OFFERS_DISP","SP_TRADED","SP_PROJECTED"]}}\r\n'
//   )

//   client.on('data', function (data) {
//     console.log('ID tela ' + idMarcket)
//     console.log('Received: ' + data)
//   })

//   client.on('close', function () {
//     console.log('Connection closed')
//   })

//   client.on('error', function (err) {
//     console.log('Error:' + err)
//   })
//   return retortno
// }

// export { conectarBetfairSocket }
