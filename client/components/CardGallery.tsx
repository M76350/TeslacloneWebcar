import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface CardData {
  id: number;
  title: string;
  description: string;
  detailsUrl: string;
  price: string;
  imageUrl: string;
}

const sampleCards: CardData[] = [
  {
    id: 1,
    title: "Tesla Model S",
    description: "Electric sedan with long range and high performance.",
    detailsUrl: "https://www.tesla.com/models",
    price: "$89,990",
    imageUrl: "/logotesla.jpg",
  },
  {
    id: 2,
    title: "Tesla Model 3",
    description: "Affordable electric car with great range and features.",
    detailsUrl: "https://www.tesla.com/model3",
    price: "$39,990",
    imageUrl: "/logotesla.jpg",
  },
  {
    id: 3,
    title: "Tesla Model X",
    description: "Electric SUV with falcon wing doors and spacious interior.",
    detailsUrl: "https://www.tesla.com/modelx",
    price: "$99,990",
    imageUrl: "/logotesla.jpg",
  },
];

const CardGallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const { toast } = useToast();

  const handleCardClick = (card: CardData) => {
    window.open(card.detailsUrl, "_blank");
  };

  const handleAddClick = (card: CardData) => {
    setSelectedCard(card);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!buyerName || !buyerEmail) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    setIsDialogOpen(false);
    toast({
      title: "Success!",
      description: `${selectedCard?.title} has been added to your purchase list.`,
    });
    setBuyerName("");
    setBuyerEmail("");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sampleCards.map((card) => (
          <Card
            key={card.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <CardHeader onClick={() => handleCardClick(card)}>
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardContent>
                <p className="text-lg font-semibold">{card.price}</p>
              </CardContent>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddClick(card);
                }}
              >
                Add to Buy
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Buy {selectedCard?.title}</DialogTitle>
            <DialogDescription>
              Please fill in your details to proceed with the purchase.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="buyerName">Name</Label>
              <Input
                id="buyerName"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="buyerEmail">Email</Label>
              <Input
                id="buyerEmail"
                type="email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                placeholder="Your email address"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardGallery;
