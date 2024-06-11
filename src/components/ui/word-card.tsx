"use client"

import { Button } from "./button";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Checkbox } from "./checkbox";



export function WordCard() {
    //const {register, handleSubmit} = useForm();

    function onHandleFormSubmit(data: any) {
        
    }
    return (
        <form >
            <div>
                <h1 className="text-xl font-semibold text-center pb-3">Question Number: 1</h1>
                <Card key={1}>
                    <CardHeader>
                        word.translation
                    </CardHeader>
                    <CardContent>
                        <p>
                            word.word
                        </p>
                        <div className="grid grid-cols-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >Accept terms and conditions
                            </label>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >Accept terms and conditions
                            </label>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >Accept terms and conditions
                            </label>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >Accept terms and conditions
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button variant="destructive">Enviar</Button>
                    </CardFooter>
                </Card>
            </div>
        </form>
    )
}