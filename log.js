/**
 * Created by SriVastav on 3/20/2017.
 */

var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
winston.add(winston.transports.File,{ filename: 'winston-basic.log'});
module.exports = winston;