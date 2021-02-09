import React, { Component } from 'react'
import { Col, Modal, Button, Card, CardTitle } from 'react-materialize'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.productsOnCart !== this.props.data.productsOnCart) {
      if (this.props.data.productsOnCart.length == 0) {
        this.setState({
          flag: true
        })
      } else if (prevProps.data.productsOnCart.indexOf(this.props.product) !== -1 && this.props.data.productsOnCart.indexOf(this.props.product) === -1) {
        this.setState({
          flag: !this.state.flag
        })
      }
    }
  }

  handleClickAgregar = () => {
    const { product, data } = this.props;
    data.handleAddition(product);
    this.setState({
      flag: !this.state.flag
    });
  }

  handleClickRemover = () => {
    const { product, data } = this.props;
    data.handleRemove(product);
  }

  render() {
    const { product } = this.props;
    const { flag } = this.state;
    const trigger = <Button data-target={product.id} flat waves="effect" className="modal-trigger" >Vista Previa</Button>
    let boton;
    if (flag) {
      boton = <Button waves="effect" waves="light" className="boton-agregar" onClick={this.handleClickAgregar}>Agregar</Button>;
    } else {
      boton = <Button waves="effect" waves="light" className="boton-eliminar" onClick={this.handleClickRemover}>Eliminar</Button>;
    }

    return (
      <Col s={12} m={6} l={4}>
        <Card
          actions={[trigger, boton]}
          className="large multiline"
          header={<CardTitle image={product.baseimageurl} >{`S/ ${parseFloat((product.id / 150).toFixed(2))}`}</CardTitle>}
        >
          <h6>{`ID Producto: ${product.id}`}</h6>
          <p>{`Fecha de creación: ${product.date}`}</p>

        </Card>
        <Modal
          actions={<Button flat modal="close" waves="effect" waves="green">Cerrar</Button>}
          id={product.id}
        >
          <Card
            actions={boton}
            className="large multiline"
            header={<CardTitle image={product.baseimageurl} >{`S/ ${parseFloat((product.id / 150).toFixed(2))}`}</CardTitle>}
          >
            <h6>{`ID Producto: ${product.id}`}</h6>
            <h6>Información Extra</h6>
            <p>{`Dimensiones del producto:
                Alto: ${product.height} Ancho: ${product.width}`}
            </p>

          </Card>
        </Modal>
      </Col>
    );
  }
}

export default Product;


