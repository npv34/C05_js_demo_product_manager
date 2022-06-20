let products = [
    ["Iphone 13", 240000, 20],
    ["Iphone 11 64GB", 240000, 20],
    ["Iphone 12 128GB", 240000, 20],
    ["Samsung", 12000, 10],
]

function displayListProduct(products) {
    let html = "";

    products.forEach(function (item, index) {
        html += "<tr>";
        html += `<td>${index + 1}</td>`;
        html += `<td>${item[0]}</td>`;
        html += `<td>${item[1]}</td>`;
        html += `<td>${item[2]}</td>`;
        html += `<td>
                <button type="button" onclick="deleteProduct(${index})" class="delete-product">Delete</button>
                <button type="button" onclick="showDateFormUpdate(${index})" class="update-product">Update</button>
               </td>`
        html += "</tr>"
    })

    document.getElementById('total-product').innerHTML = getTotalProduct() + ' product';
    document.getElementById('list-product').innerHTML = html;
}

displayListProduct(products);

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product')) {
        products.splice(index, 1);
        displayListProduct(products);
    }
}

function getTotalProduct() {
    return products.length;
}

function addProduct() {
    let name = document.getElementById('name').value;
    let price =document.getElementById('price').value;
    let sll =document.getElementById('sll').value;

    if (!name || !price || !sll) {
        alert('Error: Invalid Input')
    } else {
        let item = [name, price, sll];
        products.push(item)
        clearFormInput();
        displayListProduct(products);
    }
}

function clearFormInput() {
    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('sll').value = ''
}

function showDateFormUpdate(index) {
    let productUpdate = products[index];
    document.getElementById('name').value = productUpdate[0]
    document.getElementById('price').value = productUpdate[1]
    document.getElementById('sll').value = productUpdate[2]
    document.getElementById('index').value = index;

    document.getElementById('update-product-button').style.display = 'block';
    document.getElementById('add-product-button').style.display = 'none';

}

function updateProduct() {
    let name = document.getElementById('name').value;
    let price =document.getElementById('price').value;
    let sll =document.getElementById('sll').value;
    let index = document.getElementById('index').value;

    if (!name || !price || !sll || !index) {
        alert('Error: Invalid Input')
    } else {
        products[index] = [name, price, sll]
        clearFormInput();
        displayListProduct(products);

        document.getElementById('update-product-button').style.display = 'none';
        document.getElementById('add-product-button').style.display = 'block';
    }
}

function searchProduct()  {
    let keywords = document.getElementById('keywords').value;
    if (keywords) {
        let results = [];
        for (const item of products) {
            if (keywords === item[0]) {
                results.push(item)
            }
        }

        displayListProduct(results)
    }


}
