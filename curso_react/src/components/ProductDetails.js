import React from 'react'
import cls from '../assets/css/ProductDetails.module.css'

function ProductDetails(props) {
    let colorOptions =
        props.data.colorOptions.map((item, pos) => {
            let classes = [cls.options]
            if (pos === props.currentPos) {
                classes.push(cls.selected)
            }
            return (
                <img className={classes.join(' ')} src={item.imageUrl} alt={item.styleName} key={pos} onClick={()=>{props.onColorOption(pos)}}/>

            )
        })
    
    let featureList = props.data.featureList.map((item, pos) => {
        let classes = [cls.featureItem]
        if (pos === props.currentFeature) {
            classes.push(cls.selectedFeature)
        } 
        return (
            <button className={classes.join(' ')} key={pos} onClick={()=>{props.onFeatureClick(pos)}} >{item}</button>
        )
    })
    return (
        <div className={cls.data}>
            <h1 className={cls.productTitle}>{props.data.title}</h1>
            <p className={cls.productDescription}> {props.data.description} </p>
            <div>
                <h3 className={cls.sectionHeading}>Select Color</h3>
                {colorOptions}
            </div>
            <div>
                <h3 className={cls.sectionHeading}>Features</h3>
                {featureList}
            </div>
            <button className={cls.primaryBtn}>Buy Now</button>
        </div>
    )
}

export default ProductDetails