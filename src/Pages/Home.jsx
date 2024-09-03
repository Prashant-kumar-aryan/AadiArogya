"use client";
import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Combo Pack 1",
    price: "$10.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/1",
  },
  {
    id: 2,
    name: "Combo Pack 2",
    price: "$15.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/2",
  },
  {
    id: 3,
    name: "Combo Pack 3",
    price: "$20.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/3",
  },
];

const heroProducts = [
  {
    id: 1,
    name: "Combo Pack 1",
    price: "$10.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/1",
  },
  {
    id: 2,
    name: "Combo Pack 2",
    price: "$15.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/2",
  },
  {
    id: 3,
    name: "Combo Pack 3",
    price: "$20.00",
    imgSrc: "https://via.placeholder.com/150",
    link: "/product/3",
  },
];

const aboutAadiArogya = {
  imgSrc: "https://via.placeholder.com/300",
  text: "Aadi Arogya is committed to providing the best health solutions. Our products are carefully curated to ensure the highest quality and effectiveness.",
};

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Excellent products and service!",
    stars: 5,
    imgSrc: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Very satisfied with my purchase.",
    stars: 4,
    imgSrc: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Alice Johnson",
    review: "Great customer support.",
    stars: 5,
    imgSrc: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Bob Brown",
    review: "Will definitely buy again.",
    stars: 4,
    imgSrc: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Emily White",
    review: "Fast shipping and great quality.",
    stars: 5,
    imgSrc: "https://via.placeholder.com/50",
  },
];

const articles = [
  {
    id: 1,
    title: "Article Title 1",
    description: "Brief description of the article.",
    link: "/article/1",
  },
  {
    id: 2,
    title: "Article Title 2",
    description: "Brief description of the article.",
    link: "/article/2",
  },
  {
    id: 3,
    title: "Article Title 3",
    description: "Brief description of the article.",
    link: "/article/3",
  },
  {
    id: 4,
    title: "Article Title 4",
    description: "Brief description of the article.",
    link: "/article/4",
  },
  {
    id: 5,
    title: "Article Title 5",
    description: "Brief description of the article.",
    link: "/article/5",
  },
];

const ITEMS_PER_PAGE = 3;

const Home = () => {
  const [reviewPage, setReviewPage] = useState(1);
  const [articlePage, setArticlePage] = useState(1);

  const paginatedReviews = reviews.slice(
    (reviewPage - 1) * ITEMS_PER_PAGE,
    reviewPage * ITEMS_PER_PAGE
  );
  const paginatedArticles = articles.slice(
    (articlePage - 1) * ITEMS_PER_PAGE,
    articlePage * ITEMS_PER_PAGE
  );

  const totalReviewPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const totalArticlePages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const handleReviewPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalReviewPages) {
      setReviewPage(newPage);
    }
  };

  const handleArticlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalArticlePages) {
      setArticlePage(newPage);
    }
  };

  return (
    <>
      <div>
        {/* Carousel Section */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="Carousel 1"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="Carousel 2"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="Carousel 3"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="Carousel 4"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="Carousel 5"
            />
          </Carousel>
        </div>
      </div>

      {/* Combo Pack / Best Sellers Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Combo Pack / Best Sellers</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {products.map((product) => (
              <CardComponent key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Products Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Hero Products</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {heroProducts.map((product) => (
              <CardComponent key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      {/* About Aadi Arogya Section */}
      <section className="my-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Aadi Arogya
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src={aboutAadiArogya.imgSrc}
            alt="About Aadi Arogya"
            className="w-full md:w-1/2 h-64 object-cover rounded-md"
          />
          <p className="text-gray-800 text-center md:text-left md:ml-6">
            {aboutAadiArogya.text}
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          {paginatedReviews.map((review) => (
            <div
              key={review.id}
              className="flex border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={review.imgSrc}
                alt={review.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="mt-2 text-gray-600">{review.review}</p>
                <div className="mt-2">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => handleReviewPageChange(reviewPage - 1)}
            disabled={reviewPage === 1}
            className="mr-2"
          >
            Previous
          </Button>
          <span className="mx-2">
            {reviewPage} of {totalReviewPages}
          </span>
          <Button
            onClick={() => handleReviewPageChange(reviewPage + 1)}
            disabled={reviewPage === totalReviewPages}
            className="ml-2"
          >
            Next
          </Button>
        </div>
      </section>

      {/* Our Articles Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Our Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <div
              key={article.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <Button href={article.link} className="mt-2 w-full">
                Read More
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => handleArticlePageChange(articlePage - 1)}
            disabled={articlePage === 1}
            className="mr-2"
          >
            Previous
          </Button>
          <span className="mx-2">
            {articlePage} of {totalArticlePages}
          </span>
          <Button
            onClick={() => handleArticlePageChange(articlePage + 1)}
            disabled={articlePage === totalArticlePages}
            className="ml-2"
          >
            Next
          </Button>
        </div>
      </section>
    </>
  );
};

const CardComponent = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div
        key={product.id}
        className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md h-[28rem]"
      >
        <img
          src={product.imgSrc}
          alt={product.name}
          className="w-full h-56 object-cover rounded-md"
        />
        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.price}</p>
        <Button href={product.link} className="mt-4 w-full">
          Buy Now
        </Button>
      </div>
    </Link>
  );
};

export default Home;
