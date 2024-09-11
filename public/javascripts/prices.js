fetch('https://api.essai.dev/v2/checkout/public/prices?shouldUseLocalPrices=false&cd_group=A')
    .then(response => response.json())
    .then((data) => data.prices.paddle)
    .then((prices) => {
        const ul = document.getElementById('prices-list');
        prices.forEach((price) => {
            const a = document.createElement('a');
            a.href = '#' + price.id;
            a.innerHTML = `${price.period}: ${price.unitAmount} ${price.currency}`;
            const li = document.createElement('li');
            li.appendChild(a);
            ul.appendChild(li);
        });
    })
