const product = [
    {
    id: 0,
    image: 'smart watch.jpg',
    tittle : 'smart watch + Iphone',
    price : 99999,
},

{
    id: 1,
    image: 'laptops.jpg',
    tittle : 'Laptop',
    price : 49999,
    

},
{
    id: 2,
    image: 'microphe.jpg',
    tittle : 'Podcast Microphone',
    price : 5999,
},

{
    id: 3,
    image: 'official shirt.jpg',
    tittle : 'Office Shirt',
    price : 1999,

}
];

const categories = [...new set(product.map((item)=>
    {return item }))]
    let i = 0;

    document.getElementById('root').innerHTML = categories.map((item) => 
    {



            var {image , title ,price} = item;
        return (
           ` <div class = 'box'>
            <div class = 'img-box'>
                <img class = 'images' src = ${image}></img>
                </div>

                <div class = 'bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>`+
                    "<button onclick = 'addtocart("+(i++)+")'> Addd to cart</button>" +
                   `  </div>
                    </div>`
        )
        } ). join('')

            
            
        
           
    
        

        
            

            
            
        
    