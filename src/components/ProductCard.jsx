import { ChevronRight } from "lucide-react";

/* =========================================================
   PRICE FORMAT
========================================================= */

const formatINR = (value) =>
  Number(value || 0).toLocaleString("en-IN");

/* =========================================================
   PRODUCT CARD
========================================================= */

export default function ProductCard({
  product,
  onView,
}) {
  
const variants = Array.isArray(product?.variants)
  ? product.variants
  : [];

// Select the first size that has stock.
const defaultVariant =
  variants.find(
    (variant) => Number(variant.quantity ?? 0) > 0
  ) || null;

// Out of stock only when no variant is available.
const isOutOfStock =
  variants.length === 0 || !defaultVariant;

// Display the price of the available size.
const price = Number(defaultVariant?.amount || 0);


  return (
    <article
      // onClick={() => onView(product)}
       onClick={() => {
    if (!isOutOfStock) {
      onView(product);
    }
  }}
      className={`
  group
  flex
  h-full
  min-w-0
  ${isOutOfStock ? "cursor-not-allowed" : "cursor-pointer"}
  flex-col
  overflow-hidden
  rounded-[12px]
  border
  border-slate-200
  bg-white
  shadow-[0_2px_8px_rgba(0,0,0,0.05)]
  transition-all
  duration-300
  sm:rounded-[14px]
  lg:rounded-[16px]
  ${!isOutOfStock ? "lg:hover:-translate-y-1 lg:hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]" : ""}
`}
      
    >
      {/* ===================================================
          PRODUCT IMAGE

          IMPORTANT:

          Mobile:
          compact card like your reference image.

          object-cover:
          image fills the complete image area.

          Tablet/Desktop:
          image height gradually increases.
      =================================================== */}

      {/* <div
        className="
          relative
          h-[165px]
          w-full
          overflow-hidden
          bg-[#f7f7f7]

          min-[400px]:h-[180px]

          sm:h-[220px]

          md:h-[250px]

          lg:h-[290px]

          xl:h-[310px]
        "
      >
        {product?.image_url ? (
          <img
            src={product.image_url}
            alt={
              product?.name ||
              "Product"
            }
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              object-center

              transition-transform
              duration-500

              lg:group-hover:scale-[1.025]
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center

              text-[11px]
              font-medium
              text-slate-400

              sm:text-xs
            "
          >
            No Image
          </div>
        )}
      </div> */}
      


<div
  className="
    relative
    w-full
    aspect-[3/4]
    overflow-hidden
    bg-[#f7f7f7]
  "
>
  {product?.image_url ? (
    <img
      src={product.image_url}
      alt={product?.name || "Product"}
      loading="lazy"
      className="
        block
        h-full
        w-full
        object-cover
        object-center
      "
    />
  ) : (
    <div
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        text-xs
        text-slate-400
      "
    >
      No Image
    </div>
  )}
  {isOutOfStock && (
  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
    <span className="rounded-lg bg-white px-4 py-2 text-sm font-extrabold text-[#a33b72] shadow">
      Out of Stock
    </span>
  </div>
)}
</div>



      {/* ===================================================
          CARD CONTENT
      =================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col

          px-2.5
          pb-2.5
          pt-2.5

          sm:px-3
          sm:pb-3
          sm:pt-3

          lg:px-4
          lg:pb-4
          lg:pt-4
        "
      >
        {/* =================================================
            CATEGORY NAME
        ================================================= */}

        <p
          className="
            truncate

            text-[9px]
            font-extrabold
            uppercase
            leading-none
            tracking-[0.08em]
            text-[#ee027e]

            sm:text-[10px]

            lg:text-[11px]
          "
        >
          {product?.category_name ||
            "Product"}
        </p>

        {/* =================================================
            PRODUCT NAME

            No description below this.
        ================================================= */}

        <h3
          className="
            mt-1.5
            line-clamp-2

            min-h-[30px]

            text-[12px]
            font-bold
            leading-[15px]
            text-slate-900

            sm:min-h-[36px]
            sm:text-[13px]
            sm:leading-[18px]

            lg:text-[15px]
            lg:leading-5
          "
        >
          {product?.name}
        </h3>

        {/* =================================================
            PRICE
        ================================================= */}

        <div
          className="
            mt-2

            sm:mt-2.5

            lg:mt-3
          "
        >
          <span
            className="
              text-[16px]
              font-black
              leading-none
              text-slate-900

              sm:text-[17px]

              lg:text-xl
            "
          >
            ₹{formatINR(price)}
          </span>
        </div>

        {/* =================================================
            VIEW MORE

            Compact on mobile.
        ================================================= */}

        <button
          type="button"
          // onClick={(event) => {
          //   event.stopPropagation();

          //   onView(product);
          // }}
          onClick={(event) => {
  event.stopPropagation();

  if (!isOutOfStock) {
    onView(product);
  }
}}
disabled={isOutOfStock}
          className="
            mt-2.5

            flex
            h-[32px]
            w-full
            items-center
            justify-center
            gap-1

            rounded-[8px]
            bg-[#ee027e]

            px-2

            text-[11px]
            font-bold
            leading-none
            text-white

            transition-colors
            duration-200

            hover:bg-[#bd2975]

            sm:mt-3
            sm:h-[36px]
            sm:rounded-[9px]
            sm:text-xs

            lg:h-[40px]
            lg:rounded-[10px]
            lg:text-sm
              disabled:cursor-not-allowed
  disabled:opacity-50
  disabled:hover:bg-[#ee027e]
          "
        >
          View More

          <ChevronRight
            className="
              h-3
              w-3

              sm:h-3.5
              sm:w-3.5

              lg:h-4
              lg:w-4
            "
          />
        </button>
      </div>
    </article>
  );
}

