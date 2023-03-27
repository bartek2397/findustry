'use client'

import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

type CardProps = {
    title: string,
    price: number,
    btnText: string
}


const PricingCard = ({ title, price, btnText }: CardProps) => {
  return (
    <div className="p-5">
        <Card className="w-full h-[50%] border-solid border-[1px] border-[#7b1cb3]">
            <CardContent>
                <Typography variant="h4" className="text-center">
                    {title}
                </Typography>
                <Typography variant="body2" className="mt-3 text-center">
                    from {price} PLN/month
                </Typography>
                <Typography variant="body2" className="mt-5">
                    In Basic plan we guarantee
                    <ul>

                    </ul>
                </Typography>
                    <Button variant="outlined" className="mt-10">
                        {btnText}
                    </Button>
            </CardContent>
        </Card>
    </div>
  );
};

export default PricingCard;