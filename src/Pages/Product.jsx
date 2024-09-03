import React from "react";

const Product = () => {
  const articleContent = [
    "Gastritis in Ayurveda",
    'In Ayurveda, Gastritis is known as "Urdhavaga Amalapitta" or "Grahani". It is characterized by:',
    "Inflammation of the stomach lining, Pain, discomfort, and bloating in the abdomen, Nausea, vomiting, and loss of appetite",
    "Ayurvedic Causes: Imbalance of Pitta dosha, Poor digestion and metabolism, Excessive consumption of spicy, sour, or salty foods, Stress and anxiety",
    "Ayurvedic Treatment: Balance Pitta dosha through herbal remedies (Aloe vera, Licorice, Ginger, Cumin), Soothe the stomach with cooling and nourishing foods, Manage stress through yoga and meditation, Avoid trigger foods and lifestyle habits",
    "Effective Ayurvedic herbs for Gastritis: Aloe vera, Licorice, Ginger, Cumin",
    "Note: Consult an Ayurvedic practitioner for personalized guidance and treatment.",
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/2 w-full">
          <img
            src="path-to-your-image.jpg"
            alt="Product Image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Product Name
          </h1>
          <p className="text-gray-600 text-lg mb-6">₹Price</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>

      <ArticleSection title="GASTRIC CARE" content={articleContent} />

      <div className="mt-10">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Consult to Doctor
        </button>
      </div>
    </div>
  );
};

const ArticleSection = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="text-gray-600">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Product;
