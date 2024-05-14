import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="text-white mx-8 max-w-2xl py-20 sm:mx-auto">
      <div className="flex gap-10">
        <span className="mb-8 text-5xl font-bold">About</span>
      </div>
      <div className="flex flex-col gap-4">
        <p className="leading-8 font-medium ">
          This website is built with{" "}
          <Link href="https://nextjs.org">
            <span>Next.js Commerce</span>
          </Link>
          , which is a ecommerce template for creating a headless Shopify
          storefront.{" "}
        </p>
        <p className="font-bold">
          Support for real-world commerce features including:
        </p>
        <>
          <li> Out of stocks</li>
          <li>Order history</li>
          <li>Order status</li>
          <li>Cross variant / option availability (aka. Amazon style)</li>
          <li>Hidden products</li>
          <li>
            Dynamically driven content and features via Shopify (ie.
            collections, menus, pages, etc.)
          </li>
          <li>Seamless and secure checkout via Shopify Checkout</li>
          <li>And more!</li>
        </>
        <p className="font-bold">
          This template also allows us to highlight newer Next.js features
          including:{" "}
        </p>
        <li>Next.js App Router</li>
        <li>Optimized for SEO using Next.js's Metadata</li>
        <li>React Server Components (RSCs) and Suspense</li>
        <li>Server Actions for mutations</li>
        <li>Edge runtime</li>
        <li>New Next.js 13 fetching and caching paradigms</li>
        <li>Dynamic OG images</li>
        <li>Styling with Tailwind CSS</li>
        <li>Automatic light/dark mode based on system settings</li>
        <li>And more!</li>
      </div>
    </div>
  );
}

export default About;
