import React from 'react';

import {
    PageProductList,
    Container,
} from '../../components/StylePageProducts/styles';

export default function ShoesPageProducts() {
    return (
        <Container>
            <PageProductList>
                <div>
                    <h2>Galeria de fotos</h2>
                    <div>
                        <img
                            src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/nkc7urdmmfg6aceagcxl/air-force-1-07-lv8-mens-shoe-61Bzq8.jpg"
                            alt=""
                        />
                        <img
                            src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/tftp9thanucvmihlmtbm/air-force-1-07-lv8-mens-shoe-61Bzq8.jpg"
                            alt=""
                        />
                        <img
                            src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/uwngiv4fku9dh0ylhwo1/air-force-1-07-lv8-mens-shoe-61Bzq8.jpg"
                            alt=""
                        />
                        <img
                            src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/blzoifcvb7pzczhjqh6h/air-force-1-07-lv8-mens-shoe-61Bzq8.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="sider-nav">
                    <h3>Detalhes do produto</h3>
                    <ul>
                        <li className="category">
                            <span>Categoria:</span> Calçado
                        </li>
                        <li className="brand">
                            <span>Marca:</span> Nike
                        </li>
                        <li className="price">
                            <span>Oferta:</span> R$ 499
                        </li>
                        <li className="color">
                            <span>Cor:</span> Branco
                        </li>
                        <li className="size">
                            <span>Tamanho:</span> 39/40
                        </li>
                        <li className="code">
                            <span>Codigo do produto:</span> 41625
                        </li>
                        <button type="button">Comprar</button>
                        <button className="favorite" type="button">
                            Adcionar aos favoritos
                        </button>
                    </ul>

                    <div className="productDescription">
                        <h3>Descrição do produto</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </PageProductList>
        </Container>
    );
}
