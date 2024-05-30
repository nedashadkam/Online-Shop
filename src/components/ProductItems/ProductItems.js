import React from "react";
import './ProdactItems.css';
import ProdactItem from "../ProdactItem/ProdactItem";

const ProdactItems = (props) => {
    return (
        <div className="page-container">
            <div>
                <span className="line" />
                <span className="title" >{props.title}</span>
                <span className="line" />
            </div>
            <div className="box-items">
                {
                    props.arrayItems.map((item) => {
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


