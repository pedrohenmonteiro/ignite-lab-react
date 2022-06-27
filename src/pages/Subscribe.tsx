import { useState, FormEvent } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../generated";



export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event/lesson/ignite-lab-opening')
  } 

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center sm:px-3">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mt-20 mx-auto sm:flex-row gap-3 ">
      <div className="max-w-[640px] px-3 sm:px-0">
      <Logo />
      <h1 className="mt-8 text-[2.5rem] leading-tight">Create a <strong className="text-blue-500">full application</strong> from scratch, with <strong className="text-blue-500">React</strong></h1>
      <p className="mt-4 text-gray-200 leading-relaxed">Em only a week you will master in practice one of the most used technologies and in high demand to access the best opportunities in the job market</p>
      </div>
      
      <div className="p-8 bg-gray-700 border border-gray-500 rounded-none sm:rounded w-full sm:w-[390px] mt-7 sm:mt-0">
        <strong className="text-2xl mb-6 block">Sign up for free </strong>

        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
          <input
           className="bg-gray-900 rounded px-5 h-14"
           type="text"
           placeholder="Your full name"
           value={name}
           onChange={e => setName(e.target.value)}
           />
          <input
           className="bg-gray-900 rounded px-5 h-14"
           type="text"
           placeholder="Type your e-mail"
           value={email}
           onChange={e => setEmail(e.target.value)}
           />

           <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Send my subscription
           </button>
        </form>
      </div>

      </div>
      <img src="/src/assets/mockup.png" className="mt-10" alt="" />
    </div>
  )
}