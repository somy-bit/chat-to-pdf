import Image from "next/image";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ZapIcon,
  ServerCogIcon
} from 'lucide-react'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    name: 'Store Your Pdf Documents',
    description: 'keep all your impportant pdf files stores in and easily accessible anytime, anywhere.',
    icon: GlobeIcon
  },
  {
    name: 'Cloud Backup',
    description: 'rest assure knowing that all your documents are safely backed up on the cloud,protect from loss and damage',
    icon: ServerCogIcon
  },
  {
    name: 'Responsive Accross Devices',
    description: 'access and chat with your pdf seamlessly on any device, wheather its your desktop, tablet or smartphone',
    icon: MonitorSmartphoneIcon
  },
  {
    name: 'Interactive PDFViewer',
    description: 'engage withyour pdf like never before using our intuitive and interactive viewer',
    icon: GlobeIcon
  },
  {
    name: 'Blazing Fast Responses',
    description: 'experience lightning-fast answers to your queries, ensuring you get the information you need instantly ',
    icon: ZapIcon
  },
  {
    name: 'Chat Memorization',
    description: 'our intelligent chatbot remembers previous interaction, providing a seamless and personalized experience',
    icon: BrainCogIcon
  }
]

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-bl
    overflow-scroll p-2 lg:p-5 from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col max-w-7xl mx-auto justify-center items-center px-6 lg:px-8">
          <div className="max-w-2xl mx-auto sm:text-center">
            <h2 className="text-base font-semmibold leading-7 text-indigo-600">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform Your PDFs Into Interactive Conversations</p>
            <p>
              Intruducing{"  "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br/>
              <br/>upload your document, and our chatbot will answer questions ,summarize content and answer all your Qs. Ideal for everyone,
              <span className="text-indigo-600">Chat With PDF</span>{"  "}
              turn static document into {"  "}
              <span className="font-bold">Dynamic conversation </span>
              enhancing productivity 10x fold effortlessly
            </p>

          </div>

          <Button asChild className=" mt-10">
              <Link  href='/dashboard'>Get Started</Link>
            </Button>
            </div>
          <div className="overflow-hidden pt-16 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
              src='https://i.imgur.com/VciRSTI.jpeg'
              alt='screenshot of app'
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-32 bottom-0 
                bg-gradient-to-t from-white/95 pt-[5%] "/>
              
              </div>
            </div>
          </div>


        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">

          <dl className="mx-auto max-w-2xl grid grid-cols-1 gap-x-6 gap-y-10 
          text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none 
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map(feature=>(
              <div className="relative pl-9">
                <dt className="inline text-gray-900 font-semibold">
                  <feature.icon 
                  aria-hidden='true'
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>
        </div>
     

    </main>
  );
}
