"use client"

import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export interface AppraisalComponentProps {
    sideWidth: number;
    setSideWidth: (value: number) => void;
    sideDepth: number;
    setsideDepth: (value: number) => void;
    area: number;
    setarea: (value: number) => void;
    lot: number;
    setlot: (value: number) => void;
    block: number;
    setblock: (value: number) => void;
    // deedTransfer: z.coerce.date(),
    frequentlyTraded: string;
    setfrequentlyTraded: (value: string) => void;
}

const formSchema = z.object({
    sideWidth: z.number(),
    sideDepth: z.number(),
    area: z.number(),
    lot: z.number(),
    block: z.number(),
    deedTransfer: z.coerce.date(),
    frequentlyTraded: z.string()
});

export default function AppraisalComponent({
    sideWidth,
    setSideWidth,
    sideDepth,
    setsideDepth,
    area,
    setarea,
    lot,
    setlot,
    block,
    setblock,
    // deedTransfer: z.coerce.date(),
    frequentlyTraded,
    setfrequentlyTraded
}: AppraisalComponentProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "deedTransfer": new Date(),
            sideWidth: sideWidth,
            sideDepth: sideDepth,
            area: area,
            lot: lot,
            block: block,
            frequentlyTraded: frequentlyTraded,
        },
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-10">

                <div className="mt-10">
                    <p className="pb-2 text-lg font-semibold">Appraisal District</p>
                    <Separator />
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Dallas County, TX Links</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a target="_blank" href="https://www.cedarhilltx.com/DocumentCenter/View/26833/95-210-Lake-Ridge?bidId=">
                            <p className="text-blue-500">
                                https://www.cedarhilltx.com/DocumentCenter/View/26833/95-210-Lake-Ridge?bidId=
                            </p>
                        </a>
                    </CardContent>
                    <CardContent>
                        <a target="_blank" href="https://formstack.io/520F1">
                            <p className="text-blue-500">
                                https://formstack.io/520F1
                            </p>
                        </a>
                    </CardContent>
                    <CardContent>
                        <a target="_blank" href="https://esearch.kaufman-cad.org/">
                            <p className="text-blue-500">
                                https://esearch.kaufman-cad.org/
                            </p>
                        </a>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="sideWidth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Site Width (ft.)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"
                                            type="number"
                                            {...field}
                                            onChange={(e) => {
                                                setSideWidth(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="sideDepth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Site Depth (ft.)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"
                                            type=""
                                            {...field}
                                            onChange={(e) => {
                                                setsideDepth(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="area"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Area (sqft.)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"
                                            type="number"
                                            {...field}
                                            onChange={(e) => {
                                                setarea(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>


                <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="lot"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"

                                            type="number"
                                            {...field}
                                            onChange={(e) => {
                                                setlot(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="block"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Block</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="0"
                                            type="number"
                                            {...field}
                                            onChange={(e) => {
                                                setblock(e.currentTarget.value.length);
                                                field.onChange(e);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="frequentlyTraded"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Frequently traded</FormLabel>
                                    <Select onValueChange={(e) => {
                                        setfrequentlyTraded(e)
                                        field.onChange(e)
                                    }} defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="yes">Yes</SelectItem>
                                            <SelectItem value="no">No</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                            name="deedTransfer"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Last deed transfer</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[390px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
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