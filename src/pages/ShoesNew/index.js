import React, { useState, useMemo } from 'react';
// import api from '../../services/api';

import camera from '../../assets/camera.svg';

import { ProductList } from '../../components/StylesNewProducts/index';

export default function ShoesNew() {
    const [images, setImages] = useState(null);
    const [products, setProducts] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const preview = useMemo(() => {
        return images ? URL.createObjectURL(images) : null;
    }, [images]);

    function handleSubmit() {
        // const teste = api.products;
        // return teste;
    }
    return (
        <ProductList>
            <form onSubmit={handleSubmit}>
                <label
                    id="images"
                    style={{ backgroundImage: `url(${preview})` }}
                >
                    <input
                        type="file"
                        multiple
                        onChange={e => setImages(e.target.files[0])}
                    />
                    <img src={camera} alt="Select images" />
                </label>

                <label htmlFor="products">Produto</label>
                <input
                    id="products"
                    placeholder="Nome do produto"
                    value={products}
                    onChange={e => setProducts(e.target.value)}
                />

                <label htmlFor="price">Preço</label>
                <input
                    id="price"
                    placeholder="Valor do produto"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />

                <label htmlFor="brand">Marca e/ou modelo</label>
                <input
                    id="brand"
                    placeholder="Marca do fabricante"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                />

                <label htmlFor="size">Tamanho</label>
                <input
                    id="size"
                    placeholder="Tamanho"
                    value={size}
                    onChange={e => setSize(e.target.value)}
                />

                <label htmlFor="amount">Estoque</label>
                <input
                    id="amount"
                    placeholder="Quantidade em estoque"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />

                <label htmlFor="category">Categoria</label>
                <input
                    id="category"
                    placeholder="Categoria do produto"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <label htmlFor="description">Descrição</label>
                <input
                    id="description"
                    placeholder="Descrição do produto"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button type="submit" className="btn">
                    Cadastrar
                </button>
            </form>
        </ProductList>
    );
}
