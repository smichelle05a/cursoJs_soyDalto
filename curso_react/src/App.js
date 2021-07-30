import React, { Component } from 'react'
import './assets/img/log  o.svg'
import cls from './assets/css/App.module.css';
import './assets/css/bootstrap/bootstrap.css'
import './assets/css/style.css'
import ProductData from './components/ProductData';
import ProductPreview from './components/ProductPreview';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';

/* Importar componentes */

// import BlogCard from './components/BlogCard'
// import { isEmpty } from './Utils'


class App extends Component {

/*   state = {
    showBlogs: true,

    blogArr: [
      {
        id: 1,
        title: 'Blog title 1',
        description: 'Repudiandae voluptatum necessitatibus numquam mollitia modi error voluptates fuga suscipit quae harum!',
        likes: 0
      },
      {
        id: 2,
        title: 'Blog title 2',
        description: 'Vel dolore rerum dolorem sit exercitationem nemo necessitatibus quas perferendis ipsa eligendi.',
        likes: 0
      },
      {
        id: 3,
        title: 'Blog title 3',
        description: 'Suscipit ducimus ex voluptatum quae, iusto neque? Cupiditate aliquid ipsum hic unde?',
        likes: 0
      }
    ]

  }

  onLike = (val) => {
    let updArr = this.state.blogArr;
    let updObj = updArr[val];

    updObj.likes = updObj.likes + 1;
    updArr[val] = updObj;

    this.setState({ blogArr: updArr });

    console.log(updObj);
  }

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    })
  } */
  
  state = {
    productData: ProductData,
    currentPos: 0,
    currentFeature: 0
  }

  onColorOption = (pos) => {
    this.setState(()=>{ return {currentPos: pos} })
  }
  
  onFeatureClick = (pos) => {
    this.setState(() => { return { currentFeature: pos}})
  }
  
  render() {

    /*     console.log(this.state);

    let blogCards = isEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard image="https://picsum.photos/200" title={item.title} description={item.description} key={item.id} likes={item.likes} onLike={ () => this.onLike(pos)} />
      )  
    }) */

    let currentPreview = this.state.productData.colorOptions[this.state.currentPos].imageUrl

    return (
      <div className="App">
          <NavBar/>
        <section className={cls.mainContainer}>
          <div className={cls.preview}>
            <ProductPreview currentPreview={currentPreview} currentFeature={this.state.currentFeature} />
          </div>
          <div className={cls.data}>
            <ProductDetails data={this.state.productData} currentPos={this.state.currentPos} onColorOption={this.onColorOption} onFeatureClick={this.onFeatureClick} currentFeature={this.state.currentFeature} />
          </div>
        </section>
        <script src="./assets/css/bootstrap/bootstrap.bundle.js"></script>
      </div>
    );
  }
}
/* class App extends Component {
  state = {
    showBlogs: true
  }

  HolaMundo = (nombre, edad) => {
    let presentacion =
      <div>
        <h2 className="text-success"> Hola, soy {nombre} </h2>
        <h3> Tengo {edad} años </h3>
      </div>
    return presentacion
  }

  nombre = 'Scarlet';

  blogCards = isEmpty(this.blogArr) ? [] : this.blogArr.map((i) => {
    return <BlogCard image="https://picsum.photos/200" title={i.title} description={i.description} key={i.id} />
  });

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    })
    // this.showBlogs = !this.showBlogs;
    // console.log(this.state.showBlogs);
  };

  render() {
    console.log(`Render called. showBlogs: ${this.state.showBlogs}`);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenido al curso de React
          </p>
          {this.HolaMundo(this.nombre, 30)}
        </header>
        <section className="p-3">
          <button className="btn btn-outline-dark" onClick={this.onHideBtnClick}>{this.state.showBlogs? 'Hide List' : 'Show List'}</button>
          <div className="container my-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              { this.state.showBlogs ? 
                this.blogCards
                : null
              }
            </div>
          </div>
        </section>
        <script src="./assets/css/bootstrap/bootstrap.bundle.js"></script>
      </div>
    );
  }
}
 */

export default App;
