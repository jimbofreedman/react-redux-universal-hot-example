import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {load} from 'redux/modules/info';
import {Grid, Row, Col} from 'react-bootstrap';

@connect(
    state => ({products: state.products.data}),
)
export default class InfoBar extends Component {
  static propTypes = {
    products: PropTypes.array
  }

  renderProduct(product) {
    if (product === undefined) {
      return (<div></div>);
    }
    return (
      <div>
        <img src={product.image_url} />
        <h4>{product.name}</h4>
        <h5>{product.merchant.name}</h5>
        <a href={product.affiliate_link}><button className="btn btn-primary">Yes Please!</button></a>
      </div>);
  }

  render() {
    const {products} = this.props; // eslint-disable-line no-shadow
    // const styles = require('./InfoBar.scss');
    const rows = [];
    const numProducts = products.length;
    for (let pIndex = 0; pIndex < numProducts; pIndex += 3) {
      const col1 = products[pIndex];
      const col2 = pIndex + 1 < numProducts ? products[pIndex + 1] : undefined;
      const col3 = pIndex + 2 < numProducts ? products[pIndex + 2] : undefined;
      rows.push(
        <Row key={pIndex / 3}>
          <Col key={pIndex} xs={3} sm={3} md={3} lg={3}>{this.renderProduct(col1)}</Col>
          <Col key={pIndex + 1} xs={3} sm={3} md={3} lg={3}>{this.renderProduct(col2)}</Col>
          <Col key={pIndex + 2} xs={3} sm={3} md={3} lg={3}>{this.renderProduct(col3)}</Col>
        </Row>
      );
    }

    return (
      <div>
        <Grid>
          {rows}
        </Grid>
      </div>
    );
  }
}
