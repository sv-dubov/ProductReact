import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './bootspricing.css';
import './App.css';

import Create from './components/crud/create';
import EclipseWidget from './components/eclipse';

class App extends React.Component {
  state = {
    products: [],
    loading: false,
    categoriesSelect: []
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    const urlCategories = 'https://localhost:44330/api/categories';
    this.setState({ loading: true });
    axios.get(urlCategories).then(
      (resp) => {
        console.log('-----axios res-----', resp);
        this.setState({ categoriesSelect: resp.data, loading: false });
      }
    );
  }

  deleteProduct(id) {
    const url = `https://localhost:44330/api/products/${id}`;
    axios.delete(url).then(
      (resp) => {
        this.setState({ products: resp.data, loading: false });
      }
    );
  }

  getListDataHandler = (e) => {
    e.preventDefault();
    const url = 'https://localhost:44330/api/products';
    this.setState({ loading: true });
    axios.get(url).then(
      (resp) => {
        console.log('-----axios res-----', resp);
        this.setState({ products: resp.data, loading: false });
      }
    );
  }

  render() {
    const { loading, categoriesSelect } = this.state;
    console.log("--Reander app state--", this.state);
    const todoItems = this.state.products.map((product) =>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">
            <span key={product.id}>{product.name}</span>
          </h4>
        </div>
        <div className="card-body">
          <p>
            <span key={product.id}>Ціна: {product.price} грн.</span>
          </p>
          <p>
            <span key={product.id}>Категорія: {product.categoryName} </span>
          </p>
          <p>
            <img key={product.id} src={product.image} alt="" />
          </p>
          <button type="button" className="btn btn-lg btn-primary">Купити</button>
          <button type="button" className="btn btn-lg btn-danger"
            onClick={() => {
              if (window.confirm('Ви впевнені, що хочете видалити цей продукт?'))
                this.deleteProduct(product.id)
            }} >Видалити</button>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        {loading && <EclipseWidget />}
        <div className="container">
          <h1>Вітаємо в нашому магазині</h1>
          <p>
            <button type="button" className="btn btn-lg btn-info" onClick={this.getListDataHandler}>Список продуктів</button>
          </p>
          <div className="card-deck mb-3 text-center" style={{ overflow: "hidden" }}>
            {todoItems}
          </div>
        </div>
        <Create categories={categoriesSelect} />
      </React.Fragment>
    );
  }
}

export default App;