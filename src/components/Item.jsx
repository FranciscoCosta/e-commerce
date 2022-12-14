import React from 'react';
import { string, number, func } from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';
import { GoPackage } from 'react-icons/go';

export default class Item extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      handleAddCart,
      id,
      shipping,
    } = this.props;

    return (
      <div className='card-item-container' data-aos="fade-up">
        <Link to={ `/ProductDetails/${id}` } className="Link-product">
          <div className="card-item-product">
              <img src={ thumbnail } alt={ title } />
              {shipping.free_shipping && 
              <div className='free-shipping'>
                <GoPackage size={50} color="#c18a54"/>
                <p>Frete Grátis</p>
              </div>}
              <h6>{title}</h6>
              <p>{`R$ ${price}`}</p>
            </div>
        </Link>

        <button
          className="add-cart"
          type="button"
          onClick={ handleAddCart }
          value={ id }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  handleAddCart: func,
}.isRequired;