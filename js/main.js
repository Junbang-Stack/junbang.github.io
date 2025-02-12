import { initNavigation } from './modules/navigation.js';
import { initSwiper } from './modules/swiper-init.js';
import { setupCalculator } from './modules/calculator.js';
import { lazyLoad } from './modules/lazyLoad.js';

document.addEventListener('DOMContentLoaded', () => {
    // 初始化各模块
    initNavigation();
    initSwiper();
    setupCalculator();
    lazyLoad();
    
    // 动态加载案例
    loadCases();
});

async function loadCases() {
    try {
        const response = await axios.get('data/cases.json');
        const container = document.getElementById('caseContainer');
        
        response.data.forEach(case => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="case-card">
                        <img data-src="images/cases/${case.image}" 
                             class="lazy-load" 
                             alt="${case.title}">
                        <h5>${case.title}</h5>
                        <p>面积：${case.area}㎡</p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('案例加载失败:', error);
    }
}
