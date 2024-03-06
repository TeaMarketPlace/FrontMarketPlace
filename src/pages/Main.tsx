import { Button } from "@/components/ui/button";

export const Main = () => {
  return <div className="mx-auto px-8 pt-20">
    <h1 className="text-2xl text-secondary font-helvetica">Hello</h1>
    <Button className="bg-secondary text-secondary-foreground">Jkadqwe</Button>
    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia temporibus obcaecati fuga, eos explicabo consectetur nulla placeat tempora maiores in facere, blanditiis cumque at aspernatur? Modi praesentium expedita qui?</p>


    <div className="bg-secondary text-secondary-foreground sm:block hidden md:hidden">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa, nostrum possimus similique odit saepe fugiat excepturi fuga assumenda repudiandae at rem voluptates quibusdam cum magnam! Non, laboriosam. Laboriosam, minus!
    </div>
  </div>;
};

