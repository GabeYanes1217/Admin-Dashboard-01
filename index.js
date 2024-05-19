// Sidebar Toggle
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-bnt');
const aside = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    aside.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    aside.style.display = 'none';
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode-variables');
    darkModeToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})