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

export interface ArchitecturalFeesProps {
    architecturalDesignFees: number;
    setArchitecturalDesignFees: (value: number) => void;
    // inspectionFees: number;
    // setInspectionFees: (value: number) => void;
    landRealEstateCosts: number;
    setLandRealEstateCosts: (value: number) => void;
    // equipmentRental: number;
    // setEquipmentRental: (value: number) => void;
    loanInterestAccountingFees: number;
    setLoanInterestAccountingFees: (value: number) => void;
    // projectManagement: number;
    // setProjectManagement: (value: number) => void;
    // insuranceProfessionalDues: number;
    // setInsuranceProfessionalDues: (value: number) => void;
    // localStateTaxes: number;
    // setLocalStateTaxes: (value: number) => void;
    // advertisingPublicRelations: number;
    // setAdvertisingPublicRelations: (value: number) => void;
    // additionalWorkStudies: number;
    // setAdditionalWorkStudies: (value: number) => void;
}

const formSchema = z.object({
    architecturalDesignFees: z.number(),
    // inspectionFees: z.number(),
    landRealEstateCosts: z.number(),
    // equipmentRental: z.number(),
    loanInterestAccountingFees: z.number(),
    // projectManagement: z.number(),
    // insuranceProfessionalDues: z.number(),
    localStateTaxes: z.number(),
    // advertisingPublicRelations: z.number(),
    // additionalWorkStudies: z.number(),
});


export default function SoftCostComponent({
    architecturalDesignFees,
    setArchitecturalDesignFees,
    // inspectionFees,
    // setInspectionFees,
    landRealEstateCosts,
    setLandRealEstateCosts,
    // equipmentRental,
    // setEquipmentRental,
    loanInterestAccountingFees,
    setLoanInterestAccountingFees,
    // projectManagement,
    // setProjectManagement,
    // insuranceProfessionalDues,
    // setInsuranceProfessionalDues,
    // localStateTaxes,
    // setLocalStateTaxes,
    // advertisingPublicRelations,
    // setAdvertisingPublicRelations,
    // additionalWorkStudies,
    // setAdditionalWorkStudies
}: ArchitecturalFeesProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            architecturalDesignFees: architecturalDesignFees,
            // inspectionFees: inspectionFees,
            landRealEstateCosts: landRealEstateCosts,
            // equipmentRental: equipmentRental,
            loanInterestAccountingFees: loanInterestAccountingFees,
            // projectManagement: projectManagement,
            // insuranceProfessionalDues: insuranceProfessionalDues,
            // localStateTaxes: localStateTaxes,
            // advertisingPublicRelations: advertisingPublicRelations,
            // additionalWorkStudies: additionalWorkStudies
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
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto py-6">

                    <div className="mt-2">
                        <p className="pb-2 text-lg font-semibold">Soft Cost</p>
                        <Separator />
                    </div>

                    <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="architecturalDesignFees"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Architectural and design fees</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"
                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    setArchitecturalDesignFees(e.currentTarget.value.length);
                                                    field.onChange(e);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* <div className="col-span-4">

                            <FormField
                                control={form.control}
                                name="inspectionFees"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Inspection fees</FormLabel>
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

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="landRealEstateCosts"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Land and closing costs</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"
                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    setLandRealEstateCosts(e.currentTarget.value.length);
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

                        {/* <div className="col-span-4">

                            <FormField
                                control={form.control}
                                name="equipmentRental"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Construction equipment, rental and tools</FormLabel>
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

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="loanInterestAccountingFees"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Loan interest and accounting fees</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"
                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    setLoanInterestAccountingFees(e.currentTarget.value.length);
                                                    field.onChange(e);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-6">

                            <FormField
                                control={form.control}
                                name="localStateTaxes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Local and state taxes</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="0"

                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    setLoanInterestAccountingFees(e.currentTarget.value.length);
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

                    {/*  <div className="grid grid-cols-12 gap-12">

                        <div className="col-span-4">

                            <FormField
                                control={form.control}
                                name="insuranceProfessionalDues"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Construction insurance and professional dues</FormLabel>
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
                                name="projectManagement"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Local and state taxes</FormLabel>
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
                                name="advertisingPublicRelations"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Advertising and public relations</FormLabel>
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

                    </div> */}

                    {/* <div className="grid grid-cols-12 gap-12">

                    <div className="col-span-4">

                            <FormField
                                control={form.control}
                                name="additionalWorkStudies"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional work and studies</FormLabel>
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
                            name="name_3655596419"
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
                    </div>

                    <div className="col-span-4">

                        <FormField
                            control={form.control}
                            name="name_4963955234"
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
                    </div> 

                    </div> */}
                </form>
            </Form>
        </>
    )
}