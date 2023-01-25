const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => button.addEventListener('click', handleFilterButtonClick));

function handleFilterButtonClick(event) {
  const filterValue = event.target.dataset.filter;
  const tagItems = document.querySelectorAll('.tag-item');
  tagItems.forEach(item => {
    if (item.classList.contains(filterValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
