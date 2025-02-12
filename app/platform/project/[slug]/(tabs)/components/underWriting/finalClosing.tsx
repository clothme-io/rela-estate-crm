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

const formSchema = z.object({
    realtorCommission: z.string(),
    closingCost: z.string(),
    afterConstructionValue: z.string()
});

export default function FinalClosing() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-6 pb-32">

                <div className="mt-2">
                    <p className="pb-2 text-lg font-semibold">Final Closing</p>
                    <Separator />
                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="realtorCommission"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Realtor Commissions %</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="closingCost"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Closing Cost %</FormLabel>
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

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="afterConstructionValue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ACV (After Construction Value)</FormLabel>
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
            </form>
        </Form>
    )
}