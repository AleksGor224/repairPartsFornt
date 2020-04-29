const BACK_ENDPOINT = 'http://localhost:8080';

export async function getAllPhones() {
    const url = `${BACK_ENDPOINT}/phone/all`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}

export async function deleteById(id) {
    const url = `${BACK_ENDPOINT}/phone/`+id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}

export async function addPhone(brand, model) {
    const url = `${BACK_ENDPOINT}/phone/`
    let obj = {
        model:model,
        brand:brand
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return response.json();
}

