import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormType, LoginFormSchema } from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";

// import shadcn ui components
import {
  FormControl,
  FormItem,
  FormLabel,
  Form,
  FormField,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// import icons
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { PiLockThin } from "react-icons/pi";

const LoginForm = () => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // function that will be call on submiting form
  const onSubmit = (values: LoginFormType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form 
        className="w-[522px] bg-white px-[87px] pt-[80px] pb-[64px] rounded-[5px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Login form header */}
        <div className="flex flex-col items-start mb-16">
          <FormLabel className="text-[40px] font-bold">Welcome</FormLabel>
          <h3 className="text-secondary-foreground text-lg">
            Enter your details to proceed further
          </h3>
        </div>

        {/* Form Fields  */}
        <div className="flex flex-col gap-7 mb-16">
          {/* Field for username */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    placeholder="Email"
                    icon={<AiOutlineMail color="black" size={20} />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input type="password"
                    placeholder="Password"
                    {...field}
                    icon={<PiLockThin color="black" size={20} />}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between items-center mb-[60px]">
          {/* //TODO Make it navigate to the certain page */}
          <a href="#" className="text-primary cursor-pointer">Recover password</a>
          <Button type="submit" className="rounded-[25px] text-lg py-[10px] px-[31px]">Sign in</Button>
        </div>

        <h5 className="text-secondary-foreground text-lg mb-6">or sign it with</h5>

        {/* Sign in icons */}
        <div className="flex justify-center mb-9">
          <Button className="text-[28px] text-black" variant={"ghost"}>
            <FaFacebook />
          </Button>
          <Button className="text-[28px] text-black w-fit" variant={"ghost"}>
            <FaGoogle />
          </Button>
        </div>

        <div className="flex justify-center items-center text-lg gap-1">
          <h5 className="text-secondary-foreground track -tracking-wide">Don't have any account ?</h5>
          <a href="#" className="w-fit text-primary cursor-pointer">Sign up</a>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
