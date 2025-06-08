import yt_dlp
yt_dlp.YoutubeDL({'formate': 'best', 'outtmp1':'%(title)s.%(ext)s'}).download([''])
from anthropic import Anthropic

client = Anthropic(
  api_key=XAI_API_KEY,
  base_url="https://api.x.ai",
)