export default function ProductImage({ product }) {
  if (product.image) {
    return (
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
    )
  }

  return (
    <div className="product-image product-image--placeholder" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M20 12h24l12 14-24 28L8 26z" />
        <path d="M8 26h48M20 12l-4 14 16 28 16-28-4-14M26 26l6-14 6 14" />
      </svg>
    </div>
  )
}
