import {useState , useEffect} from "react"
export default function DataBinding() {
    const [mars ,setMars] = useState();
    useEffect (() =>{
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
        .then (response=> response.json())
        .then (data =>{
            setMars (data)
        })
    },[])

    return(
        <div className="container">
            <h2>Mars Photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.Photos?.maps (photos =>{
                        <div className="card p-2 m-2 w-25">
                            <img src = {photos.img_src} className="card-img -top" height="150" alt="" />
                            <div className="card-header">
                                <h2>{photos.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                <p>{photos.rover.name}</p>
                            </div>
                        </div>
                    }
                        )
                }
            </div>
        </div>
    )
}
/*
export default function DatabindingComponent(){
    var categories= ["All", "Electronics", "Footwear", "fashion"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                        )
                }
            </ol>
            <h2>Select Category</h2>
            <select>
                {
                    categories.map(category =>
                        <option key={category} value={category}>{category}</option>
                        )
                }
            </select>
        </div>
    )
}
*/
