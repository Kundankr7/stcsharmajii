// This is an example of how you could add a hover effect using JavaScript
const icons = document.querySelectorAll('.icons a');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });
  
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});