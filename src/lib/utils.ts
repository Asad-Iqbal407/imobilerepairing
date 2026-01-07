export const getServiceEmoji = (title: string, description: string = '') => {
  const text = (title + ' ' + description).toLowerCase();
  
  if (text.includes('screen') || text.includes('display') || text.includes('glass')) return '📱';
  if (text.includes('battery') || text.includes('charging') || text.includes('power')) return '🔋';
  if (text.includes('water') || text.includes('liquid') || text.includes('damage')) return '💧';
  if (text.includes('camera') || text.includes('lens')) return '📸';
  if (text.includes('speaker') || text.includes('audio') || text.includes('sound')) return '🔊';
  if (text.includes('software') || text.includes('unlock') || text.includes('os') || text.includes('firmware')) return '💻';
  if (text.includes('button') || text.includes('home') || text.includes('volume') || text.includes('power button')) return '🔘';
  if (text.includes('back') || text.includes('housing') || text.includes('frame')) return '🏗️';
  if (text.includes('motherboard') || text.includes('logic') || text.includes('chip') || text.includes('micro')) return '🧠';
  if (text.includes('data') || text.includes('recovery') || text.includes('backup')) return '💾';
  
  return '🛠️'; // Default emoji
};
