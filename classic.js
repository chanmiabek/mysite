
document.addEventListener('DOMContentLoaded', function() {
const scrollContainer = document.getElementById('scrollContainer');
const scrollIndicator = document.getElementById('scrollIndicator');
function updateScrollIndicator() {
const totalScrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
const scrollPercentage = (scrollContainer.scrollLeft / totalScrollWidth) * 100;
const maxScroll = 100 - ((scrollContainer.clientWidth / scrollContainer.scrollWidth) * 100);
const indicatorWidth = (scrollContainer.clientWidth / scrollContainer.scrollWidth) * 100;
scrollIndicator.style.width = `${indicatorWidth}%`;
scrollIndicator.style.left = `${Math.min(scrollPercentage, maxScroll)}%`;
}
scrollContainer.addEventListener('scroll', updateScrollIndicator);
updateScrollIndicator();
});
