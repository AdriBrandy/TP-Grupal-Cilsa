document.addEventListener("DOMContentLoaded", () => {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const products = document.querySelectorAll(".phone-card");

	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", () => {
			filterProducts();
		});
	});

	function filterProducts() {
		const filters = {
			marca: Array.from(
				document.querySelectorAll('input[data-filter="marca"]:checked')
			).map((cb) => cb.value),
			precio: Array.from(
				document.querySelectorAll('input[data-filter="precio"]:checked')
			).map((cb) => cb.value),
			pulgada: Array.from(
				document.querySelectorAll(
					'input[data-filter="pulgada"]:checked'
				)
			).map((cb) => cb.value),
		};

		products.forEach((product) => {
			const marca = product.getAttribute("data-marca");
			const precio = parseFloat(product.getAttribute("data-precio"));
			const pulgada = parseFloat(product.getAttribute("data-pulgada"));

			const marcaMatches =
				filters.marca.length === 0 || filters.marca.includes(marca);
			const precioMatches =
				filters.precio.length === 0 ||
				filters.precio.some((range) => {
					const [min, max] = range.split("-").map(Number);
					return precio >= min && precio <= max;
				});
			const pulgadaMatches =
				filters.pulgada.length === 0 ||
				filters.pulgada.includes(pulgada.toString());

			if (marcaMatches && precioMatches && pulgadaMatches) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		});
	}
});
