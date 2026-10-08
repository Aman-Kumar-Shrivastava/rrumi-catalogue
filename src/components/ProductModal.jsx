import { useEffect, useRef } from 'react'
import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../utils/format.js'

export default function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal__media">
          <ProductImage product={product} />
        </div>
        <div className="modal__details">
          <p className="card__category">{product.category}</p>
          <h2 id="modal-title" className="modal__title">
            {product.name}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.description}</p>
          <dl className="specs">
            <div>
              <dt>Metal</dt>
              <dd>{product.metal}</dd>
            </div>
            <div>
              <dt>Stone</dt>
              <dd>{product.stone}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>{product.id}</dd>
            </div>
          </dl>
        </div>
      </div>
    </dialog>
  )
}
