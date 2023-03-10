import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

import { useManageProduct } from '../../hooks/useManageProduct'
// import { useManageCart } from '../../hooks/useManageCart'

import Layout from '../../layout/Layout'
import ProductDetails from '../../components/products/ProductDetails'

function CatalogDetails() {
	const { productId } = useParams<{ productId: string }>()

	// const { shoppingCart, setCartQuantity, findProductInCart } = useManageCart()
	const { storeProduct, fetchCatalogProduct } = useManageProduct()

	// const cartProduct = findProductInCart(shoppingCart)

	useEffect(() => {
		//if (cartProduct !== undefined) {
		//	setCartQuantity(cartProduct.quantity)
		// }

		if (!storeProduct) {
			fetchCatalogProduct(productId!)
		}

		// eslint-disable-next-line
	}, [productId, storeProduct])

	return (
		<Layout>
			<Container>
				<ProductDetails product={storeProduct} />
			</Container>
		</Layout>
	)
}

export default CatalogDetails
