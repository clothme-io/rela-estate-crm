"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { loginWithEmail } from "../viewModel/loginViewModel"


const loginFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address."
    }),
    password: z.string().min(8, {
        message: "Password must be at least 6 characters.",
    }),
});

type LogInFormValues = z.infer<typeof loginFormSchema>


export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const router = useRouter()

    const form = useForm<LogInFormValues>({
        resolver: zodResolver(loginFormSchema),
    })

    async function onSubmit(values: LogInFormValues) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );

            const signupResult = await loginWithEmail(values.email, values.password);
            if (!signupResult.isSuccessful) {
                // setError(signupResult.error);
                console.error("Login error", signupResult.error);
                return;
            } else {
                // setError(null);
                console.log("Login successful", signupResult.data);
                router.push("/platform/project");
            }

        } catch (error) {
            console.error("Login Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                        Login with your Apple or Google account
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="grid gap-6">

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="grid gap-2">
                                                    <FormLabel>First Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Reggie"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="grid gap-2">
                                                    <div className="flex items-center">
                                                        <FormLabel>Password</FormLabel>
                                                        <a
                                                            href="/forgot-password"
                                                            className="ml-auto text-sm underline-offset-4 hover:underline"
                                                        >
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />


                                    <Button type="submit" className="w-full">
                                        Login
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/sign-up" className="underline underline-offset-4">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
