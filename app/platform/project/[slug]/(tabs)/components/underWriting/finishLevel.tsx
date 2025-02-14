"use client"


import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    finish: z.string()
});

export default function UnderWritingFinishLevelComponent() {

    const [selectedLevel, setSelectedLevel] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            finish: selectedLevel
        }

    })

    function setFinish(value: string) {
        setSelectedLevel(value)
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    useEffect(() => {

    }, [selectedLevel]);

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-6">

                    <div className="mt-2">
                        <p className="pb-2 text-lg font-semibold">Cost To Build</p>
                        <Separator />
                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-4">

                            <FormField
                                control={form.control}
                                name="finish"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Finish Cost / SqFt</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"
                                                type="number"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-12">

                            <div className="flex flex-wrap gap-3">

                                <Button
                                    key="01"
                                    variant="default"
                                    onClick={() => setSelectedLevel("110")}
                                    className="text-white bg-gray-600 hover:bg-gray-700"
                                >
                                    Low ($110)
                                </Button>

                                <Button
                                    key="02"
                                    variant="default"
                                    onClick={() => setSelectedLevel("125")}
                                    className="text-white bg-yellow-500 hover:bg-yellow-600"
                                >
                                    Moderate ($125)
                                </Button>

                                <Button
                                    key="03"
                                    variant="default"
                                    onClick={() => setSelectedLevel("155")}
                                    className="text-white bg-green-500 hover:bg-green-600"
                                >
                                    High End ($155)
                                </Button>

                                <Button
                                    key="04"
                                    variant="default"
                                    onClick={() => setFinish("190")}
                                    className="text-white bg-purple-500 hover:bg-purple-600"
                                >
                                    Custom ($190)
                                </Button>

                            </div>

                        </div>

                    </div>

                </form>
            </Form>
        </>
    );
};

