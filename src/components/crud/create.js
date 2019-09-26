import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateProd extends Component {
    state = {
        products: []
    }

    getListDataHandler = (e) => {
        e.preventDefault();
        const url = 'https://localhost:44330/api/products';
        this.setState({ loading: true });
        axios.get(url).then(
            (resp) => {
                this.setState({ products: resp.data });
            }
        );
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3>Додати продукт</h3>
            <form>
                <div className="form-group">
                    <label>Назва:  </label>
                    <input type="text" placeholder="Назва продукта" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Ціна: </label>
                    <input type="text" placeholder="Ціна продукта" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Фото: </label>
                    <input type="text" placeholder="Фото продукта" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Категорія: </label>
                        <p></p>
                        <select value={this.state}>
                            {
                                this.state.products.map(product => {
                                    return (
                                        <option key={product.id}>{product.categoryName}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                <div className="form-group">
                    <input type="submit" value="Додати" className="btn btn-primary" />
                </div>
            </form>
        </div>
        );
    }
}
const Create = (CreateProd);
export default Create;