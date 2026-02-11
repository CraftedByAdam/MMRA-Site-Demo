// --- 1. MOBILE MENU ---
// This code makes the navbar menu appear/disappear on small screens when you tap the hamburger icon.
// Like opening and closing a toy box lid!
const mobileMenuBtn = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
	mobileMenuBtn.addEventListener('click', () => {
		// Toggle the 'active' class to show/hide the menu
		navLinks.classList.toggle('active');
	});
}

// --- 2. PRODUCT POPUP ---
// This code makes a big card (popup) appear when you click 'View Product'.
// It's like opening a book to see more details!
// We'll create the popup only when needed, so the page stays fast.

function createBigCard(product) {
	// Create the popup elements
	const overlay = document.createElement('div');
	overlay.style.position = 'fixed';
	overlay.style.top = 0;
	overlay.style.left = 0;
	overlay.style.width = '100vw';
	overlay.style.height = '100vh';
	overlay.style.background = 'rgba(0,0,0,0.7)';
	overlay.style.display = 'flex';
	overlay.style.justifyContent = 'center';
	overlay.style.alignItems = 'center';
	overlay.style.zIndex = 2000;

	// Big card container
	const card = document.createElement('div');
	card.className = 'big-card-container';

	// Close button
	const closeBtn = document.createElement('button');
	closeBtn.className = 'close-btn';
	closeBtn.innerHTML = '&times;';
	closeBtn.setAttribute('aria-label', 'Close');
	closeBtn.onclick = () => document.body.removeChild(overlay);


	// Main product image
	const img = document.createElement('img');
	img.id = 'big-card-img';
	img.src = product.img;
	img.alt = product.name;

	// --- Image gallery thumbnails ---
	// If product.gallery exists and has images, show them as thumbnails
	let galleryDiv = null;
	if (product.gallery && product.gallery.length > 0) {
		galleryDiv = document.createElement('div');
		galleryDiv.className = 'big-card-gallery';
		product.gallery.forEach(galleryImgSrc => {
			const thumb = document.createElement('img');
			thumb.className = 'big-card-thumb';
			thumb.src = galleryImgSrc;
			thumb.alt = product.name + ' angle';
			thumb.onclick = () => {
				img.src = galleryImgSrc;
			};
			galleryDiv.appendChild(thumb);
		});
	}

	// Info section
	const info = document.createElement('div');
	info.className = 'big-card-info';

	const h3 = document.createElement('h3');
	h3.className = 'big-card-h3';
	h3.textContent = product.name;

	const price = document.createElement('p');
	price.id = 'big-card-price';
	price.textContent = product.price;

	const desc = document.createElement('p');
	desc.className = 'big-card-p';
	desc.textContent = product.desc;

	// Facts list (optional)
	if (product.facts && product.facts.length > 0) {
		const ul = document.createElement('ul');
		ul.className = 'big-card-list';
		product.facts.forEach(fact => {
			const li = document.createElement('li');
			li.className = 'item-facts';
			li.textContent = fact;
			ul.appendChild(li);
		});
		info.appendChild(ul);
	}

	// Put together info
	info.appendChild(h3);
	info.appendChild(price);
	info.appendChild(desc);


	// Add everything to card
	card.appendChild(closeBtn);
	card.appendChild(img);
	if (galleryDiv) card.appendChild(galleryDiv);
	card.appendChild(info);

	// Add card to overlay
	overlay.appendChild(card);

	// Add overlay to page
	document.body.appendChild(overlay);
}

// Find all product cards and add click event to their buttons
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, idx) => {
	const btn = card.querySelector('.view-btn');
	if (btn) {
		btn.addEventListener('click', () => {
			// Get product info from the card
			const img = card.querySelector('.product-img');
			const name = card.querySelector('.item-name');
			const price = card.querySelector('.item-price');
			// Example: Each product gets its own gallery array
			// You can customize these arrays for each product
			const galleries = [
				[
					'assets/images/AnatomicalHeadModels1.jpeg',
					'assets/images/AnatomicalHeadModels2.jpeg',
					'assets/images/AnatomicalHeadModels3.jpeg'
				],
				[
					'assets/images/AnatomicalHeadModels2.jpeg',
					'assets/images/AnatomicalHeadModels1.jpeg',
					'assets/images/AnatomicalHeadModels3.jpeg'
				],
				[
					'assets/images/AnatomicalHeadModels3.jpeg',
					'assets/images/AnatomicalHeadModels1.jpeg',
					'assets/images/AnatomicalHeadModels2.jpeg'
				],
				[
					'assets/images/AnatomicalHeadModels4.jpeg',
					'assets/images/AnatomicalHeadModels1.jpeg',
					'assets/images/AnatomicalHeadModels2.jpeg'
				],
				[
					'assets/images/AnatomicalHeadModels5.jpeg',
					'assets/images/AnatomicalHeadModels1.jpeg',
					'assets/images/AnatomicalHeadModels2.jpeg'
				]
			];
			const desc = 'A hand-finished, high detail Anatomical Head. This piece captures every fine detail of the human form, preserved in gallery grade plaster.';
			const facts = [
				'Made in USA',
				"It's made of gallery grade plaster",
				"Great for artists, students, collectors",
				'Limited edition'
			];
			createBigCard({
				img: img ? img.src : '',
				name: name ? name.textContent : '',
				price: price ? price.textContent : '',
				desc,
				facts,
				gallery: galleries[idx] || []
			});
		});
	}
});

// --- 3. CONTACT FORM ---
// This code makes the contact form show a message when you submit it.
// Like sending a letter and getting a thank you note!
const contactForm = document.getElementById('my-form');
if (contactForm) {
	contactForm.addEventListener('submit', function(event) {
		event.preventDefault(); // Stop the page from reloading
		// Show a thank you message
		const status = document.getElementById('form-status');
		if (status) {
			status.textContent = 'Thank you for contacting us! We will get back to you soon.';
			status.style.color = '#ff4d4d';
		}
		// Optionally, clear the form
		contactForm.reset();
	});
}
