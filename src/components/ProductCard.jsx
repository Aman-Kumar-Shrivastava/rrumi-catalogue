import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../utils/format.js'

export default function ProductCard({ product, onSelect }) {
  return (
    <article className="card">
      <div className="card__media">
        <ProductImage product={product} />
        {product.isNew && <span className="badge">New</span>}
      </div>
      <div className="card__body">
        <p className="card__category">{product.category}</p>
        <h3 className="card__name">
          {/* The button's ::after stretches over the card so the whole tile is clickable. */}
          <button type="button" className="card__link" onClick={() => onSelect(product)}>
            {product.name}
          </button>
        </h3>
        <p className="card__meta">{product.metal}</p>
        <p className="card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
