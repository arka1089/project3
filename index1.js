
const search = document.getElementById('search');
const items = document.getElementById('item');
let timeoutId;

search.addEventListener('keyup',searchProduct);
 
function searchProduct()

{
    //console.log(search.value);
    if(timeoutId)
    {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout( async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${search.value}`);
        const res2 = await res.json();
        console.log(res2);
        items.innerHTML = ''
        res2.products.forEach(element => {
            const itemPiece = document.createElement('div');
            itemPiece.append(JSON.stringify(element.title));
            items.append(itemPiece);
         });
    }, 1000);
}