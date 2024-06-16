"use client";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Questions } from "@/dtos/Questions";
import { Checkbox } from "./ui/checkbox";

export function WordCard({ data }: { data: Array<Questions> }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function setPreviosd() {
    api?.scrollPrev();
  }

  function setNextd() {
    api?.scrollNext();
  }

  return (
    <div className="grid justify-center">
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {data.map((question: Questions, index: number) => (
            <CarouselItem key={question.id}>
              <Card>
                <CardTitle className="flex items-center justify-center p-6">
                  {question.question}
                </CardTitle>
                <CardDescription className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {question.word}
                  </span>
                </CardDescription>
                <CardContent>
                  <div className="grid grid-cols-2 grid-rows-2">
                    <div>
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {question.option1} Option 1
                      </label>
                    </div>
                    <div>
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {question.option2} Option 2
                      </label>
                    </div>
                    <div>
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {question.option3}
                      </label>
                    </div>
                    <div>
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {question.option4}
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-end gap-4 pt-4">
        <Button
          onClick={() => {
            setPreviosd();
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            setNextd();
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
