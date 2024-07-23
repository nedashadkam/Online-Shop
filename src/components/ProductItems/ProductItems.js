import React, { useEffect, useState, useRef } from "react";
import './ProdactItems.css';
import ProdactItem from "../ProdactItem/ProdactItem";
import PropTypes from 'prop-types';

const ProdactItems = (props) => {

    const [arrayItems, setArrayItems] = useState(props.arrayItems);
    const [data, setData] = useState([]);
    const [searchBarValue, setSearchBarValue] = useState('');
    const searchBarInput = useRef()

    useEffect(() => {
        // searchBarInput.current.focus()
        setData(arrayItems)
    }, [])

    const searchFilterFunction = (event) => {
        const itemData = data.filter((item) => {
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
                    <input ref={searchBarInput} className="search-ber-filter" type="text" value={searchBarValue} onChange={searchFilterFunction} />
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
                    arrayItems.map((item, index) => {
                        return <div className="prodact-item-container" key={index}>
                            <ProdactItem
                                itemKey={index}
                                imageAddress={item.itemAddress}
                                itemName={item.itemName}
                                itemPrice={item.itemPrice}
                                itemInformation={item.itemInformation}
                            />
                        </div>
                    })
                }
            </div>
        </div>)
}

export default ProdactItems;

ProdactItems.propTypes = {
    arrayItems: PropTypes.array.isRequired,
    showSearchBar: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}