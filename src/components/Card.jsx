import React from 'react'
import imagePerfume from '../assets/images/imagen_desktop.jpg'

export const Card=()=>{
    return(
        <div  id="card_container">
            <div className="card_image">
                <img src={imagePerfume} width="900" height="900" className="img-fluid" alt=""></img>
            </div>
            <div className="card_text">
                <div className="card_title1">
                    <h5>PERFUME</h5>
                </div>
                <div className="card_title">
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                </div>
                <div className="card_subtitle">
                    <p>A floral, solar and volultuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
                </div>
                <div className="card_price">
                    <div className="card_priceActual">
                        <h1>$149.99</h1>
                    </div>
                    <div className="card_priceBefore">
                        <p>$169.99</p>
                    </div>
                </div>
                <div className="card_button">
                    <button className="btn" id="card_buttonStyle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}