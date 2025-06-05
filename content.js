function cleanYouTube() {
  // 광고 제거
  const ads = document.querySelectorAll(
    '.video-ads, .ytp-ad-module, .ytp-ad-overlay-container',
  )
  ads.forEach((el) => el.remove())

  // 스킵 버튼 자동 클릭
  const skipBtn = document.querySelector('.ytp-ad-skip-button')
  if (skipBtn) skipBtn.click()

  // 사이드바 제거
  const sidebar = document.getElementById('related')
  if (sidebar) sidebar.remove()

  // 댓글 제거
  const comments = document.getElementById('comments')
  if (comments) comments.remove()
}

setInterval(cleanYouTube, 1000)
