import React, { Component } from 'react';
import axios from 'axios';
//import map from 'lodash/map';

import EclipseWidget from '../eclipse';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateProd extends Component {
    state = {
        category: '',
        name: '',
        price: '',
        image: '',
        categories: [],
        loading: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            categories: nextProps.categories
        };
    }

    addProductSubmitForm = (e) => {
        e.preventDefault();
        const {category, name, price, image} = this.state;
        const urlAddProduct = 'https://localhost:44330/api/products/create';
        this.setState({ loading: true });
        const model = {categoryId: category, name: name, price: price, image: image};
        axios.post(urlAddProduct, model).then(
            (resp) => {
                console.log('-----axios res add product-----', resp);
                this.setState({ category: '', name: '', price: '', image: '', loading: false });
            }
        );
    }

    render() {
        const { categories, loading } = this.state;
        const options = categories.map(t =>
            <option key={t.id} value={t.id}>{t.name}</option>
        );

        return (
            <React.Fragment>
                {loading && <EclipseWidget />}
                <h2>Додати продукт</h2>
                <div style={{ marginTop: 10 }}>
                <form onSubmit={this.addProductSubmitForm}>
                        <div className="form-group">
                            <label for="name">Назва: </label>
                            <input id="name"
                                name="name"
                                type="text"
                                onChange={this.onChange}
                                value={this.state.name}
                                placeholder="Назва продукта"
                                className="form-control" />
                        </div>

                        <div className="form-group">
                            <label for="">Ціна: </label>
                            <input id="price"
                                name="price"
                                type="text"
                                onChange={this.onChange}
                                value={this.state.price}
                                placeholder="Ціна продукта"
                                className="form-control" />
                        </div>

                        <div className="form-group">
                            <label for="image">Фото: </label>
                            <input id="image"
                                name="image"
                                type="text"
                                onChange={this.onChange}
                                value={this.state.image}
                                placeholder="Фото продукта"
                                className="form-control" />
                        </div>

                        <label for="category">Категорія: </label>
                        <p></p>
                        <select
                            className="form-control"
                            id="category"
                            name="category"
                            onChange={this.onChange}
                            value={this.state.category}
                        >
                            <option value="" disabled>Виберіть категорію</option>
                            {options}
                        </select>
                        <p></p>
                        <button type="submit" class="btn btn-md btn-success">Додати</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
const Create = (CreateProd);
export default Create;