import tempImage from '../../../assets/images/picture2.png'
const Vendor = ({image, name, occupation, rating, location}) => {
    return (
        <div className='VendorCard'>
            <img src={image || tempImage} alt="vendor image" />
            <h4 className='Vendor-Name'>{name || 'Blessed Creatives'}</h4>
            <p className='Vendor-Occupation'>{occupation || 'Interior designer'}</p>
            <p className='Vendor-Rating'><span>{rating || 4.2} </span>ratings</p>
            <p className='Vendor-Location'>{location || 'Oyo, Nigeria'}</p>
        </div>
    )
}

export default Vendor