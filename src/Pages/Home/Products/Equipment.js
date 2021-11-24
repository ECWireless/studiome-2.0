import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../../components/Spinner';
import EquipmentSelected from '../../../components/Equipment/EquipmentSelected';

const Equipment = (props) => {
  const { id } = useParams();
  const [products, setProducts] = React.useState([]);
  const [selected, setSelected] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [classActive, setClassActive] = React.useState('907');

  React.useEffect(() => {
    window.scroll({
      top: 0,
    });
    if (!id) {
      switchEquipment(props.activeEquipmentButton);
      setClassActive(props.activeEquipmentButton);
    }

    switch (id) {
      case 'equipment':
        switchEquipment('907');
        break;
      case 'lighting':
        switchEquipment('965');
        break;
      case 'audio':
        switchEquipment('963');
        break;
    
      default:
        break;
    }
  }, [id, props.activeEquipmentButton]);

  const switchEquipment = (selected) => {
    setIsLoading(true);
    return fetch(`https://studiome.me/wp-json/wp/v2/pages/${selected}`)
      .then(response => response.json())
      .then(responseJson => {
        let productsArray = responseJson.acf.product_blocks;
        let products = [];

        for (let i = 0; i < productsArray.length; i++) {
          products.push(productsArray[i])
        }

        setProducts(products);
        setIsLoading(false);
        setClassActive(selected);
      })
  }

    const onProductSelect = (index) => {
      setSelected(!selected);
      setSelectedProduct(products[index]);
      setIndex(index);
      window.scroll({
        top: 0,
      });
    }

    const onPreviousButton = () => {
      setSelectedProduct(products[index - 1]);
    }

    const onNextButton = () => {
      setSelectedProduct(products[index + 1]);
      setIndex(index + 1);
    }

    const onBackButton = () => {
      setSelected(!selected);
      window.scroll({
        top: 0,
      });
    }

    let content = <div style={{gridColumn: '1 / -1'}}><Spinner /></div>
        
    // Equipment List
    if (!isLoading) {
      content = products.map((product, index) => (
      <div className="equipment__component" onClick={() => onProductSelect(index)} key={index}>
        <div className="equipment__component-photo" style={{backgroundImage: `url(${product.photo})`}} alt="Equipment-Photo" />
        <h1 className="equipment__component-heading">{product.title}</h1>
      </div>
    ))}

    // Equipment Details
    if (selected) {
      content = <EquipmentSelected
        onBackButton={onBackButton}
        selectedProduct={selectedProduct}
        index={index}
        products={products}
        onPreviousButton={onPreviousButton}
        onNextButton={onNextButton}
      />
    }

  return (
    // Main Page
    <div className="equipment">
      <div className="equipment__banner" />
      <div className="equipment__banner-container">
        <h1 className="equipment__heading">Equipment</h1>
        <div className="equipment__border" />
      </div>
      <div className="equipment__container">
        {!selected
            ? <React.Fragment>
            <button
                className={classActive === '907' 
                    ? 'equipment__camera-button--active' :
                    'equipment__camera-button'}
                onClick={() => switchEquipment('907')}
            >Cameras</button>
            <button
                className={classActive === '965' 
                ? 'equipment__lighting-button--active' 
                : 'equipment__lighting-button'}
                onClick={() => switchEquipment('965')}
            >Lighting</button>
            <button
                className={classActive === '963' 
                ? 'equipment__audio-button--active' 
                : 'equipment__audio-button'}
                onClick={() => switchEquipment('963')}
            >Audio</button>
            </React.Fragment>
            : null
        }

        <div className={!selected 
            ? 'equipment__component-container' 
            : 'equipment__component-container-selected'}
        >
            {content}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
	return {
    activeEquipmentButton: state.activeEquipmentButton,
	};
};

export default connect( mapStateToProps )(Equipment);
