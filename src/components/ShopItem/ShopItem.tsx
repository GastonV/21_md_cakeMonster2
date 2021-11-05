import './ShopItem.scss';
import { FC } from 'react';

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

    <img
      className={cssName.imgCss}
      src={`${item.imgSrc}`}
      alt={`${item.title}`}
    />
    <div className={cssName.footer}>
      <h1>{`${item.title}`}</h1>
      <p>{`${item.price}`}</p>
    </div>
  </div>
);
export default ShopItem;
