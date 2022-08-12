const VendorCard = ({image, name, occupation}) => {
    return (
        <div className="VendorCard">
            <img src={image} alt="vendor" />
            <h2>{name}</h2>
            <p>{occupation}</p>
            <div>
                <button>call</button>
                <button>message</button>
            </div>
        </div>
    )
}

export default VendorCard