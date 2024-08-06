export default {
    beforeMount(el, binding) {
      const tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.textContent = binding.value;
      el.appendChild(tooltip);
  
      el.onmouseover = () => {
        tooltip.style.display = 'block';
      };
  
      el.onmouseout = () => {
        tooltip.style.display = 'none';
      };
    }
  };