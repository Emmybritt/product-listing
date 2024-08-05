"use client";
import { TextInput } from "@/app/_commons/components/atoms/TextInput/text-input";
import { useRef, useState } from "react";

const ProductForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const currencyCodeRef = useRef<HTMLInputElement>(null);
  const currencySymbolRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageLocationRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white w-full rounded-[0.6rem] border border-gray-300 p-[2rem]">
      <form>
        <TextInput
          ref={nameRef}
          className="border mb-[1rem]"
          placeholder="Name"
        />
        <TextInput
          ref={descriptionRef}
          className="border mb-[1rem]"
          placeholder="Description"
        />
        <TextInput
          ref={priceRef}
          className="border mb-[1rem]"
          placeholder="Price"
          type="number"
        />
        <TextInput
          ref={currencyCodeRef}
          className="border mb-[1rem]"
          placeholder="Currency code"
        />
        <TextInput
          ref={currencySymbolRef}
          className="border mb-[1rem]"
          placeholder="Currency symbol"
        />
        <TextInput
          ref={quantityRef}
          className="border mb-[1rem]"
          placeholder="Quantity"
          type="number"
        />
        <TextInput
          ref={imageLocationRef}
          className="border mb-[1rem]"
          placeholder="Image location"
        />
        <button type="button" className="button bg-primary mt-[1rem]">
          Add product
        </button>
        <p className="mt-[0.5rem] text-[1.2rem] text-red">{errorMessage}</p>
      </form>
    </div>
  );
};

export default ProductForm;
