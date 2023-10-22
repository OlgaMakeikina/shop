

function Buttons({data, setClothes}) {

const filteredCLothes = searchTerm => {
const filteredResult = [];
data.forEach( item => {
    item.searchTerm.forEach(term => { 
         if (term === searchTerm) {
        filteredResult.push(item);
        setClothes(filteredResult);
    }
})   
    })
}

    return (<div className="cont">
<button className="change" onClick = {() => setClothes(data)}>All clothes</button> 
<button className="change" onClick = {() => filteredCLothes("clothes")}>Clothes</button>
<button className="change" onClick={() => filteredCLothes("shoes")}>Shoes</button>
<button className="change" onClick = {() => filteredCLothes("dress")}>Dresses</button>
<button className="change" onClick= {() => filteredCLothes ("skirt")}>Skirts</button>
<button className="change" onClick={() => filteredCLothes("pants")}>Pants</button>
<button className="change" onClick ={() => filteredCLothes("shirt")}>Shirts</button>
</div>   
    )
}

export default Buttons;