// 数字递增动画
document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.dataset.target;
    const increment = target / 200;
    let current = 0;
    
    const updateCount = () => {
        if(current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCount);
        }
    }
    updateCount();
});
