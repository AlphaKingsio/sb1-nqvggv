export async function generateShareImage(signal: {
  type: string;
  name: string;
  symbol: string;
  action: string;
  price: string;
  score: number;
  imageUrl: string;
  entryPrice?: string;
  stopLoss?: string;
  targetPrice?: string;
}) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return null;

  // Set canvas size
  canvas.width = 1200;
  canvas.height = 630;

  // Background
  ctx.fillStyle = '#13141b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load and draw background logo watermark
  try {
    const bgLogo = await loadImage(signal.imageUrl);
    ctx.globalAlpha = 0.05;
    ctx.drawImage(bgLogo, canvas.width - 500, 65, 400, 400);
    ctx.globalAlpha = 1;
  } catch (error) {
    console.error('Error loading background logo:', error);
  }

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load and draw main logo
  try {
    const logo = await loadImage(signal.imageUrl);
    const logoSize = 100;
    ctx.save();
    ctx.beginPath();
    ctx.arc(110, 110, logoSize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(logo, 60, 60, logoSize, logoSize);
    ctx.restore();
  } catch (error) {
    console.error('Error loading logo:', error);
  }

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Inter, system-ui, sans-serif';
  ctx.fillText(`${signal.name} (${signal.symbol})`, 200, 100);

  // Signal Type and Action
  ctx.fillStyle = signal.action === 'BUY' ? '#34d399' : '#f87171';
  ctx.font = 'bold 40px Inter, system-ui, sans-serif';
  ctx.fillText(`${signal.action} Signal`, 200, 150);

  // Draw price grid
  const gridStartY = 220;
  const gridItemWidth = 260;
  const gridItemHeight = 100;
  const gridGap = 20;

  // Helper function to draw grid item
  const drawGridItem = (x: number, y: number, label: string, value: string, valueColor = '#ffffff') => {
    // Background
    ctx.fillStyle = 'rgba(31, 41, 55, 0.5)';
    ctx.beginPath();
    ctx.roundRect(x, y, gridItemWidth, gridItemHeight, 10);
    ctx.fill();

    // Label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '24px Inter, system-ui, sans-serif';
    ctx.fillText(label, x + 20, y + 35);

    // Value
    ctx.fillStyle = valueColor;
    ctx.font = 'bold 28px Inter, system-ui, sans-serif';
    ctx.fillText(value, x + 20, y + 75);
  };

  // Draw grid items
  drawGridItem(60, gridStartY, 'Entry Price', signal.entryPrice || signal.price);
  drawGridItem(60 + gridItemWidth + gridGap, gridStartY, 'Current Price', signal.price);
  drawGridItem(60, gridStartY + gridItemHeight + gridGap, 'Stop Loss', signal.stopLoss || '-5%', '#f87171');
  drawGridItem(60 + gridItemWidth + gridGap, gridStartY + gridItemHeight + gridGap, 'Target Price', signal.targetPrice || '+15%', '#34d399');

  // Score
  const scoreColor = signal.score >= 70 ? '#34d399' : signal.score >= 40 ? '#fbbf24' : '#f87171';
  ctx.fillStyle = scoreColor;
  ctx.font = 'bold 36px Inter, system-ui, sans-serif';
  ctx.fillText(`Signal Score: ${signal.score}/100`, 60, 500);

  // Footer
  ctx.fillStyle = '#9ca3af';
  ctx.font = '24px Inter, system-ui, sans-serif';
  ctx.fillText('alphakings.io', 60, canvas.height - 40);

  return canvas.toDataURL('image/png');
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}