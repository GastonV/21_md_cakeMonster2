import './shopItem.scss';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type ShopProps = {
  item: {
    title: string,
    price?: number,
    imgSrc: string,
    type?: string | undefined,
  }
  displayedOn: boolean | null,
  cssName: {
    container: string,
    imgCss: string
    footer: string
  }
}

const ShopItem: FC<ShopProps> = ({
  item,
  displayedOn,
  cssName,
}) => (
  <div
    className={cssName.container}
    itemType={`${item.type}`}
  >
    <div className="img__wrapper">
      <img
        className={cssName.imgCss}
        src={`${item.imgSrc}`}
        alt={`${item.title}`}
      />
      <span className="img__shoppingCart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
    </div>
    <div className={cssName.footer}>
      <h1>{`${item.title}`}</h1>
      <p>{`$${item.price}`}</p>
    </div>
  </div>
);
export default ShopItem;
