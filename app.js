/* ========================================
   PENDOOROOTS — Luxury Botanical Application
   ======================================== */

// ===== PRODUCT DATA =====
const PRODUCTS = [
    {
        id: 1, slug: 'lemoo-washer', name: 'LEMOO Washer', variant: '500ml',
        category: 'Kitchen Care', collection: 'kitchen', price: 320, oldPrice: 400,
        rating: 4.9, reviews: 892, stock: 150, badge: 'Hero Product',
        image: 'images/lemoo-washer.png',
        images: ['images/lemoo-washer.png'],
        description: 'The LEMOO Washer — Make Every Dish Shine. Our signature dish wash combines the power of natural lemon extract with gentle botanical surfactants. Grease lifter, skin friendly, and delivers perfect shine. Every purchase donates Rs.20 to #saveGAZAmovement.',
        ingredients: ['Lemon Extract', 'Coconut-derived Surfactant', 'Aloe Vera', 'Vitamin E', 'Citronella Essential Oil'],
        benefits: ['Grease Lifting Power', 'Skin Friendly', 'Perfect Shine', 'Natural Lemon Fragrance', 'Eco-Friendly Formula'],
        howToUse: 'Apply a small amount to sponge or directly on dishes. Lather and rinse thoroughly. A little goes a long way.',
        sizes: ['500ml', '1L'],
        relatedIds: [2, 13, 15]
    },
    {
        id: 2, slug: 'lemoo-washer-large', name: 'LEMOO Washer', variant: '1L Family Pack',
        category: 'Kitchen Care', collection: 'kitchen', price: 500, oldPrice: 600,
        rating: 4.9, reviews: 612, stock: 95, badge: 'Best Value',
        image: 'images/lemoo-washer.png',
        images: ['images/lemoo-washer.png'],
        description: 'The larger size of our hero LEMOO Washer. Perfect for families who value clean ingredients and sparkling dishes. Grease lifter, skin friendly, perfect shine.',
        ingredients: ['Lemon Extract', 'Coconut-derived Surfactant', 'Aloe Vera', 'Vitamin E', 'Citronella Essential Oil'],
        benefits: ['Economical Family Size', 'Grease Lifting Power', 'Skin Friendly', 'Natural Lemon Fragrance', 'Eco-Friendly'],
        howToUse: 'Apply a small amount to sponge or directly on dishes. Lather and rinse thoroughly.',
        sizes: ['500ml', '1L'],
        relatedIds: [1, 13, 14]
    },
    {
        id: 3, slug: 'rose-hand-wash', name: 'Rose Petal Hand Wash', variant: '250ml',
        category: 'Hand Care', collection: 'rose', price: 450, oldPrice: null,
        rating: 4.7, reviews: 189, stock: 73, badge: 'New',
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400',
        images: ['https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800'],
        description: 'Enriched with real rose petal extract, this luxurious hand wash transforms hand washing into a sensory ritual. Gentle enough for frequent use.',
        ingredients: ['Rosa Damascena Extract', 'Glycerin', 'Aloe Vera', 'Vitamin E', 'Rose Essential Oil'],
        benefits: ['Moisturizing Formula', 'Natural Rose Fragrance', 'Gentle on Skin', 'Antibacterial', 'Paraben Free'],
        howToUse: 'Wet hands, apply a pump, lather for 20 seconds, and rinse. Follow with PendooRoots hand cream.',
        sizes: ['250ml', '500ml'],
        relatedIds: [4, 6, 8]
    },
    {
        id: 4, slug: 'aloe-vera-hand-wash', name: 'Aloe Vera Hand Wash', variant: '250ml',
        category: 'Hand Care', collection: 'aloe', price: 450, oldPrice: null,
        rating: 4.8, reviews: 267, stock: 91, badge: null,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
        images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800'],
        description: 'Pure aloe vera hand wash that cleanses and soothes simultaneously. Perfect for sensitive skin and frequent hand washers.',
        ingredients: ['Aloe Barbadensis Leaf Juice', 'Coconut-derived Surfactant', 'Glycerin', 'Vitamin E', 'Chamomile Extract'],
        benefits: ['Soothes Irritated Skin', 'Deeply Moisturizing', 'pH Balanced', 'Hypoallergenic', 'Cruelty Free'],
        howToUse: 'Wet hands, apply a pump, lather gently, and rinse. Safe for all ages.',
        sizes: ['250ml', '500ml'],
        relatedIds: [3, 5, 7]
    },
    {
        id: 5, slug: 'rose-body-wash', name: 'Rose Body Wash', variant: '400ml',
        category: 'Body Care', collection: 'rose', price: 650, oldPrice: 750,
        rating: 4.9, reviews: 345, stock: 48, badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
        images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800'],
        description: 'A shower experience fit for royalty. Infused with real rose extract and enriched with shea butter for skin that feels petal-soft.',
        ingredients: ['Rosa Damascena Extract', 'Shea Butter', 'Coconut Oil', 'Glycerin', 'Rose Essential Oil'],
        benefits: ['Luxurious Lather', 'Deep Hydration', 'Natural Rose Scent', 'Sulfate Free', 'Long-Lasting Fragrance'],
        howToUse: 'Apply to wet skin, massage in circular motions, rinse. For best results, follow with PendooRoots body lotion.',
        sizes: ['200ml', '400ml'],
        relatedIds: [6, 3, 8]
    },
    {
        id: 6, slug: 'aloe-vera-body-wash', name: 'Aloe Vera Body Wash', variant: '400ml',
        category: 'Body Care', collection: 'aloe', price: 650, oldPrice: null,
        rating: 4.7, reviews: 198, stock: 56, badge: null,
        image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=400',
        images: ['https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=800'],
        description: 'Cool, refreshing, and deeply nourishing. Our aloe vera body wash turns your daily shower into a spa-like escape.',
        ingredients: ['Aloe Barbadensis Leaf Juice', 'Cucumber Extract', 'Vitamin E', 'Coconut-derived Surfactant', 'Green Tea Extract'],
        benefits: ['Cooling Sensation', 'Soothes Sun-Exposed Skin', 'Lightweight Formula', 'Refreshing Aroma', 'Dermatologically Tested'],
        howToUse: 'Apply to wet skin, gently lather, and rinse. Enjoy the cooling sensation.',
        sizes: ['200ml', '400ml'],
        relatedIds: [5, 4, 7]
    },
    {
        id: 7, slug: 'luxury-shampoo', name: 'Botanical Luxury Shampoo', variant: '300ml',
        category: 'Hair Care', collection: 'premium', price: 780, oldPrice: 880,
        rating: 4.9, reviews: 456, stock: 34, badge: 'Editor\'s Pick',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400',
        images: ['https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800'],
        description: 'Our premium shampoo formulated with rare botanical extracts. Repairs, strengthens, and adds brilliant shine to every strand.',
        ingredients: ['Argan Oil', 'Keratin', 'Biotin', 'Rosemary Extract', 'Green Tea', 'Coconut Milk'],
        benefits: ['Deep Repair', 'Adds Shine', 'Reduces Frizz', 'Sulfate Free', 'Color Safe', 'Volumizing'],
        howToUse: 'Wet hair thoroughly, apply shampoo, massage into scalp and lengths, leave for 2 minutes, rinse. Follow with conditioner.',
        sizes: ['200ml', '300ml'],
        relatedIds: [8, 5, 6]
    },
    {
        id: 8, slug: 'herbal-conditioner', name: 'Herbal Conditioner', variant: '300ml',
        category: 'Hair Care', collection: 'premium', price: 750, oldPrice: null,
        rating: 4.8, reviews: 321, stock: 41, badge: null,
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400',
        images: ['https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800'],
        description: 'Silky smooth conditioning with herbal intelligence. Detangles, nourishes, and protects without weighing hair down.',
        ingredients: ['Hibiscus Extract', 'Fenugreek', 'Amla', 'Coconut Oil', 'Shea Butter', 'Vitamin E'],
        benefits: ['Deep Nourishment', 'Easy Detangling', 'Lightweight Formula', 'Adds Volume', 'Herbal Formula'],
        howToUse: 'After shampooing, apply from mid-lengths to ends. Leave for 3 minutes, rinse with cool water.',
        sizes: ['200ml', '300ml'],
        relatedIds: [7, 5, 3]
    },
    {
        id: 9, slug: 'soap-rose', name: 'Natural Rose Soap', variant: '100g',
        category: 'Soaps', collection: 'rose', price: 250, oldPrice: null,
        rating: 4.6, reviews: 567, stock: 120, badge: null,
        image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400',
        images: ['https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800'],
        description: 'Handcrafted with real rose petals and cold-pressed oils. A bar of pure luxury that pampers your skin with every use.',
        ingredients: ['Rose Petal Powder', 'Coconut Oil', 'Olive Oil', 'Shea Butter', 'Glycerin', 'Vitamin E'],
        benefits: ['Gentle Exfoliation', 'Natural Moisturizing', 'Artisan Crafted', 'No Artificial Colors', 'Long-Lasting Bar'],
        howToUse: 'Lather between wet hands or on a washcloth. Apply to skin, rinse thoroughly.',
        sizes: ['100g'],
        relatedIds: [10, 11, 3]
    },
    {
        id: 10, slug: 'soap-aloe', name: 'Natural Aloe Vera Soap', variant: '100g',
        category: 'Soaps', collection: 'aloe', price: 250, oldPrice: null,
        rating: 4.7, reviews: 489, stock: 110, badge: null,
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400',
        images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800'],
        description: 'Cool, soothing, and refreshing. Made with pure aloe vera gel for skin that feels calm and deeply hydrated.',
        ingredients: ['Aloe Barbadensis Gel', 'Coconut Oil', 'Jojoba Oil', 'Glycerin', 'Vitamin E', 'Neem Extract'],
        benefits: ['Soothes Sensitive Skin', 'Deep Hydration', 'Natural Antibacterial', 'pH Balanced', 'Gentle Daily Use'],
        howToUse: 'Lather between wet hands or on a washcloth. Apply to skin, rinse thoroughly.',
        sizes: ['100g'],
        relatedIds: [9, 11, 4]
    },
    {
        id: 11, slug: 'soap-charcoal', name: 'Charcoal Detox Soap', variant: '100g',
        category: 'Soaps', collection: 'premium', price: 280, oldPrice: null,
        rating: 4.8, reviews: 345, stock: 78, badge: 'Trending',
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400',
        images: ['https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800'],
        description: 'Activated bamboo charcoal draws out impurities while tea tree oil fights bacteria. Deep clean for troubled skin.',
        ingredients: ['Activated Bamboo Charcoal', 'Tea Tree Oil', 'Coconut Oil', 'Shea Butter', 'Eucalyptus Oil', 'Glycerin'],
        benefits: ['Deep Pore Cleansing', 'Oil Control', 'Antibacterial', 'Detoxifying', 'Refreshing Scent'],
        howToUse: 'Lather between wet hands. Apply to face or body, massage gently, rinse. Use 2-3 times per week.',
        sizes: ['100g'],
        relatedIds: [12, 9, 10]
    },
    {
        id: 12, slug: 'soap-lavender', name: 'Lavender Dream Soap', variant: '100g',
        category: 'Soaps', collection: 'premium', price: 300, oldPrice: 350,
        rating: 4.9, reviews: 623, stock: 65, badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400',
        images: ['https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800'],
        description: 'Calming lavender from the fields of Provence meets nourishing butters. A spa-like experience in every lather.',
        ingredients: ['Lavender Essential Oil', 'French Clay', 'Shea Butter', 'Olive Oil', 'Vitamin E', 'Oat Extract'],
        benefits: ['Calming Aroma', 'Gentle Cleansing', 'Stress Relief', 'Suitable for Sensitive Skin', 'Handcrafted'],
        howToUse: 'Lather between wet hands. Apply to skin, breathe in the calming scent, rinse.',
        sizes: ['100g'],
        relatedIds: [9, 11, 7]
    },
    {
        id: 13, slug: 'neem-face-wash', name: 'Neem Purifying Face Wash', variant: '150ml',
        category: 'Skin Care', collection: 'premium', price: 420, oldPrice: null,
        rating: 4.6, reviews: 178, stock: 89, badge: null,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800'],
        description: 'Powerful neem extracts purify pores without stripping moisture. Ideal for oily and combination skin types.',
        ingredients: ['Neem Leaf Extract', 'Tea Tree Oil', 'Salicylic Acid', 'Green Tea', 'Witch Hazel', 'Aloe Vera'],
        benefits: ['Controls Excess Oil', 'Prevents Breakouts', 'Deep Cleansing', 'Tightens Pores', 'Gentle Formula'],
        howToUse: 'Wet face, apply a small amount, massage in circular motions for 60 seconds, rinse. Use morning and evening.',
        sizes: ['100ml', '150ml'],
        relatedIds: [14, 1, 11]
    },
    {
        id: 14, slug: 'rose-face-wash', name: 'Rose Brightening Face Wash', variant: '150ml',
        category: 'Skin Care', collection: 'rose', price: 450, oldPrice: null,
        rating: 4.8, reviews: 256, stock: 72, badge: 'New',
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400',
        images: ['https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800'],
        description: 'Rose water and vitamin C work together to brighten dull skin and even out tone. A gentle daily luxury.',
        ingredients: ['Rose Water', 'Vitamin C', 'Hyaluronic Acid', 'Niacinamide', 'Glycerin', 'Aloe Vera'],
        benefits: ['Brightens Complexion', 'Evens Skin Tone', 'Hydrating Formula', 'Anti-Aging Properties', 'Dermatologically Tested'],
        howToUse: 'Wet face, apply a small amount, massage gently, rinse. Use morning and evening for best results.',
        sizes: ['100ml', '150ml'],
        relatedIds: [13, 3, 5]
    },
    {
        id: 15, slug: 'kitchen-cleaner', name: 'Natural Kitchen Cleaner', variant: '500ml',
        category: 'Kitchen Care', collection: 'kitchen', price: 420, oldPrice: null,
        rating: 4.7, reviews: 198, stock: 94, badge: null,
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400',
        images: ['https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800'],
        description: 'Cuts through kitchen grease and grime with the power of nature. Safe for all kitchen surfaces.',
        ingredients: ['Citric Acid', 'Coconut-derived Surfactant', 'Lemon Essential Oil', 'Tea Tree Oil', 'Rosemary Extract'],
        benefits: ['Powerful Degreaser', 'Natural Antibacterial', 'Safe on All Surfaces', 'Pleasant Citrus Scent', 'Non-Toxic'],
        howToUse: 'Spray directly on surface, wipe with a clean cloth. For tough stains, let sit for 2 minutes before wiping.',
        sizes: ['500ml', '1L'],
        relatedIds: [16, 17, 1]
    },
    {
        id: 16, slug: 'glass-cleaner', name: 'Streak-Free Glass Cleaner', variant: '500ml',
        category: 'Kitchen Care', collection: 'kitchen', price: 390, oldPrice: null,
        rating: 4.8, reviews: 312, stock: 87, badge: null,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800'],
        description: 'Crystal-clear results on glass, mirrors, and screens. Vinegar-based formula leaves absolutely no streaks.',
        ingredients: ['White Vinegar', 'Cornstarch', 'Lemon Essential Oil', 'Purified Water', 'Plant-based Surfactant'],
        benefits: ['Streak-Free Finish', 'Natural Formula', 'Multi-Surface', 'Fast Drying', 'Ammonia Free'],
        howToUse: 'Spray 6-8 inches from surface. Wipe with a microfiber cloth in circular motions for best results.',
        sizes: ['500ml', '1L'],
        relatedIds: [15, 17, 2]
    },
    {
        id: 17, slug: 'floor-cleaner', name: 'Herbal Floor Cleaner', variant: '1L',
        category: 'Kitchen Care', collection: 'kitchen', price: 550, oldPrice: 620,
        rating: 4.7, reviews: 156, stock: 68, badge: null,
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400',
        images: ['https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800'],
        description: 'Neem and eucalyptus combine to clean floors while leaving a fresh herbal scent that lasts for hours.',
        ingredients: ['Neem Extract', 'Eucalyptus Oil', 'Coconut-derived Surfactant', 'Citric Acid', 'Tea Tree Oil'],
        benefits: ['Antibacterial Protection', 'Long-Lasting Fresh Scent', 'Safe for All Floor Types', 'Natural Formula', 'Economical'],
        howToUse: 'Dilute 2 capfuls in 4 liters of water. Mop floor as usual. No rinsing required.',
        sizes: ['500ml', '1L', '2L'],
        relatedIds: [15, 16, 18]
    },
    {
        id: 18, slug: 'fabric-wash', name: 'Gentle Fabric Wash', variant: '1L',
        category: 'Home Care', collection: 'kitchen', price: 650, oldPrice: null,
        rating: 4.8, reviews: 234, stock: 55, badge: 'Premium',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800'],
        description: 'Plant-based formula that cares for your fabrics as much as you do. Gentle on colors, tough on stains.',
        ingredients: ['Coconut-derived Surfactant', 'Aloe Vera', 'Lavender Essential Oil', 'Enzyme Complex', 'Plant-based Softener'],
        benefits: ['Color Safe', 'Gentle on Fabrics', 'Effective Stain Removal', 'Natural Softening', 'Hypoallergenic'],
        howToUse: 'Add 1-2 capfuls to washing machine. Suitable for hand wash and machine wash. Follow garment care labels.',
        sizes: ['500ml', '1L'],
        relatedIds: [19, 17, 15]
    },
    {
        id: 19, slug: 'multipurpose-cleaner', name: 'All-Purpose Cleaner', variant: '500ml',
        category: 'Home Care', collection: 'kitchen', price: 580, oldPrice: 650,
        rating: 4.6, reviews: 187, stock: 71, badge: null,
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400',
        images: ['https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800'],
        description: 'One bottle for every surface in your home. From countertops to bathroom tiles, this cleaner does it all naturally.',
        ingredients: ['Citric Acid', 'Coconut-derived Surfactant', 'Lemon Essential Oil', 'Thyme Extract', 'Purified Water'],
        benefits: ['Multi-Surface Use', 'Natural Disinfectant', 'Pleasant Citrus Scent', 'Eco-Friendly', 'Concentrated Formula'],
        howToUse: 'Spray on surface, wipe clean. For disinfecting, let sit for 5 minutes before wiping.',
        sizes: ['500ml', '1L'],
        relatedIds: [15, 16, 17]
    }
];

const COLLECTIONS = {
    rose: { name: 'Rose Collection', desc: 'Infused with the essence of real rose petals', icon: '🌹', color: '#e74c3c' },
    aloe: { name: 'Aloe Vera Collection', desc: 'Nature\'s soothing miracle for your skin', icon: '🌿', color: '#27ae60' },
    kitchen: { name: 'Kitchen Care', desc: 'Premium natural cleaning for your home', icon: '✨', color: '#3498db' },
    premium: { name: 'Premium Botanicals', desc: 'Our finest formulations for discerning care', icon: '👑', color: '#f39c12' }
};

// ===== FORMATTING =====
const formatRs = (n) => 'Rs.' + new Intl.NumberFormat('en-PK').format(n);

// ===== STATE MANAGEMENT =====
const Store = {
    state: {
        cart: JSON.parse(localStorage.getItem('pr_cart') || '[]'),
        wishlist: JSON.parse(localStorage.getItem('pr_wishlist') || '[]'),
        theme: localStorage.getItem('pr_theme') || 'light',
        user: null,
        currentPage: 'home',
        searchOpen: false,
        cartOpen: false
    },
    listeners: [],
    subscribe(fn) { this.listeners.push(fn); },
    emit() { this.listeners.forEach(fn => fn(this.state)); },
    setState(updates) {
        Object.assign(this.state, updates);
        localStorage.setItem('pr_cart', JSON.stringify(this.state.cart));
        localStorage.setItem('pr_wishlist', JSON.stringify(this.state.wishlist));
        this.emit();
    },
    addToCart(product, size = null) {
        const cart = [...this.state.cart];
        const key = `${product.id}-${size || product.sizes[0]}`;
        const existing = cart.find(item => item.key === key);
        if (existing) { existing.qty += 1; }
        else { cart.push({ key, productId: product.id, name: product.name, variant: product.variant, size: size || product.sizes[0], price: product.price, image: product.image, qty: 1 }); }
        this.setState({ cart });
        showToast(`${product.name} added to bag`, 'success');
    },
    removeFromCart(key) {
        this.setState({ cart: this.state.cart.filter(i => i.key !== key) });
    },
    updateCartQty(key, delta) {
        const cart = this.state.cart.map(i => {
            if (i.key === key) {
                const newQty = Math.max(1, i.qty + delta);
                return { ...i, qty: newQty };
            }
            return i;
        });
        this.setState({ cart });
    },
    getCartTotal() {
        return this.state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    },
    getCartCount() {
        return this.state.cart.reduce((sum, i) => sum + i.qty, 0);
    },
    toggleWishlist(productId) {
        const wl = [...this.state.wishlist];
        const idx = wl.indexOf(productId);
        if (idx > -1) { wl.splice(idx, 1); showToast('Removed from wishlist', 'info'); }
        else { wl.push(productId); showToast('Added to wishlist', 'success'); }
        this.setState({ wishlist: wl });
    },
    isWishlisted(productId) {
        return this.state.wishlist.includes(productId);
    }
};

// ===== TOAST =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type]}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== ROUTER =====
function navigate(page, data = null) {
    Store.state.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === page);
    });
    setTimeout(() => renderPage(page, data), 100);
}

function renderPage(page, data) {
    const app = document.getElementById('app');
    const pages = {
        home: renderHome, products: renderProducts, about: renderAbout,
        sustainability: renderSustainability, contact: renderContact,
        cart: renderCart, checkout: renderCheckout, dashboard: renderDashboard,
        wishlist: renderWishlist,
        faq: renderFAQ, blog: renderBlog, privacy: renderPrivacy, terms: renderTerms,
        notfound: render404, inventory: renderInventory, orders: renderOrders,
        customer: renderCustomer, editor: renderEditor
    };
    const fn = pages[page] || pages.notfound;
    destroySpecularButtons();
    destroyMagicBento();
    destroyGrainients();
    destroyElectricBorders();
    app.innerHTML = fn(data);
    renderFooter();
    initRevealAnimations();
    updateBadges();
    initSpecularButtons();
    initMagicBento();
    initGrainients();
    initElectricBorders();
}

// ===== PAGE RENDERERS =====

function renderHome() {
    EditorState.init();
    const prods = EditorState.data.products;
    const h = EditorState.data.hero;
    const feats = EditorState.data.features;
    const tests = EditorState.data.testimonials;
    let featuredProducts = prods.slice(0, 8);
    let bestSellers = prods.filter(p => p.rating >= 4.8).slice(0, 4);

    return `
    <section class="hero">
        <div class="hero-bg">
            <div class="hero-grainient" data-grainient></div>
            <div class="hero-gradient"></div>
            <div class="hero-particles" id="heroParticles"></div>
            <div class="hero-lightbeam"></div>
        </div>
        <div class="hero-content">
            <div class="hero-grid">
                <div class="hero-left">
                    <div class="hero-tag reveal">
                        <i class="fas fa-leaf"></i> ${h.tag}
                    </div>
                    <h1 class="hero-title reveal reveal-delay-1">
                        ${h.headline1}<br>${h.headline2} <span class="accent">${h.headlineAccent}</span>
                    </h1>
                    <p class="hero-subtitle reveal reveal-delay-2">
                        ${h.subtitle}
                    </p>
                    <div class="hero-actions reveal reveal-delay-3">
                        <a href="#" data-page="products" class="star-border-container star-pill star-lg"
                           style="--star-color:#ccff00;--star-speed:5s;--star-thickness:1px;--star-radius:999px;">
                            ${starBorderMarkup(`${h.cta1} <i class="fas fa-arrow-right"></i>`)}
                        </a>
                        <a href="#" data-page="products" class="hero-btn-secondary" data-specular
                           data-sb-radius="999" data-sb-auto="true" data-sb-line-color="#ccff00"
                           data-sb-base-color="#0f2f17" data-sb-text-color="#ffffff"
                           data-sb-intensity="0.85" data-sb-shine-size="8" data-sb-shine-fade="45"
                           data-sb-thickness="1" data-sb-speed="0.4" data-sb-proximity="200">
                            ${h.cta2} <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="hero-stats reveal reveal-delay-4">
                        <div class="hero-stat">
                            <div class="hero-stat-value" data-count="${prods.length}">0</div>
                            <div class="hero-stat-label">Products</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-value" data-count="12000">0</div>
                            <div class="hero-stat-label">Happy Customers</div>
                        </div>
                        <div class="hero-stat">
                            <div class="hero-stat-value" data-count="100">0</div>
                            <div class="hero-stat-label">% Natural</div>
                        </div>
                    </div>
                </div>
                <div class="hero-right">
                    <div class="hero-product-showcase">
                        <div class="hero-product-ring"></div>
                        <div class="hero-product-ring"></div>
                        <div class="hero-glow"></div>
                        <div class="hero-orbit hero-orbit-1"><div class="hero-orbit-dot"></div></div>
                        <div class="hero-orbit hero-orbit-2"><div class="hero-orbit-dot"></div></div>
                        <div class="hero-orbit hero-orbit-3"><div class="hero-orbit-dot"></div></div>
                        <img class="hero-bottle" src="images/lemoo-washer.png" alt="LEMOO Washer dish wash bottle — Make Every Dish Shine" width="800" height="800" fetchpriority="high">
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-scroll">
            <span>Scroll</span>
            <div class="hero-scroll-line"></div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-star"></i> Why PendooRoots</div>
                <h2 class="section-title">Engineered for <span class="accent">Purity</span></h2>
                <p class="section-desc">Every product is a fusion of ancient botanical wisdom and modern science.</p>
            </div>
            <div class="features-grid">
                ${feats.map((f, i) => `
                <div class="feature-card reveal reveal-delay-${i+1}">
                    <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
                    <h3 class="feature-title">${f.title}</h3>
                    <p class="feature-desc">${f.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <section class="section" style="background: var(--bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-fire"></i> Best Sellers</div>
                <h2 class="section-title">Most <span class="accent">Loved</span> Products</h2>
                <p class="section-desc">Discover what thousands of customers can't stop talking about.</p>
            </div>
            <div class="products-grid">
                ${bestSellers.map((p, i) => renderProductCard(p, i)).join('')}
            </div>
            <div style="text-align:center; margin-top:48px;" class="reveal">
                <a href="#" data-page="products" class="star-border-container star-pill star-lg"
                   style="--star-color:#ccff00;--star-speed:5s;--star-thickness:1px;--star-radius:999px;--star-face:var(--primary);">
                    ${starBorderMarkup('View All Products <i class="fas fa-arrow-right"></i>')}
                </a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-th-large"></i> Collections</div>
                <h2 class="section-title">Explore by <span class="accent">Category</span></h2>
                <p class="section-desc">Curated collections for every aspect of your daily ritual.</p>
            </div>
            <div class="categories-grid">
                ${Object.entries(COLLECTIONS).map(([key, col], i) => {
                    const count = prods.filter(p => p.collection === key).length;
                    const img = prods.find(p => p.collection === key)?.image || '';
                    return `
                    <a href="#" data-page="products" class="category-card reveal reveal-delay-${i+1}">
                        <div class="category-card-bg" style="background-image:url('${img}')"></div>
                        <div class="category-card-overlay"></div>
                        <div class="category-card-content">
                            <div class="category-card-count">${count} Products</div>
                            <h3 class="category-card-name">${col.icon} ${col.name}</h3>
                            <span class="category-card-link">Explore <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
                        </div>
                    </a>`;
                }).join('')}
            </div>
        </div>
    </section>

    <section class="section" style="background: var(--bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-th-large"></i> Featured</div>
                <h2 class="section-title">Our <span class="accent">Premium</span> Range</h2>
                <p class="section-desc">Handpicked products that define luxury botanical care.</p>
            </div>
            <div class="products-grid">
                ${featuredProducts.map((p, i) => renderProductCard(p, i)).join('')}
            </div>
        </div>
    </section>

    <section class="section testimonials-section">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-quote-left"></i> Testimonials</div>
                <h2 class="section-title">What Our <span class="accent">Community</span> Says</h2>
            </div>
            <div style="overflow:hidden;">
                <div class="testimonial-track" id="testimonialTrack">
                    ${tests.map(t => `
                        <div class="testimonial-card">
                            <div class="testimonial-stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
                            <p class="testimonial-text">"${t.text}"</p>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">${t.name.charAt(0)}</div>
                                <div>
                                    <div class="testimonial-name">${t.name}</div>
                                    <div class="testimonial-role">Verified Customer</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="about-grid">
                <div class="about-image reveal">
                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700" alt="PendooRoots natural botanical products" width="700" height="875" loading="lazy">
                    <div class="about-image-accent"></div>
                </div>
                <div class="reveal reveal-delay-2">
                    <div class="about-tag"><i class="fas fa-leaf"></i> Our Story</div>
                    <h2 class="about-title">Born from a belief that <em>clean</em> should mean <em>truly clean</em>.</h2>
                    <p class="about-desc">PendooRoots started with one simple question: Why do "natural" products still contain chemicals we can't pronounce? We set out to create products with ingredients so pure, you could list them on a menu.</p>
                    <div class="about-stats">
                        <div>
                            <div class="about-stat-value" data-count="2019">0</div>
                            <div class="about-stat-label">Founded</div>
                        </div>
                        <div>
                            <div class="about-stat-value" data-count="4">0</div>
                            <div class="about-stat-label">Collections</div>
                        </div>
                        <div>
                            <div class="about-stat-value" data-count="${prods.length}">0</div>
                            <div class="about-stat-label">Products</div>
                        </div>
                    </div>
                <a href="#" data-page="about" class="btn btn-primary" data-specular
                   data-sb-radius="999" data-sb-auto="true" data-sb-line-color="#ffffff"
                   data-sb-base-color="#525252" data-sb-text-color="#f5f5f5"
                   data-sb-intensity="1" data-sb-shine-size="10" data-sb-shine-fade="40"
                   data-sb-thickness="1" data-sb-speed="0.35" data-sb-proximity="250">Read Our Story <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="newsletter-section">
        <div class="newsletter-glow"></div>
        <div class="newsletter-inner reveal">
            <h2 class="newsletter-title">Join the <em>PendooRoots</em> Family</h2>
            <p class="newsletter-desc">Subscribe for exclusive offers, skincare tips, and early access to new collections.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Welcome to the PendooRoots family!', 'success'); this.reset();">
                <label class="sr-only" for="nl_email">Email address</label>
                <input id="nl_email" name="email" type="email" placeholder="Enter your email…" autocomplete="email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>`;
}

function renderProductCard(p, i = 0, electric = false) {
    const isWished = Store.isWishlisted(p.id);
    const prod = EditorState.data.products.find(x => x.id === p.id) || p;
    const card = `
    <div class="product-card reveal reveal-delay-${(i % 4) + 1}" data-id="${p.id}" tabindex="0" role="link" aria-label="View ${p.name}" onkeydown="if(event.key==='Enter'){event.preventDefault(); navigate('product-detail','${p.slug}');}">
        <div class="product-card-image">
            ${p.badge ? `<div class="product-card-badge">${p.badge}</div>` : ''}
            <div class="product-card-actions">
                <button class="product-action-btn ${isWished ? 'wishlisted' : ''}" onclick="event.stopPropagation(); Store.toggleWishlist(${p.id}); refreshProductCard(${p.id});" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                </button>
                <button class="product-action-btn" onclick="event.stopPropagation(); quickView(${p.id});" aria-label="Quick view ${p.name}">
                    <i class="fas fa-eye" aria-hidden="true"></i>
                </button>
            </div>
            <img src="${p.image}" alt="${p.name} — ${p.variant}" width="400" height="400" loading="lazy">
        </div>
        <div class="product-card-info">
            <div class="product-card-category">${p.category}</div>
            <h3 class="product-card-name">${p.name} — ${p.variant}</h3>
            <div class="product-card-rating">
                <span class="stars" aria-hidden="true">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}</span>
                <span>${p.rating} (${p.reviews})</span>
            </div>
            <div class="product-card-price">
                <div class="font-tabular">
                    <span class="product-price-current">${formatRs(p.price)}</span>
                    ${p.oldPrice ? `<span class="product-price-old">${formatRs(p.oldPrice)}</span>` : ''}
                </div>
                <button class="product-add-btn" onclick="event.stopPropagation(); Store.addToCart(prod);" aria-label="Add ${p.name} to bag">
                    <i class="fas fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>`;
    if (electric) {
        return electricBorderMarkup(card, {
            color: 'var(--accent)', speed: 0.5, chaos: 0.1, thickness: 2,
            radius: 16, displacement: 60, offset: 30, className: 'electric-featured'
        });
    }
    return card;
}

function getHeroProductId() {
    const prods = EditorState.data.products;
    const hero = prods.find(x => x.badge === 'Hero Product');
    return hero ? hero.id : (prods[0] ? prods[0].id : null);
}

function renderProducts() {
    const prods = EditorState.data.products;
    const heroId = getHeroProductId();
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Shop All Products</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Shop</span>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="products-toolbar">
                <span class="products-count">${prods.length} products</span>
                <div class="filter-group">
                    <button class="filter-chip active" onclick="filterProducts('all', this)">All</button>
                    <button class="filter-chip" onclick="filterProducts('rose', this)">🌹 Rose</button>
                    <button class="filter-chip" onclick="filterProducts('aloe', this)">🌿 Aloe Vera</button>
                    <button class="filter-chip" onclick="filterProducts('kitchen', this)">✨ Kitchen</button>
                    <button class="filter-chip" onclick="filterProducts('premium', this)">👑 Premium</button>
                </div>
                <div class="products-sort">
                    <label>Sort by:</label>
                    <select onchange="sortProducts(this.value)">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
            <div class="products-grid" id="productsGrid">
                ${prods.map((p, i) => renderProductCard(p, i, p.id === heroId)).join('')}
            </div>
        </div>
    </section>`;
}

function filterProducts(collection, el) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    const grid = document.getElementById('productsGrid');
    const prods = EditorState.data.products;
    const heroId = getHeroProductId();
    const filtered = collection === 'all' ? prods : prods.filter(p => p.collection === collection);
    grid.innerHTML = filtered.map((p, i) => renderProductCard(p, i, p.id === heroId)).join('');
    document.querySelector('.products-count').textContent = `${filtered.length} products`;
    destroyElectricBorders();
    initRevealAnimations();
    initElectricBorders();
}

function sortProducts(sortBy) {
    let sorted = [...EditorState.data.products];
    switch(sortBy) {
        case 'price-low': sorted.sort((a,b) => a.price - b.price); break;
        case 'price-high': sorted.sort((a,b) => b.price - a.price); break;
        case 'rating': sorted.sort((a,b) => b.rating - a.rating); break;
    }
    const grid = document.getElementById('productsGrid');
    const heroId = getHeroProductId();
    grid.innerHTML = sorted.map((p, i) => renderProductCard(p, i, p.id === heroId)).join('');
    destroyElectricBorders();
    initRevealAnimations();
    initElectricBorders();
}

function renderProductDetail(slug) {
    const p = EditorState.data.products.find(x => x.slug === slug);
    if (!p) return render404();
    const related = (p.relatedIds || []).map(id => EditorState.data.products.find(x => x.id === id)).filter(Boolean);

    return `
    <div class="page-header">
        <div class="container">
            <div class="page-breadcrumb" style="justify-content:flex-start;">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i>
                <a href="#" data-page="products">Shop</a> <i class="fas fa-chevron-right"></i>
                <span>${p.name}</span>
            </div>
        </div>
    </div>
    <section class="product-detail">
        <div class="container">
            <div class="product-detail-grid">
                <div class="product-gallery reveal">
                    <div class="product-main-image">
                        <img src="${p.images[0]}" alt="${p.name}" id="mainProductImage" width="800" height="800">
                    </div>
                    ${p.images.length > 1 ? `
                    <div class="product-thumbnails">
                        ${p.images.map((img, i) => `
                            <div class="product-thumb ${i===0?'active':''}" onclick="document.getElementById('mainProductImage').src='${img}'; document.querySelectorAll('.product-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
                                <img src="${img}" alt="${p.name} thumbnail ${i+1}" width="80" height="80">
                            </div>
                        `).join('')}
                    </div>` : ''}
                </div>
                <div class="product-detail-info reveal reveal-delay-2">
                    <div class="product-detail-category">${p.category}</div>
                    <h1 class="product-detail-name">${p.name}</h1>
                    <div class="product-detail-rating">
                        <span class="stars">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}</span>
                        <span>${p.rating} · ${p.reviews} reviews</span>
                    </div>
                    <div class="product-detail-price font-tabular">
                        ${formatRs(p.price)}
                        ${p.oldPrice ? `<span class="product-price-old" style="margin-left:12px;">${formatRs(p.oldPrice)}</span>` : ''}
                    </div>
                    <p class="product-detail-desc">${p.description}</p>

                    <div class="option-label" id="sizeLabel">Size</div>
                    <div class="option-buttons" id="sizeOptions" role="group" aria-labelledby="sizeLabel">
                        ${p.sizes.map((s, i) => `
                            <button class="option-btn ${i===0?'active':''}" onclick="selectSize(this, '${s}')">${s}</button>
                        `).join('')}
                    </div>
                </div>

                    <div class="option-label">Quantity</div>
                    <div class="quantity-selector">
                        <button class="qty-btn" onclick="updateDetailQty(-1)" aria-label="Decrease quantity">−</button>
                        <div class="qty-value" id="detailQty" aria-live="polite">1</div>
                        <button class="qty-btn" onclick="updateDetailQty(1)" aria-label="Increase quantity">+</button>
                    </div>

                    <div class="product-detail-actions">
                        <button class="btn btn-primary btn-lg" onclick="addDetailToCart(${p.id})">
                            <i class="fas fa-shopping-bag" aria-hidden="true"></i> Add to Bag — ${formatRs(p.price)}
                        </button>
                        <button class="btn btn-outline btn-icon btn-lg ${Store.isWishlisted(p.id)?'btn-wishlisted':''}" onclick="Store.toggleWishlist(${p.id})" aria-label="${Store.isWishlisted(p.id)?'Remove from wishlist':'Add to wishlist'}" style="${Store.isWishlisted(p.id)?'background:var(--danger);color:#fff;border-color:var(--danger);':''}">
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div class="product-accordion">
                        <div class="accordion-item open">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                Ingredients <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="accordion-body">
                                <div class="accordion-body-inner">
                                    ${p.ingredients.map(ing => `<span style="display:inline-block;padding:4px 12px;margin:4px;background:var(--bg-alt);border-radius:var(--radius-full);font-size:0.8rem;">${ing}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                Benefits <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="accordion-body">
                                <div class="accordion-body-inner">
                                    <ul style="list-style:none;padding:0;">
                                        ${p.benefits.map(b => `<li style="padding:4px 0;"><i class="fas fa-check" style="color:var(--success);margin-right:8px;"></i>${b}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                How to Use <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="accordion-body">
                                <div class="accordion-body-inner">${p.howToUse}</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                Reviews (${p.reviews}) <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="accordion-body">
                                <div class="accordion-body-inner">
                                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
                                        <span style="font-size:2rem;font-weight:800;">${p.rating}</span>
                                        <div>
                                            <div class="stars" style="color:#f59e0b;">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))}</div>
                                            <span style="font-size:0.8rem;color:var(--text-muted);">Based on ${p.reviews} reviews</span>
                                        </div>
                                    </div>
                                    <p style="color:var(--text-muted);font-style:italic;">Customer reviews are verified and moderated.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ${related.length ? `
    <section class="section" style="background:var(--bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-th"></i> You May Also Like</div>
                <h2 class="section-title">Related <span class="accent">Products</span></h2>
            </div>
            <div class="products-grid">
                ${related.map((rp, i) => renderProductCard(rp, i)).join('')}
            </div>
        </div>
    </section>` : ''}`;
}

let detailQty = 1;
let selectedSize = null;

function updateDetailQty(delta) {
    detailQty = Math.max(1, detailQty + delta);
    document.getElementById('detailQty').textContent = detailQty;
}

function selectSize(el, size) {
    document.querySelectorAll('#sizeOptions .option-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    selectedSize = size;
}

function addDetailToCart(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    for (let i = 0; i < detailQty; i++) {
        Store.addToCart(p, selectedSize || p.sizes[0]);
    }
    detailQty = 1;
}

function toggleAccordion(header) {
    const item = header.parentElement;
    item.classList.toggle('open');
}

function quickView(productId) {
    navigate('product-detail', PRODUCTS.find(p => p.id === productId)?.slug);
}

function refreshProductCard(productId) {
    document.querySelectorAll(`.product-card[data-id="${productId}"]`).forEach(card => {
        const isWished = Store.isWishlisted(productId);
        const btn = card.querySelector('.product-action-btn');
        if (btn) {
            btn.classList.toggle('wishlisted', isWished);
        }
    });
}

function renderCart() {
    const cart = Store.state.cart;
    const total = Store.getCartTotal();
    const shipping = total > 1000 ? 0 : 100;

    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Shopping Bag</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Cart</span>
            </div>
        </div>
    </div>
    <section class="cart-page">
        <div class="container">
            ${cart.length === 0 ? `
                <div class="wishlist-empty">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your bag is empty</p>
                    <a href="#" data-page="products" class="btn btn-primary">Start Shopping</a>
                </div>
            ` : `
            <div class="cart-page-grid">
                <div>
                    ${cart.map(item => `
                        <div class="cart-item">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}" width="120" height="120">
                            </div>
                            <div class="cart-item-details">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-variant">${item.variant} · ${item.size}</div>
                                <div class="cart-item-bottom">
                                    <div class="quantity-selector" style="margin-bottom:0;">
                                        <button class="qty-btn" onclick="Store.updateCartQty('${item.key}', -1); navigate('cart');" aria-label="Decrease quantity">−</button>
                                        <div class="qty-value">${item.qty}</div>
                                        <button class="qty-btn" onclick="Store.updateCartQty('${item.key}', 1); navigate('cart');" aria-label="Increase quantity">+</button>
                                    </div>
                                    <div class="cart-item-price">${formatRs(item.price * item.qty)}</div>
                                    <span class="cart-item-remove" role="button" tabindex="0" onclick="Store.removeFromCart('${item.key}'); navigate('cart');" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); Store.removeFromCart('${item.key}'); navigate('cart');}">Remove</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="cart-summary">
                    <h3 class="cart-summary-title">Order Summary</h3>
                    <div class="cart-summary-row"><span>Subtotal</span><span>${formatRs(total)}</span></div>
                    <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success);">Free</span>' : formatRs(shipping)}</span></div>
                    ${shipping > 0 ? '<div style="font-size:0.75rem;color:var(--text-muted);padding:4px 0;">Free shipping on orders above Rs.1000</div>' : ''}
                    <div class="cart-coupon">
                        <label class="sr-only" for="couponInput">Coupon code</label>
                        <input type="text" id="couponInput" name="coupon" placeholder="Coupon code">
                        <button class="btn btn-outline btn-sm" onclick="showToast('Coupon applied!', 'success')">Apply</button>
                    </div>
                    <div class="cart-summary-row total"><span>Total</span><span>${formatRs(total + shipping)}</span></div>
                    <a href="#" data-page="checkout" class="btn btn-primary btn-full" style="margin-top:16px;">Proceed to Checkout</a>
                    <a href="#" data-page="products" class="btn btn-ghost btn-full" style="margin-top:8px;">Continue Shopping</a>
                </div>
            </div>`}
        </div>
    </section>`;
}

function renderCheckout() {
    const total = Store.getCartTotal();
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Checkout</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i>
                <a href="#" data-page="cart">Cart</a> <i class="fas fa-chevron-right"></i>
                <span>Checkout</span>
            </div>
        </div>
    </div>
    <section class="checkout-page">
        <div class="container">
            <div class="checkout-grid">
                <div>
                    <div class="checkout-section">
                        <h3 class="checkout-section-title">Contact Information</h3>
                        <div class="form-group">
                            <label class="form-label" for="co_email">Email Address</label>
                            <input class="form-input" id="co_email" name="email" type="email" placeholder="your@email.com" autocomplete="email">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="co_phone">Phone Number</label>
                            <input class="form-input" id="co_phone" name="phone" type="tel" inputmode="tel" placeholder="+92 xxx xxx xxxx" autocomplete="tel">
                        </div>
                    </div>
                    <div class="checkout-section">
                        <h3 class="checkout-section-title">Shipping Address</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label" for="co_first">First Name</label>
                                <input class="form-input" id="co_first" name="firstName" type="text" placeholder="First name" autocomplete="given-name">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="co_last">Last Name</label>
                                <input class="form-input" id="co_last" name="lastName" type="text" placeholder="Last name" autocomplete="family-name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="co_addr">Address</label>
                            <input class="form-input" id="co_addr" name="address" type="text" placeholder="Street address" autocomplete="street-address">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label" for="co_city">City</label>
                                <input class="form-input" id="co_city" name="city" type="text" placeholder="City" autocomplete="address-level2">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="co_zip">Postal Code</label>
                                <input class="form-input" id="co_zip" name="postalCode" type="text" inputmode="numeric" placeholder="Postal code" autocomplete="postal-code">
                            </div>
                        </div>
                    </div>
                    <div class="checkout-section">
                        <h3 class="checkout-section-title">Payment Method</h3>
                        <div style="display:flex;gap:12px;flex-wrap:wrap;">
                            <button class="option-btn active">Credit Card</button>
                            <button class="option-btn" onclick="this.parentElement.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');">Cash on Delivery</button>
                            <button class="option-btn" onclick="this.parentElement.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active');">Bank Transfer</button>
                        </div>
                        <div style="margin-top:16px;">
                            <div class="form-group">
                                <label class="form-label" for="co_card">Card Number</label>
                                <input class="form-input" id="co_card" name="cardNumber" type="text" inputmode="numeric" placeholder="1234 5678 9012 3456" autocomplete="cc-number">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label" for="co_exp">Expiry Date</label>
                                    <input class="form-input" id="co_exp" name="cardExpiry" type="text" inputmode="numeric" placeholder="MM/YY" autocomplete="cc-exp">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="co_cvv">CVV</label>
                                    <input class="form-input" id="co_cvv" name="cardCvv" type="text" inputmode="numeric" placeholder="123" autocomplete="cc-csc">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg btn-full" onclick="showToast('Order placed successfully! Thank you.', 'success'); Store.setState({cart:[]}); navigate('home');">
                        <i class="fas fa-lock" aria-hidden="true"></i> Pay ${formatRs(total + (total > 1000 ? 0 : 100))}
                    </button>
                </div>
                <div class="cart-summary">
                    <h3 class="cart-summary-title">Order Summary</h3>
                    ${Store.state.cart.map(item => `
                        <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);">
                            <div style="width:56px;height:56px;background:var(--bg-alt);border-radius:var(--radius);flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:4px;">
                                <img src="${item.image}" alt="${item.name}" width="56" height="56" style="width:100%;height:100%;object-fit:contain;">
                            </div>
                            <div style="flex:1;">
                                <div style="font-size:0.85rem;font-weight:600;">${item.name}</div>
                                <div style="font-size:0.75rem;color:var(--text-muted);">Qty: ${item.qty}</div>
                            </div>
                            <div style="font-weight:600;font-size:0.9rem;">${formatRs(item.price * item.qty)}</div>
                        </div>
                    `).join('')}
                    <div class="cart-summary-row" style="margin-top:12px;"><span>Subtotal</span><span>${formatRs(total)}</span></div>
                    <div class="cart-summary-row"><span>Shipping</span><span>${total > 1000 ? 'Free' : formatRs(100)}</span></div>
                    <div class="cart-summary-row total"><span>Total</span><span>${formatRs(total + (total > 1000 ? 0 : 100))}</span></div>
                </div>
            </div>
        </div>
    </section>`;
}

function renderAbout() {
    return `
    <div class="about-hero">
        <div class="container">
            <div class="about-hero-content reveal">
                <div class="section-tag" style="color:var(--accent);"><i class="fas fa-leaf"></i> Our Story</div>
                <h1 class="section-title" style="color:#fff;">Born from a belief that clean should mean <em style="color:var(--accent);">truly clean</em>.</h1>
                <p class="section-desc" style="color:rgba(255,255,255,0.6);">PendooRoots was founded in 2019 with a radical idea: what if every product in your home was made from ingredients so pure, you could list them on a restaurant menu?</p>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="about-grid">
                <div class="about-image reveal">
                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700" alt="Our Lab">
                </div>
                <div class="reveal reveal-delay-2">
                    <h2 class="about-title">We believe in <em>radical transparency</em>.</h2>
                    <p class="about-desc">Every ingredient in every PendooRoots product is listed openly. No hidden formulas. No greenwashing. Just honest, effective, botanical products that happen to be luxurious.</p>
                    <p class="about-desc">Our team of botanists, chemists, and product designers work together to create formulations that are as beautiful as they are effective. From sourcing raw materials from certified organic farms to our zero-waste manufacturing process, every step is intentional.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section" style="background:var(--bg-alt);">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag"><i class="fas fa-gem"></i> Our Values</div>
                <h2 class="section-title">What We <span class="accent">Stand For</span></h2>
            </div>
            <div class="about-values">
                <div class="value-card reveal reveal-delay-1">
                    <div class="value-icon">🌿</div>
                    <h3 class="value-title">Radical Transparency</h3>
                    <p class="value-desc">Every ingredient, every source, every process — completely open for you to see.</p>
                </div>
                <div class="value-card reveal reveal-delay-2">
                    <div class="value-icon">🧪</div>
                    <h3 class="value-title">Scientific Integrity</h3>
                    <p class="value-desc">Every product is backed by rigorous testing and peer-reviewed research.</p>
                </div>
                <div class="value-card reveal reveal-delay-3">
                    <div class="value-icon">🌍</div>
                    <h3 class="value-title">Environmental Promise</h3>
                    <p class="value-desc">Carbon-neutral shipping, zero-waste packaging, and giving back 1% to Earth.</p>
                </div>
            </div>
        </div>
    </section>`;
}

function renderSustainability() {
    return `
    <div class="sustain-hero">
        <div class="container">
            <div class="about-hero-content reveal">
                <div class="section-tag" style="color:var(--accent);"><i class="fas fa-globe-americas"></i> Sustainability</div>
                <h1 class="section-title" style="color:#fff;">Our Commitment to the <em style="color:var(--accent);">Planet</em></h1>
                <p class="section-desc" style="color:rgba(255,255,255,0.6);">Sustainability isn't a marketing strategy. It's our founding principle.</p>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="sustain-grid">
                <div class="sustain-card reveal">
                    <div class="sustain-card-icon">🌱</div>
                    <h3 class="sustain-card-title">Organic Sourcing</h3>
                    <p class="sustain-card-desc">All our ingredients come from certified organic farms that practice regenerative agriculture. We work directly with farmers to ensure fair wages and sustainable practices.</p>
                </div>
                <div class="sustain-card reveal reveal-delay-1">
                    <div class="sustain-card-icon">♻️</div>
                    <h3 class="sustain-card-title">Zero Waste Packaging</h3>
                    <p class="sustain-card-desc">Our bottles are made from 100% post-consumer recycled materials. Every label is compostable. Every box is recyclable. We've eliminated single-use plastic entirely.</p>
                </div>
                <div class="sustain-card reveal reveal-delay-2">
                    <div class="sustain-card-icon">💧</div>
                    <h3 class="sustain-card-title">Water Conservation</h3>
                    <p class="sustain-card-desc">Our manufacturing uses 60% less water than industry standard. Concentrated formulas mean less water shipped, less packaging, and more value per bottle.</p>
                </div>
                <div class="sustain-card reveal reveal-delay-3">
                    <div class="sustain-card-icon">🌿</div>
                    <h3 class="sustain-card-title">Carbon Neutral</h3>
                    <p class="sustain-card-desc">We offset 100% of our carbon emissions through verified reforestation projects. Our goal is to be carbon negative by 2027.</p>
                </div>
            </div>
        </div>
    </section>`;
}

function renderContact() {
    const s = EditorState.data.settings;
    const phone = s.phone || '0313-5442427';
    const email = s.email || 'ibmilyas347@gmail.com';
    const whatsapp = s.whatsapp || '03474736347';
    const address = s.address || '42 Botanical Lane, Garden District, Karachi, Pakistan';
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Get In Touch</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Contact</span>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info-card reveal">
                    <h2 class="contact-info-title">Let's Connect</h2>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div>
                            <div class="contact-info-label">Visit Us</div>
                            <div class="contact-info-value">${address}</div>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><i class="fas fa-phone-alt"></i></div>
                        <div>
                            <div class="contact-info-label">Call Us</div>
                            <div class="contact-info-value">${phone}</div>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                        <div>
                            <div class="contact-info-label">Email Us</div>
                            <div class="contact-info-value">${email}</div>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon"><i class="fas fa-clock"></i></div>
                        <div>
                            <div class="contact-info-label">Working Hours</div>
                            <div class="contact-info-value">Mon - Sat: 9:00 AM - 7:00 PM<br>Sunday: Closed</div>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-icon" style="background:rgba(37,211,102,0.1);color:#25D366;"><i class="fab fa-whatsapp"></i></div>
                        <div>
                            <div class="contact-info-label">WhatsApp</div>
                            <div class="contact-info-value"><a href="https://wa.me/923474736347" target="_blank" style="color:inherit;text-decoration:underline;">${whatsapp}</a></div>
                        </div>
                    </div>
                </div>
                ${electricBorderMarkup(`
                <div class="contact-form-card reveal reveal-delay-2">
                    <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:24px;">Send us a Message</h3>
                    <form onsubmit="event.preventDefault(); showToast('Message sent! We\'ll get back to you soon.', 'success'); this.reset();">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label" for="cf_name">Full Name</label>
                                <input class="form-input" id="cf_name" name="name" type="text" placeholder="Your name" autocomplete="name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="cf_email">Email</label>
                                <input class="form-input" id="cf_email" name="email" type="email" placeholder="your@email.com" autocomplete="email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="cf_subject">Subject</label>
                            <select class="form-input" id="cf_subject" name="subject" required>
                                <option value="" disabled selected>Select a topic</option>
                                <option>Product Inquiry</option>
                                <option>Order Support</option>
                                <option>Wholesale</option>
                                <option>Press & Media</option>
                                <option>General Question</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="cf_msg">Message</label>
                            <textarea class="form-input" id="cf_msg" name="message" rows="5" placeholder="How can we help?" required style="resize:vertical;"></textarea>
                        </div>
                        <button type="submit" class="star-border-container star-full"
                                style="--star-color:#ccff00;--star-speed:5s;--star-thickness:1px;--star-radius:20px;--star-face:var(--primary);">
                            ${starBorderMarkup('Send Message <i class="fas fa-paper-plane" aria-hidden="true"></i>')}
                        </button>
                    </form>
                </div>`, {
                    color: 'var(--accent)', speed: 0.5, chaos: 0.1, thickness: 2,
                    radius: 16, displacement: 60, offset: 30
                })}
            </div>
        </div>
    </section>`;
}

function renderDashboard() {
    const totalRevenue = 156780;
    const totalOrders = 234;
    const totalCustomers = 1892;
    const lowStock = PRODUCTS.filter(p => p.stock < 50).length;

    return `
    <div class="dashboard-layout">
        <aside class="dashboard-sidebar">
            <div style="padding:0 24px 24px;font-weight:700;font-size:1rem;">Dashboard</div>
            <a class="dashboard-nav-link active" href="#" onclick="event.preventDefault();"><i class="fas fa-chart-line"></i> Overview</a>
            <a class="dashboard-nav-link" href="#" data-page="orders" onclick="event.preventDefault(); navigate('orders');"><i class="fas fa-shopping-bag"></i> Orders</a>
            <a class="dashboard-nav-link" href="#" data-page="inventory" onclick="event.preventDefault(); navigate('inventory');"><i class="fas fa-boxes"></i> Inventory</a>
            <a class="dashboard-nav-link" href="#" data-page="customer" onclick="event.preventDefault(); navigate('customer');"><i class="fas fa-users"></i> Customers</a>
            <a class="dashboard-nav-link" href="#" onclick="event.preventDefault();"><i class="fas fa-chart-bar"></i> Analytics</a>
            <a class="dashboard-nav-link" href="#" onclick="event.preventDefault();"><i class="fas fa-cog"></i> Settings</a>
            <div style="margin-top:auto;padding:0 24px;margin-top:24px;">
                <a href="#" data-page="editor" class="btn btn-accent btn-sm btn-full" onclick="event.preventDefault(); navigate('editor');" style="display:flex;align-items:center;justify-content:center;gap:8px;">
                    <i class="fas fa-edit"></i> Open Editor
                </a>
            </div>
        </aside>
        <div class="dashboard-content">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Dashboard Overview</h1>
                <span style="font-size:0.85rem;color:var(--text-muted);">Last updated: Just now</span>
            </div>
            <div class="stat-cards">
                <div class="stat-card reveal">
                    <div class="stat-card-icon green"><i class="fas fa-dollar-sign" aria-hidden="true"></i></div>
                    <div class="stat-card-value">${formatRs(totalRevenue)}</div>
                    <div class="stat-card-label">Total Revenue</div>
                </div>
                <div class="stat-card reveal reveal-delay-1">
                    <div class="stat-card-icon blue"><i class="fas fa-shopping-bag"></i></div>
                    <div class="stat-card-value">${totalOrders}</div>
                    <div class="stat-card-label">Total Orders</div>
                </div>
                <div class="stat-card reveal reveal-delay-2">
                    <div class="stat-card-icon yellow"><i class="fas fa-users"></i></div>
                    <div class="stat-card-value">${(totalCustomers/1000).toFixed(1)}K</div>
                    <div class="stat-card-label">Customers</div>
                </div>
                <div class="stat-card reveal reveal-delay-3">
                    <div class="stat-card-icon red"><i class="fas fa-exclamation-triangle"></i></div>
                    <div class="stat-card-value">${lowStock}</div>
                    <div class="stat-card-label">Low Stock Alerts</div>
                </div>
            </div>

            <div class="dashboard-bento-wrap reveal">
                <div class="chart-header" style="margin-bottom:20px;">
                    <h3 class="chart-title">Workspace Insights</h3>
                    <span style="font-size:0.8rem;color:var(--text-muted);">Hover to explore &nbsp;·&nbsp; Click a card to open</span>
                </div>
                ${renderMagicBento()}
            </div>

            <div class="chart-container reveal">
                <div class="chart-header">
                    <h3 class="chart-title">Monthly Revenue</h3>
                    <span style="font-size:0.8rem;color:var(--text-muted);">Last 12 months</span>
                </div>
                <div class="chart-bars" id="revenueChart">
                    ${[65,45,78,52,89,67,94,73,85,91,78,96].map((h, i) => {
                        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                        return `<div class="chart-bar" style="height:0%;" data-height="${h}%">
                            <div class="chart-bar-label">${months[i]}</div>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;" class="reveal">
                <div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
                    <h3 style="font-size:1rem;font-weight:700;">Recent Orders</h3>
                    <a href="#" data-page="orders" class="btn btn-ghost btn-sm" onclick="event.preventDefault(); navigate('orders');">View All</a>
                </div>
                <table class="dashboard-table">
                    <thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>#PR-2341</td><td>Priya Sharma</td><td>Rose Body Wash</td><td>Rs.650</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                        <tr><td>#PR-2340</td><td>Amit Patel</td><td>Luxury Shampoo</td><td>Rs.780</td><td><span class="status-badge processing">Processing</span></td></tr>
                        <tr><td>#PR-2339</td><td>Sara Khan</td><td>Neem Face Wash</td><td>Rs.420</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                        <tr><td>#PR-2338</td><td>Ravi Kumar</td><td>Kitchen Cleaner Set</td><td>Rs.1,010</td><td><span class="status-badge pending">Pending</span></td></tr>
                        <tr><td>#PR-2337</td><td>Fatima Ali</td><td>Lavender Soap x3</td><td>Rs.900</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}

function renderInventory() {
    return `
    <div class="dashboard-layout">
        <aside class="dashboard-sidebar">
            <div style="padding:0 24px 24px;font-weight:700;font-size:1rem;">Dashboard</div>
            <a class="dashboard-nav-link" href="#" data-page="dashboard" onclick="event.preventDefault(); navigate('dashboard');"><i class="fas fa-chart-line"></i> Overview</a>
            <a class="dashboard-nav-link" href="#" data-page="orders" onclick="event.preventDefault(); navigate('orders');"><i class="fas fa-shopping-bag"></i> Orders</a>
            <a class="dashboard-nav-link active" href="#" onclick="event.preventDefault();"><i class="fas fa-boxes"></i> Inventory</a>
            <a class="dashboard-nav-link" href="#" data-page="customer" onclick="event.preventDefault(); navigate('customer');"><i class="fas fa-users"></i> Customers</a>
        </aside>
        <div class="dashboard-content">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Inventory Management</h1>
                <button class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Add Product</button>
            </div>
            <div class="inventory-toolbar">
                <div class="inventory-search">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search products…" oninput="searchInventory(this.value)">
                </div>
                <button class="filter-chip active" onclick="filterInventory('all', this)">All</button>
                <button class="filter-chip" onclick="filterInventory('low', this)">Low Stock</button>
                <button class="filter-chip" onclick="filterInventory('out', this)">Out of Stock</button>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;">
                <table class="dashboard-table" id="inventoryTable">
                    <thead><tr><th>Product</th><th>Category</th><th>Stock</th><th>Price</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        ${PRODUCTS.map(p => {
                            const status = p.stock === 0 ? 'out' : p.stock < 50 ? 'low' : 'in';
                            const statusText = p.stock === 0 ? 'Out of Stock' : p.stock < 50 ? 'Low Stock' : 'In Stock';
                            return `
                            <tr data-status="${status}">
                                <td style="font-weight:600;">${p.name} <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">${p.variant}</span></td>
                                <td>${p.category}</td>
                                <td>
                                    <div style="display:flex;align-items:center;gap:8px;">
                                        <div class="stock-bar"><div class="stock-bar-fill ${status==='out'?'low':status==='low'?'medium':'high'}" style="width:${Math.min(100, p.stock)}%"></div></div>
                                        <span style="font-size:0.85rem;">${p.stock}</span>
                                    </div>
                                </td>
                                <td class="font-tabular">${formatRs(p.price)}</td>
                                <td><span class="status-badge ${status==='out'?'cancelled':status==='low'?'pending':'delivered'}">${statusText}</span></td>
                                <td><button class="btn btn-outline btn-sm" onclick="showToast('Edit mode coming soon!', 'info');">Edit</button></td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}

function searchInventory(query) {
    const rows = document.querySelectorAll('#inventoryTable tbody tr');
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query.toLowerCase()) ? '' : 'none';
    });
}

function filterInventory(filter, el) {
    document.querySelectorAll('.inventory-toolbar .filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    const rows = document.querySelectorAll('#inventoryTable tbody tr');
    rows.forEach(row => {
        if (filter === 'all') row.style.display = '';
        else row.style.display = row.dataset.status === filter ? '' : 'none';
    });
}

function renderOrders() {
    return `
    <div class="dashboard-layout">
        <aside class="dashboard-sidebar">
            <div style="padding:0 24px 24px;font-weight:700;font-size:1rem;">Dashboard</div>
            <a class="dashboard-nav-link" href="#" data-page="dashboard" onclick="event.preventDefault(); navigate('dashboard');"><i class="fas fa-chart-line"></i> Overview</a>
            <a class="dashboard-nav-link active" href="#" onclick="event.preventDefault();"><i class="fas fa-shopping-bag"></i> Orders</a>
            <a class="dashboard-nav-link" href="#" data-page="inventory" onclick="event.preventDefault(); navigate('inventory');"><i class="fas fa-boxes"></i> Inventory</a>
            <a class="dashboard-nav-link" href="#" data-page="customer" onclick="event.preventDefault(); navigate('customer');"><i class="fas fa-users"></i> Customers</a>
        </aside>
        <div class="dashboard-content">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Orders</h1>
                <div class="filter-group">
                    <button class="filter-chip active">All</button>
                    <button class="filter-chip">Processing</button>
                    <button class="filter-chip">Delivered</button>
                    <button class="filter-chip">Cancelled</button>
                </div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;">
                <table class="dashboard-table">
                    <thead><tr><th>Order ID</th><th>Customer</th><th>Products</th><th>Total</th><th>Date</th><th>Status</th></tr></thead>
                    <tbody>
                        ${[
                            { id: '#PR-2341', name: 'Priya Sharma', items: 'Rose Body Wash, Rose Soap', total: 'Rs.900', date: 'Jul 28, 2026', status: 'delivered' },
                            { id: '#PR-2340', name: 'Amit Patel', items: 'Luxury Shampoo, Herbal Conditioner', total: 'Rs.1,530', date: 'Jul 27, 2026', status: 'processing' },
                            { id: '#PR-2339', name: 'Sara Khan', items: 'Neem Face Wash', total: 'Rs.420', date: 'Jul 26, 2026', status: 'delivered' },
                            { id: '#PR-2338', name: 'Ravi Kumar', items: 'Kitchen Cleaner, Glass Cleaner', total: 'Rs.810', date: 'Jul 25, 2026', status: 'pending' },
                            { id: '#PR-2337', name: 'Fatima Ali', items: 'Lavender Soap x3', total: 'Rs.900', date: 'Jul 24, 2026', status: 'delivered' },
                            { id: '#PR-2336', name: 'Omar Sheikh', items: 'Dish Wash Large x2', total: 'Rs.1,000', date: 'Jul 23, 2026', status: 'cancelled' }
                        ].map(o => `
                            <tr>
                                <td style="font-weight:600;">${o.id}</td>
                                <td>${o.name}</td>
                                <td style="font-size:0.85rem;color:var(--text-secondary);">${o.items}</td>
                                <td style="font-weight:600;">${o.total}</td>
                                <td style="font-size:0.85rem;color:var(--text-muted);">${o.date}</td>
                                <td><span class="status-badge ${o.status}">${o.status.charAt(0).toUpperCase()+o.status.slice(1)}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}

function renderCustomer() {
    return `
    <div class="dashboard-layout">
        <aside class="dashboard-sidebar">
            <div style="padding:0 24px 24px;font-weight:700;font-size:1rem;">Dashboard</div>
            <a class="dashboard-nav-link" href="#" data-page="dashboard" onclick="event.preventDefault(); navigate('dashboard');"><i class="fas fa-chart-line"></i> Overview</a>
            <a class="dashboard-nav-link" href="#" data-page="orders" onclick="event.preventDefault(); navigate('orders');"><i class="fas fa-shopping-bag"></i> Orders</a>
            <a class="dashboard-nav-link" href="#" data-page="inventory" onclick="event.preventDefault(); navigate('inventory');"><i class="fas fa-boxes"></i> Inventory</a>
            <a class="dashboard-nav-link active" href="#" onclick="event.preventDefault();"><i class="fas fa-users"></i> Customers</a>
        </aside>
        <div class="dashboard-content">
            <div class="dashboard-header">
                <h1 class="dashboard-title">Customer Profile</h1>
            </div>
            <div style="display:grid;grid-template-columns:1fr 2fr;gap:24px;">
                <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px;text-align:center;" class="reveal">
                    <div style="width:80px;height:80px;background:var(--primary);color:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;margin:0 auto 16px;">PS</div>
                    <h3 style="font-size:1.2rem;font-weight:700;">Priya Sharma</h3>
                    <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:20px;">priya@email.com</p>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;text-align:center;">
                        <div><div style="font-size:1.3rem;font-weight:800;color:var(--primary);">12</div><div style="font-size:0.75rem;color:var(--text-muted);">Orders</div></div>
                        <div><div style="font-size:1.3rem;font-weight:800;color:var(--primary);">Rs.8.5K</div><div style="font-size:0.75rem;color:var(--text-muted);">Spent</div></div>
                    </div>
                </div>
                <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;" class="reveal reveal-delay-1">
                    <div style="padding:20px 24px;border-bottom:1px solid var(--border);font-weight:700;">Order History</div>
                    <table class="dashboard-table">
                        <thead><tr><th>Order</th><th>Products</th><th>Total</th><th>Date</th><th>Status</th></tr></thead>
                        <tbody>
                            <tr><td>#PR-2341</td><td>Rose Body Wash, Rose Soap</td><td>Rs.900</td><td>Jul 28</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                            <tr><td>#PR-2320</td><td>Luxury Shampoo, Charcoal Soap</td><td>Rs.1,060</td><td>Jul 15</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                            <tr><td>#PR-2298</td><td>Kitchen Cleaner, Floor Cleaner</td><td>Rs.970</td><td>Jul 2</td><td><span class="status-badge delivered">Delivered</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderWishlist() {
    const wlProducts = Store.state.wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Wishlist</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Wishlist</span>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            ${wlProducts.length === 0 ? `
                <div class="wishlist-empty">
                    <i class="fas fa-heart"></i>
                    <p>Your wishlist is empty</p>
                    <a href="#" data-page="products" class="btn btn-primary">Discover Products</a>
                </div>
            ` : `
                <div class="products-grid">
                    ${wlProducts.map((p, i) => renderProductCard(p, i)).join('')}
                </div>
            `}
        </div>
    </section>`;
}

function renderFAQ() {
    const faqs = EditorState.data.faqs.length > 0 ? EditorState.data.faqs : [
        { q: 'Are PendooRoots products really 100% natural?', a: 'Yes! Every product is made with 100% naturally-derived ingredients. We source from certified organic farms and never use synthetic chemicals, parabens, sulfates, or artificial fragrances.' },
        { q: 'How long does shipping take?', a: 'Standard shipping within Pakistan takes 3-5 business days. Express shipping delivers within 1-2 business days. International shipping takes 7-14 business days.' },
        { q: 'Do you offer returns or exchanges?', a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, contact us for a full refund or exchange.' },
        { q: 'Are your products tested on animals?', a: 'Absolutely not. PendooRoots is certified cruelty-free. We never test on animals and neither do our suppliers.' },
        { q: 'What is your sustainability commitment?', a: 'We use 100% recycled packaging, carbon-neutral shipping, and concentrate formulas to reduce water waste. We also donate 1% of revenue to environmental restoration projects.' },
        { q: 'Do you offer wholesale or bulk pricing?', a: 'Yes! We offer special pricing for retailers, hotels, spas, and corporate orders. Contact us at ibmilyas347@gmail.com for details.' },
        { q: 'Where can I buy PendooRoots products?', a: 'You can shop directly from our website for the full collection. We also stock select products at premium retailers nationwide.' }
    ];
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">Frequently Asked Questions</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>FAQ</span>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="faq-list">
                ${faqs.map((f, i) => `
                    <div class="faq-item reveal reveal-delay-${(i%4)+1}">
                        <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                            ${f.q} <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderBlog() {
    const posts = [
        { title: 'The Science Behind Natural Surfactants', excerpt: 'How coconut-derived cleansers outperform synthetic alternatives without harming your skin.', date: 'Jul 25, 2026', category: 'Ingredients' },
        { title: 'Why Your "Natural" Soap Might Not Be Natural', excerpt: 'A deep dive into greenwashing in the personal care industry and how to spot it.', date: 'Jul 20, 2026', category: 'Education' },
        { title: 'Building a Zero-Waste Kitchen Routine', excerpt: 'Practical tips for reducing plastic and chemical exposure in your kitchen.', date: 'Jul 15, 2026', category: 'Lifestyle' },
        { title: 'Rose vs Aloe Vera: Which is Right for Your Skin?', excerpt: 'A botanical guide to choosing the right ingredients for your skin type.', date: 'Jul 10, 2026', category: 'Skincare' },
        { title: 'Our Supply Chain: From Farm to Bottle', excerpt: 'Follow the journey of our ingredients from organic farms to your bathroom shelf.', date: 'Jul 5, 2026', category: 'Behind the Scenes' },
        { title: 'The Future of Clean Beauty in Pakistan', excerpt: 'How PendooRoots is leading the movement toward truly natural personal care.', date: 'Jul 1, 2026', category: 'Industry' }
    ];
    return `
    <div class="page-header">
        <div class="container">
            <h1 class="page-title">The PendooRoots Journal</h1>
            <div class="page-breadcrumb">
                <a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Journal</span>
            </div>
        </div>
    </div>
    <section class="section">
        <div class="container">
            <div class="blog-grid">
                ${posts.map((post, i) => `
                    <div class="blog-card reveal reveal-delay-${(i%3)+1}">
                        <div class="blog-card-image">
                            <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" alt="${post.title}" loading="lazy">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-card-meta">
                                <span>${post.category}</span><span>·</span><span>${post.date}</span>
                            </div>
                            <h3 class="blog-card-title">${post.title}</h3>
                            <p class="blog-card-excerpt">${post.excerpt}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;
}

function renderPrivacy() {
    return `
    <div class="page-header"><div class="container"><h1 class="page-title">Privacy Policy</h1><div class="page-breadcrumb"><a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Privacy</span></div></div></div>
    <section class="section"><div class="container" style="max-width:700px;">
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">At PendooRoots, we respect your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">Information We Collect</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">We collect information you provide directly, including name, email, shipping address, and payment details when you make a purchase or create an account.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">How We Use Your Information</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">Your information is used to process orders, send order updates, improve our products, and (with your consent) send marketing communications.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">Data Protection</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">We implement industry-standard security measures to protect your data. We never sell your personal information to third parties.</p>
    </div></section>`;
}

function renderTerms() {
    return `
    <div class="page-header"><div class="container"><h1 class="page-title">Terms & Conditions</h1><div class="page-breadcrumb"><a href="#" data-page="home">Home</a> <i class="fas fa-chevron-right"></i> <span>Terms</span></div></div></div>
    <section class="section"><div class="container" style="max-width:700px;">
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">Welcome to PendooRoots. By using our website and products, you agree to the following terms and conditions.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">Products & Pricing</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">All prices are in Pakistani Rupees (PKR) and are subject to change without notice. Product images are for illustration purposes.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">Orders & Payments</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">Orders are subject to product availability. We reserve the right to cancel orders at our discretion. Payment must be received before dispatch.</p>
        <h3 style="font-weight:700;margin:24px 0 12px;">Returns Policy</h3>
        <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:20px;">Unopened products may be returned within 30 days of delivery for a full refund. Contact our support team to initiate a return.</p>
    </div></section>`;
}

function render404() {
    return `
    <div class="page-404">
        <div>
            <div class="page-404-code">404</div>
            <h2 class="page-404-title">Page Not Found</h2>
            <p class="page-404-desc">The page you're looking for doesn't exist or has been moved.</p>
            <a href="#" data-page="home" class="btn btn-primary">Back to Home</a>
        </div>
    </div>`;
}

function renderFooter() {
    const existingFooter = document.getElementById('siteFooter');
    if (existingFooter) existingFooter.remove();

    const footer = document.createElement('footer');
    footer.id = 'siteFooter';
    footer.className = 'footer';
    footer.innerHTML = `
    <div class="container">
        <div class="footer-grid">
            <div>
                <a href="#" class="nav-logo" data-page="home" style="margin-bottom:8px;">
                    <span class="logo-mark">P</span>
                    <span class="logo-text">${EditorState.data.settings.brandName || 'PENDOOROOTS'}</span>
                </a>
                <p class="footer-brand-desc">Premium botanical products engineered for everyday luxury. Nature's finest ingredients, perfected.</p>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div>
                <h4 class="footer-col-title">Shop</h4>
                <a href="#" data-page="products" class="footer-link">All Products</a>
                <a href="#" data-page="products" class="footer-link">Rose Collection</a>
                <a href="#" data-page="products" class="footer-link">Aloe Vera</a>
                <a href="#" data-page="products" class="footer-link">Kitchen Care</a>
                <a href="#" data-page="products" class="footer-link">Premium Range</a>
            </div>
            <div>
                <h4 class="footer-col-title">Company</h4>
                <a href="#" data-page="about" class="footer-link">About Us</a>
                <a href="#" data-page="sustainability" class="footer-link">Sustainability</a>
                <a href="#" data-page="blog" class="footer-link">Journal</a>
                <a href="#" data-page="faq" class="footer-link">FAQ</a>
                <a href="#" data-page="contact" class="footer-link">Contact</a>
            </div>
            <div>
                <h4 class="footer-col-title">Support</h4>
                <a href="#" data-page="faq" class="footer-link">Help Center</a>
                <a href="#" data-page="orders" class="footer-link">Track Order</a>
                <a href="#" data-page="privacy" class="footer-link">Privacy Policy</a>
                <a href="#" data-page="terms" class="footer-link">Terms & Conditions</a>
                <a href="#" class="footer-link">Shipping Info</a>
            </div>
            <div>
                <h4 class="footer-col-title">Stay in Touch</h4>
                <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:12px;line-height:1.6;">Subscribe for exclusive offers and updates.</p>
                <form onsubmit="event.preventDefault(); showToast('Subscribed!', 'success'); this.reset();" style="display:flex;gap:8px;">
                    <label class="sr-only" for="ftr_email">Email address</label>
                    <input id="ftr_email" name="email" type="email" placeholder="Your email" autocomplete="email" required style="flex:1;padding:10px 14px;border:1px solid var(--border);border-radius:var(--radius);font-size:0.85rem;background:var(--bg-alt);color:var(--text);outline:none;">
                    <button type="submit" class="btn btn-primary btn-sm" aria-label="Subscribe"><i class="fas fa-arrow-right" aria-hidden="true"></i></button>
                </form>
                <div class="footer-contact-item" style="margin-top:16px;"><i class="fas fa-phone-alt" aria-hidden="true"></i><span>${EditorState.data.settings.phone || '0313-5442427'}</span></div>
                <div class="footer-contact-item"><i class="fas fa-envelope" aria-hidden="true"></i><span>${EditorState.data.settings.email || 'ibmilyas347@gmail.com'}</span></div>
                <div class="footer-contact-item"><i class="fab fa-whatsapp" aria-hidden="true" style="color:#25D366;"></i><a href="https://wa.me/923474736347" target="_blank" style="color:inherit;">${EditorState.data.settings.whatsapp || '0347-4736347'}</a></div>
            </div>
        </div>
        <div class="footer-bottom">
            <span>&copy; 2026 PendooRoots. All rights reserved.</span>
            <span>Crafted with <i class="fas fa-heart" style="color:var(--danger);"></i> for nature lovers.</span>
        </div>
    </div>`;
    document.body.appendChild(footer);
}

// ===== ANIMATIONS =====
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                if (!target) return;
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = Math.floor(current).toLocaleString() + (target >= 100 ? '+' : '');
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
}

function initChartBars() {
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.chart-bar').forEach((bar, i) => {
                    setTimeout(() => { bar.style.height = bar.dataset.height; }, i * 80);
                });
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('#revenueChart').forEach(el => chartObserver.observe(el));
}

function initHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    // Floating particles
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 10 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
        container.appendChild(p);
    }
}

function initHeroSparkles() {
    const showcase = document.querySelector('.hero-product-showcase');
    if (!showcase) return;
    for (let i = 0; i < 20; i++) {
        const s = document.createElement('div');
        s.className = 'hero-sparkle';
        s.style.left = (20 + Math.random() * 60) + '%';
        s.style.top = (10 + Math.random() * 80) + '%';
        s.style.setProperty('--spark-drift', (Math.random() * 120 - 60) + 'px');
        s.style.animationDuration = (Math.random() * 4 + 3) + 's';
        s.style.animationDelay = (Math.random() * 5) + 's';
        s.style.width = s.style.height = (Math.random() * 3 + 1) + 'px';
        showcase.appendChild(s);
    }
}

function initTestimonialScroll() {
    const track = document.getElementById('testimonialTrack');
    if (!track) return;
    let scrollPos = 0;
    function autoScroll() {
        scrollPos += 0.5;
        if (scrollPos >= track.scrollWidth - track.clientWidth) scrollPos = 0;
        track.scrollLeft = scrollPos;
        requestAnimationFrame(autoScroll);
    }
    requestAnimationFrame(autoScroll);
}

// ===== CURSOR =====
function initCursor() {
    if (window.innerWidth < 768) return;
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;
        requestAnimationFrame(animateFollower);
    }
    requestAnimationFrame(animateFollower);

    document.querySelectorAll('a, button, .product-card, .category-card, .filter-chip, .option-btn').forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
    });
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Navigation
    document.addEventListener('click', e => {
        const link = e.target.closest('[data-page]');
        if (link) {
            e.preventDefault();
            const page = link.dataset.page;
            if (page === 'product-detail') return;
            navigate(page);
            // Close mobile menu
            document.getElementById('mobileMenu').classList.remove('active');
            document.getElementById('hamburger').classList.remove('active');
        }
        // Product card click
        const card = e.target.closest('.product-card');
        if (card && !e.target.closest('.product-action-btn') && !e.target.closest('.product-add-btn')) {
            const id = parseInt(card.dataset.id);
            const product = PRODUCTS.find(p => p.id === id);
            if (product) navigate('product-detail', product.slug);
        }
    });

    // Navbar scroll
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger
    document.getElementById('hamburger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('mobileMenu').classList.toggle('active');
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        const newTheme = Store.state.theme === 'light' ? 'dark' : 'light';
        Store.setState({ theme: newTheme });
        document.documentElement.setAttribute('data-theme', newTheme);
        document.querySelector('#themeToggle i').className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        const meta = document.getElementById('themeColorMeta');
        if (meta) meta.setAttribute('content', newTheme === 'dark' ? '#0a0a0f' : '#004b1c');
    });

    // Search
    document.getElementById('searchToggle').addEventListener('click', () => {
        document.getElementById('searchOverlay').classList.add('active');
        document.getElementById('searchInput').focus();
    });
    document.getElementById('searchClose').addEventListener('click', () => {
        document.getElementById('searchOverlay').classList.remove('active');
    });
    document.getElementById('searchInput').addEventListener('input', function() {
        const q = this.value.toLowerCase();
        const results = document.getElementById('searchResults');
        if (!q) { results.innerHTML = ''; return; }
        const matches = EditorState.data.products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)).slice(0, 5);
        results.innerHTML = matches.map(p => `
            <div style="display:flex;gap:16px;padding:12px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="navigate('product-detail','${p.slug}'); document.getElementById('searchOverlay').classList.remove('active');">
                <div style="width:56px;height:56px;background:var(--bg-alt);border-radius:var(--radius);flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:4px;">
                    <img src="${p.image}" alt="${p.name}" width="56" height="56" style="width:100%;height:100%;object-fit:contain;">
                </div>
                <div>
                    <div style="font-weight:600;font-size:0.9rem;">${p.name} — ${p.variant}</div>
                    <div style="font-size:0.8rem;color:var(--text-muted);">${p.category}</div>
                    <div style="font-weight:700;color:var(--primary);font-size:0.9rem;margin-top:4px;">${formatRs(p.price)}</div>
                </div>
            </div>
        `).join('');
    });

    // Cart sidebar
    document.getElementById('cartToggle').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
        document.getElementById('cartOverlay').classList.add('active');
        renderCartSidebar();
    });
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.getElementById('searchOverlay').classList.remove('active');
            closeCart();
        }
    });

    // Theme init
    document.documentElement.setAttribute('data-theme', Store.state.theme);
    if (Store.state.theme === 'dark') {
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }

    // Store listener
    Store.subscribe(() => {
        updateBadges();
        renderCartSidebar();
    });
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function renderCartSidebar() {
    const cart = Store.state.cart;
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item-sidebar">
            <div class="cart-item-sidebar-img"><img src="${item.image}" alt="${item.name}" width="80" height="80"></div>
            <div class="cart-item-sidebar-info">
                <div class="cart-item-sidebar-name">${item.name}</div>
                <div class="cart-item-sidebar-price">${formatRs(item.price)}</div>
                <div class="cart-item-sidebar-qty">
                    <button onclick="Store.updateCartQty('${item.key}', -1);" aria-label="Decrease quantity">−</button>
                    <span>${item.qty}</span>
                    <button onclick="Store.updateCartQty('${item.key}', 1);" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <button style="align-self:flex-start;font-size:0.8rem;color:var(--text-muted);padding:4px;" onclick="Store.removeFromCart('${item.key}');" aria-label="Remove ${item.name} from bag"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
        </div>
    `).join('');

    document.getElementById('cartSubtotal').textContent = formatRs(Store.getCartTotal());
}

function updateBadges() {
    const cartCount = Store.getCartCount();
    const wishCount = Store.state.wishlist.length;
    const cartBadge = document.getElementById('cartBadge');
    const wishBadge = document.getElementById('wishlistBadge');
    cartBadge.textContent = cartCount;
    cartBadge.classList.toggle('visible', cartCount > 0);
    wishBadge.textContent = wishCount;
    wishBadge.classList.toggle('visible', wishCount > 0);
}

// ========================================
// SITE EDITOR
// ========================================
const EditorState = {
    activeTab: 'products',
    editingProduct: null,
    dirty: false,
    data: {
        products: JSON.parse(localStorage.getItem('editor_products') || 'null'),
        hero: JSON.parse(localStorage.getItem('editor_hero') || 'null'),
        settings: JSON.parse(localStorage.getItem('editor_settings') || 'null'),
        testimonials: JSON.parse(localStorage.getItem('editor_testimonials') || 'null'),
        faqs: JSON.parse(localStorage.getItem('editor_faqs') || 'null'),
        features: JSON.parse(localStorage.getItem('editor_features') || 'null')
    },
    init() {
        if (!this.data.products) this.data.products = PRODUCTS.map(p => ({...p}));
        if (!this.data.hero) this.data.hero = {
            tag: '100% Natural Botanicals', headline1: 'Make Every', headlineAccent: 'Shine.',
            headline2: 'Dish', subtitle: 'The Lemoo Washer — engineered for everyday luxury. Premium botanical dish wash that cuts through grease while keeping your hands soft and nourished.',
            cta1: 'Shop Now', cta2: 'View Product'
        };
        if (!this.data.settings) this.data.settings = {
            brandName: 'PENDOOROOTS', primaryColor: '#004b1c', accentColor: '#ccff00',
            email: 'ibmilyas347@gmail.com', phone: '0313-5442427',
            whatsapp: '03474736347',
            address: '42 Botanical Lane, Garden District, Karachi, Pakistan',
            instagram: '@pendooroots', facebook: 'pendooroots', twitter: 'pendooroots'
        };
        if (!this.data.testimonials) this.data.testimonials = [
            { name: 'Priya Sharma', text: 'The Rose Body Wash is absolutely divine. It turns my shower into a luxury spa experience.', rating: 5 },
            { name: 'Ananya Patel', text: 'Finally, cleaning products that are both effective AND natural.', rating: 5 },
            { name: 'Vikram Singh', text: 'The Botanical Luxury Shampoo transformed my hair. Remarkable difference.', rating: 5 }
        ];
        if (!this.data.faqs) this.data.faqs = [
            { q: 'Are PendooRoots products really 100% natural?', a: 'Yes! Every product is made with 100% naturally-derived ingredients.' },
            { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days. Express: 1-2 days.' },
            { q: 'Do you offer returns?', a: '30-day satisfaction guarantee. Full refund or exchange.' }
        ];
        if (!this.data.features) this.data.features = [
            { icon: 'fa-leaf', title: '100% Natural', desc: 'Sourced from certified organic farms.' },
            { icon: 'fa-flask', title: 'Lab Tested', desc: 'Rigorous quality testing for purity.' },
            { icon: 'fa-recycle', title: 'Eco Packaging', desc: 'Recyclable materials, zero waste.' },
            { icon: 'fa-heart', title: 'Cruelty Free', desc: 'Never tested on animals.' }
        ];
    },
    save() {
        localStorage.setItem('editor_products', JSON.stringify(this.data.products));
        localStorage.setItem('editor_hero', JSON.stringify(this.data.hero));
        localStorage.setItem('editor_settings', JSON.stringify(this.data.settings));
        localStorage.setItem('editor_testimonials', JSON.stringify(this.data.testimonials));
        localStorage.setItem('editor_faqs', JSON.stringify(this.data.faqs));
        localStorage.setItem('editor_features', JSON.stringify(this.data.features));
        this.dirty = false;
    },
    reset() {
        Object.keys(localStorage).filter(k => k.startsWith('editor_')).forEach(k => localStorage.removeItem(k));
        this.data = { products: null, hero: null, settings: null, testimonials: null, faqs: null, features: null };
        this.init();
    },
    exportJSON() {
        const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'pendooroots-site-data.json'; a.click();
        URL.revokeObjectURL(url);
    },
    importJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => {
                try {
                    const imported = JSON.parse(e.target.result);
                    this.data = { ...this.data, ...imported };
                    this.save();
                    resolve();
                } catch(err) { reject(err); }
            };
            reader.readAsText(file);
        });
    }
};
EditorState.init();

function renderEditor() {
    const tabs = [
        { id: 'products', icon: 'fa-box', label: 'Products' },
        { id: 'hero', icon: 'fa-image', label: 'Hero Section' },
        { id: 'features', icon: 'fa-star', label: 'Features' },
        { id: 'testimonials', icon: 'fa-quote-left', label: 'Testimonials' },
        { id: 'faqs', icon: 'fa-question-circle', label: 'FAQs' },
        { id: 'settings', icon: 'fa-cog', label: 'Site Settings' },
        { id: 'export', icon: 'fa-download', label: 'Export / Import' }
    ];

    return `
    <div class="editor-layout">
        <aside class="editor-sidebar">
            <div class="editor-sidebar-title">Site Editor</div>
            ${tabs.map(t => `
                <button class="editor-nav-link ${EditorState.activeTab === t.id ? 'active' : ''}"
                    onclick="editorTab('${t.id}')">
                    <i class="fas ${t.icon}"></i> ${t.label}
                </button>
            `).join('')}
            <div class="editor-nav-divider"></div>
            <button class="editor-nav-link" onclick="EditorState.save(); navigate('home');">
                <i class="fas fa-eye"></i> Preview Site
            </button>
            <button class="editor-nav-link" onclick="navigate('home')">
                <i class="fas fa-external-link-alt"></i> View Site
            </button>
            <button class="editor-nav-link" onclick="navigate('dashboard')">
                <i class="fas fa-chart-line"></i> Dashboard
            </button>
        </aside>
        <div class="editor-main" id="editorMain">
            ${renderEditorTab(EditorState.activeTab)}
        </div>
    </div>`;
}

function renderEditorTab(tab) {
    EditorState.activeTab = tab;
    const renderers = {
        products: renderEditorProducts,
        hero: renderEditorHero,
        features: renderEditorFeatures,
        testimonials: renderEditorTestimonials,
        faqs: renderEditorFAQs,
        settings: renderEditorSettings,
        export: renderEditorExport
    };
    return (renderers[tab] || renderers.products)();
}

function editorTab(tab) {
    EditorState.activeTab = tab;
    EditorState.editingProduct = null;
    document.getElementById('editorMain').innerHTML = renderEditorTab(tab);
}

// --- PRODUCTS EDITOR ---
function renderEditorProducts() {
    const prods = EditorState.data.products;
    const editing = EditorState.editingProduct !== null ? prods.find(p => p.id === EditorState.editingProduct) : null;

    if (editing) return renderEditorProductEdit(editing);

    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Products</h1>
            <p class="editor-page-desc">${prods.length} products · Click to edit</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-primary btn-sm" onclick="editorAddProduct()">
                <i class="fas fa-plus"></i> Add Product
            </button>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-product-list">
            ${prods.map(p => `
                <div class="editor-product-item" onclick="editorEditProduct(${p.id})">
                    <div class="editor-product-thumb">
                        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="editor-product-info">
                        <div class="editor-product-name">${p.name} — ${p.variant}</div>
                        <div class="editor-product-meta">${p.category} · ${p.collection} · Stock: ${p.stock}</div>
                    </div>
                    <div class="editor-product-price font-tabular">${formatRs(p.price)}</div>
                </div>
            `).join('')}
        </div>
    </div>`;
}

function renderEditorProductEdit(p) {
    return `
    <div class="editor-header">
        <div style="display:flex;align-items:center;gap:12px;">
            <button class="btn btn-ghost btn-sm" onclick="EditorState.editingProduct=null; editorTab('products');">
                <i class="fas fa-arrow-left"></i> Back
            </button>
            <div>
                <h1 class="editor-page-title">Edit: ${p.name}</h1>
                <p class="editor-page-desc">${p.variant} · ID: ${p.id}</p>
            </div>
        </div>
        <div class="editor-actions">
            <button class="btn btn-outline btn-sm" onclick="editorDeleteProduct(${p.id})" style="color:var(--danger);border-color:var(--danger);">
                <i class="fas fa-trash"></i> Delete
            </button>
            <button class="btn btn-primary btn-sm" onclick="editorSaveProduct(${p.id})">
                <i class="fas fa-save"></i> Save Changes
            </button>
        </div>
    </div>

    <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;">
        <div>
            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Basic Info</span>
                </div>
                <div class="editor-row">
                    <div class="editor-field">
                        <label class="editor-label">Product Name</label>
                        <input class="editor-input" id="ep_name" value="${p.name}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Variant</label>
                        <input class="editor-input" id="ep_variant" value="${p.variant}">
                    </div>
                </div>
                <div class="editor-field">
                    <label class="editor-label">Slug (URL)</label>
                    <input class="editor-input" id="ep_slug" value="${p.slug}">
                </div>
                <div class="editor-field">
                    <label class="editor-label">Description</label>
                    <textarea class="editor-textarea" id="ep_desc">${p.description}</textarea>
                </div>
                <div class="editor-row-3">
                    <div class="editor-field">
                        <label class="editor-label">Category</label>
                        <select class="editor-select" id="ep_category">
                            ${['Kitchen Care','Hand Care','Body Care','Hair Care','Soaps','Skin Care','Home Care'].map(c =>
                                `<option ${p.category===c?'selected':''}>${c}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Collection</label>
                        <select class="editor-select" id="ep_collection">
                            ${['kitchen','rose','aloe','premium'].map(c =>
                                `<option ${p.collection===c?'selected':''}>${c}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Badge</label>
                        <input class="editor-input" id="ep_badge" value="${p.badge || ''}" placeholder="e.g. New, Popular">
                    </div>
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Pricing & Stock</span>
                </div>
                <div class="editor-row-3">
                    <div class="editor-field">
                        <label class="editor-label">Price (Rs.)</label>
                        <input class="editor-input" type="number" id="ep_price" value="${p.price}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Old Price (Rs.)</label>
                        <input class="editor-input" type="number" id="ep_oldPrice" value="${p.oldPrice || ''}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Stock</label>
                        <input class="editor-input" type="number" id="ep_stock" value="${p.stock}">
                    </div>
                </div>
                <div class="editor-row">
                    <div class="editor-field">
                        <label class="editor-label">Rating</label>
                        <input class="editor-input" type="number" step="0.1" min="0" max="5" id="ep_rating" value="${p.rating}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Reviews Count</label>
                        <input class="editor-input" type="number" id="ep_reviews" value="${p.reviews}">
                    </div>
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">How to Use</span>
                </div>
                <div class="editor-field">
                    <textarea class="editor-textarea" id="ep_howToUse">${p.howToUse}</textarea>
                </div>
            </div>
        </div>

        <div>
            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Image</span>
                </div>
                <div class="editor-field">
                    <label class="editor-label">Image URL</label>
                    <input class="editor-input" id="ep_image" value="${p.image}">
                </div>
                <div style="background:var(--bg-alt);border-radius:var(--radius);padding:20px;text-align:center;margin-top:8px;">
                    <img src="${p.image}" alt="Preview" style="max-height:160px;object-fit:contain;" onerror="this.style.display='none'">
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Sizes</span>
                </div>
                <div class="editor-field">
                    <input class="editor-input" id="ep_sizes" value="${p.sizes.join(', ')}" placeholder="Separate with commas">
                    <div class="editor-help">Comma separated: 500ml, 1L</div>
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Ingredients</span>
                </div>
                <div class="editor-field">
                    <input class="editor-input" id="ep_ingredients" value="${p.ingredients.join(', ')}">
                    <div class="editor-help">Comma separated</div>
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Benefits</span>
                </div>
                <div class="editor-field">
                    <input class="editor-input" id="ep_benefits" value="${p.benefits.join(', ')}">
                    <div class="editor-help">Comma separated</div>
                </div>
            </div>

            <div class="editor-card">
                <div class="editor-card-header">
                    <span class="editor-card-title">Related Products</span>
                </div>
                <div class="editor-field">
                    <input class="editor-input" id="ep_related" value="${(p.relatedIds||[]).join(', ')}">
                    <div class="editor-help">Comma separated product IDs</div>
                </div>
            </div>
        </div>
    </div>`;
}

function editorEditProduct(id) {
    EditorState.editingProduct = id;
    document.getElementById('editorMain').innerHTML = renderEditorTab('products');
}

function editorSaveProduct(id) {
    const prods = EditorState.data.products;
    const idx = prods.findIndex(p => p.id === id);
    if (idx === -1) return;
    prods[idx] = {
        ...prods[idx],
        name: document.getElementById('ep_name').value,
        variant: document.getElementById('ep_variant').value,
        slug: document.getElementById('ep_slug').value,
        description: document.getElementById('ep_desc').value,
        category: document.getElementById('ep_category').value,
        collection: document.getElementById('ep_collection').value,
        badge: document.getElementById('ep_badge').value || null,
        price: parseInt(document.getElementById('ep_price').value) || 0,
        oldPrice: parseInt(document.getElementById('ep_oldPrice').value) || null,
        stock: parseInt(document.getElementById('ep_stock').value) || 0,
        rating: parseFloat(document.getElementById('ep_rating').value) || 0,
        reviews: parseInt(document.getElementById('ep_reviews').value) || 0,
        image: document.getElementById('ep_image').value,
        images: [document.getElementById('ep_image').value],
        sizes: document.getElementById('ep_sizes').value.split(',').map(s => s.trim()).filter(Boolean),
        ingredients: document.getElementById('ep_ingredients').value.split(',').map(s => s.trim()).filter(Boolean),
        benefits: document.getElementById('ep_benefits').value.split(',').map(s => s.trim()).filter(Boolean),
        howToUse: document.getElementById('ep_howToUse').value,
        relatedIds: document.getElementById('ep_related').value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n))
    };
    EditorState.save();
    showToast('Product saved!', 'success');
    EditorState.editingProduct = null;
    editorTab('products');
}

function editorAddProduct() {
    const prods = EditorState.data.products;
    const maxId = Math.max(...prods.map(p => p.id), 0);
    const newProd = {
        id: maxId + 1, slug: 'new-product-' + (maxId + 1), name: 'New Product', variant: '500ml',
        category: 'Kitchen Care', collection: 'kitchen', price: 0, oldPrice: null,
        rating: 0, reviews: 0, stock: 0, badge: 'New',
        image: '', images: [''],
        description: 'Product description here.', ingredients: [], benefits: [],
        howToUse: 'Usage instructions here.', sizes: ['500ml'], relatedIds: []
    };
    prods.push(newProd);
    EditorState.save();
    editorEditProduct(newProd.id);
}

function editorDeleteProduct(id) {
    if (!confirm('Delete this product?')) return;
    EditorState.data.products = EditorState.data.products.filter(p => p.id !== id);
    EditorState.save();
    EditorState.editingProduct = null;
    editorTab('products');
    showToast('Product deleted', 'info');
}

// --- HERO EDITOR ---
function renderEditorHero() {
    const h = EditorState.data.hero;
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Hero Section</h1>
            <p class="editor-page-desc">Edit the main hero banner content</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-primary btn-sm" onclick="editorSaveHero()">
                <i class="fas fa-save"></i> Save
            </button>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Hero Content</span></div>
        <div class="editor-field">
            <label class="editor-label">Tag Line</label>
            <input class="editor-input" id="eh_tag" value="${h.tag}">
        </div>
        <div class="editor-row">
            <div class="editor-field">
                <label class="editor-label">Headline Line 1</label>
                <input class="editor-input" id="eh_h1" value="${h.headline1}">
            </div>
            <div class="editor-field">
                <label class="editor-label">Headline Line 2</label>
                <input class="editor-input" id="eh_h2" value="${h.headline2}">
            </div>
        </div>
        <div class="editor-field">
            <label class="editor-label">Accent Word (highlighted)</label>
            <input class="editor-input" id="eh_accent" value="${h.headlineAccent}">
        </div>
        <div class="editor-field">
            <label class="editor-label">Subtitle</label>
            <textarea class="editor-textarea" id="eh_subtitle">${h.subtitle}</textarea>
        </div>
        <div class="editor-row">
            <div class="editor-field">
                <label class="editor-label">Primary CTA Text</label>
                <input class="editor-input" id="eh_cta1" value="${h.cta1}">
            </div>
            <div class="editor-field">
                <label class="editor-label">Secondary CTA Text</label>
                <input class="editor-input" id="eh_cta2" value="${h.cta2}">
            </div>
        </div>
    </div>
    <div style="padding:16px;background:var(--primary-dark);border-radius:var(--radius-lg);color:#fff;margin-top:8px;">
        <p style="font-size:0.85rem;opacity:0.7;margin-bottom:8px;">Live Preview</p>
        <div style="font-family:var(--font-display);font-size:1.8rem;font-weight:500;line-height:1.2;">
            ${h.headline1} ${h.headline2}<br><em style="color:var(--accent);">${h.headlineAccent}</em>
        </div>
        <p style="font-size:0.85rem;opacity:0.6;margin-top:8px;max-width:400px;">${h.subtitle.substring(0,80)}…</p>
    </div>`;
}

function editorSaveHero() {
    EditorState.data.hero = {
        tag: document.getElementById('eh_tag').value,
        headline1: document.getElementById('eh_h1').value,
        headline2: document.getElementById('eh_h2').value,
        headlineAccent: document.getElementById('eh_accent').value,
        subtitle: document.getElementById('eh_subtitle').value,
        cta1: document.getElementById('eh_cta1').value,
        cta2: document.getElementById('eh_cta2').value
    };
    EditorState.save();
    showToast('Hero section saved!', 'success');
}

// --- FEATURES EDITOR ---
function renderEditorFeatures() {
    const feats = EditorState.data.features;
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Features</h1>
            <p class="editor-page-desc">Manage the "Why PendooRoots" feature cards</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-outline btn-sm" onclick="editorAddFeature()"><i class="fas fa-plus"></i> Add</button>
            <button class="btn btn-primary btn-sm" onclick="editorSaveFeatures()"><i class="fas fa-save"></i> Save</button>
        </div>
    </div>
    <div id="editorFeaturesList">
        ${feats.map((f, i) => `
            <div class="editor-card" style="position:relative;">
                <button onclick="editorRemoveFeature(${i})" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--danger);cursor:pointer;font-size:0.85rem;">Remove</button>
                <div class="editor-row-3">
                    <div class="editor-field">
                        <label class="editor-label">Icon (FontAwesome class)</label>
                        <input class="editor-input ef-icon" value="${f.icon}" data-idx="${i}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Title</label>
                        <input class="editor-input ef-title" value="${f.title}" data-idx="${i}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Description</label>
                        <input class="editor-input ef-desc" value="${f.desc}" data-idx="${i}">
                    </div>
                </div>
            </div>
        `).join('')}
    </div>`;
}

function editorSaveFeatures() {
    const icons = document.querySelectorAll('.ef-icon');
    const titles = document.querySelectorAll('.ef-title');
    const descs = document.querySelectorAll('.ef-desc');
    EditorState.data.features = Array.from(icons).map((el, i) => ({
        icon: el.value, title: titles[i].value, desc: descs[i].value
    }));
    EditorState.save();
    showToast('Features saved!', 'success');
}

function editorAddFeature() {
    EditorState.data.features.push({ icon: 'fa-star', title: 'New Feature', desc: 'Description here' });
    editorTab('features');
}

function editorRemoveFeature(idx) {
    EditorState.data.features.splice(idx, 1);
    editorSaveFeatures();
    editorTab('features');
}

// --- TESTIMONIALS EDITOR ---
function renderEditorTestimonials() {
    const tests = EditorState.data.testimonials;
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Testimonials</h1>
            <p class="editor-page-desc">Manage customer reviews shown on the homepage</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-outline btn-sm" onclick="editorAddTestimonial()"><i class="fas fa-plus"></i> Add</button>
            <button class="btn btn-primary btn-sm" onclick="editorSaveTestimonials()"><i class="fas fa-save"></i> Save</button>
        </div>
    </div>
    <div id="editorTestimonialsList">
        ${tests.map((t, i) => `
            <div class="editor-card" style="position:relative;">
                <button onclick="editorRemoveTestimonial(${i})" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--danger);cursor:pointer;font-size:0.85rem;">Remove</button>
                <div class="editor-row">
                    <div class="editor-field">
                        <label class="editor-label">Name</label>
                        <input class="editor-input et-name" value="${t.name}" data-idx="${i}">
                    </div>
                    <div class="editor-field">
                        <label class="editor-label">Rating (1-5)</label>
                        <input class="editor-input et-rating" type="number" min="1" max="5" value="${t.rating}" data-idx="${i}">
                    </div>
                </div>
                <div class="editor-field">
                    <label class="editor-label">Review Text</label>
                    <textarea class="editor-textarea et-text" data-idx="${i}">${t.text}</textarea>
                </div>
            </div>
        `).join('')}
    </div>`;
}

function editorSaveTestimonials() {
    const names = document.querySelectorAll('.et-name');
    const ratings = document.querySelectorAll('.et-rating');
    const texts = document.querySelectorAll('.et-text');
    EditorState.data.testimonials = Array.from(names).map((el, i) => ({
        name: el.value, rating: parseInt(ratings[i].value) || 5, text: texts[i].value
    }));
    EditorState.save();
    showToast('Testimonials saved!', 'success');
}

function editorAddTestimonial() {
    EditorState.data.testimonials.push({ name: 'New Customer', text: 'Great product!', rating: 5 });
    editorTab('testimonials');
}

function editorRemoveTestimonial(idx) {
    EditorState.data.testimonials.splice(idx, 1);
    editorSaveTestimonials();
    editorTab('testimonials');
}

// --- FAQ EDITOR ---
function renderEditorFAQs() {
    const faqs = EditorState.data.faqs;
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">FAQs</h1>
            <p class="editor-page-desc">Manage frequently asked questions</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-outline btn-sm" onclick="editorAddFAQ()"><i class="fas fa-plus"></i> Add</button>
            <button class="btn btn-primary btn-sm" onclick="editorSaveFAQs()"><i class="fas fa-save"></i> Save</button>
        </div>
    </div>
    <div id="editorFAQList">
        ${faqs.map((f, i) => `
            <div class="editor-card" style="position:relative;">
                <button onclick="editorRemoveFAQ(${i})" style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--danger);cursor:pointer;font-size:0.85rem;">Remove</button>
                <div class="editor-field">
                    <label class="editor-label">Question</label>
                    <input class="editor-input efq-q" value="${f.q}" data-idx="${i}">
                </div>
                <div class="editor-field">
                    <label class="editor-label">Answer</label>
                    <textarea class="editor-textarea efq-a" data-idx="${i}">${f.a}</textarea>
                </div>
            </div>
        `).join('')}
    </div>`;
}

function editorSaveFAQs() {
    const qs = document.querySelectorAll('.efq-q');
    const as = document.querySelectorAll('.efq-a');
    EditorState.data.faqs = Array.from(qs).map((el, i) => ({ q: el.value, a: as[i].value }));
    EditorState.save();
    showToast('FAQs saved!', 'success');
}

function editorAddFAQ() {
    EditorState.data.faqs.push({ q: 'New question?', a: 'Answer here.' });
    editorTab('faqs');
}

function editorRemoveFAQ(idx) {
    EditorState.data.faqs.splice(idx, 1);
    editorSaveFAQs();
    editorTab('faqs');
}

// --- SETTINGS EDITOR ---
function renderEditorSettings() {
    const s = EditorState.data.settings;
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Site Settings</h1>
            <p class="editor-page-desc">Brand name, colors, contact info, social links</p>
        </div>
        <div class="editor-actions">
            <button class="btn btn-primary btn-sm" onclick="editorSaveSettings()">
                <i class="fas fa-save"></i> Save
            </button>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Brand</span></div>
        <div class="editor-field">
            <label class="editor-label">Brand Name</label>
            <input class="editor-input" id="es_brand" value="${s.brandName}">
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Colors</span></div>
        <div class="editor-row">
            <div class="editor-field">
                <label class="editor-label">Primary Color</label>
                <div class="editor-color-row">
                    <div class="editor-color-swatch" style="background:${s.primaryColor};" onclick="this.querySelector('input').click()">
                        <input type="color" value="${s.primaryColor}" id="es_primaryColor" onchange="this.parentElement.style.background=this.value">
                    </div>
                    <input class="editor-input" value="${s.primaryColor}" id="es_primaryColorText" style="flex:1;">
                </div>
            </div>
            <div class="editor-field">
                <label class="editor-label">Accent Color</label>
                <div class="editor-color-row">
                    <div class="editor-color-swatch" style="background:${s.accentColor};" onclick="this.querySelector('input').click()">
                        <input type="color" value="${s.accentColor}" id="es_accentColor" onchange="this.parentElement.style.background=this.value">
                    </div>
                    <input class="editor-input" value="${s.accentColor}" id="es_accentColorText" style="flex:1;">
                </div>
            </div>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Contact Information</span></div>
        <div class="editor-row">
            <div class="editor-field">
                <label class="editor-label">Email</label>
                <input class="editor-input" id="es_email" value="${s.email || ''}">
            </div>
            <div class="editor-field">
                <label class="editor-label">Phone</label>
                <input class="editor-input" id="es_phone" value="${s.phone || ''}">
            </div>
        </div>
        <div class="editor-row">
            <div class="editor-field">
                <label class="editor-label">WhatsApp</label>
                <input class="editor-input" id="es_whatsapp" value="${s.whatsapp || ''}">
            </div>
        </div>
        <div class="editor-field">
            <label class="editor-label">Address</label>
            <textarea class="editor-textarea" id="es_address" style="min-height:60px;">${s.address}</textarea>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Social Media</span></div>
        <div class="editor-row-3">
            <div class="editor-field">
                <label class="editor-label">Instagram</label>
                <input class="editor-input" id="es_insta" value="${s.instagram}">
            </div>
            <div class="editor-field">
                <label class="editor-label">Facebook</label>
                <input class="editor-input" id="es_fb" value="${s.facebook}">
            </div>
            <div class="editor-field">
                <label class="editor-label">Twitter</label>
                <input class="editor-input" id="es_twitter" value="${s.twitter}">
            </div>
        </div>
    </div>`;
}

function editorSaveSettings() {
    EditorState.data.settings = {
        brandName: document.getElementById('es_brand').value,
        primaryColor: document.getElementById('es_primaryColorText').value,
        accentColor: document.getElementById('es_accentColorText').value,
        email: document.getElementById('es_email').value,
        phone: document.getElementById('es_phone').value,
        whatsapp: document.getElementById('es_whatsapp')?.value || '',
        address: document.getElementById('es_address').value,
        instagram: document.getElementById('es_insta').value,
        facebook: document.getElementById('es_fb').value,
        twitter: document.getElementById('es_twitter').value
    };
    EditorState.save();
    applyEditorColors();
    showToast('Settings saved!', 'success');
}

// --- EXPORT / IMPORT ---
function renderEditorExport() {
    return `
    <div class="editor-header">
        <div>
            <h1 class="editor-page-title">Export / Import</h1>
            <p class="editor-page-desc">Backup your site data or restore from a file</p>
        </div>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Export Site Data</span></div>
        <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:16px;">Download all your products, hero content, settings, testimonials, and FAQs as a JSON file.</p>
        <button class="btn btn-primary" onclick="EditorState.exportJSON()">
            <i class="fas fa-download"></i> Export JSON
        </button>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Import Site Data</span></div>
        <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:16px;">Restore site data from a previously exported JSON file. This will overwrite current data.</p>
        <div class="editor-upload-zone" onclick="document.getElementById('importFile').click()">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Click to select JSON file</p>
        </div>
        <input type="file" id="importFile" accept=".json" style="display:none;" onchange="editorImportFile(this)">
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Reset All Data</span></div>
        <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:16px;">Clear all editor changes and restore original default data.</p>
        <button class="btn btn-outline" onclick="editorResetData()" style="color:var(--danger);border-color:var(--danger);">
            <i class="fas fa-trash-alt"></i> Reset to Defaults
        </button>
    </div>
    <div class="editor-card">
        <div class="editor-card-header"><span class="editor-card-title">Quick Actions</span></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-outline btn-sm" onclick="navigate('home')"><i class="fas fa-eye"></i> Preview Site</button>
            <button class="btn btn-outline btn-sm" onclick="window.print()"><i class="fas fa-print"></i> Print</button>
        </div>
    </div>`;
}

function editorImportFile(input) {
    const file = input.files[0];
    if (!file) return;
    EditorState.importJSON(file).then(() => {
        showToast('Data imported successfully!', 'success');
        editorTab('export');
    }).catch(() => {
        showToast('Invalid JSON file', 'error');
    });
}

function editorResetData() {
    if (!confirm('Reset all editor data to defaults? This cannot be undone.')) return;
    EditorState.reset();
    showToast('Data reset to defaults', 'info');
    editorTab('export');
}

// ===== SPECULAR BUTTON (OGL WebGL) =====
const OGL_MODULE_URL = 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm';
let _OGL_NS = null;

function getOGL() {
    if (_OGL_NS) return Promise.resolve(_OGL_NS);
    return import(OGL_MODULE_URL)
        .then(m => { _OGL_NS = m; return m; })
        .catch(err => { console.error('SpecularButton: failed to load OGL:', err); throw err; });
}

const SPECULAR_PAD = 20;

const SPECULAR_VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const SPECULAR_FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

function createSpecularButton(el) {
    let cancelled = false;
    let destroy = () => { cancelled = true; };

    const readNum = (name, def) => {
        const v = parseFloat(el.getAttribute(name));
        return isNaN(v) ? def : v;
    };
    const readBool = (name, def) => (el.getAttribute(name) || '').toLowerCase() !== 'false';

    const cfg = {
        size: el.getAttribute('data-sb-size') || 'lg',
        radius: readNum('data-sb-radius', 18),
        tint: el.getAttribute('data-sb-tint') || '#ffffff',
        tintOpacity: readNum('data-sb-tint-opacity', 0),
        blur: readNum('data-sb-blur', 0),
        textColor: el.getAttribute('data-sb-text-color') || '#f5f5f5',
        lineColor: el.getAttribute('data-sb-line-color') || '#ffffff',
        baseColor: el.getAttribute('data-sb-base-color') || '#525252',
        intensity: readNum('data-sb-intensity', 1),
        shineSize: readNum('data-sb-shine-size', 10),
        shineFade: readNum('data-sb-shine-fade', 40),
        thickness: readNum('data-sb-thickness', 1),
        speed: readNum('data-sb-speed', 0.35),
        followMouse: readBool('data-sb-follow', true),
        proximity: readNum('data-sb-proximity', 250),
        autoAnimate: (el.getAttribute('data-sb-auto') || el.getAttribute('data-sb-auto-animate') || 'true').toLowerCase() === 'true'
    };

    el.classList.add('specular-button', 'specular-button--' + cfg.size);
    el.style.setProperty('--sb-radius', cfg.radius + 'px');
    el.style.setProperty('--sb-tint', cfg.tint);
    el.style.setProperty('--sb-tint-opacity', String(cfg.tintOpacity));
    el.style.setProperty('--sb-blur', cfg.blur + 'px');
    el.style.setProperty('--sb-text-color', cfg.textColor);

    let fx = el.querySelector('.specular-button__fx');
    if (!fx) {
        fx = document.createElement('span');
        fx.className = 'specular-button__fx';
        fx.setAttribute('aria-hidden', 'true');
        el.insertBefore(fx, el.firstChild);
    }
    if (!el.querySelector('.specular-button__label')) {
        const label = document.createElement('span');
        label.className = 'specular-button__label';
        const nodes = Array.from(el.childNodes);
        nodes.forEach(n => { if (n !== fx) label.appendChild(n); });
        el.appendChild(label);
    }

    getOGL().then(OGL => {
        if (cancelled || !el.isConnected) return;
        const { Renderer, Program, Mesh, Triangle, Color } = OGL;
        const dpr = window.devicePixelRatio || 1;

        let renderer, gl, program, geometry, mesh, ro;
        let raf = 0;
        const sizeRef = { w: 1, h: 1 };
        const lineC = new Color();
        const baseC = new Color();
        let pointerAngle = null;
        let proximityT = 0;

        try {
            renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr });
            gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

            geometry = new Triangle(gl);
            if (geometry.attributes.uv) delete geometry.attributes.uv;

            program = new Program(gl, {
                vertex: SPECULAR_VERT,
                fragment: SPECULAR_FRAG,
                uniforms: {
                    uCenter: { value: [0, 0] },
                    uHalfSize: { value: [1, 1] },
                    uRadius: { value: 0 },
                    uAngle: { value: 2.4 },
                    uPx: { value: dpr },
                    uLineColor: { value: [1, 1, 1] },
                    uBaseColor: { value: [0.32, 0.32, 0.32] },
                    uIntensity: { value: 1 },
                    uShineSize: { value: 0.17 },
                    uShineFade: { value: 0.7 },
                    uThickness: { value: 1 },
                    uBaseWidth: { value: dpr }
                }
            });

            mesh = new Mesh(gl, { geometry, program });
            fx.appendChild(gl.canvas);

            const resize = () => {
                const rect = el.getBoundingClientRect();
                const w = rect.width;
                const h = rect.height;
                sizeRef.w = w;
                sizeRef.h = h;
                renderer.setSize(w + SPECULAR_PAD * 2, h + SPECULAR_PAD * 2);
                program.uniforms.uCenter.value = [(SPECULAR_PAD + w / 2) * dpr, (SPECULAR_PAD + h / 2) * dpr];
                program.uniforms.uHalfSize.value = [(w / 2) * dpr, (h / 2) * dpr];
            };
            ro = new ResizeObserver(resize);
            ro.observe(el);
            resize();

            const onPointerMove = e => {
                const rect = el.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
                const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
                const dist = Math.hypot(dx, dy);
                if (dist === 0) {
                    const nx = (e.clientX - cx) / (rect.width / 2);
                    const ny = (cy - e.clientY) / (rect.height / 2);
                    pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15;
                } else {
                    pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx);
                }
                const t = Math.max(0, 1 - dist / Math.max(cfg.proximity, 1));
                proximityT = t * t * (3 - 2 * t);
            };
            window.addEventListener('pointermove', onPointerMove);

            let angle = 2.4;
            let idleAngle = 2.4;
            let bright = 0;
            let last = performance.now();

            const update = now => {
                raf = requestAnimationFrame(update);
                const dt = Math.min((now - last) / 1000, 0.05);
                last = now;
                const p = cfg;

                idleAngle += p.speed * dt;
                const steer = p.followMouse && pointerAngle != null && (!p.autoAnimate || proximityT > 0);
                const target = steer ? pointerAngle : idleAngle;
                const diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
                angle += diff * (1 - Math.exp(-dt * 7));

                const brightTarget = p.autoAnimate ? 1 : proximityT;
                bright += (brightTarget - bright) * (1 - Math.exp(-dt * 8));

                lineC.set(p.lineColor);
                baseC.set(p.baseColor);
                program.uniforms.uAngle.value = angle;
                program.uniforms.uRadius.value = Math.min(p.radius, Math.min(sizeRef.w, sizeRef.h) / 2) * dpr;
                program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b];
                program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
                program.uniforms.uIntensity.value = p.intensity * bright;
                program.uniforms.uShineSize.value = (p.shineSize * Math.PI) / 180;
                program.uniforms.uShineFade.value = (p.shineFade * Math.PI) / 180;
                program.uniforms.uThickness.value = p.thickness * dpr;
                renderer.render({ scene: mesh });
            };
            raf = requestAnimationFrame(update);

            el.classList.add('specular-button--active');
            destroy = () => {
                cancelled = true;
                if (raf) cancelAnimationFrame(raf);
                if (ro) ro.disconnect();
                window.removeEventListener('pointermove', onPointerMove);
                if (gl && gl.canvas && gl.canvas.parentNode === fx) fx.removeChild(gl.canvas);
                if (gl && gl.getExtension) gl.getExtension('WEBGL_lose_context')?.loseContext();
            };
        } catch (err) {
            console.error('SpecularButton: init failed for', el, err);
        }
    });

    return () => destroy();
}

const specularInstances = new Map();

function initSpecularButtons() {
    document.querySelectorAll('[data-specular]').forEach(el => {
        if (specularInstances.has(el)) return;
        specularInstances.set(el, createSpecularButton(el));
    });
}

function destroySpecularButtons() {
    specularInstances.forEach(destroy => {
        try { destroy(); } catch (e) { /* noop */ }
    });
    specularInstances.clear();
}

// ===== MAGIC BENTO (GSAP) =====
const MAGIC_BENTO = {
    textAutoHide: true,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    enableTilt: false,
    enableMagnetism: false,
    clickEffect: true,
    spotlightRadius: 280,
    particleCount: 12,
    glowColor: '204, 255, 0',
    disableAnimations: false
};

function bentoCardData() {
    const totalRevenue = 156780;
    const totalOrders = 234;
    const totalCustomers = 1892;
    const lowStock = PRODUCTS.filter(p => p.stock < 50).length;
    return [
        { icon: 'fa-chart-line', title: 'Analytics', description: 'Track user behavior & live trends', label: 'Insights', page: null },
        { icon: 'fa-shopping-bag', title: 'Orders', description: totalOrders + ' orders to manage & fulfill', label: 'Sales', page: 'orders' },
        { icon: 'fa-boxes', title: 'Inventory', description: lowStock + ' low stock alerts right now', label: 'Stock', page: 'inventory' },
        { icon: 'fa-users', title: 'Customers', description: (totalCustomers / 1000).toFixed(1) + 'K happy customers', label: 'Audience', page: 'customer' },
        { icon: 'fa-dollar-sign', title: 'Revenue', description: formatRs(totalRevenue) + ' total revenue', label: 'Money', page: null },
        { icon: 'fa-palette', title: 'Store Editor', description: 'Customize your store design & content', label: 'Studio', page: 'editor' }
    ];
}

function renderMagicBento() {
    const cards = bentoCardData();
    return `
    <div class="magic-bento">
        <div class="card-grid bento-section" id="magicBentoGrid">
            ${cards.map(c => `
                <div class="magic-bento-card magic-bento-card--text-autohide magic-bento-card--border-glow"
                     ${c.page ? `data-page="${c.page}"` : ''}>
                    <div class="magic-bento-card__header">
                        <div class="magic-bento-card__label"><i class="fas ${c.icon}"></i> ${c.label}</div>
                    </div>
                    <div class="magic-bento-card__content">
                        <h2 class="magic-bento-card__title">${c.title}</h2>
                        <p class="magic-bento-card__description">${c.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`;
}

function createParticleElement(x, y, color) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.6);pointer-events:none;z-index:100;left:${x}px;top:${y}px;`;
    return el;
}

function calculateSpotlightValues(radius) {
    return { proximity: radius * 0.5, fadeDistance: radius * 0.75 };
}

function updateCardGlowProperties(card, mouseX, mouseY, glow, radius) {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;
    card.style.setProperty('--glow-x', relativeX + '%');
    card.style.setProperty('--glow-y', relativeY + '%');
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', radius + 'px');
}

function initBentoParticleCard(card, cfg) {
    let isHovered = false;
    let initialized = false;
    let memoized = [];
    const timeouts = [];
    const particles = [];

    const initializeParticles = () => {
        if (initialized) return;
        const rect = card.getBoundingClientRect();
        memoized = Array.from({ length: cfg.particleCount }, () =>
            createParticleElement(Math.random() * rect.width, Math.random() * rect.height, cfg.glowColor)
        );
        initialized = true;
    };

    const clearAllParticles = () => {
        timeouts.forEach(clearTimeout);
        timeouts.length = 0;
        particles.forEach(particle => {
            gsap.to(particle, {
                scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
                onComplete: () => { if (particle.parentNode) particle.parentNode.removeChild(particle); }
            });
        });
        particles.length = 0;
    };

    const animateParticles = () => {
        if (!isHovered || !card.isConnected) return;
        if (!initialized) initializeParticles();
        memoized.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHovered || !card.isConnected) return;
                const clone = particle.cloneNode(true);
                card.appendChild(clone);
                particles.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360, duration: 2 + Math.random() * 2,
                    ease: 'none', repeat: -1, yoyo: true
                });
                gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
            }, index * 100);
            timeouts.push(timeoutId);
        });
    };

    const onEnter = () => { isHovered = true; animateParticles(); };
    const onLeave = () => { isHovered = false; clearAllParticles(); };

    const onClick = e => {
        if (!cfg.clickEffect) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const maxDistance = Math.max(
            Math.hypot(x, y),
            Math.hypot(x - rect.width, y),
            Math.hypot(x, y - rect.height),
            Math.hypot(x - rect.width, y - rect.height)
        );
        const ripple = document.createElement('div');
        ripple.style.cssText = `position:absolute;width:${maxDistance * 2}px;height:${maxDistance * 2}px;border-radius:50%;background:radial-gradient(circle, rgba(${cfg.glowColor},0.4) 0%, rgba(${cfg.glowColor},0.2) 30%, transparent 70%);left:${x - maxDistance}px;top:${y - maxDistance}px;pointer-events:none;z-index:1000;`;
        card.appendChild(ripple);
        gsap.fromTo(ripple, { scale: 0, opacity: 1 }, {
            scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('click', onClick);

    return () => {
        isHovered = false;
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
        card.removeEventListener('click', onClick);
        clearAllParticles();
    };
}

function initBentoSpotlight(grid, cfg) {
    if (!cfg.enableSpotlight || window.innerWidth <= 768) return () => {};
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(${cfg.glowColor},0.15) 0%, rgba(${cfg.glowColor},0.08) 15%, rgba(${cfg.glowColor},0.04) 25%, rgba(${cfg.glowColor},0.02) 40%, rgba(${cfg.glowColor},0.01) 65%, transparent 70%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
    document.body.appendChild(spotlight);

    const { proximity, fadeDistance } = calculateSpotlightValues(cfg.spotlightRadius);

    const handleMouseMove = e => {
        const section = grid.closest('.bento-section');
        const rect = section ? section.getBoundingClientRect() : null;
        const mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        const cards = grid.querySelectorAll('.magic-bento-card');

        if (!mouseInside) {
            gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' });
            cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
            return;
        }

        let minDistance = Infinity;
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
            const effectiveDistance = Math.max(0, distance);
            minDistance = Math.min(minDistance, effectiveDistance);

            let glowIntensity = 0;
            if (effectiveDistance <= proximity) glowIntensity = 1;
            else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);

            updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, cfg.spotlightRadius);
        });

        gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
        const targetOpacity = minDistance <= proximity ? 0.8
            : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
        gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (spotlight.parentNode) spotlight.parentNode.removeChild(spotlight);
    };
}

let magicBentoCleanups = [];

function initMagicBento() {
    const grid = document.getElementById('magicBentoGrid');
    if (!grid || typeof gsap === 'undefined') return;
    destroyMagicBento();
    const cfg = MAGIC_BENTO;
    const shouldDisable = cfg.disableAnimations || window.innerWidth <= 768;

    grid.querySelectorAll('.magic-bento-card').forEach(card => {
        if (!shouldDisable) {
            magicBentoCleanups.push(initBentoParticleCard(card, cfg));
        } else {
            card.style.setProperty('--glow-intensity', '0');
        }
    });
    if (!shouldDisable) magicBentoCleanups.push(initBentoSpotlight(grid, cfg));
}

function destroyMagicBento() {
    magicBentoCleanups.forEach(fn => { try { fn(); } catch (e) { /* noop */ } });
    magicBentoCleanups = [];
}

// ===== GRAINIENT (OGL WebGL) =====
const GRAINIENT_VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const GRAINIENT_FRAG = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;

const GRAINIENT_DEFAULTS = {
    timeSpeed: 0.25, colorBalance: 0, warpStrength: 1, warpFrequency: 5, warpSpeed: 2,
    warpAmplitude: 50, blendAngle: 0, blendSoftness: 0.05, rotationAmount: 500,
    noiseScale: 2, grainAmount: 0.1, grainScale: 2, grainAnimated: false,
    contrast: 1.5, gamma: 1, saturation: 1, centerX: 0, centerY: 0, zoom: 0.9,
    color1: '#ccff00', color2: '#0f7a3d', color3: '#00331a'
};

function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return [1, 1, 1];
    return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
}

function createGrainient(container, opts) {
    let cancelled = false;
    let destroy = () => { cancelled = true; };

    getOGL().then(OGL => {
        if (cancelled || !container.isConnected) return;
        const { Renderer, Program, Mesh, Triangle } = OGL;

        try {
            const renderer = new Renderer({
                webgl: 2, alpha: true, antialias: false,
                dpr: Math.min(window.devicePixelRatio || 1, 2)
            });
            const gl = renderer.gl;
            const canvas = gl.canvas;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.display = 'block';
            container.appendChild(canvas);

            const geometry = new Triangle(gl);
            const program = new Program(gl, {
                vertex: GRAINIENT_VERT,
                fragment: GRAINIENT_FRAG,
                uniforms: {
                    iTime:           { value: 0 },
                    iResolution:     { value: new Float32Array([1, 1]) },
                    uTimeSpeed:      { value: opts.timeSpeed },
                    uColorBalance:   { value: opts.colorBalance },
                    uWarpStrength:   { value: opts.warpStrength },
                    uWarpFrequency:  { value: opts.warpFrequency },
                    uWarpSpeed:      { value: opts.warpSpeed },
                    uWarpAmplitude:  { value: opts.warpAmplitude },
                    uBlendAngle:     { value: opts.blendAngle },
                    uBlendSoftness:  { value: opts.blendSoftness },
                    uRotationAmount: { value: opts.rotationAmount },
                    uNoiseScale:     { value: opts.noiseScale },
                    uGrainAmount:    { value: opts.grainAmount },
                    uGrainScale:     { value: opts.grainScale },
                    uGrainAnimated:  { value: opts.grainAnimated ? 1 : 0 },
                    uContrast:       { value: opts.contrast },
                    uGamma:          { value: opts.gamma },
                    uSaturation:     { value: opts.saturation },
                    uCenterOffset:   { value: new Float32Array([opts.centerX, opts.centerY]) },
                    uZoom:           { value: opts.zoom },
                    uColor1:         { value: new Float32Array(hexToRgb(opts.color1)) },
                    uColor2:         { value: new Float32Array(hexToRgb(opts.color2)) },
                    uColor3:         { value: new Float32Array(hexToRgb(opts.color3)) }
                }
            });

            const mesh = new Mesh(gl, { geometry, program });

            const setSize = () => {
                const rect = container.getBoundingClientRect();
                const w = Math.max(1, Math.floor(rect.width));
                const h = Math.max(1, Math.floor(rect.height));
                renderer.setSize(w, h);
                const res = program.uniforms.iResolution.value;
                res[0] = gl.drawingBufferWidth;
                res[1] = gl.drawingBufferHeight;
                renderer.render({ scene: mesh });
            };

            const ro = new ResizeObserver(setSize);
            ro.observe(container);
            setSize();

            let raf = 0;
            let isVisible = true;
            let isPageVisible = !document.hidden;
            const t0 = performance.now();

            const loop = t => {
                program.uniforms.iTime.value = (t - t0) * 0.001;
                renderer.render({ scene: mesh });
                raf = requestAnimationFrame(loop);
            };
            const tryStart = () => { if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop); };
            const tryStop = () => { if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; } };

            const io = new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting;
                isVisible ? tryStart() : tryStop();
            }, { threshold: 0 });
            io.observe(container);

            const onVisibility = () => {
                isPageVisible = !document.hidden;
                isPageVisible ? tryStart() : tryStop();
            };
            document.addEventListener('visibilitychange', onVisibility);

            tryStart();
            container.classList.add('grainient-active');

            destroy = () => {
                cancelled = true;
                tryStop();
                ro.disconnect();
                io.disconnect();
                document.removeEventListener('visibilitychange', onVisibility);
                if (canvas.parentNode === container) container.removeChild(canvas);
                if (gl && gl.getExtension) gl.getExtension('WEBGL_lose_context')?.loseContext();
            };
        } catch (err) {
            console.error('Grainient: init failed for', container, err);
        }
    });

    return () => destroy();
}

const grainientInstances = new Map();

function initGrainients() {
    document.querySelectorAll('[data-grainient]').forEach(el => {
        if (grainientInstances.has(el)) return;
        grainientInstances.set(el, createGrainient(el, GRAINIENT_DEFAULTS));
    });
}

function destroyGrainients() {
    grainientInstances.forEach(destroy => {
        try { destroy(); } catch (e) { /* noop */ }
    });
    grainientInstances.clear();
}

// ===== ELECTRIC BORDER (canvas 2D) =====
function electricBorderMarkup(inner, opts = {}) {
    const color = opts.color || '#ccff00';
    const speed = opts.speed != null ? opts.speed : 0.5;
    const chaos = opts.chaos != null ? opts.chaos : 0.1;
    const thickness = opts.thickness != null ? opts.thickness : 2;
    const radius = opts.radius != null ? opts.radius : 16;
    const displacement = opts.displacement != null ? opts.displacement : 60;
    const offset = opts.offset != null ? opts.offset : 30;
    const cls = opts.className ? ` ${opts.className}` : '';
    return `
    <div class="electric-border${cls}" data-electric-border
         data-eb-color="${color}" data-eb-speed="${speed}" data-eb-chaos="${chaos}"
         data-eb-thickness="${thickness}" data-eb-radius="${radius}"
         data-eb-displacement="${displacement}" data-eb-offset="${offset}"
         style="--electric-border-color:${color};border-radius:${radius}px;">
        <div class="eb-canvas-container">
            <canvas class="eb-canvas" width="1" height="1"></canvas>
        </div>
        <div class="eb-layers">
            <div class="eb-glow-1"></div>
            <div class="eb-glow-2"></div>
            <div class="eb-background-glow"></div>
        </div>
        <div class="eb-content">${inner}</div>
    </div>`;
}

function createElectricBorder(el) {
    const canvas = el.querySelector('.eb-canvas');
    if (!canvas) return () => {};
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};

    const resolveCssColor = color => {
        if (typeof color !== 'string' || !color.includes('var(')) return color;
        const probe = document.createElement('div');
        probe.style.color = color;
        probe.style.position = 'fixed';
        probe.style.opacity = '0';
        probe.style.pointerEvents = 'none';
        document.body.appendChild(probe);
        const resolved = getComputedStyle(probe).color;
        probe.remove();
        return resolved;
    };

    const cfg = {
        color: resolveCssColor(el.dataset.ebColor || '#ccff00'),
        speed: parseFloat(el.dataset.ebSpeed || 0.5),
        chaos: parseFloat(el.dataset.ebChaos || 0.1),
        thickness: parseFloat(el.dataset.ebThickness || 2),
        borderRadius: parseFloat(el.dataset.ebRadius || 16),
        displacement: parseFloat(el.dataset.ebDisplacement || 60),
        borderOffset: parseFloat(el.dataset.ebOffset || 30)
    };

    const octaves = 10;
    const lacunarity = 1.6;
    const gain = 0.7;
    const frequency = 10;
    const baseFlatness = 0;

    const random = x => (Math.sin(x * 12.9898) * 43758.5453) % 1;

    const noise2D = (x, y) => {
        const i = Math.floor(x);
        const j = Math.floor(y);
        const fx = x - i;
        const fy = y - j;
        const a = random(i + j * 57);
        const b = random(i + 1 + j * 57);
        const c = random(i + (j + 1) * 57);
        const d = random(i + 1 + (j + 1) * 57);
        const ux = fx * fx * (3.0 - 2.0 * fx);
        const uy = fy * fy * (3.0 - 2.0 * fy);
        return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
    };

    const octavedNoise = (x, octv, lac, gn, baseAmplitude, baseFrequency, time, seed, baseFlat) => {
        let y = 0;
        let amplitude = baseAmplitude;
        let freq = baseFrequency;
        for (let i = 0; i < octv; i++) {
            let octaveAmplitude = amplitude;
            if (i === 0) octaveAmplitude *= baseFlat;
            y += octaveAmplitude * noise2D(freq * x + seed * 100, time * freq * 0.3);
            freq *= lac;
            amplitude *= gn;
        }
        return y;
    };

    const getCornerPoint = (centerX, centerY, radius, startAngle, arcLength, progress) => {
        const angle = startAngle + progress * arcLength;
        return { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
    };

    const getRoundedRectPoint = (t, left, top, w, h, radius) => {
        const straightWidth = w - 2 * radius;
        const straightHeight = h - 2 * radius;
        const cornerArc = (Math.PI * radius) / 2;
        const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
        const distance = t * totalPerimeter;
        let accumulated = 0;

        if (distance <= accumulated + straightWidth) {
            const progress = (distance - accumulated) / straightWidth;
            return { x: left + radius + progress * straightWidth, y: top };
        }
        accumulated += straightWidth;

        if (distance <= accumulated + cornerArc) {
            const progress = (distance - accumulated) / cornerArc;
            return getCornerPoint(left + w - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightHeight) {
            const progress = (distance - accumulated) / straightHeight;
            return { x: left + w, y: top + radius + progress * straightHeight };
        }
        accumulated += straightHeight;

        if (distance <= accumulated + cornerArc) {
            const progress = (distance - accumulated) / cornerArc;
            return getCornerPoint(left + w - radius, top + h - radius, radius, 0, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightWidth) {
            const progress = (distance - accumulated) / straightWidth;
            return { x: left + w - radius - progress * straightWidth, y: top + h };
        }
        accumulated += straightWidth;

        if (distance <= accumulated + cornerArc) {
            const progress = (distance - accumulated) / cornerArc;
            return getCornerPoint(left + radius, top + h - radius, radius, Math.PI / 2, Math.PI / 2, progress);
        }
        accumulated += cornerArc;

        if (distance <= accumulated + straightHeight) {
            const progress = (distance - accumulated) / straightHeight;
            return { x: left, y: top + h - radius - progress * straightHeight };
        }
        accumulated += straightHeight;

        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
    };

    let raf = 0;
    let time = 0;
    let lastFrameTime = 0;
    let width = 0;
    let height = 0;
    let lastDpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateSize = () => {
        const rect = el.getBoundingClientRect();
        const w = rect.width + cfg.borderOffset * 2;
        const h = rect.height + cfg.borderOffset * 2;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        lastDpr = dpr;
        return { width: w, height: h };
    };

    const draw = currentTime => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (dpr !== lastDpr) { lastDpr = dpr; const s = updateSize(); width = s.width; height = s.height; }

        const deltaTime = (currentTime - lastFrameTime) / 1000;
        time += deltaTime * cfg.speed;
        lastFrameTime = currentTime;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(dpr, dpr);

        ctx.strokeStyle = cfg.color;
        ctx.lineWidth = cfg.thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const scale = cfg.displacement;
        const left = cfg.borderOffset;
        const top = cfg.borderOffset;
        const borderWidth = width - 2 * cfg.borderOffset;
        const borderHeight = height - 2 * cfg.borderOffset;
        const maxRadius = Math.min(borderWidth, borderHeight) / 2;
        const radius = Math.min(cfg.borderRadius, maxRadius);

        const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
        const sampleCount = Math.floor(approximatePerimeter / 2);

        ctx.beginPath();
        for (let i = 0; i <= sampleCount; i++) {
            const progress = i / sampleCount;
            const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);
            const xNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, cfg.chaos, frequency, time, 0, baseFlatness);
            const yNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, cfg.chaos, frequency, time, 1, baseFlatness);
            const displacedX = point.x + xNoise * scale;
            const displacedY = point.y + yNoise * scale;
            if (i === 0) ctx.moveTo(displacedX, displacedY);
            else ctx.lineTo(displacedX, displacedY);
        }
        ctx.closePath();
        ctx.stroke();

        raf = requestAnimationFrame(draw);
    };

    const size = updateSize();
    width = size.width;
    height = size.height;

    const ro = new ResizeObserver(() => {
        const s = updateSize();
        width = s.width;
        height = s.height;
    });
    ro.observe(el);

    let isVisible = true;
    let isPageVisible = !document.hidden;
    const tryStart = () => { if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(draw); };
    const tryStop = () => { if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; } };

    const io = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        isVisible ? tryStart() : tryStop();
    }, { threshold: 0 });
    io.observe(el);

    const onVisibility = () => {
        isPageVisible = !document.hidden;
        isPageVisible ? tryStart() : tryStop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    tryStart();

    return () => {
        tryStop();
        ro.disconnect();
        io.disconnect();
        document.removeEventListener('visibilitychange', onVisibility);
    };
}

const electricBorderCleanups = new Map();

function initElectricBorders() {
    document.querySelectorAll('[data-electric-border]').forEach(el => {
        if (electricBorderCleanups.has(el)) return;
        electricBorderCleanups.set(el, createElectricBorder(el));
    });
}

function destroyElectricBorders() {
    electricBorderCleanups.forEach(fn => {
        try { fn(); } catch (e) { /* noop */ }
    });
    electricBorderCleanups.clear();
}

// ===== STAR BORDER BUTTON (pure CSS) =====
function starBorderMarkup(inner) {
    return `
        <span class="border-gradient-top"></span>
        <span class="border-gradient-bottom"></span>
        <span class="inner-content">${inner}</span>`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    setTimeout(() => { document.getElementById('preloader').classList.add('hide'); }, 2200);

    // Apply editor color settings
    applyEditorColors();

    // Init all
    initEventListeners();
    navigate('home');

    setTimeout(() => {
        initCursor();
        initHeroParticles();
        initHeroSparkles();
        initCounters();
        initTestimonialScroll();
        initHeroMouseTrack();
    }, 2300);
});

function applyEditorColors() {
    const s = EditorState.data.settings;
    if (s.primaryColor) document.documentElement.style.setProperty('--primary', s.primaryColor);
    if (s.accentColor) document.documentElement.style.setProperty('--accent', s.accentColor);
    if (s.bgColor) document.documentElement.style.setProperty('--bg', s.bgColor);
    const navBrand = document.getElementById('navBrand');
    if (navBrand && s.brandName) navBrand.textContent = s.brandName;
    const preloaderBrand = document.querySelector('.preloader-logo');
    if (preloaderBrand && s.brandName) preloaderBrand.textContent = s.brandName;
}

// ===== HERO MOUSE TRACKING (GSAP) =====
function initHeroMouseTrack() {
    const bottle = document.querySelector('.hero-bottle');
    const showcase = document.querySelector('.hero-product-showcase');
    if (!bottle || !showcase || typeof gsap === 'undefined') return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', e => {
        const rect = showcase.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX = (e.clientX - centerX) / rect.width;
        mouseY = (e.clientY - centerY) / rect.height;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.06;
        currentY += (mouseY - currentY) * 0.06;

        gsap.set(bottle, {
            rotateY: currentX * 25,
            rotateX: -currentY * 15,
            x: currentX * 20,
            y: currentY * 15
        });

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
