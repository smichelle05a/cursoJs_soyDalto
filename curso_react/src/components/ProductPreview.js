import React from 'react';
import cls from '../assets/css/ProductPreview.module.css'

function ProductPreview(props) {
    const time = () => {
        let hour = new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`
        let minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`
        return `${hour}:${minutes}`
    }

    return (
        <div className={cls.preview}>
            <img src={props.currentPreview} alt="Product Preview" />
            {
                props.currentFeature === 1 ?
                    <div className={cls.heartRateSection}>
                        <i className="fas fa-heartbeat"></i>
                        <p>78</p>
                    </div>
                    :
                    <div className={cls.timeSection}>
                        <p>
                            {time()}
                        </p>
                    </div>

            }
        </div>
    )
}

export default ProductPreview