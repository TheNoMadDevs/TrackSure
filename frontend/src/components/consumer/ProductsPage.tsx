import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardFooter } from '@components/ui/card';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  onBuy: (quantity: number) => void;
  onRemove: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  image, 
  price, 
  onBuy, 
  onRemove 
}) => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  const handleBuy = () => {
    onBuy(quantity);
  };

  return (
    <Card className="w-full max-w-xs">
      <CardContent className="p-2">
        <div className="aspect-square relative mb-2">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-sm font-semibold mb-1">{name}</h3>
        <p className="text-base font-bold mb-2">₹{price.toFixed(2)}</p>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={decrementQuantity}>
              <Minus className="h-3 w-3" />
            </Button>
            <span className="mx-2 text-sm font-semibold">{quantity}</span>
            <Button variant="outline" size="icon" className="h-7 w-7" onClick={incrementQuantity}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button variant="destructive" size="icon" className="h-7 w-7" onClick={onRemove}>
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Button className="w-full h-8 text-xs" onClick={handleBuy}></Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;