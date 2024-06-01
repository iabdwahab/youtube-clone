import "./global.js";
import "./sidebar.js";
import { formatViewsCount } from "./utils/formatViewsCount.js"; "./utils/formatViewsCount.js"
import { calcDate } from "./utils/videoDate.js";

const API_KEY = "AIzaSyAQgTk72aRq0BERHR8BkVujgizykGrFxnE";

const videosIDs = [
  "Dnv03wCY-pA",
  "9He4UBLyk8Y",
  "zJSY8tbf_ys",
  "EerdGm-ehJQ",
  "MsnQ5uepIaE",
  "hrTQipWp6co",
  "916GWv2Qs08",
  "OXGznpKZ_sA",
  "xsL-5MhQWBk",
  "ft30zcMlFao"
];

fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics,contentDetails&id=${videosIDs}`)
.then(res => res.json())
.then(data => {

	let videosHTML = '';

  data.items.forEach(item => {

    const videoURL = `https://www.youtube.com/watch?v=${item.id}`;
    const video = item.snippet;
    const channelId = video.channelId;

    getChannelImage(channelId).then(channelImage => {

      videosHTML += `
        <div class="video-container">
          <a href="${videoURL}" class="video-container__thumbnail">
            <img src="${video.thumbnails.high.url}" alt="thumbnails" class="video-container__thumbnail-img">
            <span class="video-container__time">16:53</span>
          </a>

          <div class="video-container__details">
            <a href="#" class="video-container__channel-img-container">
              <img src="${channelImage}" alt="image" class="video-container__channel-img">
            </a>

            <div class="video-container__text">
              <a href="${videoURL}" class="video-container__title">${video.title}</a>
              <a href="#" class="video-container__channel-name">${video.channelTitle}</a>
              <p class="video-container__views-date">
                <span class="video-container__views">${formatViewsCount(item.statistics.viewCount)} viwes</span>
                <span class="video-container__middle-dot">&#183;</span>
                <span class="video-container__date">${calcDate(video.publishedAt)}</span>
              </p>
            </div>
          </div>
        </div>
      `;

      document.querySelector('.videos-container').innerHTML = videosHTML;
    });
  });

});

function getChannelImage(channelId) {
  return fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {

    // Return Channel Image URL
    return data.items[0].snippet.thumbnails.high.url

  });
};
