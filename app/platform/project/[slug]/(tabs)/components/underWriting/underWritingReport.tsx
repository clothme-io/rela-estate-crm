"use client"


// import {
//     toast
// } from "sonner"
// import {
//     useForm
// } from "react-hook-form"
// import {
//     zodResolver
// } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import {
//     Button
// } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import {
//     Input
// } from "@/components/ui/input"
// import { InputNoBorder } from "@/components/ui/inPutNoBorder"

// const formSchema = z.object({
//     salePrice: z.string(),
//     projectCost: z.string(),
//     financing: z.string(),
//     outOfPocket: z.string(),
//     difference: z.string(),
//     minNetProfit: z.string(),
//     buyOrNot: z.string(),
// });

export default function UnderWritingReport() {

    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         salePrice: "400",
    //         // projectCost: "",
    //         // financing: "",
    //         // outOfPocket: "",
    //         // difference: "",
    //         // minNetProfit: "",
    //         // buyOrNot: "",
    //     }
    // })

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     try {
    //         console.log(values);
    //         toast(
    //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //                 <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //             </pre>
    //         );
    //     } catch (error) {
    //         console.error("Form submission error", error);
    //         toast.error("Failed to submit the form. Please try again.");
    //     }
    // }

    return (
        <>
            <div>
                <div className="flex justify-between py-5">
                    <div>Sales Price</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Project Cost</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Out of Pocket</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Financing (Loan/Investment)</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Min Net Profile (10%)</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Take Home</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Difference</div>
                    <div>$1400</div>
                </div>

                <div className="flex justify-between pb-5">
                    <div>Should I buy?</div>
                    <div>$1400</div>
                </div>
            </div>
        </>
    )
}