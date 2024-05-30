const matrixScreen = document.getElementById('matrixScreen');
let autoScrollEnabled = true;

matrixScreen.addEventListener('scroll', () => {
    if (matrixScreen.scrollTop + matrixScreen.clientHeight >= matrixScreen.scrollHeight) {
        autoScrollEnabled = true;
    } else {
        autoScrollEnabled = false;
    }
});

function generateOrder() {
    const orderType = Math.random() > 0.5 ? 'BUY' : 'SELL';
    const orderAmount = (Math.random() * 1000).toFixed(2);
    return `${orderType} ${orderAmount}`;
}

function addOrderToScreen(order) {
    const orderElement = document.createElement('div');
    orderElement.textContent = order;
    orderElement.classList.add('order');
    orderElement.addEventListener('click', () => {
        alert(`You clicked on: ${order}`);
    });
    matrixScreen.appendChild(orderElement);

    if (autoScrollEnabled) {
        // Scroll to the bottom
        matrixScreen.scrollTop = matrixScreen.scrollHeight;
    }
}

function generateOrders() {
    setInterval(() => {
        const order = generateOrder();
        addOrderToScreen(order);
    }, 200);
}

generateOrders();
