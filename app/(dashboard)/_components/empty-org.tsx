"use client";

import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src={"./empty.svg"} alt="empty image" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent w-auto border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
