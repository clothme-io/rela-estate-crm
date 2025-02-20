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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Switch
} from "@/components/ui/switch"
import {
    Input
} from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export interface FinancingProps {
    hardMoney: boolean;
    setHardMoney: (value: boolean) => void;
    investorMoney: boolean;
    setInvestorMoney: (value: boolean) => void;
    investorEquity: boolean;
    setInvestorEquity: (value: boolean) => void;
    loanAmountHM: number;
    setLoanAmountHM: (value: number) => void;
    loanAmountIM: number;
    setLoanAmountIM: (value: number) => void;
    equity: number;
    setEquity: (value: number) => void;
    pointsHM: number;
    setPointsHM: (value: number) => void;
    pointsIM: number;
    setPointsIM: (value: number) => void;
    arpHM: number;
    setArpHM: (value: number) => void;
    arpIM: number;
    setArpIM: (value: number) => void;
    adminFeesHM: number;
    setAdminFeesHM: (value: number) => void;
    amortization: number;
    setAmortization: (value: number) => void;
}

const formSchema = z.object({
    hardMoney: z.boolean(),
    investorMoney: z.boolean(),
    investorEquity: z.boolean(),
    loanAmountHM: z.number(),
    loanAmountIM: z.number(),
    equity: z.string(),
    pointsHM: z.string(),
    pointsIM: z.string(),
    arpHM: z.string(),
    arpIM: z.string(),
    adminFeesHM: z.string(),
    amortization: z.string()
});

export default function MyForm({
    hardMoney,
    setHardMoney,
    investorMoney,
    setInvestorMoney,
    investorEquity,
    setInvestorEquity,
    loanAmountHM,
    setLoanAmountHM,
    loanAmountIM,
    setLoanAmountIM,
    equity,
    setEquity,
    pointsHM,
    setPointsHM,
    pointsIM,
    setPointsIM,
    arpHM,
    setArpHM,
    arpIM,
    setArpIM,
    adminFeesHM,
    setAdminFeesHM,
    amortization,
    setAmortization
}: FinancingProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            hardMoney: hardMoney,
            investorMoney: investorMoney,
            investorEquity: investorEquity,
            loanAmountHM: loanAmountHM,
            loanAmountIM: loanAmountIM,
        }

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-6">

                <div className="mt-2">
                    <p className="pb-2 text-lg font-semibold">Financing</p>
                    <Separator />
                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="hardMoney"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel>Hard Money</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            aria-readonly
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="investorMoney"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel>Investor Money</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            aria-readonly
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="investorEquity"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel>Investor Equity</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            aria-readonly
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="loanAmountHM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loan Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"

                                            type="number"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>Building Budget</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="loanAmountIM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loan Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"

                                            type="number"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>Remaining</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="equity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Equity</FormLabel>
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

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="pointsHM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Points %</FormLabel>
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
                            name="pointsIM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Points %</FormLabel>
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

                    {/* <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="amortization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Points %</FormLabel>
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
                    </div> */}

                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="arpHM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ARP %</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"
                                            type=""
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
                            name="arpIM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ARP %</FormLabel>
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

                    {/* <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="name_7756372335"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"

                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>This is your public display name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> */}

                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="adminFeesHM"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Admin Fees</FormLabel>
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
                            name="amortization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amortization</FormLabel>
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

                    {/* <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="name_3269000247"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"

                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>This is your public display name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> */}

                </div>
            </form>
        </Form>
    )
}