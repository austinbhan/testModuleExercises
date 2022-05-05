export function renderOils(oil) {
    const div = document.createElement('div');
    div.classList.add('oil');

    const h4 = document.createElement('h4');
    h4.textContent = oil.ingredient;

    const h5 = document.createElement('h5');
    h5.textContent = oil.smokePoint;

    const img = document.createElement('img');
    img.src = oil.image;

    const p = document.createElement('p');
    p.textContent = `${oil.ingredient} oil's smokepoint is ${oil.smokePoint} and its price is ${oil.price}`;

    div.append(h4, h5, img, p);
    return div;
}