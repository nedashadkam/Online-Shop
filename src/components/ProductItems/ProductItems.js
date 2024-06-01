import React, { useEffect, useState } from "react";
import './ProdactItems.css';
import ProdactItem from "../ProdactItem/ProdactItem";

const ProdactItems = (props) => {
    const [arrayItems, setArrayItems] = useState(props.arrayItems);
    const [neda, setNeda] = useState([]);
    const [searchBarValue, setSearchBarValue] = useState('');
    useEffect(() => {
        setNeda(arrayItems)
    }, [])
    const searchFilterFunction = (event) => {
        const itemData = neda.filter((item) => {
            const name = item.itemName;
            const text = event.target.value;
            return name.indexOf(text) > -1
        })
        setArrayItems(itemData)
        setSearchBarValue(event.target.value)
    }
    return (
        <div className="page-container">

            {
                props.showSearchBar ? <div className="search-bar-container">
                    <input className="search-ber-filter" type="text" value={searchBarValue} onChange={searchFilterFunction} />
                    <i style={{ color: 'lightgray' }} className="material-icons" >search</i>
                </div> : null
            }
            <div>
                <span className="line" />
                <span className="title" >{props.title}</span>
                <span className="line" />
            </div>
            <div className="box-items">
                {
                    arrayItems.map((item) => {
                        return <ProdactItem
                            imageAddress={item.itemAddress}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemInformation={item.itemInformation}
                        />
                    })
                }
            </div>
        </div>)
}

export default ProdactItems;


