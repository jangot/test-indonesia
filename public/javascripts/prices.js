const HOST = 'http://localhost:3030';

function onSelectPrice(id, amount) {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        amount: amount,
        mobile: document.getElementById('mobile').value,
    }

    fetch(`${HOST}/prices/link`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(res => res.data)
        .then((data) => {
            const html = `
                <div>id: ${data.id}</div>
                <div>transaction_id: ${data.transaction_id}</div>
                <div>
                    <a target="_blank" href="${data.link}">Go to payment</a>
                </div>
            `;
            document.getElementById('price-link').innerHTML = html;
            console.log(data);
        })
}

fetch('https://api.essai.dev/v2/checkout/public/prices?shouldUseLocalPrices=false&cd_group=A')
    .then(response => response.json())
    .then((data) => data.prices.paddle)
    .then((prices) => {
        const ul = document.getElementById('prices-list');
        prices.forEach((price) => {
            const button = document.createElement('button');
            button.innerHTML = `${price.period}: ${price.unitAmount} ${price.currency}`;
            button.addEventListener('click', (e) => {
                onSelectPrice(price.id, price.unitAmount)
            });
            const li = document.createElement('li');
            li.appendChild(button);
            ul.appendChild(li);
        });
    })
