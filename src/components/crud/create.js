import React, { Component } from 'react';
import map from 'lodash/map';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateProd extends Component {

    state = {
        category: '',
        categories: []
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            categories: nextProps.categories
        };
    }
    render() {
        const { categories: categories } = this.state;
        const options = categories.map(t =>
            <option key={t.id} value={t.id}>{t.name}</option>
        );

        return (
            <React.Fragment>
                <h2>Додати продукт</h2>
                <div style={{ marginTop: 10 }}>
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
                        <select
                            className="form-control"
                            name="category"
                            onChange={this.onChange}
                            value={this.state.timezone}
                        >
                            <option value="" disabled>Виберіть категорію</option>
                            {options}
                        </select>
                        <p></p>
                        <div className="form-group">
                            <input type="submit" value="Додати" className="btn btn-md btn-success" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
const Create = (CreateProd);
export default Create;