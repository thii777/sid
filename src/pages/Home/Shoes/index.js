import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from '../../../components/StylesStore/styles';
import newbalance from '../../../assets/newbalance.jpg';
import oakley from '../../../assets/oakley-halftrack.jpg';
import ous from '../../../assets/ous.jpg';

export default function Shoes() {
    return (
        <ProductList>
            <li>
                <img src={oakley} alt="Tenis" />
                <strong>Oakley</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={oakley} alt="Tenis" />
                <strong>Oakley</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={oakley} alt="Tenis" />
                <strong>Oakley</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={oakley} alt="Tenis" />
                <strong>Oakley</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={ous} alt="Tenis" />
                <strong>Ous</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={ous} alt="Tenis" />
                <strong>Ous</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={ous} alt="Tenis" />
                <strong>Ous</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={ous} alt="Tenis" />
                <strong>Ous</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={newbalance} alt="Tenis" />
                <strong>New Balance 500</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={newbalance} alt="Tenis" />
                <strong>New Balance 500</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={newbalance} alt="Tenis" />
                <strong>New Balance 500</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
            <li>
                <img src={newbalance} alt="Tenis" />
                <strong>New Balance 500</strong>
                <span>R$ 299,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 3
                    </div>
                    <span>adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
