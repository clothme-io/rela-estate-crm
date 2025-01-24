import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function NewProjectDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8">
                    <Plus className="mr-2 h-4 w-4" />
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Create New Project
                    </DialogTitle>
                    <DialogDescription>
                        Add address of property to start.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Enter address
                        </Label>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Sumbit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
