const timelineBox = document.querySelector('.timeline__items-box'),
      measurementsItem = document.querySelector('.timeline__item--measurements'),
      timelineItems = document.querySelector('.timeline__items');

let isResizible = true;


if (timelineBox) {
  const itemAppending = () => {
    if(window.innerWidth < 651 && isResizible) {
      timelineBox.appendChild(measurementsItem);
      isResizible = false;
    } else if (window.innerWidth >= 651) {
      timelineItems.appendChild(measurementsItem);
      isResizible = true;
    }
  };
  
  window.addEventListener('resize', ()=>{
    itemAppending();
  });
  
  itemAppending();
}
