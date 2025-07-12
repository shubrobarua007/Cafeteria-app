import { createContext, useState } from "react";
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [building, setBuilding] = useState("");
  const [flat, setFlat] = useState("");
  const menuData = {
    chicken: [
      {
        id: 1,
        name: "Chicken Biryani",
        price: 10.0,
        description:
          "Aromatic basmati rice layered with tender chicken, saffron, and spices. A royal dish with rich flavors and fragrant herbs.",
        image: "/images/chicken-byirani.png",
      },
      {
        id: 2,
        name: "Chicken Kurma",
        price: 12.0,
        description:
          "Creamy and mildly spiced curry made with coconut, cashews, and fragrant spices. Pairs perfectly with rice or naan.",
        image: "/images/chicken-kurma.png",
      },
      {
        id: 3,
        name: "Chicken Masala",
        price: 12.0,
        description:
          "Classic Indian-style chicken cooked in a rich, tomato-based gravy with bold spices. A hearty and flavorful dish.",
        image: "/images/chicken-masala.png",
      },
      {
        id: 4,
        name: "Chicken Chilli",
        price: 12.0,
        description:
          "Spicy and tangy Indo-Chinese dish with crispy chicken tossed in garlic, soy sauce, and chillies. Perfect as an appetizer.",
        image: "/images/chicken-chilli.png",
      },
      {
        id: 5,
        name: "Chicken Malabar",
        price: 12.0,
        description:
          "A coastal delicacy with coconut milk, curry leaves, and Malabar spices. Tender chicken in a fragrant, creamy gravy.",
        image: "/images/chicken-malabar.png",
      },
      {
        id: 6,
        name: "Chicken Sukka",
        price: 12.0,
        description:
          "Dry roasted chicken cooked with grated coconut, black pepper, and aromatic spices. A flavorful Mangalorean specialty.",
        image: "/images/chicken-sukka.png",
      },
      {
        id: 7,
        name: "Chicken Varav",
        price: 12.0,
        description:
          "Maharashtrian-style chicken cooked with roasted spices, onions, and a hint of tamarind. A rustic and spicy delight.",
        image: "/images/chicken-varav.png",
      },
      {
        id: 8,
        name: "Chicken Mughlai",
        price: 12.0,
        description:
          "Rich and creamy curry inspired by Mughlai cuisine, with cashew paste, saffron, and aromatic spices. Fit for royalty.",
        image: "/images/chicken-mughlai.png",
      },
      {
        id: 9,
        name: "Chicken Kadai",
        price: 12.0,
        description:
          "Spicy and tangy chicken cooked in a kadai (wok) with bell peppers, onions, and freshly ground coriander seeds.",
        image: "/images/chicken-kadai.png",
      },
      {
        id: 10,
        name: "Chicken Mongoli",
        price: 12.0,
        description:
          "A fusion dish with tender chicken in a sweet and spicy sauce made with honey, soy, and chillies. A crowd favorite.",
        image: "/images/chicken-mongoli.png",
      },
      {
        id: 11,
        name: "Chicken Kadathanad",
        price: 12.0,
        description:
          "Kerala-style chicken curry with roasted coconut, fennel, and curry leaves. A unique blend of spices and flavors.",
        image: "/images/chicken-kadathanad.png",
      },
    ],
    mutton: [
      {
        id: 101,
        name: "Mutton Biryani",
        price: 11.0,
        description:
          "Fragrant basmati rice layered with tender mutton pieces and aromatic spices. Slow-cooked to perfection for an authentic flavor experience.",
        image: "/images/mutton-byirani.png",
      },
      {
        id: 102,
        name: "Mutton Kurma",
        price: 12.0,
        description:
          "Rich and creamy coconut-based curry with succulent mutton pieces. Mildly spiced with a blend of traditional Indian spices for a comforting dish.",
        image: "/images/mutton-kurma.png",
      },
      {
        id: 103,
        name: "Mutton Masala",
        price: 12.0,
        description:
          "Classic mutton curry cooked in a thick onion-tomato gravy with robust spices. A hearty dish that pairs perfectly with naan or rice.",
        image: "/images/mutton-masala.png",
      },
      {
        id: 104,
        name: "Mutton Roast",
        price: 12.0,
        description:
          "Tender mutton pieces roasted with caramelized onions and aromatic whole spices. Dry preparation with intense flavors and a slightly crispy texture.",
        image: "/images/mutton-roast.png",
      },
    ],
    veg: [
      {
        id: 201,
        name: "Bindi Roast",
        description:
          "Crispy okra sautéed with onions, tomatoes, and aromatic spices. A dry preparation with a perfect balance of textures.",
        price: 7.0,
        image: "/images/bindi-roast.png",
        category: "vegetarian",
      },
      {
        id: 202,
        name: "Mix Vegetable",
        description:
          "Seasonal vegetables cooked in a light gravy with cumin and coriander. A nutritious and colorful dish packed with flavors.",
        price: 6.0,
        image: "/images/mix-vegetable.png",
        category: "vegetarian",
      },
      {
        id: 203,
        name: "Green Beans Kurma",
        description:
          "Tender green beans in a coconut-based creamy gravy with cashews and mild spices. Pairs perfectly with appams or parottas.",
        price: 6.0,
        image: "/images/green-beans-kurma.png",
        category: "vegetarian",
      },
      {
        id: 204,
        name: "Veg Kurma",
        description:
          "Assorted vegetables in a rich, creamy cashew and poppy seed gravy. A luxurious vegetarian option with royal flavors.",
        price: 6.0,
        image: "/images/veg-kurma.png",
        category: "vegetarian",
      },
      {
        id: 205,
        name: "Veg Masala",
        description:
          "Hearty vegetable medley in a robust onion-tomato gravy with garam masala. A satisfying comfort food classic.",
        price: 6.0,
        image: "/images/veg-masala-curry.png",
        category: "vegetarian",
      },
    ],
    fish: [
      {
        id: 301,
        name: "Fish Biryani",
        description:
          "Fragrant basmati rice layered with succulent fish pieces and caramelized onions. Cooked in dum style for authentic flavor.",
        price: 10.0,
        image: "/images/fish-birayni.png",
        category: "fish",
      },
      {
        id: 302,
        name: "Fish Curry",
        description:
          "Fresh fish simmered in a tangy coconut and tamarind gravy with curry leaves. A coastal specialty with medium spice level.",
        price: 8.0,
        image: "/images/fish-curry.png",
        category: "fish",
      },
      {
        id: 303,
        name: "Fish Fry",
        description:
          "Marinated fish fillets coated in semolina and shallow-fried to perfection. Served with mint chutney and lemon wedges.",
        price: 8.0,
        image: "/images/fish-fry.png",
        category: "fish",
      },
    ],
    egg: [
      {
        id: 500,
        name: "Egg-Burji",
        price: 5.0,
        description:
          "Scrambled eggs cooked with onions, tomatoes, and spices. A quick and protein-rich dish.",
        image: "/images/egg-burji.png",
      },
      {
        id: 501,
        name: "Egg-Curry",
        price: 4.0,
        description:
          "Hard-boiled eggs in a rich and spicy gravy, best enjoyed with rice or chapati.",
        image: "/images/egg-curry.png",
      },
      {
        id: 502,
        name: "Egg-Roast",
        price: 4.0,
        description:
          "Kerala-style roasted eggs in a thick, coconut-based gravy with aromatic spices.",
        image: "/images/egg-roast.png",
      },
      {
        id: 503,
        name: "Egg-Omelette",
        price: 4.0,
        description:
          "Fluffy and spiced omelette, often stuffed with onions, chilies, and herbs.",
        image: "/images/egg-omelete.png",
      },
    ],
    snacks: [
      {
        id: 400,
        name: "Cheru-payar",
        price: 3.0,
        description:
          "A traditional Kerala dish made with black-eyed beans and coconut. Served as a nutritious breakfast or snack.",
        image: "/images/cheru-payar.png",
      },
      {
        id: 401,
        name: "Vada-Set",
        price: 3.0,
        description:
          "Crispy fried lentil doughnuts served with coconut chutney and sambar. A popular South Indian breakfast item.",
        image: "/images/vada-set.png",
      },
      {
        id: 402,
        name: "Vellapam",
        price: 1.0,
        description:
          "Soft and fluffy rice pancakes from Kerala, perfect with stew or curry. Fermented for a unique tangy taste.",
        image: "/images/vellapam.png",
      },
      {
        id: 403,
        name: "Uppma",
        price: 3.0,
        description:
          "A savory South Indian dish made from semolina, vegetables, and spices. Light and wholesome breakfast option.",
        image: "/images/uppma.png",
      },
      {
        id: 404,
        name: "Coca-Cola",
        price: 2.5,
        description:
          "Classic carbonated soft drink with a refreshing taste. Perfect to pair with any meal or snack.",
        image: "/images/cocacola.png",
      },
      {
        id: 405,
        name: "Sprite",
        price: 2.5,
        description:
          "Clear, lemon-lime flavored soda with a crisp, clean taste. Great for quenching thirst on a hot day.",
        image: "/images/sprite.png",
      },
      {
        id: 406,
        name: "Water",
        price: 2.0,
        description:
          "Pure mineral water, essential for hydration. Served chilled for maximum refreshment.",
        image: "/images/water.png",
      },
      {
        id: 407,
        name: "Laban",
        price: 1.0,
        description:
          "Traditional Middle Eastern buttermilk drink, slightly salty and very refreshing. Aids in digestion.",
        image: "/images/laban.png",
      },
      {
        id: 408,
        name: "Fanta",
        price: 2.5,
        description:
          "Fruity orange-flavored carbonated drink. Sweet and tangy, loved by kids and adults alike.",
        image: "/images/fanta.png",
      },
      {
        id: 409,
        name: "Parotta",
        price: 1.0,
        description:
          "Flaky, layered flatbread from South India, best paired with kurma or salna. Crispy on the outside, soft inside.",
        image: "/images/parotta.png",
      },
      {
        id: 410,
        name: "Masala-Dosa",
        price: 5.0,
        description:
          "Thin, crispy rice crepe stuffed with spiced potato filling. Served with sambar and coconut chutney.",
        image: "/images/masala-dosa.png",
      },
      {
        id: 411,
        name: "Aloo-Samosa",
        price: 1.0,
        description:
          "Crispy fried pastry filled with spiced potatoes and peas. A popular Indian snack served with chutney.",
        image: "/images/aloo-Samosa.png",
      },
      {
        id: 412,
        name: "Black-tea",
        price: 1.0,
        description:
          "Strong and aromatic tea without milk, flavored with spices. A perfect morning energizer.",
        image: "/images/black-tea.png",
      },
      {
        id: 413,
        name: "Bonda",
        price: 1.0,
        description:
          "Deep-fried potato dumplings coated in gram flour batter. Crispy outside, soft and spicy inside.",
        image: "/images/bonda.png",
      },
      {
        id: 414,
        name: "Barik-Set",
        price: 7.0,
        description:
          "A Kerala-style mini breakfast set including vada, bonda, and chutney. Ideal for light eaters.",
        image: "/images/barik-set.png",
      },
      {
        id: 415,
        name: "Chappathi",
        price: 1.0,
        description:
          "Soft and thin whole wheat flatbread, best served with curries or dry sabzi.",
        image: "/images/chappathi.png",
      },
      {
        id: 416,
        name: "Cutlets",
        price: 1.0,
        description:
          "Crunchy and spicy vegetable or meat patties, deep-fried to perfection. Served with ketchup.",
        image: "/images/cutlets.png",
      },
      {
        id: 417,
        name: "Fresh-Milktea",
        price: 1.5,
        description:
          "Creamy and sweet tea made with milk and sugar. A comforting drink for any time of the day.",
        image: "/images/fresh-milktea.png",
      },
      {
        id: 418,
        name: "Kanni",
        price: 6.0,
        description:
          "A Kerala-style rice dish with minimal spices, often served with curd or pickle.",
        image: "/images/kanni.png",
      },
      {
        id: 419,
        name: "Karak-tea",
        price: 1.0,
        description:
          "Strong and flavorful tea brewed with spices like cardamom and ginger. A Middle Eastern favorite.",
        image: "/images/karak-tea.png",
      },
      {
        id: 420,
        name: "Keema",
        price: 4.0,
        description:
          "Spiced minced meat curry, best enjoyed with parotta or naan. Rich and full of flavors.",
        image: "/images/keema.png",
      },
      {
        id: 421,
        name: "Mal-pua",
        price: 1.0,
        description:
          "Sweet Indian pancake soaked in sugar syrup, often garnished with nuts. A festive dessert.",
        image: "/images/mal-pua.png",
      },
      {
        id: 422,
        name: "Motta-Set",
        price: 7.0,
        description:
          "Fluffy rice cooked with eggs and mild spices. A simple yet delicious comfort food.",
        image: "/images/motta-set.png",
      },
      {
        id: 423,
        name: "Pakoda",
        price: 1.0,
        description:
          "Deep-fried fritters made with gram flour and vegetables. Perfect with tea on a rainy day.",
        image: "/images/pakoda.png",
      },
      {
        id: 424,
        name: "Param-Puri",
        price: 1.0,
        description:
          "Deep-fried, puffed bread served with chana masala or potato curry. A North Indian delight.",
        image: "/images/param-puri.png",
      },
      {
        id: 425,
        name: "Samosa",
        price: 1.0,
        description:
          "Triangular pastry stuffed with spiced potatoes, peas, and sometimes meat. Served with mint chutney.",
        image: "/images/samosa.png",
      },
      {
        id: 426,
        name: "Idly Set",
        price: 4.0,
        image: "src/assets/idly.png",
        description: "Soft steamed rice cakes with coconut chutney and sambar",
      },
      {
        id: 427,
        name: "Puri Bazi",
        price: 5.0,
        image: "src/assets/puri.png",
        description: "Puffed deep-fried bread with potato masala",
      },
      {
        id: 428,
        name: "Puttu",
        price: 1.0,
        image: "src/assets/puttu.png",
        description: "Steamed cylindrical rice flour with kadala curry",
      },
    ],
  };

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const cartCount = Object.values(cartItem).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const removeCartItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getAllMenuItems = () => [
    ...menuData.chicken,
    ...menuData.mutton,
    ...menuData.veg,
    ...menuData.fish,
    ...menuData.snacks,
  ];
  const getTotalCartAmount = () => {
    return Object.entries(cartItem).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const item = allMenuItems.find(
          (product) => product.id.toString() === itemId.toString()
        );
        return item ? total + item.price * quantity : total;
      }
      return total;
    }, 0);
  };
  const allMenuItems = getAllMenuItems();
  const handleWhatsAppOrder = () => {
    const fullName = `${firstName} ${lastName}`;
    const address = `Area: ${area}, Building Number: ${building}, Flat Number: ${flat}`;
    const total = getTotalCartAmount();
  
    const itemLines = Object.entries(cartItem)
      .filter(([id, quantity]) => quantity > 0)
      .map(([id, quantity]) => {
        const item = allMenuItems.find(
          (product) => product.id.toString() === id
        );
        return item
          ? `- ${quantity}x ${item.name} @ ${item.price.toFixed(2)} AED`
          : null;
      })
      .filter(Boolean)
      .join("\n");
  
    const message =
      `Hello,\n` +
      `My name is ${fullName}.\n` +
      `I would like to place an order.\n\n` +
      `Items:\n${itemLines}\n\n` +
      `Total: ${total.toFixed(2)} AED\n\n` +
      `Delivery Address:\n${address}\n` +
      `Phone: ${phone}`;
  
    const phoneNumber = "971506548665";
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`  // App link for mobile
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;         // Web link for desktop
  
    window.open(whatsappURL, "_blank");
  };
  
  

  return (
    <FoodContext.Provider
      value={{
        menuData,
        allMenuItems,
        cartItem,
        cartCount,
        setCartItem,
        addToCart,
        removeCartItem,
        getTotalCartAmount,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        area,
        setArea,
        building,
        setBuilding,
        phone,
        setPhone,
        handleWhatsAppOrder,
        flat,
        setFlat,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
