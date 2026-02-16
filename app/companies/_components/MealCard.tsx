interface MealCardProps {
  name: string;
  price: number;
  image: string;
  available: boolean;
}

const MealCard: React.FC<MealCardProps> = ({
  name,
  price,
  image,
  available,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm mb-3">${price}</p>

        <button
          disabled={!available}
          className={`w-full py-2 rounded-xl text-sm font-semibold transition ${
            available
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {available ? "Order Now" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default MealCard;
