import {zodResolver} from "@hookform/resolvers/zod"
import { LoginFormType, LoginFormSchema } from "@/schemas/loginSchema";
import {useForm} from "react-hook-form"
import {Input} from "../ui/input";
import {FormControl, FormItem, FormLabel, Form, FormField, FormMessage} from "../ui/form";
import { Button } from "../ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      userName: "",
      password: ""
    }
  })

  // function that will be call on submiting form
  const onSubmit = (values: LoginFormType) => {
    console.log(values);
  }
  
  return (
   <Form {...form}>
      <form className="max-w-[522px] bg-white px-[87px] pt-[80px] pb-[64px]" onSubmit={form.handleSubmit(onSubmit)}>

        {/* Login form header */}
        <div className="flex gap-2 flex-col items-start">
          <FormLabel>Welcome</FormLabel>
          <h3>Enter your details to proceed further</h3>
        </div>

        {/* Field for username */}
        <FormField control={form.control} name="userName" render={({field}) => (
          <FormItem>
            <FormControl>
              <Input placeholder="User name" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>

        {/* Field for password */}
        <FormField control={form.control} name="password" render={({field}) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Password" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>

        <div className="flex justify-between">
          <span>Recover password</span>
          <Button>Sign in</Button>
        </div>

        <span>or sign it with</span>
        
        <div className="flex gap-7 justify-center">
          <Button variant={"ghost"}><FaFacebook/></Button>
          <Button variant={"ghost"}><FaGoogle/></Button>
        </div>

        <div className="flex justify-center items-center">
          <h5>Don't have any account ?</h5>
          <Button variant={"link"}>Sign up</Button>
        </div>
      </form>
   </Form>
  )
}

export default LoginForm