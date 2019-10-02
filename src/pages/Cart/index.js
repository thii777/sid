import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import newbalancecart from '../../assets/newbalancecart.jpg';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th>produto</th>
                        <th>qtd</th>
                        <th>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={newbalancecart} alt="tenis-ous" />
                        </td>
                        <td>
                            <strong>Tenis Ous</strong>
                            <span>R$ 219,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#093f79"
                                    />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#093f79"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 259,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#093f79" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar o pedido</button>

                <Total>
                    <span>total</span>
                    <strong>R$ 129,90</strong>
                </Total>
            </footer>
        </Container>
    );
}
