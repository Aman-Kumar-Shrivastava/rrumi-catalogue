import { useMemo, useState } from 'react'
import Filters from './components/Filters.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductModal from './components/ProductModal.jsx'
import { categories, products } from './data/products.js'

const SORTERS = {
  featured: null,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
}

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase()
    const matches = products.filter((product) => {
      if (category !== 'All' && product.category !== category) return false
      if (!term) return true
      return [product.name, product.category, product.metal, product.stone, product.id].some(
        (field) => field.toLowerCase().includes(term),
      )
    })
    const sorter = SORTERS[sort]
    return sorter ? [...matches].sort(sorter) : matches
  }, [query, category, sort])

  const resetFilters = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <>
      <header className="header">
        <p className="header__eyebrow">Catalogue</p>
        <h1 className="header__brand">R Rumi Diamond</h1>
        <p className="header__tagline">Fine diamond jewellery, crafted to be worn every day.</p>
      </header>

      <main className="container">
        <Filters
          categories={categories}
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          sort={sort}
          onSortChange={setSort}
        />

        <p className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
        </p>

        {visible.length > 0 ? (
          <div className="grid">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelected} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>No pieces match your search.</p>
            <button type="button" className="chip" onClick={resetFilters}>
              Clear filters
            </button>
          </div>
        )}
      </main>

      <footer className="footer">© {new Date().getFullYear()} R Rumi Diamond</footer>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
