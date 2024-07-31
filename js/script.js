document.addEventListener("DOMContentLoaded", () => {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const priceRange = document.getElementById("price-range");
	const priceMin = document.getElementById("price-min");
	const priceMax = document.getElementById("price-max");
	const products = document.querySelectorAll(".phone-card");
	const resetFiltersBtn = document.querySelector(".reset-filters-btn");

	// Initialize price range display
	priceMin.textContent = priceRange.min;
	priceMax.textContent = priceRange.max;

	// Event listeners for checkboxes and price range
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", () => {
			filterProducts();
		});
	});

	priceRange.addEventListener("input", () => {
		priceMin.textContent = priceRange.value;
		filterProducts();
	});

	// Reset filters
	resetFiltersBtn.addEventListener("click", () => {
		// Uncheck all checkboxes
		checkboxes.forEach((checkbox) => (checkbox.checked = false));

		// Reset the price range
		priceRange.value = priceRange.min;
		priceMin.textContent = priceRange.min;

		// Show all products
		products.forEach((product) => (product.style.display = "block"));
	});

	function filterProducts() {
		const filters = {
			marca: Array.from(
				document.querySelectorAll('input[data-filter="marca"]:checked')
			).map((cb) => cb.value),
			precio: parseFloat(priceRange.value),
			pulgada: Array.from(
				document.querySelectorAll(
					'input[data-filter="pulgada"]:checked'
				)
			).map((cb) => cb.value),
		};

		products.forEach((product) => {
			const marca = product.getAttribute("data-marca");
			const precio = parseFloat(product.getAttribute("data-precio"));
			const pulgada = product.getAttribute("data-pulgada");

			const marcaMatches =
				filters.marca.length === 0 || filters.marca.includes(marca);
			const precioMatches = precio <= filters.precio;
			const pulgadaMatches =
				filters.pulgada.length === 0 ||
				filters.pulgada.includes(pulgada);

			if (marcaMatches && precioMatches && pulgadaMatches) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		});
	}
});
