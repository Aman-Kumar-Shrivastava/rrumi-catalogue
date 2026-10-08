export default function Filters({
  categories,
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
}) {
  return (
    <section className="filters" aria-label="Filter products">
      <div className="filters__row">
        <input
          type="search"
          className="filters__search"
          placeholder="Search by name, metal or stone"
          aria-label="Search products"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
        <label className="filters__sort">
          <span>Sort by</span>
          <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </label>
      </div>
      <div className="chips">
        {['All', ...categories].map((name) => (
          <button
            key={name}
            type="button"
            className={name === category ? 'chip chip--active' : 'chip'}
            aria-pressed={name === category}
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  )
}
