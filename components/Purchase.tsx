import { useRouter } from "next/navigation"; // Update import for app directory

interface PurchaseProps {
  priceId: string;
}

const Purchase = ({ priceId }: PurchaseProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/Checkout?${priceId}`); // Use query parameter format
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Purchase
      </button>
    </div>
  );
};

export default Purchase;        
