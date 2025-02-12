const PRICES = {
    simple: 800,
    medium: 1500,
    luxury: 3000
};

export function setupCalculator() {
    const form = document.getElementById('quoteForm');
    const resultDiv = document.getElementById('quoteResult');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const area = parseFloat(form.area.value);
        const type = form.type.value;
        
        if (area > 0) {
            const total = area * PRICES[type];
            resultDiv.innerHTML = `
                <h4>预估报价：<span class="text-primary">¥${total.toLocaleString()}</span></h4>
                <p class="text-muted">* 实际价格以现场测量为准</p>
                <button class="btn btn-success mt-3">预约免费测量</button>
            `;
        }
    });
}
