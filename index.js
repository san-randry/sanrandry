function log(msg, options = { loudness: 'default' }) {
  if (options && options.loudness) {
    switch (options.loudness) {
      case 'shout':
        if (typeof msg === 'string') console.log(msg.toUpperCase());
        break;
      case 'whisper':
        if (typeof msg === 'string') console.log(msg.toLowerCase());
        break;
      default:
        console.log(msg);
    }
  }
}
module.exports = log;
