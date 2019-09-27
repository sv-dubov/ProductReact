import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateProd extends Component {
    state = {
        categories: []
    }

    getListDataHandler = (e) => {
        e.preventDefault();
        const url = 'https://localhost:44330/api/categories';
        axios.get(url).then(
            (resp) => {
                this.setState({ categories: resp.data });
            }
        );
    }

    render() {
        const categoryItems = this.state.categories.map((category) =>
            <div>
                <form>
                    <div className="form-group">
                        <label>Назва: </label>
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
                    <label>Категорія: </label>
                    <p></p>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Вибрати категорію
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <option class="dropdown-item" key={category.id}>{category.Name}</option>
                            <option class="dropdown-item" key={category.id}>{category.Name}</option>
                        </div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className="form-group">
                        <input type="submit" value="Додати" className="btn btn-md btn-primary" />
                    </div>
                </form>
            </div>
        );
        return (
            <div style={{ marginTop: 10 }}>
                <p>
                    <button type="button" className="btn btn-lg btn-info" onClick={this.getListDataHandler}>Додати продукт</button>
                </p>
                {categoryItems}
            </div>
        );
    }
}
const Create = (CreateProd);
export default Create;